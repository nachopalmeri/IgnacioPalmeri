# Guided 3D Operations Room Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a synchronized, recruiter-friendly 3D operations room with five accessible destinations and deterministic fallbacks.

**Architecture:** `hero-operations.js` contains DOM-free projection/state helpers and the Three.js scene controller. `app.js` is the application operations module: it owns destination copy, routes, DOM rendering, and lifecycle wiring. Semantic controls remain in `index.html`; CSS owns fallback positions; Node assertions and Playwright cover state, routing, accessibility, fallback, and responsive behavior.

**Tech Stack:** Vanilla HTML/CSS/JavaScript, existing Three.js 0.160.0 CDN, Node.js assertions, Playwright.

**Source spec:** `docs/superpowers/specs/2026-07-10-guided-3d-operations-room-design.md`

**Release constraint:** Local commits are allowed. Never run `git push`, Vercel deployment, PR creation, or any remote mutation before Ignacio approves `http://127.0.0.1:4173`.

---

## File Structure

- Create `hero-operations.js`: DOM-free projection helper, activation coordinator, and scene controller.
- Create `tests/hero-operations.unit.mjs`: deterministic state/projection tests.
- Create `tests/capture-guided-3d.mjs`: repeatable localhost screenshots.
- Modify `index.html`: semantic map, map-contained canvas, destination cue/status, script order.
- Modify `style.css`: canvas/control layers, projected positions, fallback, cue, responsive states.
- Modify `app.js`: destination map, localized DOM adapter, routing, lifecycle, fallback integration.
- Modify `tests/portfolio.e2e.mjs`: browser acceptance coverage.
- Modify `package.json`: syntax/unit/E2E verification chain.

## Chunk 1: Deterministic Core And Accessible Surface

### Task 1: Projection Helper

**Files:**
- Create: `tests/hero-operations.unit.mjs`
- Create: `hero-operations.js`

- [ ] **Step 1: Write the failing projection test**

Create `tests/hero-operations.unit.mjs` with this complete initial content:

```js
import assert from 'node:assert/strict';
await import('../hero-operations.js');
const { projectNdcToMap } = globalThis.HeroOperations || {};

assert.deepEqual(projectNdcToMap({ x: -1, y: 1, z: 0 }), { x: 0, y: 0, visible: true });
assert.deepEqual(projectNdcToMap({ x: 1, y: -1, z: 0 }), { x: 1, y: 1, visible: true });
assert.deepEqual(projectNdcToMap({ x: 1.2, y: 0, z: 0 }), { x: 1, y: 0.5, visible: false });
assert.equal(projectNdcToMap({ x: 0, y: 0, z: 2 }).visible, false);
```

- [ ] **Step 2: Verify projection test RED**

Run: `node tests/hero-operations.unit.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND`.

- [ ] **Step 3: Implement the projection helper**

Create `hero-operations.js` without reading `window`, `document`, or `THREE` during module evaluation:

```js
(function exposeHeroOperations(root) {
  function projectNdcToMap({ x, y, z }) {
    return {
      x: Math.min(1, Math.max(0, (x + 1) / 2)),
      y: Math.min(1, Math.max(0, (1 - y) / 2)),
      visible: z >= -1 && z <= 1 && x >= -1 && x <= 1 && y >= -1 && y <= 1
    };
  }

  root.HeroOperations = { projectNdcToMap };
}(globalThis));
```

- [ ] **Step 4: Verify projection test GREEN**

Run: `node tests/hero-operations.unit.mjs`

Expected: exit 0.

### Task 2: Activation Coordinator

**Files:**
- Modify: `tests/hero-operations.unit.mjs`
- Modify: `hero-operations.js`
- Modify: `package.json`

- [ ] **Step 1: Add executable coordinator test helpers**

Append this executable setup to the unit file:

```js
const { createActivationCoordinator } = globalThis.HeroOperations;
function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}
function harness() {
  const focuses = [];
  const navigations = [];
  const states = [];
  const errors = [];
  const focus = (key, { signal }) => {
    const operation = deferred();
    signal.addEventListener('abort', () => {
      const error = new DOMException('Aborted', 'AbortError');
      error.cause = signal.reason;
      operation.reject(error);
    }, { once: true });
    focuses.push({ key, operation });
    return operation.promise;
  };
  const coordinator = createActivationCoordinator({
    initialKey: 'jobbot',
    hasDestination: (key) => ['jobbot', 'prode', 'labs'].includes(key),
    focus,
    navigate: async (key) => { navigations.push(key); return true; },
    onStateChange: (state) => states.push(state),
    onError: (error) => errors.push(error)
  });
  return { coordinator, focuses, navigations, states, errors };
}
```

- [ ] **Step 2: Add failing state and preview tests**

Use one harness and assert:

```js
assert.deepEqual(coordinator.snapshot(), { state: 'idle', committedKey: 'jobbot', previewKey: null });
coordinator.preview('prode');
assert.equal(coordinator.snapshot().state, 'previewing');
assert.equal(coordinator.snapshot().previewKey, 'prode');
coordinator.clearPreview();
assert.deepEqual(coordinator.snapshot(), { state: 'idle', committedKey: 'jobbot', previewKey: null });
```

- [ ] **Step 3: Add failing supersede and exactly-once tests**

Add separate `async function testSupersede()` and `async function testExactlyOnce(reason)` cases. Each creates a fresh harness. `testSupersede` activates JobBot and Prode, resolves only Prode, awaits both, and asserts `['prode']`. `testExactlyOnce` activates Labs, calls `interrupt(reason)` twice, resolves the old focus, awaits activation, flushes one microtask, and asserts `['labs']`. Invoke it for `webgl-unavailable` and `reduced-motion`.

- [ ] **Step 4: Add failing hard-cancel/error tests**

Add `testHardCancel(reason)` with a fresh harness, activate Prode, interrupt, await, and assert no navigation; invoke for `route-change` and `destroy`. Add `testMissingDestination()` asserting `{ code: 'missing-destination', key: 'missing' }` and idle. Add a harness option whose navigate resolves false and assert `{ code: 'navigation-failed', key: 'prode' }` after resolved focus.

- [ ] **Step 5: Verify coordinator tests RED**

Run: `node tests/hero-operations.unit.mjs`

Expected: FAIL with `createActivationCoordinator is not a function`.

- [ ] **Step 6: Implement the coordinator public contract**

Implement one method per private helper, then expose this public contract:

```text
preview(key)
clearPreview()
activate(key) -> Promise
interrupt(reason)
routeSettled(ok)
renderCurrent()
destroy()
snapshot() -> copied { state, committedKey, previewKey }
```

Hard reasons are `superseded`, `route-change`, and `destroy`. Bypass reasons are `reduced-motion` and `webgl-unavailable`. Each transaction has `{ id, key, cameraAbort, navigationCommitted }`; all navigation passes through one guarded function. `navigate(key)` resolves boolean. Late promise settlement checks transaction id and `navigationCommitted` before doing anything.

The coordinator implementation must define `emit()`, `report()`, `finishIdle()`, `commitNavigation(transaction)`, and `cancelCurrent(reason)` as separate helpers. `commitNavigation` sets `navigationCommitted` before awaiting `navigate`. `activate` catches `AbortError`, reads `error.cause || signal.reason`, and only bypass reasons call guarded commit. Update the existing global with `root.HeroOperations.createActivationCoordinator = createActivationCoordinator`; do not export the scene factory yet.

- [ ] **Step 7: Update package verification scripts**

Preserve metadata/dependencies and set:

```json
"test:syntax": "node --check app.js && node --check hero-operations.js",
"test:unit": "node tests/hero-operations.unit.mjs",
"test:e2e": "node tests/portfolio.e2e.mjs",
"verify": "npm run test:syntax && npm run test:unit && npm run test:e2e"
```

- [ ] **Step 8: Verify coordinator GREEN**

End the unit file with `console.log('hero operations unit tests passed')`.

Run: `npm run test:syntax && npm run test:unit`

Expected: exit 0 and exact line `hero operations unit tests passed`.

- [ ] **Step 9: Commit deterministic core locally**

Run `git add hero-operations.js tests/hero-operations.unit.mjs package.json` then `git commit -m "feat: add deterministic hero operations core"`. Do not push.

### Task 3: Semantic Map And Cue

**Files:**
- Modify: `tests/portfolio.e2e.mjs`
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add failing semantic-structure assertions**

In the desktop overview test add explicit throws for: missing `.hero-agent-map[role="navigation"]`; missing map-contained `#ai-ops-canvas[aria-hidden="true"]`; button count other than five; pressed count other than one; non-null `.hero-ops-detail` `aria-live`; missing action/status; and any button rectangle below 44x44.

- [ ] **Step 2: Add failing keyboard reachability assertion**

Use `page.locator('[data-ops-node="jobbot"]').focus()`, record its key, press Tab four times, record each active key with `page.evaluate`, then compare the sorted unique keys to `['agents','jobbot','labs','prode','proof']`.

- [ ] **Step 3: Verify semantic tests RED**

Run: `npm run test:e2e`

Expected: FAIL with `operations navigation missing` before any click-navigation assertion.

- [ ] **Step 4: Implement semantic markup**

First change the map to `<nav class="hero-agent-map" role="navigation" aria-labelledby="hero-ops-map-title">` and give the visible heading `id="hero-ops-map-title"`.

- [ ] **Step 5: Move canvas and add cue markup**

Move the canvas into the nav before controls. Remove `aria-live` from visible detail. Add destination cue link with `#hero-ops-destination`, `[data-ops-action-label]`, and arrow, plus `.sr-only#hero-ops-status[role="status"][aria-live="polite"]`.

- [ ] **Step 6: Load the operations module**

Load `hero-operations.js` after Three.js and before `app.js`.

- [ ] **Step 7: Add exact layer/fallback CSS**

Add map `position: relative; isolation: isolate`, canvas `position: absolute; inset: 0; width/height: 100%; z-index: 0`, controls `z-index: 2; min-width/min-height: 44px`. Under `.is-projected`, position centers with `left: calc(var(--ops-x) * 100%)`, `top: calc(var(--ops-y) * 100%)`, and `translate(-50%, -50%)`. `.is-projection-hidden` uses hidden/opacity/pointer-events; `.is-fallback` restores visibility. Preserve current explicit node classes as deterministic fallback positions.

- [ ] **Step 8: Add cue and focus CSS**

Make `.hero-ops-action` a two-column directional row with minimum height 48px. Add a 2px green focus-visible outline and 3px offset. Add standard `.sr-only`.

- [ ] **Step 9: Add responsive/reduced-motion CSS**

At 900px set map minimum height 250px; at 640px set 220px and full-width cue. Under reduced motion, set animation/transition duration to `0.01ms` and keep fallback nodes visible.

- [ ] **Step 10: Verify semantic surface GREEN**

Run: `npm run test:syntax && npm run test:e2e`

Expected: exit 0; navigation remains immediate in this task.

- [ ] **Step 11: Commit semantic surface locally**

Run `git add index.html style.css tests/portfolio.e2e.mjs` then `git commit -m "feat: build accessible operations surface"`. Do not push.

## Chunk 2: Scene Integration And Local Acceptance

### Task 4: Scene Controller Contract

**Files:**
- Modify: `tests/hero-operations.unit.mjs`
- Modify: `hero-operations.js`

- [ ] **Step 1: Add failing scene-construction/fallback tests**

Use minimal fake `THREE`, canvas, and callbacks. Assert construction failure returns mode `unavailable` and emits `onModeChange('unavailable')`. Assert supplied anchors are cloned/frozen from external mutation. Assert `resize({ width, height, dpr })` caps DPR and does not read DOM.

- [ ] **Step 2: Add failing lifecycle/disposal tests**

Assert `pause` cancels the frame, `resume` schedules one frame, `destroy` disposes geometry/material/renderer once, and all methods become no-ops after destroy. Dispatch synthetic context loss twice and assert one permanent unavailable transition. Projection cleanup is not a scene callback; Task 5 asserts that the DOM adapter clears styles when `onModeChange('unavailable')` fires.

- [ ] **Step 3: Add failing focus/abort/projection tests**

Assert `focusDestination(key, { signal, duration: 600 })` resolves after the supplied RAF clock reaches 600ms; abort rejects with `AbortError` carrying the reason; projection emits exact normalized values only during resize/focus/preview, not every idle frame.

- [ ] **Step 4: Verify scene tests RED**

Run: `npm run test:unit`

Expected: FAIL with `createAiOpsScene is not a function`.

- [ ] **Step 5: Implement `createAiOpsScene(options)`**

Required options: `THREE`, `canvas`, `anchors`, `viewport`, `reducedMotion`, `onProjectionChange`, `onModeChange`, and injectable `requestFrame/cancelFrame` defaults. Return `setPreview`, `focusDestination`, `setReducedMotion`, `resize`, `pause`, `resume`, `destroy`, and readonly `mode`. Reuse geometry/materials; cap particles 70/24 and DPR 1.75/1.25. First context loss permanently enters unavailable. Export factory only after implementation.

- [ ] **Step 6: Verify scene contract GREEN**

Run: `npm run test:syntax && npm run test:unit`

Expected: exit 0 and `hero operations unit tests passed`.

### Task 5: Application Integration And Routes

**Files:**
- Modify: `tests/portfolio.e2e.mjs`
- Modify: `app.js`
- Modify: `style.css`

- [ ] **Step 1: Add failing hover/pressed-state test**

Assert hover on Prode changes detail but not pressed state, then mouseleave restores JobBot.

- [ ] **Step 2: Add failing keyboard/status test**

Focus Prode and assert the visible detail changes plus `#hero-ops-status` becomes nonempty while JobBot remains the committed pressed node.

- [ ] **Step 3: Add failing rapid-activation test**

Dispatch JobBot and Prode clicks less than 50ms apart; wait for target visibility and assert only Prode is reached and only Prode is pressed.

- [ ] **Step 4: Add failing reduced-motion tests**

In a reduced-motion context, time Prode activation and assert target visibility in under 300ms. In a normal context, activate Prode, change emulated media to reduced motion before 600ms, and assert Prode navigates exactly once.

- [ ] **Step 5: Add failing route/lifecycle tests**

Assert hash change during focus cancels old navigation; Back/Forward restores the right view; overview-hidden pauses scene; repeated `setupHeroOperations()` does not duplicate listeners; missing target returns idle and announces unavailable; non-persisted `pagehide` cleans up while a persisted event does not destroy.

- [ ] **Step 6: Add failing fallback/i18n tests**

Block the Three.js CDN before load and verify CSS fallback navigation. Dispatch `webglcontextlost` during activation and verify one navigation. Change language during focus and assert destination key remains, cue/status use the new language, and missing field falls back to Spanish.

- [ ] **Step 7: Verify integration RED**

Run: `npm run test:e2e`

Expected: FAIL first at `hover preview must not commit destination`.

- [ ] **Step 8: Consolidate the destination configuration**

In `app.js` (the operations application module), replace `HERO_OPERATIONS` and separate route targets with one frozen map containing localized title/body/type/action/aria label, stack, immutable world position, route kind, target, and highlight. Pass a derived key/position copy to the scene.

- [ ] **Step 9: Implement the DOM adapter**

Implement DOM adapter rendering copy/cue/status/pressed/projection classes. Its `onModeChange('static'|'unavailable')` handler removes `--ops-x`, `--ops-y`, `.is-projected`, and `.is-projection-hidden`, then applies `.is-fallback`.

- [ ] **Step 10: Implement the routing adapter**

Wrap `focusPortfolioTarget` and hash routes in a Promise<boolean>. Resolve true after same-section scroll or active hash view, false for missing target/failed route.

- [ ] **Step 11: Remove obsolete renderer**

Delete old independent Three/2D hero renderers only after scene-unavailable mode visibly activates the CSS fallback.

- [ ] **Step 12: Wire coordinator and scene**

Make setup idempotent with `data-ops-ready` and cleanup return. Hover/focus call preview; mouseleave/blur clear it; activation invokes 600ms focus except coarse pointer/reduced motion/fallback. New activation and hash changes hard-cancel previous transactions. Fallback/reduced motion use bypass reasons and exactly-once navigation.

- [ ] **Step 13: Wire resize/visibility lifecycle**

One ResizeObserver supplies viewport. One IntersectionObserver and visibility listener pause/resume.

- [ ] **Step 14: Wire route/page lifecycle**

MatchMedia handles live reduced motion, hashchange cancels/settles, pagehide destroys only when not persisted, pageshow persisted resizes/resumes. Same-section scroll settles idle immediately; hash route settles after active view; missing target reports failure.

- [ ] **Step 15: Make language changes transaction-safe**

After existing language application, call `renderCurrent()` without changing destination key/transaction. Update visible detail, cue, button accessible names, and final status using current language with field-level Spanish fallback.

- [ ] **Step 16: Verify integration GREEN**

Run: `npm run verify`

Expected: exit 0 with syntax, unit, desktop/mobile, route, fallback, and legacy checks passing.

- [ ] **Step 17: Commit integration locally**

Run `git add hero-operations.js app.js style.css tests/portfolio.e2e.mjs` then `git commit -m "feat: synchronize guided 3d navigation"`. Do not push.

### Task 6: Repeatable Localhost Acceptance

**Files:**
- Create: `tests/capture-guided-3d.mjs`
- Create runtime artifacts: `output/playwright/*.png`
- Modify implementation/tests only for evidence-backed defects.

- [ ] **Step 1: Create the capture script**

Launch Chromium, visit `http://127.0.0.1:4173`, and capture exact files: desktop home/prode/jobbot/light at 1440x1000; mobile home/proof/reduced-motion at 390x844. Wait for `data-ops-ready`, interactions, and target visibility before each capture. Print JSON containing screenshot names, console errors, and overflow booleans.

- [ ] **Step 2: Start and verify localhost**

Run this exact PowerShell server command:

```powershell
$existing = Get-Process -Name python -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like '*http.server 4173*' }
if (-not $existing) { Start-Process -FilePath 'python' -ArgumentList '-m','http.server','4173' -WorkingDirectory (Get-Location) -WindowStyle Hidden }
Start-Sleep -Seconds 1
```

Then run:

```powershell
Invoke-WebRequest http://127.0.0.1:4173/ -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:4173/#/agents -UseBasicParsing
```

Expected: both status codes are 200.

- [ ] **Step 3: Run captures**

Run: `node tests/capture-guided-3d.mjs`

Expected: exit 0, seven named PNGs, empty console-error arrays, and all `overflow` values false.

- [ ] **Step 4: Inspect all seven screenshots**

Verify role/availability/CTA/CV visibility, five usable destinations, nonblank canvas, clear destination cue, coherent light theme, touch-safe mobile map, and no clipping. The capture script must honor `BLOCK_THREE=1` by routing the CDN request to an aborted response and writing `guided-3d-desktop-fallback.png`.

Run fallback capture exactly:

```powershell
$env:BLOCK_THREE='1'; node tests/capture-guided-3d.mjs; Remove-Item Env:BLOCK_THREE
```

Expected: exit 0, fallback PNG exists, console errors are empty, and overflow is false.

- [ ] **Step 5: Fix only observed defects with regression-first changes**

For each defect, add a failing unit/E2E assertion, run it RED, patch implementation, run it GREEN, then rerun `npm run verify` and all captures.

- [ ] **Step 6: Present localhost and stop**

Provide `http://127.0.0.1:4173/`, verification summary, and screenshot paths. Wait for Ignacio's explicit approval. Do not push, deploy, or open a PR.
