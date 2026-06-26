# AI Ops Command Center Portfolio Redesign

## Objective
Redesign Ignacio Palmeri's portfolio into a memorable AI-first builder portfolio that feels like a live command center, not a generic landing page. The experience must prove autonomy, process thinking, agent orchestration, and production-oriented automation.

## Approved Direction
Use the **AI Ops Command Center** concept:

- First viewport as a full-screen control room.
- Animated 3D/canvas AI core with orbiting agent/project nodes and moving data streams.
- Console integrated into the system instead of isolated as a decorative card.
- Project section as a premium carousel focused on JobBot, FranquiYA, and Agents System.
- Agents ecosystem preserved and visually connected to the overview.

## Content Requirements
- Keep the positioning: `AI-First Automation Builder & Process Analyst`.
- Preserve verified content only.
- Fix JobBot asset so it does not show the PISKU CLI image.
- Certifications:
  - Red Hat links to Credly.
  - Claude Code links to Skilljar.
  - Cisco remains visible without invented link if no direct certificate URL is available.
  - Python Automation is removed.
- Projects:
  - JobBot: asynchronous automation SaaS, Next.js dashboard, FastAPI/PostgreSQL backend, httpOnly cookies, HMAC webhooks, Stripe/MercadoPago.
  - FranquiYA: operations, stock, invoices, shifts, audits, inventory/cash-flow.
  - Agents System: multi-IDE orchestration infrastructure, Claude Code/Windsurf/Zed, PowerShell/Bash, symlinks, portable prompts/context.

## Visual Architecture
### Hero
The hero should become an immersive scene:

- Full-bleed animated canvas or lightweight Three.js scene.
- Central AI core with moving rings, particles, and agent-node links.
- Text content overlays/anchors cleanly at left.
- Console and profile/photo become docked command surfaces, not regular cards.
- Motion should be purposeful and pause/respect reduced motion.

### Projects Carousel
Replace static grid/showcase with an interactive carousel:

- One featured project in focus with large media.
- Adjacent projects partially visible.
- Keyboard buttons, touch/drag support, and accessible labels.
- Project metadata: role, stack, system value, proof link.
- No layout shift on hover.

### GitHub Activity
Keep the GitHub activity block but make it feel integrated with the command center:

- It should read like live telemetry.
- Avoid generic metric cards.
- Keep external public GitHub SVG cards if they render reliably.

### Agents Tab
Keep current graph concept, but connect the overview visually to it:

- Reuse the same node/data-stream language.
- Preserve desktop graph functionality.
- Preserve mobile inline details.

## Technical Plan Boundaries
- Keep vanilla HTML/CSS/JS. No build tooling unless unavoidable.
- Prefer canvas for hero if Three.js would add too much CDN/runtime fragility.
- If using CDN dependencies, verify offline/failure degradation.
- Keep edits scoped to `index.html`, `style.css`, `app.js`, and assets.

## Accessibility And Performance
- Text must not overlap on mobile or desktop.
- Carousel controls must be buttons with labels and keyboard support.
- Canvas must not block content or interaction.
- Respect `prefers-reduced-motion`.
- Maintain no horizontal overflow on mobile.
- Verify light/dark mode contrast.

## Verification
- `node --check app.js`.
- Browser desktop:
  - hero animated scene visible/nonblank;
  - JobBot uses correct asset;
  - project carousel works with buttons and keyboard;
  - no old static project grid dominance.
- Browser mobile:
  - no horizontal overflow;
  - hero remains legible;
  - carousel usable;
  - agents remain accessible.
- Content:
  - no `Python Automation`;
  - no old `Backend Developer` positioning;
  - no `FulboTracker`/`PISKU CLI` in featured projects;
  - no invented certification links.
