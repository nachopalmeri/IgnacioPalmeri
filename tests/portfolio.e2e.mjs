import http from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const rootDir = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const requestedPort = Number(process.env.PORT || 0);
let baseUrl = '';

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
    const requestUrl = new URL(req.url || '/', 'http://127.0.0.1');
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
  await new Promise((resolve) => server.listen(requestedPort, '127.0.0.1', resolve));
  const address = server.address();
  const actualPort = typeof address === 'object' && address ? address.port : requestedPort;
  baseUrl = `http://127.0.0.1:${actualPort}`;

  const browser = await chromium.launch({ headless: true });
  try {
    await withPage(browser, { viewport: { width: 1280, height: 720 } }, async (page, state) => {
      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section .hero h1');
      await page.waitForFunction(() => document.querySelectorAll('#overview-section .featured-project-grid .project-preview').length === 4);
      const featuredImages = await page.locator('#overview-section .featured-project-grid .project-preview img').count();
      if (featuredImages !== 4) throw new Error(`expected 4 featured project images, got ${featuredImages}`);
      await page.waitForSelector('#overview-section .hero-description');
      await page.waitForSelector('#jobbot-case-title');
      const jobbotCaseTitle = await page.locator('#jobbot-case-title').textContent();
      if (!jobbotCaseTitle || !jobbotCaseTitle.includes('JobBot')) {
        throw new Error(`expected JobBot case study title, got ${jobbotCaseTitle}`);
      }
      const jobbotCaseImage = await page.locator('.jobbot-case-screen img').evaluate((img) => ({
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      }));
      if (!jobbotCaseImage.complete || jobbotCaseImage.naturalWidth <= 0 || jobbotCaseImage.naturalHeight <= 0) {
        throw new Error(`JobBot case image did not load: ${JSON.stringify(jobbotCaseImage)}`);
      }
      const isJobbotCaseBeforeProjects = await page.evaluate(() => {
        const jobbotCase = document.querySelector('#jobbot-case-title')?.closest('section');
        const projects = document.querySelector('#project-carousel-title')?.closest('section');
        if (!jobbotCase || !projects) return false;
        return Boolean(jobbotCase.compareDocumentPosition(projects) & Node.DOCUMENT_POSITION_FOLLOWING);
      });
      if (!isJobbotCaseBeforeProjects) {
        throw new Error('expected JobBot case study to appear before featured projects');
      }
      const stationCount = await page.locator('.signal-station-card').count();
      if (stationCount !== 3) throw new Error(`expected 3 signal stations, got ${stationCount}`);
      const stationImages = await page.locator('.signal-station-card img').evaluateAll((images) =>
        images.map((img) => ({ complete: img.complete, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight }))
      );
      const brokenStationImage = stationImages.find((image) => !image.complete || image.naturalWidth <= 0 || image.naturalHeight <= 0);
      if (brokenStationImage) throw new Error(`signal station image did not load: ${JSON.stringify(brokenStationImage)}`);
      const areProjectsBeforeAbout = await page.evaluate(() => {
        const about = document.querySelector('#overview-section [data-i18n="about.title"]')?.closest('section');
        const projects = document.querySelector('#project-carousel-title')?.closest('section');
        if (!about || !projects) return false;
        return Boolean(projects.compareDocumentPosition(about) & Node.DOCUMENT_POSITION_FOLLOWING);
      });
      if (!areProjectsBeforeAbout) {
        throw new Error('expected featured projects to appear before About section');
      }
      const areProjectsBeforeCertifications = await page.evaluate(() => {
        const certifications = document.querySelector('#certifications-title')?.closest('section');
        const projects = document.querySelector('#project-carousel-title')?.closest('section');
        if (!certifications || !projects) return false;
        return Boolean(projects.compareDocumentPosition(certifications) & Node.DOCUMENT_POSITION_FOLLOWING);
      });
      if (!areProjectsBeforeCertifications) {
        throw new Error('expected featured projects to appear before Certifications section');
      }
      const redHatHref = await page.locator('.certification-card', { hasText: 'Red Hat' }).getAttribute('href');
      if (redHatHref !== 'https://www.credly.com/badges/761f7f8d-41c7-4e1e-8dda-1e29830e4e85') {
        throw new Error(`unexpected Red Hat credential href: ${redHatHref}`);
      }
      const claudeHref = await page.locator('.certification-card', { hasText: 'Claude Code' }).getAttribute('href');
      if (claudeHref !== 'https://verify.skilljar.com/c/tco79gkq8a9k') {
        throw new Error(`unexpected Claude Code credential href: ${claudeHref}`);
      }
      const ciscoLinks = await page.locator('.certification-card-static', { hasText: 'Cisco CCNA 1' }).locator('a').count();
      if (ciscoLinks !== 0) throw new Error('Cisco certification should not invent a public certificate link');
      const initialBodyText = await page.locator('body').textContent();
      if (initialBodyText && initialBodyText.includes('Python Automation')) {
        throw new Error('removed Python Automation certification text is still present');
      }
      if (state.errors.length) throw new Error(`pageerror: ${state.errors[0].message}`);
      if (state.consoleErrors.length) throw new Error(`console error: ${state.consoleErrors[0]}`);

      const heroText = await page.locator('[data-i18n="hero.tagline"]').textContent();
      if (!heroText || !heroText.includes('Junior AI Automation')) {
        throw new Error(`unexpected hero text: ${heroText}`);
      }
      const operationsNavigation = page.locator('.hero-agent-map[role="navigation"]');
      if (await operationsNavigation.count() !== 1) {
        throw new Error('operations navigation missing');
      }
      const operationsLabelId = await operationsNavigation.getAttribute('aria-labelledby');
      if (operationsLabelId !== 'hero-ops-map-title') {
        throw new Error(`operations navigation label mismatch: ${operationsLabelId}`);
      }
      const operationsTitle = page.locator('#hero-ops-map-title');
      if (await operationsTitle.count() !== 1 || !await operationsTitle.isVisible()) {
        throw new Error('operations navigation title missing or hidden');
      }
      if (await operationsNavigation.locator('#ai-ops-canvas[aria-hidden="true"]').count() !== 1) {
        throw new Error('operations canvas missing from navigation');
      }
      const operationsCanvasSizing = await page.locator('#ai-ops-canvas').evaluate((canvas) => {
        const map = canvas.parentElement;
        const mapStyle = getComputedStyle(map);
        const mapRect = map.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const contentWidth = mapRect.width - Number.parseFloat(mapStyle.borderLeftWidth) - Number.parseFloat(mapStyle.borderRightWidth) - Number.parseFloat(mapStyle.paddingLeft) - Number.parseFloat(mapStyle.paddingRight);
        const contentHeight = mapRect.height - Number.parseFloat(mapStyle.borderTopWidth) - Number.parseFloat(mapStyle.borderBottomWidth) - Number.parseFloat(mapStyle.paddingTop) - Number.parseFloat(mapStyle.paddingBottom);
        const ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
        return {
          intrinsicWidth: canvas.width,
          intrinsicHeight: canvas.height,
          expectedWidth: Math.round(contentWidth * ratio),
          expectedHeight: Math.round(contentHeight * ratio),
          cssWidth: canvasRect.width,
          cssHeight: canvasRect.height,
          contentWidth,
          contentHeight
        };
      });
      if (operationsCanvasSizing.intrinsicWidth !== operationsCanvasSizing.expectedWidth || operationsCanvasSizing.intrinsicHeight !== operationsCanvasSizing.expectedHeight) {
        throw new Error(`operations canvas renderer dimensions do not match map: ${JSON.stringify(operationsCanvasSizing)}`);
      }
      if (Math.abs(operationsCanvasSizing.cssWidth - operationsCanvasSizing.contentWidth) > 1 || Math.abs(operationsCanvasSizing.cssHeight - operationsCanvasSizing.contentHeight) > 1) {
        throw new Error(`operations canvas CSS rect does not match map: ${JSON.stringify(operationsCanvasSizing)}`);
      }
      const operationNodes = operationsNavigation.locator('[data-ops-node]');
      const operationNodeCount = await operationNodes.count();
      if (operationNodeCount !== 5) {
        throw new Error(`expected exactly 5 operations buttons, got ${operationNodeCount}`);
      }
      const pressedOperationCount = await operationsNavigation.locator('[data-ops-node][aria-pressed="true"]').count();
      if (pressedOperationCount !== 1) {
        throw new Error(`expected exactly 1 pressed operations button, got ${pressedOperationCount}`);
      }
      if (await page.locator('.hero-ops-detail[aria-live]').count() !== 0) {
        throw new Error('operations detail must not be a live region');
      }
      if (await page.locator('#hero-ops-action').count() !== 1) {
        throw new Error('operations action cue missing');
      }
      if (await page.locator('#hero-ops-status[role="status"][aria-live="polite"]').count() !== 1) {
        throw new Error('operations status region missing');
      }
      const operationNodeRects = await operationNodes.evaluateAll((nodes) => nodes.map((node) => ({
        key: node.dataset.opsNode,
        width: node.getBoundingClientRect().width,
        height: node.getBoundingClientRect().height
      })));
      const undersizedOperationNode = operationNodeRects.find(({ width, height }) => width < 44 || height < 44);
      if (undersizedOperationNode) {
        throw new Error(`operations node ${undersizedOperationNode.key} is smaller than 44x44: ${undersizedOperationNode.width}x${undersizedOperationNode.height}`);
      }
      await page.addStyleTag({ content: '[data-ops-node="agents"] { --ops-x: 0.25; --ops-y: 0.3; }' });
      await operationsNavigation.evaluate((map) => map.classList.add('is-projected'));
      const projectedNodeStyle = await page.locator('[data-ops-node="agents"]').evaluate((node) => {
        const style = getComputedStyle(node);
        return { left: style.left, top: style.top, transform: style.transform };
      });
      const operationsMapRect = await operationsNavigation.evaluate((map) => map.getBoundingClientRect());
      const projectedLeft = Number.parseFloat(projectedNodeStyle.left);
      const projectedTop = Number.parseFloat(projectedNodeStyle.top);
      if (Math.abs(projectedLeft - operationsMapRect.width * 0.25) > 1 || Math.abs(projectedTop - operationsMapRect.height * 0.3) > 1 || projectedNodeStyle.transform === 'none') {
        throw new Error(`operations projected positioning inactive: ${JSON.stringify(projectedNodeStyle)}`);
      }
      await page.locator('[data-ops-node="agents"]').evaluate((node) => node.classList.add('is-projection-hidden'));
      const hiddenNodeStyle = await page.locator('[data-ops-node="agents"]').evaluate((node) => {
        const style = getComputedStyle(node);
        return { opacity: style.opacity, visibility: style.visibility, pointerEvents: style.pointerEvents };
      });
      if (hiddenNodeStyle.opacity !== '0' || hiddenNodeStyle.visibility !== 'hidden' || hiddenNodeStyle.pointerEvents !== 'none') {
        throw new Error(`operations projection hidden state inactive: ${JSON.stringify(hiddenNodeStyle)}`);
      }
      await operationsNavigation.evaluate((map) => {
        map.classList.remove('is-projected');
        map.classList.add('is-fallback');
      });
      const fallbackNodeStyle = await page.locator('[data-ops-node="agents"]').evaluate((node) => {
        const style = getComputedStyle(node);
        return { opacity: style.opacity, visibility: style.visibility, pointerEvents: style.pointerEvents };
      });
      if (fallbackNodeStyle.opacity !== '1' || fallbackNodeStyle.visibility !== 'visible' || fallbackNodeStyle.pointerEvents !== 'auto') {
        throw new Error(`operations fallback state inactive: ${JSON.stringify(fallbackNodeStyle)}`);
      }
      await page.locator('[data-ops-node="agents"]').evaluate((node) => node.classList.remove('is-projection-hidden'));
      await operationsNavigation.evaluate((map) => map.classList.remove('is-fallback'));
      const actionLayout = await page.locator('#hero-ops-action').evaluate((action) => {
        const destination = action.querySelector('#hero-ops-destination');
        const label = action.querySelector('[data-ops-action-label]');
        const arrow = action.querySelector('[aria-hidden="true"]');
        const style = getComputedStyle(action);
        const destinationStyle = getComputedStyle(destination);
        const labelStyle = getComputedStyle(label);
        const arrowStyle = getComputedStyle(arrow);
        return {
          display: style.display,
          columns: style.gridTemplateColumns.split(' ').filter(Boolean),
          destinationColumn: `${destinationStyle.gridColumnStart}/${destinationStyle.gridColumnEnd}`,
          labelRow: labelStyle.gridRowStart,
          arrowRow: arrowStyle.gridRowStart,
          arrowColumn: arrowStyle.gridColumnStart
        };
      });
      if (actionLayout.display !== 'grid' || actionLayout.columns.length !== 2) {
        throw new Error(`operations action must use a two-column grid: ${JSON.stringify(actionLayout)}`);
      }
      if (actionLayout.destinationColumn !== '1/-1' || actionLayout.labelRow !== actionLayout.arrowRow || actionLayout.arrowColumn !== '2') {
        throw new Error(`operations action directional rows incorrect: ${JSON.stringify(actionLayout)}`);
      }
      const keyboardOperationKeys = [];
      await page.locator('[data-ops-node="jobbot"]').focus();
      keyboardOperationKeys.push(await page.evaluate(() => document.activeElement?.dataset.opsNode));
      for (let index = 0; index < 4; index += 1) {
        await page.keyboard.press('Tab');
        keyboardOperationKeys.push(await page.evaluate(() => document.activeElement?.dataset.opsNode));
      }
      const expectedKeyboardOperationKeys = ['jobbot', 'agents', 'prode', 'labs', 'proof'];
      if (JSON.stringify(keyboardOperationKeys) !== JSON.stringify(expectedKeyboardOperationKeys)) {
        throw new Error(`operations keyboard sequence mismatch: ${JSON.stringify(keyboardOperationKeys)}`);
      }
      await page.locator('[data-ops-node="jobbot"]').click();
      await page.waitForFunction(() => {
        const title = document.querySelector('#jobbot-case-title');
        if (!title) return false;
        const rect = title.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight * 0.72;
      });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator('[data-ops-node="prode"]').click();
      await page.waitForFunction(() => {
        const target = document.querySelector('#signal-prode');
        if (!target) return false;
        const rect = target.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight * 0.72;
      });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator('[data-ops-node="agents"]').click();
      await page.waitForSelector('#agents-section.view-section.active');
      await page.getByRole('button', { name: 'Inicio' }).click();
      await page.waitForSelector('#overview-section.view-section.active');

      await page.getByRole('button', { name: 'EN', exact: true }).click();
      await page.waitForFunction(() => document.documentElement.lang === 'en');
      const englishHero = await page.locator('[data-i18n="hero.description"]').textContent();
      if (!englishHero || !englishHero.includes('operations room')) {
        throw new Error(`unexpected English hero copy: ${englishHero}`);
      }
      const englishAbout = await page.locator('[data-i18n="about.thesis"]').textContent();
      if (!englishAbout || !englishAbout.includes('small, deployed and reviewable software')) {
        throw new Error(`unexpected English about copy: ${englishAbout}`);
      }
      const englishCertifications = await page.locator('[data-i18n="certifications.body"]').textContent();
      if (!englishCertifications || !englishCertifications.includes('Verified credentials')) {
        throw new Error(`unexpected English certifications copy: ${englishCertifications}`);
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
      if (archiveRows !== 9) throw new Error(`expected 9 archive rows, got ${archiveRows}`);
      const archiveImages = await page.locator('#project-archive img').evaluateAll((images) =>
        images.map((img) => ({
          src: img.getAttribute('src'),
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        }))
      );
      if (archiveImages.length !== 9) throw new Error(`expected 9 archive images, got ${archiveImages.length}`);
      const brokenArchiveImage = archiveImages.find((image) => !image.complete || image.naturalWidth <= 0 || image.naturalHeight <= 0);
      if (brokenArchiveImage) throw new Error(`archive image did not load: ${JSON.stringify(brokenArchiveImage)}`);
      const bodyText = await page.locator('body').textContent();
      if (bodyText && (bodyText.includes('Prueba a agregar') || bodyText.includes('Proof to add'))) {
        throw new Error('placeholder evidence text still present');
      }

      await page.getByRole('button', { name: 'Sistema de trabajo' }).click();
      await page.waitForSelector('#agents-section.view-section.active');
      await page.waitForSelector('#eco-wfp');
      await page.waitForSelector('#eco-wf-list .wf-item');
      await page.waitForSelector('#eco-stage');
      await page.waitForSelector('#eco-stats-badge');
      await page.waitForSelector('#eco-hint');
      await page.waitForSelector('#eco-graph-wrapper .eco-node');
      const workflowTitle = await page.locator('[data-i18n="agents.proofTitle"]').textContent();
      if (!workflowTitle || !workflowTitle.includes('Flujo')) {
        throw new Error(`expected compact workflow title, got ${workflowTitle}`);
      }
      const agentsText = await page.locator('#agents-section').textContent();
      if (agentsText && agentsText.includes('no cargos ni claims senior')) {
        throw new Error('old verbose workflow copy is still visible');
      }
      const workflowButtons = await page.locator('#eco-wf-list .wf-item').count();
      if (workflowButtons < 6) throw new Error(`expected workflow controls, got ${workflowButtons}`);
      const nodes = await page.locator('#eco-graph-wrapper .eco-node').count();
      if (nodes < 10) throw new Error(`expected graph nodes, got ${nodes}`);
      await page.locator('#eco-wf-list .wf-item').first().click();
      await page.waitForSelector('#eco-stage.active');
      const stageText = await page.locator('#eco-stage-text').textContent();
      if (!stageText || stageText.includes('agents.stageIdle')) {
        throw new Error(`expected workflow stage text, got ${stageText}`);
      }

      const cvResponse = await page.request.get(`${baseUrl}/cv/palmeri_cv_local_es.pdf`);
      if (!cvResponse.ok()) throw new Error(`CV ES returned ${cvResponse.status()}`);
      const cvEnResponse = await page.request.get(`${baseUrl}/cv/palmeri_cv_startups_en.pdf`);
      if (!cvEnResponse.ok()) throw new Error(`CV EN returned ${cvEnResponse.status()}`);
    });

    await withPage(browser, { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } , async (page, state) => {
      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section');
      if (state.errors.length) throw new Error(`pageerror mobile: ${state.errors[0].message}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      if (!overflow) throw new Error('horizontal overflow detected on mobile');
      const mobileOperationsLayout = await page.evaluate(() => {
        const map = document.querySelector('.hero-agent-map');
        const detail = document.querySelector('.hero-ops-detail');
        const action = document.querySelector('#hero-ops-action');
        const mapRect = map.getBoundingClientRect();
        const detailRect = detail.getBoundingClientRect();
        const actionRect = action.getBoundingClientRect();
        const nodes = Array.from(map.querySelectorAll('[data-ops-node]')).map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            key: node.dataset.opsNode,
            width: rect.width,
            height: rect.height,
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom
          };
        });
        return {
          mapHeight: mapRect.height,
          mapMinHeight: getComputedStyle(map).minHeight,
          map: { left: mapRect.left, right: mapRect.right, top: mapRect.top, bottom: mapRect.bottom },
          detail: { left: detailRect.left, right: detailRect.right },
          action: { left: actionRect.left, right: actionRect.right, width: actionRect.width, height: actionRect.height, visibility: getComputedStyle(action).visibility },
          nodes
        };
      });
      if (mobileOperationsLayout.mapMinHeight !== '220px' || mobileOperationsLayout.mapHeight < 220) {
        throw new Error(`mobile operations map does not honor 220px minimum: ${JSON.stringify(mobileOperationsLayout)}`);
      }
      if (mobileOperationsLayout.action.visibility !== 'visible' || mobileOperationsLayout.action.height <= 0 || mobileOperationsLayout.action.left < mobileOperationsLayout.detail.left - 1 || mobileOperationsLayout.action.right > mobileOperationsLayout.detail.right + 1) {
        throw new Error(`mobile operations cue is hidden or clipped: ${JSON.stringify(mobileOperationsLayout.action)}`);
      }
      const clippedMobileNode = mobileOperationsLayout.nodes.find((node) => node.width < 44 || node.height < 44 || node.left < mobileOperationsLayout.map.left || node.right > mobileOperationsLayout.map.right || node.top < mobileOperationsLayout.map.top || node.bottom > mobileOperationsLayout.map.bottom);
      if (clippedMobileNode) {
        throw new Error(`mobile operations node is undersized or clipped: ${JSON.stringify(clippedMobileNode)}`);
      }

      await page.goto(`${baseUrl}/#/agents`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#agents-section.view-section.active');
      await page.waitForSelector('#eco-wfp');
      await page.waitForSelector('#eco-wf-list .wf-item');
      await page.waitForSelector('#eco-graph-wrapper .eco-node');
      const agentsOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      if (!agentsOverflow) throw new Error('horizontal overflow detected on mobile agents');
      const mobileNodes = await page.locator('#eco-graph-wrapper .eco-node').count();
      if (mobileNodes < 10) throw new Error(`expected mobile graph list nodes, got ${mobileNodes}`);
    });

    await withPage(browser, { viewport: { width: 1280, height: 720 }, reducedMotion: 'reduce' }, async (page, state) => {
      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('.hero-agent-map');
      await page.locator('[data-ops-node="agents"]').evaluate((node) => node.classList.add('is-projection-hidden'));
      const reducedOperations = await page.evaluate(() => {
        const parseDuration = (value) => Math.max(...value.split(',').map((duration) => {
          const parsed = Number.parseFloat(duration);
          return duration.trim().endsWith('ms') ? parsed : parsed * 1000;
        }));
        const map = document.querySelector('.hero-agent-map');
        const nodes = Array.from(map.querySelectorAll('[data-ops-node]'));
        const mapStyle = getComputedStyle(map);
        return {
          mapAnimationMs: parseDuration(mapStyle.animationDuration),
          nodes: nodes.map((node) => {
            const style = getComputedStyle(node);
            const rect = node.getBoundingClientRect();
            return {
              key: node.dataset.opsNode,
              animationMs: parseDuration(style.animationDuration),
              transitionMs: parseDuration(style.transitionDuration),
              opacity: style.opacity,
              visibility: style.visibility,
              pointerEvents: style.pointerEvents,
              disabled: node.disabled,
              width: rect.width,
              height: rect.height
            };
          })
        };
      });
      if (reducedOperations.mapAnimationMs > 0.01) {
        throw new Error(`reduced-motion operations map still animates: ${reducedOperations.mapAnimationMs}ms`);
      }
      const unusableReducedNode = reducedOperations.nodes.find((node) => node.animationMs > 0.01 || node.transitionMs > 0.01 || node.opacity !== '1' || node.visibility !== 'visible' || node.pointerEvents !== 'auto' || node.disabled || node.width < 44 || node.height < 44);
      if (unusableReducedNode) {
        throw new Error(`reduced-motion operations control unusable: ${JSON.stringify(unusableReducedNode)}`);
      }
      if (state.errors.length) throw new Error(`pageerror reduced-motion: ${state.errors[0].message}`);
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
      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
      await page.waitForSelector('#overview-section .hero h1');
      await page.getByRole('button', { name: 'EN', exact: true }).click();
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
