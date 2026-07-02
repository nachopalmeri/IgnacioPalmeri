# ignaciopalmeri portfolio

Personal portfolio for `ignaciopalmeri` built as a vanilla HTML/CSS/JS site. The goal is to present interview-ready evidence: shipped projects, a visible JobBot case study, a full 8-project archive, and a working local agent/workflow system.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Playwright for end-to-end verification
- Vercel for deployment

## What the site shows

- A recruiter-focused hero with direct proof signals
- A JobBot case study with problem, solution, architecture, stack, decisions and proof links
- Three featured projects on the overview page
- An 8-project archive on the projects tab
- A workflow/agents tab backed by real local outputs
- English and Spanish copy
- CV downloads and live outbound links

## Structure

- `index.html` - page structure and sections
- `app.js` - copy, project data, tab routing, renders and client logic
- `style.css` - layout, responsive styling and visual system
- `tests/portfolio.e2e.mjs` - local browser verification
- `cv/` - downloadable CV PDFs
- `project-assets/` - screenshots and project visuals

## Run locally

```bash
npm install
npm run verify
```

For manual preview, serve the repository root with any static server and open `index.html`.

## Tests

- `node --check app.js`
- `node tests/portfolio.e2e.mjs`
- `npm run verify`

The E2E suite checks:

- desktop and mobile rendering
- tab routing
- JobBot case study presence
- 3 featured projects in the overview
- 8 projects in the archive
- agent/workflow proof visibility
- CV, README and favicon availability
- behavior when `localStorage` is blocked

## Deploy

The site is intended for Vercel static hosting. The repository contains only static assets and client-side logic, so no framework build step is required.

## Decisions

- Keep the implementation vanilla to stay easy to inspect and deploy.
- Favor visible evidence over inflated claims.
- Keep the overview focused on 3 projects, but expose the full archive on the projects tab.
- Treat the agents tab as a work system, not as a product pitch.

## Limitations

- There is no framework-based component system.
- Project data is embedded in `app.js`.
- The workflow graph is visual proof of process, not a backend service.

## Next steps

- Add richer telemetry or analytics for the live portfolio.
- Replace any remaining placeholder screenshots with final art where needed.
- Expand the JobBot case study with a short video or process log if that becomes useful for interviews.
