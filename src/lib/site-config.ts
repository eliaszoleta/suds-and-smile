declare const __SITE_URL__: string;

/** Absolute origin of the live site, e.g. "https://southernsudsandsmiles.com" (no trailing slash). */
export const SITE_URL: string = __SITE_URL__;

/** Turns a site path ("/services") into an absolute URL. Absolute URLs pass through unchanged. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
