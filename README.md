# Southern Suds and Smiles website

TanStack Start + React + TypeScript + Tailwind CSS. Built from the same template as the Pristine Cleaning site.

## Development

```sh
bun install   # or: npm install
bun run dev   # or: npm run dev
```

## Deploying (Vercel)

Import this repo in Vercel (Framework preset: Other, defaults for everything else).
The build (`vite build`) outputs `.vercel/output`, which Vercel deploys as-is.
Every push to `main` redeploys the live site.
