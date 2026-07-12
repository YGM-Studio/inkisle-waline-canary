# InkIsle Waline Canary

This repository is the external acceptance site for published InkIsle npm
releases. It intentionally contains only user-facing content and configuration;
the renderer is installed from npm rather than referenced from the InkIsle
source repository.

## What it verifies

- `inkisle` installs at the exact version declared in `package.json`.
- A content-only project passes InkIsle checks and builds without renderer source.
- Internal links remain valid under the `/inkisle-waline-canary` GitHub Pages
  base path.
- The personal theme loads comments and reactions from the dedicated Waline
  Vercel and Neon lab.

## Commands

```bash
npm ci
npm run ci
npm run dev
```

Dependabot proposes npm updates. A release update should only be merged after
the complete CI and Pages build pass.
