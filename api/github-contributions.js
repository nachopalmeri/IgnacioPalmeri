const fs = require('fs');
const path = require('path');

const GITHUB_LOGIN = 'nachopalmeri';
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const CACHE_FILE = path.resolve(__dirname, 'github-contributions-cache.json');
const BROWSER_CACHE_CONTROL = 'public, max-age=300';
const CDN_CACHE_CONTROL = 'public, s-maxage=21600, stale-while-revalidate=86400';

const contributionLevels = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4
};

const contributionQuery = `
  query PublicContributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      login
      url
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              date
              weekday
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function isIsoDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isCount(value) {
  return Number.isInteger(value) && value >= 0;
}

function normalizeCalendar(payload, updatedAt) {
  const user = payload?.data?.user;
  const calendar = user?.contributionsCollection?.contributionCalendar;
  if (
    !user ||
    user.login !== GITHUB_LOGIN ||
    typeof user.url !== 'string' ||
    !isCount(calendar?.totalContributions) ||
    !Array.isArray(calendar.weeks)
  ) {
    throw new Error('Invalid GitHub contribution response');
  }

  const weeks = calendar.weeks.map((week) => {
    if (!isIsoDate(week?.firstDay) || !Array.isArray(week.contributionDays)) {
      throw new Error('Invalid GitHub contribution week');
    }

    const days = week.contributionDays.map((day) => {
      const level = contributionLevels[day?.contributionLevel];
      if (
        !isIsoDate(day?.date) ||
        !Number.isInteger(day.weekday) ||
        day.weekday < 0 ||
        day.weekday > 6 ||
        !isCount(day.contributionCount) ||
        level === undefined
      ) {
        throw new Error('Invalid GitHub contribution day');
      }
      return {
        date: day.date,
        weekday: day.weekday,
        count: day.contributionCount,
        level
      };
    });

    return { firstDay: week.firstDay, days };
  });

  return {
    login: GITHUB_LOGIN,
    profileUrl: user.url,
    totalContributions: calendar.totalContributions,
    updatedAt,
    weeks
  };
}

function resolveToken() {
  try {
    const { execSync } = require('child_process');
    const token = execSync('gh auth token --user nachopalmeri', { encoding: 'utf8' }).trim();
    if (token) return token;
  } catch (_e) {}
  try {
    const { execSync } = require('child_process');
    const token = execSync('gh auth token', { encoding: 'utf8' }).trim();
    if (token) return token;
  } catch (_e) {}
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  return null;
}

function readCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    }
  } catch (_e) {}
  return null;
}

function writeCache(data) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data), 'utf8');
  } catch (_e) {}
}

function sendJson(response, statusCode, body, headers = {}) {
  if (typeof response.setHeader === 'function') {
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    for (const [name, value] of Object.entries(headers)) response.setHeader(name, value);
  }
  if (typeof response.status === 'function' && typeof response.json === 'function') {
    response.status(statusCode).json(body);
    return;
  }
  response.statusCode = statusCode;
  response.end(JSON.stringify(body));
}

function createHandler({
  fetchImpl = global.fetch,
  getToken = resolveToken,
  now = () => new Date(),
  timeoutMs = 6000
} = {}) {
  return async function githubContributionsHandler(request, response) {
    if (request?.method && request.method !== 'GET') {
      sendJson(response, 405, { error: 'Method Not Allowed' }, { Allow: 'GET' });
      return;
    }

    const token = getToken();
    const currentTime = now();
    const to = new Date(currentTime);
    const from = new Date(currentTime);
    from.setUTCFullYear(from.getUTCFullYear() - 1);

    if (token) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const upstreamResponse = await fetchImpl(GITHUB_GRAPHQL_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'User-Agent': 'nachopalmeri-portfolio',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: contributionQuery,
            variables: { login: GITHUB_LOGIN, from: from.toISOString(), to: to.toISOString() }
          }),
          signal: controller.signal
        });

        if (upstreamResponse?.ok) {
          const upstreamBody = await upstreamResponse.json();
          const normalized = normalizeCalendar(upstreamBody, to.toISOString());
          writeCache(normalized);
          sendJson(response, 200, normalized, {
            'Cache-Control': BROWSER_CACHE_CONTROL,
            'Vercel-CDN-Cache-Control': CDN_CACHE_CONTROL
          });
          return;
        }
      } catch (_error) {
        // Fallback to cache below
      } finally {
        clearTimeout(timeout);
      }
    }

    // Fallback: serve cached calendar if available
    const cached = readCache();
    if (cached && Array.isArray(cached.weeks) && cached.weeks.length >= 52) {
      sendJson(response, 200, cached, {
        'Cache-Control': BROWSER_CACHE_CONTROL,
        'X-Cache-Status': 'HIT'
      });
      return;
    }

    sendJson(response, 503, { error: 'GitHub activity is temporarily unavailable' });
  };
}

module.exports = createHandler();
module.exports.createHandler = createHandler;
module.exports.normalizeCalendar = normalizeCalendar;
