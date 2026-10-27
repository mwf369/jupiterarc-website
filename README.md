# Jupiter Arc — jupiterarc.com

One-page marketing site built with Astro + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content

Everything you'd normally change lives in `src/data/site.ts`:

- `site` — email, phone, booking link, region line (phone and email are placeholders, marked TODO)
- `niches` — the 9 industry boxes (name, icon, typical job value, pain point, 3 offerings)
- `services` — the 9 service boxes
- `steps` — Find / Close / Keep

Icons are Lucide names (https://lucide.dev/icons), written in PascalCase, e.g. `PaintRoller`.

## Deploy to Cloudflare Pages

Connect the repo in Cloudflare Pages with:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

Then add the custom domain `jupiterarc.com` under the Pages project.
