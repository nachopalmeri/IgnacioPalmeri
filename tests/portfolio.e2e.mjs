import http from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const rootDir = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const port = 4173;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf'
};

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
  createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    if (/%2e%2e|%2f|%5c/i.test(req.url || '')) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    const requestUrl = new URL(req.url || '/', `http://127.0.0.1:${port}`);
    const pathname = decodeURIComponent(requestUrl.pathname);
    const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
    const filePath = path.join(rootDir, relativePath);
    const rootResolved = path.resolve(rootDir);
    const fileResolved = path.resolve(filePath);

    const relativeToRoot = path.relative(rootResolved, fileResolved);
    if (relativeToRoot.startsWith('..') || path.isAbsolute(relativeToRoot)) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    if (!existsSync(fileResolved)) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const info = await stat(fileResolved);
    if (!info.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    serveFile(res, fileResolved);
  } catch (error) {
    res.statusCode = 500;
    res.end(String(error));
  }
});

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function assertOk(page, url, label) {
  const response = await page.request.get(url, {
    headers: { 'User-Agent': 'PortfolioVerification/1.0' },
    timeout: 15000
  });
  if (!response.ok()) throw new Error(`${label} returned ${response.status()} for ${url}`);
}

function requestRawStatus(rawPath) {
  return new Promise((resolve, reject) => {
    const request = http.request({
      hostname: '127.0.0.1',
      port,
      path: rawPath,
      method: 'GET'
    }, (response) => {
      response.resume();
      response.on('end', () => resolve(response.statusCode));
    });
    request.on('error', reject);
    request.end();
  });
}

async function withPage(browser, options, run) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error));
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  try {
    await run(page, { errors, consoleErrors, context });
  } finally {
    await context.close();
  }
}

async function main() {
  await new Promise((resolve) => server.listen(port, resolve));

  const browser = await chromium.launch({ headless: true });
  try {
    await withPage(browser, { viewport: { width: 1280, height: 720 } }, async (page, state) => {
      await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section .hero h1');
      await page.waitForFunction(() => document.querySelectorAll('#overview-section .featured-project-grid .project-preview').length === 3);
      await page.waitForSelector('#jobbot-case-study');
      await page.waitForSelector('#overview-section .hero-description');
      if (state.errors.length) throw new Error(`pageerror: ${state.errors[0].message}`);
      if (state.consoleErrors.length) throw new Error(`console error: ${state.consoleErrors[0]}`);

      const heroText = await page.locator('[data-i18n="hero.tagline"]').textContent();
      if (!heroText || !heroText.includes('Junior AI Automation')) {
        throw new Error(`unexpected hero text: ${heroText}`);
      }

      await page.getByRole('button', { name: 'EN' }).click();
      await page.waitForFunction(() => document.documentElement.lang === 'en');
      const englishHero = await page.locator('[data-i18n="hero.description"]').textContent();
      if (!englishHero || !englishHero.includes('trainee role')) {
        throw new Error(`unexpected English hero copy: ${englishHero}`);
      }

      await page.getByRole('button', { name: 'ES' }).click();
      await page.waitForFunction(() => document.documentElement.lang === 'es');

      await page.getByRole('button', { name: 'Toggle theme' }).click();
      await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await page.getByRole('button', { name: 'Toggle theme' }).click();
      await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');

      await page.getByRole('button', { name: 'Proyectos' }).click();
      await page.waitForSelector('#projects-section.view-section.active');
      const archiveRows = await page.locator('#project-archive .archive-row').count();
      if (archiveRows !== 8) throw new Error(`expected 8 archive rows, got ${archiveRows}`);
      const archiveTitle = await page.locator('[data-i18n="projects.archiveTitle"]').textContent();
      if (!archiveTitle || !archiveTitle.includes('8')) {
        throw new Error(`unexpected archive title: ${archiveTitle}`);
      }

      const jobbotDemoLink = await page.locator('#jobbot-case-study a[href="https://jobbot-lime.vercel.app"]').count();
      if (jobbotDemoLink !== 1) throw new Error('missing JobBot demo link');
      const jobbotReadmeHref = 'https://github.com/nachopalmeri/jobbot#readme';
      const jobbotReadmeLink = await page.locator(`#jobbot-case-study a[href="${jobbotReadmeHref}"]`).count();
      if (jobbotReadmeLink !== 1) throw new Error('missing JobBot README link');
      await assertOk(page, jobbotReadmeHref, 'JobBot README link');

      const bodyText = await page.locator('body').textContent();
      if (bodyText && (bodyText.includes('Prueba a agregar') || bodyText.includes('Proof to add'))) {
        throw new Error('placeholder evidence text still present');
      }

      const pisculabsHref = await page.locator('#project-archive .archive-row', { hasText: 'Pisculichi Labs' }).locator('a[href*="pisculabs"]').count();
      if (pisculabsHref !== 1) throw new Error('Pisculichi Labs repo was not updated to pisculabs');

      const projectLinks = await page.locator('#project-archive a[href^="https://"]').evaluateAll((links) =>
        [...new Set(links.map((link) => link.href))]
      );
      for (const href of projectLinks) {
        await assertOk(page, href, `project link`);
      }

      const projectImages = await page.locator('#project-archive img, #overview-section .project-preview img').evaluateAll((images) =>
        [...new Set(images.map((img) => img.getAttribute('src')).filter(Boolean))]
      );
      for (const src of projectImages) {
        await assertOk(page, `http://127.0.0.1:${port}/${src}`, `project image`);
      }

      await page.getByRole('button', { name: 'Sistema de trabajo' }).click();
      await page.waitForSelector('#agents-section.view-section.active');
      await page.waitForSelector('.workflow-proof');
      const workflowTitle = await page.locator('[data-i18n="agents.proofTitle"]').textContent();
      if (!workflowTitle || !workflowTitle.includes('proyectos reales')) {
        throw new Error(`unexpected workflow proof title: ${workflowTitle}`);
      }
      await page.waitForSelector('#eco-graph-wrapper .eco-node');
      const nodes = await page.locator('#eco-graph-wrapper .eco-node').count();
      if (nodes < 10) throw new Error(`expected graph nodes, got ${nodes}`);

      const cvResponse = await page.request.get(`http://127.0.0.1:${port}/cv/palmeri_cv_local_es.pdf`);
      if (!cvResponse.ok()) throw new Error(`CV ES returned ${cvResponse.status()}`);
      const cvEnResponse = await page.request.get(`http://127.0.0.1:${port}/cv/palmeri_cv_startups_en.pdf`);
      if (!cvEnResponse.ok()) throw new Error(`CV EN returned ${cvEnResponse.status()}`);
      const readmeResponse = await page.request.get(`http://127.0.0.1:${port}/README.md`);
      if (!readmeResponse.ok()) throw new Error(`README returned ${readmeResponse.status()}`);
      const faviconResponse = await page.request.get(`http://127.0.0.1:${port}/favicon.svg`);
      if (!faviconResponse.ok()) throw new Error(`favicon returned ${faviconResponse.status()}`);
      const traversalStatus = await requestRawStatus('/%2e%2e/package.json');
      if (traversalStatus !== 403 && traversalStatus !== 404) {
        throw new Error(`path traversal request returned ${traversalStatus}`);
      }
    });

    await withPage(browser, { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } , async (page, state) => {
      await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section');
      if (state.errors.length) throw new Error(`pageerror mobile: ${state.errors[0].message}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      if (!overflow) throw new Error('horizontal overflow detected on mobile');
      const mobileCtas = await page.locator('.hero-actions .btn').count();
      if (mobileCtas < 3) throw new Error(`expected hero CTAs on mobile, got ${mobileCtas}`);

      await page.goto(`http://127.0.0.1:${port}/#/agents`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#agents-section.view-section.active');
      await page.waitForSelector('.workflow-proof');
      await page.waitForSelector('#eco-graph-wrapper .eco-node');
      const agentsOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      if (!agentsOverflow) throw new Error('horizontal overflow detected on mobile agents');
      const mobileNodes = await page.locator('#eco-graph-wrapper .eco-node').count();
      if (mobileNodes < 10) throw new Error(`expected mobile graph list nodes, got ${mobileNodes}`);
    });

    await withPage(browser, { viewport: { width: 1280, height: 720 } }, async (page, state) => {
      await page.addInitScript(() => {
        Object.defineProperty(window, 'localStorage', {
          configurable: true,
          get() {
            throw new Error('localStorage blocked');
          }
        });
      });
      await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section .hero h1');
      await page.getByRole('button', { name: 'EN' }).click();
      await page.waitForFunction(() => document.documentElement.lang === 'en');
      if (state.errors.length) throw new Error(`pageerror storage-blocked: ${state.errors[0].message}`);
      await wait(100);
    });

    console.log('E2E checks passed');
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
