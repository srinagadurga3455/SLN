# Deployment — Production Workflow

This site ships **static, prerendered HTML** for full SEO (43 pages) without ever
running a browser (Puppeteer/Chromium) inside Vercel's build environment.

## Why this setup

- `npm run build` runs **only** `vite build` — it never launches Chromium.
- `npm run prerender` runs `react-snap` (which uses Puppeteer) **locally only**, to
  generate static HTML for every route into `dist/`.
- Vercel's build command is pinned to `vite build`, so Puppeteer is **never executed
  during deployment** — this eliminates the `Failed to launch chrome / libnss3.so`
  error and keeps deploy times fast.
- The prerendered `dist/` is deployed as-is with `vercel deploy --prebuilt`.

## Local build

```bash
npm install
npm run build        # Vite build only — no browser
npm run prerender    # react-snap -> static HTML for all 43 routes in dist/
```

Verify the prerender ran (43 static pages):

```bash
(Get-ChildItem dist -Recurse -Filter index.html).Count   # 43
```

## Deploy to Vercel

```bash
vercel deploy --prebuilt
```

`--prebuilt` uploads the existing `dist/` directory; Vercel skips its build step
entirely, so no dependencies are installed and no Chromium is downloaded.

For a production URL:

```bash
vercel deploy --prebuilt --prod
```

## After deploying

1. Submit `https://sivalalithanursery.in/sitemap.xml` in Google Search Console.
2. Confirm `robots.txt` allows crawling.
3. Verify a few prerendered routes (e.g. `/plant-nursery-in-kadiyam`,
   `/plants/mango`) show full content when "view source".

## Notes

- `react-snap` stays a `devDependency`; it is never part of the production bundle.
- Do **not** add Chromium, `puppeteer-core`, or `nixpacks`/`PLAYWRIGHT_*` build
  overrides to make react-snap work on Vercel — the prebuilt deploy makes it
  unnecessary.
- Git-based auto-deploys (pushing to Vercel via git) will only run `vite build`
  (`buildCommand` in `vercel.json`); the prerendered output must come from a
  machine that ran `npm run prerender`.
