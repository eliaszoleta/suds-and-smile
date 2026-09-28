import { BUSINESS_INFO } from "./business-data";
import { absoluteUrl, SITE_URL } from "./site-config";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

type JsonLd = Record<string, unknown>;

interface PageHeadOptions {
  /** Full <title>. Keep under ~60 characters so Google doesn't truncate it. */
  title: string;
  /** Meta description. Aim for 140–160 characters. */
  description: string;
  /** Site path of the page, e.g. "/services/deep-house-cleaning". */
  path: string;
  image?: string;
  imageAlt?: string;
  jsonLd?: JsonLd[];
}

/** Builds the head() payload for a route: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${BUSINESS_INFO.name} logo`,
  jsonLd = [],
}: PageHeadOptions) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
