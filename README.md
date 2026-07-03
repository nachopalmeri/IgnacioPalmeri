# ignaciopalmeri portfolio

Personal portfolio for `ignaciopalmeri` built as a vanilla HTML/CSS/JS site. The goal is to present interview-ready evidence: shipped projects, a visible JobBot case study, a full 8-project archive, and a transparent local workflow system.

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
- A workflow/agents tab that explains the local work system without presenting it as a product
- English and Spanish copy
- CV downloads and live outbound links

## Structure

- `index.html` - page structure and sections
- `app.js` - copy, project data, tab routing, renders and client logic
- `style.css` - layout, responsive styling and visual system
- `tests/portfolio.e2e.mjs` - local browser verification
- `cv/` - downloadable CV PDFs
- `project-assets/` - screenshots and project visuals
- `agent-assets/` - visual assets for the workflow-system graph
- `docs/superpowers/` - historical plans and specs; superseded docs are marked explicitly
- `.atl/` - local agent/skill registry metadata, not deployed
- `.vercelignore` - deployment exclusions for local-only files

## Run locally

```bash
npm install
npx playwright install chromium
npm run verify
```

For manual preview, serve the repository root with any static server and open `http://127.0.0.1:<port>/`. Do not rely on `file://` preview because root-relative CV links and route behavior are meant for static hosting.

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
- CV, external project links, project media, README and favicon availability
- basic path traversal rejection in the local test server
- behavior when `localStorage` is blocked

## Deploy

The site is intended for Vercel static hosting. The repository contains only static assets and client-side logic, so no framework build step is required.

## Decisions

- Keep the implementation vanilla to stay easy to inspect and deploy.
- Favor visible evidence over inflated claims.
- Keep the overview focused on 3 projects, but expose the full archive on the projects tab.
- Treat the agents tab as a work-system explanation, not as a product pitch or proof of shipped infrastructure.

## Limitations

- There is no framework-based component system.
- Project data is embedded in `app.js`.
- The workflow graph is a visual explanation of process, not a backend service or a deployed agent product.
- Some historical docs describe earlier directions such as FranquiYA and an interactive carousel; those files are kept as design history and marked as superseded.

## Next steps

- Add richer telemetry or analytics for the live portfolio.
- Replace any remaining placeholder screenshots with final art where needed.
- Expand the JobBot case study with a short video or process log if that becomes useful for interviews.
