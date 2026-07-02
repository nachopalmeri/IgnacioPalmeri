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
  '.pdf': 'application/pdf'
};

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
  createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || '/', `http://127.0.0.1:${port}`);
    const pathname = decodeURIComponent(requestUrl.pathname);
    const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
    const filePath = path.join(rootDir, relativePath);
    const rootResolved = path.resolve(rootDir);
    const fileResolved = path.resolve(filePath);

    if (!fileResolved.startsWith(rootResolved)) {
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
      if (archiveRows !== 3) throw new Error(`expected 3 archive rows, got ${archiveRows}`);

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
    });

    await withPage(browser, { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } , async (page, state) => {
      await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section');
      if (state.errors.length) throw new Error(`pageerror mobile: ${state.errors[0].message}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      if (!overflow) throw new Error('horizontal overflow detected on mobile');

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
