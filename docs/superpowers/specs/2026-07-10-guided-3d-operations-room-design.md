# Guided 3D Operations Room

## Status

Approved direction. This specification supersedes the hero and spatial-navigation portions of `2026-06-26-ai-ops-command-center-portfolio-design.md`. The recruiter-evidence structure already present in the site remains the source of truth for project content.

## Objective

Turn the first viewport into a guided 3D operations room that is memorable within ten seconds and still lets a recruiter understand Ignacio's profile without learning a novel interface.

The experience must serve three audiences at once:

- a non-technical visitor should understand that Ignacio builds useful AI systems;
- recruiting should find role, availability, CV, projects, and contact immediately;
- developers should see architecture, decisions, tooling, tests, and inspectable proof.

## Chosen Direction

Use **3D as a guided interactive map**, not as decoration and not as a free-roaming game.

The hero contains a real WebGL scene with five spatial destinations: JobBot, Agents, Prode, Labs, and Proof. Selecting one causes a short camera move, updates the explanatory panel, and clearly announces where the interaction leads. The destination then opens the corresponding semantic HTML section.

This direction balances the strongest qualities of the references:

- Dapta-like product confidence and motion;
- Paisanos-like visual authorship and editorial rhythm;
- Polymarket-like information clarity and immediate interaction;
- Ignacio's own operations-room narrative and evidence-first content.

The site must not imitate any reference's branding or layout.

## Experience Narrative

### First 10 seconds

The visitor sees Ignacio's role, availability, one direct positioning statement, CV/project actions, and a living system map. The scene communicates that the portfolio is an operating system for real work rather than a collection of decorative cards.

### First 30 seconds

The visitor selects a destination. The camera focuses the chosen system, its short explanation and stack appear, and a destination cue explains the next action, for example `OPEN CASE STUDY -> JOBBOT`.

### First 90 seconds

The visitor reaches a concrete case or evidence station. JobBot remains the primary deep case. Prode, Labs, Proof, and Agents demonstrate range without competing with the main story.

## Hero Composition

### Editorial layer

Keep the current semantic content and recruiter actions:

- name and role;
- availability;
- concise value proposition;
- project and CV calls to action;
- visible GitHub and LinkedIn access.

Limit the supporting description to two short lines on desktop and three on mobile. Keep the positioning statement, availability, project CTA, and CV CTA unchanged.

### Spatial operations layer

Replace the disconnected relationship between the background Three.js scene and `.hero-agent-map` with one synchronized system:

- Three.js renders the core, orbital paths, destination anchors, depth, light, and data packets;
- existing DOM buttons remain the accessible interaction layer;
- each DOM button is visually aligned with its corresponding projected 3D anchor;
- hover, focus, and selection update both DOM and WebGL state;
- the active destination uses stronger depth, contrast, and a restrained glow;
- inactive destinations remain legible and visually subordinate.

JobBot is the central system. Agents, Prode, Labs, and Proof form a deliberately asymmetric constellation around it.

### Destination cue

Add a persistent cue inside the detail panel containing:

- destination type, such as `CASE STUDY`, `WORKSPACE`, or `EVIDENCE STATION`;
- action label, such as `Open JobBot case`;
- a directional mark that reacts when the destination is selected.

The cue removes ambiguity from the node interaction and replaces the previously tentative destination-indicator idea.

## Interaction Model

### Interaction state

The operations controller owns four explicit states:

- `idle`: one committed destination is active; JobBot is the initial committed destination;
- `previewing`: pointer hover or keyboard focus temporarily previews a destination without changing the committed destination;
- `focusing`: an activation has committed a destination and a cancellable camera transition is running;
- `navigating`: camera focus completed and the existing route or section navigation is executing.

The controller stores `committedKey`, `previewKey`, and one activation transaction shaped as `{ id, key, cameraAbort, navigationCommitted }`. A new activation hard-cancels the previous transaction before starting another.

Camera interruption has two explicit classes:

- hard cancellation (`superseded`, `route-change`, `destroy`) ends the transaction and must never navigate;
- visual bypass (`reduced-motion`, `webgl-unavailable`) skips the remaining camera animation and continues the same user activation to navigation.

`navigationCommitted` is checked and set atomically before route or section navigation so a bypass, promise settlement, and context-loss callback cannot navigate twice. The camera promise rejects with an `AbortError` whose `cause` is one of the reasons above; the operations controller, not the scene, decides whether the transaction ends or bypasses to navigation.

Pointer exit or focus exit returns from `previewing` to the committed destination. It does not navigate. `aria-pressed="true"` represents only `committedKey`; hover and focus previews do not change the pressed state.

### Pointer

- Hover previews a destination and updates its detail without navigating.
- Click commits it, runs a 600 ms camera focus, then navigates to the destination if that transaction has not been aborted.
- The active state is visible before and during the transition.

### Keyboard

- DOM buttons preserve normal tab order.
- Focus previews the destination visually and updates the visible detail.
- `Enter` or `Space` runs the same focus-and-navigate sequence.
- Focus indicators remain visible and are never replaced by glow alone.
- The polite screen-reader status is updated on keyboard focus and activation, but not on pointer hover.

### Touch

- A tap selects and navigates directly; no hover-only information is required.
- Touch targets remain at least 44 by 44 CSS pixels.
- The scene does not require drag, pinch, WASD, or device orientation.
- Coarse-pointer devices skip the 600 ms camera delay and navigate immediately after committing the destination.

### Route changes

- JobBot, Prode, Labs, and Proof remain within the overview route and scroll to semantic sections.
- Agents continues to open `#/agents`.
- Browser history and existing route behavior remain intact.
- A `hashchange` aborts any pending focus transaction before the existing router applies the new view.
- Back and Forward never initialize a second scene or duplicate event listeners.
- Same-route section navigation returns to `idle` immediately after `scrollIntoView` is issued. Hash-route navigation returns to `idle` when the router confirms the requested view. A missing target or rejected route returns to `idle`, keeps the committed destination, and announces that the destination is unavailable.

## Visual Direction

The aesthetic is **editorial industrial control room**, not generic neon AI.

- Keep the dark mineral base, warm white typography, emerald operational signal, and limited blue system accent already established.
- Preserve the Archivo and Fraunces contrast.
- Use depth, perspective, line weight, and occlusion instead of adding more glass cards or gradients.
- Use one strong arrival sequence and one camera transition language. Avoid constant ambient motion competing with reading.
- Continue the constellation language below the hero through route markers, thin spatial lines, section coordinates, and focused transition pulses.

No audio is added. No cursor replacement is added. No free-roaming controls are added.

## Technical Architecture

Keep the vanilla HTML/CSS/JavaScript architecture and the current Three.js CDN dependency.

### Scene controller

Refactor the existing `setupThreeAiOpsHero` implementation into `createAiOpsScene(options)`. Required options are:

- `canvas`: the existing hero canvas;
- `anchors`: a derived `{ [key]: { x, y, z } }` object containing only world-space positions;
- `viewport`: initial `{ width, height, dpr }` values measured from the map content box;
- `reducedMotion`: initial boolean;
- `onProjectionChange(key, projection)`: DOM alignment callback;
- `onModeChange(mode)`: runtime fallback callback.

It returns a controller with these contracts:

- `setPreview(keyOrNull)`: changes emphasis only and does not move the camera or navigate;
- `focusDestination(key, { signal, duration })`: returns a promise that resolves only after the camera reaches the destination and rejects with `AbortError` when cancelled;
- `setReducedMotion(enabled)`: immediately stops ambient motion and camera interpolation when enabled;
- `resize({ width, height, dpr })`: updates renderer size and camera aspect without reading the DOM;
- `pause()` and `resume()`;
- `destroy()`: removes scene-owned observers/listeners, disposes WebGL resources, and makes later method calls no-ops;
- `mode`: read-only `webgl`, `static`, or `unavailable` state.

The controller owns only WebGL state. It does not own copy, routing, DOM focus, timers, or destination URLs. It receives `onModeChange(mode)` so the operations controller can remove camera delay if WebGL becomes unavailable.

The operations module owns the single destination configuration map keyed by `jobbot`, `agents`, `prode`, `labs`, and `proof`. Each entry contains the world-space anchor, localized copy key, destination type key, stack, route target, and highlight selector. Scene creation receives a derived copy containing only keys and world positions; the scene never mutates configuration.

The WebGL canvas is moved inside `.hero-agent-map` and fills its content box, so canvas projection and DOM controls share one reference box. The DOM view owns a `ResizeObserver`, measures that box, and passes `{ width, height, dpr }` to `resize`; the scene controller never reads the DOM.

The scene controller clones the supplied anchors and projects them after resize and during camera focus. It converts Three.js normalized device coordinates to `onProjectionChange(key, { x, y, visible })`, where `x = (ndcX + 1) / 2`, `y = (1 - ndcY) / 2`, values are clamped to `[0, 1]`, and origin is the top-left of the shared map/canvas content box. `visible` is true only when the anchor is in front of the camera and its unclamped projected center lies within that box. The DOM view sets the corresponding button center to `left: calc(x * 100%)` and `top: calc(y * 100%)`, then uses `translate(-50%, -50%)`. Invisible anchors keep their last valid position and receive a visually hidden state; JobBot always has a valid initial projection. No DOM reads or writes occur inside the render loop unless a projection is changing.

### Operations controller

Extend the existing hero operations logic to coordinate:

- localized detail copy;
- DOM active and pressed states;
- destination cue content;
- the scene controller;
- delayed navigation after camera focus.

Keep destination definitions in one data map so copy, route, destination type, stack, and 3D anchor cannot drift apart.

`setupHeroOperations()` must be idempotent. It marks the root with `data-ops-ready`, returns a cleanup function, and does not attach listeners a second time. The controller is initialized once after `DOMContentLoaded`. Hash-route changes pause or resume the scene based on overview visibility; they do not destroy and recreate it. `document.visibilitychange` and an `IntersectionObserver` control rendering. A non-persisted `pagehide` calls cleanup; a browser back-forward-cache restore resumes and resizes the existing instance.

### Progressive enhancement

If Three.js fails to load, WebGL creation fails, or reduced motion is requested:

- preserve all DOM nodes and detail content;
- use the existing CSS map as the visual fallback;
- navigate immediately without camera delay;
- never block CV, projects, navigation, or contact.

If the WebGL context is lost after initialization, the scene permanently switches to `unavailable` for that page session, reveals the CSS map, and calls `onModeChange`. The operations controller interrupts the camera with reason `webgl-unavailable`; if a user activation is pending, it bypasses the animation and commits that navigation exactly once. No context-restoration attempt is required.

When mode changes to `static` or `unavailable`, the DOM view removes projection CSS custom properties and projection-driven hidden states from every destination button before revealing the deterministic CSS fallback layout.

## Responsive Behavior

### Desktop

The hero remains a two-part composition, but the operations layer gains more visual authority and spatial depth. It must fit within the first viewport at common laptop heights without clipping essential actions.

### Tablet

The scene becomes shallower, labels move closer to the visual anchors, and supporting telemetry is reduced before core navigation or evidence is removed.

### Mobile

Mobile is an adapted control deck:

- preserve the five destinations in a compact, touch-safe map;
- use a static or very low-motion camera;
- show one active destination detail at a time;
- remove the camera-navigation delay;
- keep role, availability, project CTA, and CV above or adjacent to the map;
- maintain zero horizontal overflow.

## Performance Budget

- Cap device pixel ratio at 1.75 desktop and 1.25 mobile.
- Use no more than 70 particles desktop and 24 mobile.
- Reuse geometries and materials instead of recreating them on selection.
- Animate transforms and material properties only; do not rebuild scene objects per frame.
- Pause rendering when the hero is outside the viewport or the document is hidden.
- Avoid post-processing and large textures.
- Keep the current CDN failure fallback and do not make WebGL a content dependency.

## Accessibility

- Canvas remains `aria-hidden` because every action has a semantic DOM equivalent.
- Active buttons maintain `aria-pressed`.
- The visible detail region is not a live region. A separate visually hidden `role="status"` region announces keyboard focus, activation, fallback, and navigation; pointer hover does not announce.
- Reduced-motion mode removes orbiting, camera travel, and navigation delay.
- A live change to `prefers-reduced-motion` interrupts the camera with reason `reduced-motion`, updates the scene mode, and bypasses to navigation exactly once when a user activation is pending.
- Contrast and focus states must pass in both light and dark themes.
- Navigation remains understandable with CSS disabled or canvas unavailable.

## Internationalization

- Destination title, body, type, action label, stack labels, button accessible name, and screen-reader status come from the existing Spanish/English copy system.
- Destination keys and route targets are language independent.
- A language change re-renders the committed or previewed destination immediately without restarting camera focus.
- If language changes during a pending activation, the same destination completes and the final announcement uses the new language.
- Missing destination copy falls back to Spanish for that field and never renders an empty action or accessible name.

## Testing And Acceptance Criteria

Extend the existing Playwright verification to prove:

- all five hero destinations exist and are keyboard reachable;
- selecting each destination updates the detail and destination cue;
- rapid activation of two different destinations navigates only to the last activated destination;
- pointer exit restores the committed destination after a hover preview;
- hover does not change `aria-pressed` or emit live-region text;
- JobBot, Prode, Labs, and Proof reach the correct overview sections;
- Agents reaches `#/agents`;
- reduced-motion mode navigates without waiting for camera animation;
- changing reduced-motion during camera focus completes the current user navigation exactly once;
- the hero remains usable when `window.THREE` is unavailable;
- simulated WebGL context loss enables the CSS fallback and preserves navigation;
- repeated setup calls do not duplicate listeners or navigation;
- Back and Forward preserve the correct route and scene pause state;
- no JavaScript console errors occur;
- no horizontal overflow occurs at desktop, tablet, and mobile widths;
- CV, projects, GitHub, and LinkedIn remain immediately accessible;
- both Spanish and English destination copy render correctly.
- changing language during a focus transaction keeps the destination and updates its final announcement.

Capture desktop and mobile screenshots after implementation and inspect the first viewport plus at least one completed destination transition.

## Success Criteria

The iteration succeeds when:

- the first viewport reads as one authored experience instead of text beside a dashboard card;
- a new visitor can explain what Ignacio builds after ten seconds;
- the 3D interaction has a clear consequence and never feels decorative;
- every important claim leads to visible proof;
- recruiters can bypass the experience and reach CV or projects immediately;
- the effect remains smooth on a typical laptop and restrained on mobile;
- all automated checks and visual review pass.

## Out Of Scope

- migrating to Next.js or React Three Fiber;
- a free-roaming 3D world;
- sound design;
- custom shaders, post-processing, or physics;
- redesigning every project section in the same iteration;
- inventing metrics, clients, production usage, or technical claims.
