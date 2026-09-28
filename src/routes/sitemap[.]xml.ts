import { createFileRoute } from "@tanstack/react-router";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { absoluteUrl } from "../lib/site-config";

const STATIC_PATHS = ["/", "/services", "/service-areas", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          ...STATIC_PATHS,
          ...SERVICE_PAGES.map((page) => `/services/${page.slug}`),
          ...AREA_PAGES.map((page) => `/service-areas/${page.slug}`),
        ];
        const urls = paths.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
