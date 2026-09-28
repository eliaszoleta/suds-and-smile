# Project notes

- Website for Southern Suds and Smiles (Charleston, MO). Standalone; edit it directly in this repo.
- Business details (phone, email, address, social links) live in `BUSINESS_INFO` in `src/lib/business-data.ts`.
- Hosting: Vercel. `vite.config.ts` sets the Nitro preset to `vercel`, so `bun run build`
  (or `npm run build`) writes a ready-to-serve `.vercel/output` folder.
- Pushes to `main` deploy to production once the repo is imported in Vercel.

## SEO
- Site URL for canonical tags, Open Graph, JSON-LD and the sitemap comes from `SITE_URL` (Vercel env var)
  or, if unset, Vercel's production domain. After connecting a custom domain, redeploy once.
- Service pages: `SERVICE_PAGES` in `src/lib/seo-content.ts` → `/services/:slug`.
  City pages: `AREA_PAGES` in the same file → `/service-areas/:slug`. Both are added to the sitemap automatically.
- Per-page tags come from `pageHead()` in `src/lib/seo.ts`; site-wide LocalBusiness schema lives in `src/routes/__root.tsx`.
- `/sitemap.xml` and `/robots.txt` are server routes in `src/routes/`.

## Leads (GoHighLevel)
- The quote form posts to `/api/quote`, which forwards to a GHL Inbound Webhook. Set `DEFAULT_WEBHOOK_URL`
  in `src/routes/api.quote.ts` (or the `GHL_QUOTE_WEBHOOK_URL` Vercel env var). Until then the form asks
  visitors to call/text or email instead.
- Chat widget: set `GHL_CHAT_WIDGET_ID` in `src/routes/__root.tsx`.

## Photos
- Don't use Pristine Cleaning's gallery photos (they're from Pristine's Facebook page).
- Home gallery: `WORK_GALLERY` in `src/lib/business-data.ts`, one slide per service. Upload photos to
  `public/gallery/` and set `imageUrl`; slides without one show a "photos coming soon" panel.
- Service cards/pages: set `image`/`imageAlt` on the `CORE_SPECIALTIES` entry and the matching
  `SERVICE_PAGES` entry (files in `public/images/`); without one they show a branded icon panel.
