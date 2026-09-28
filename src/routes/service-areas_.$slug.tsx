import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../lib/business-data";
import { getAreaPage, SERVICE_PAGES } from "../lib/seo-content";
import { BUSINESS_ID, breadcrumbJsonLd, faqJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  FaqSection,
  QuoteSection,
  ServiceImage,
} from "../components/SeoSections";

export const Route = createFileRoute("/service-areas_/$slug")({
  loader: ({ params }) => {
    const page = getAreaPage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData: page }) => {
    if (!page) return {};
    const path = `/service-areas/${page.slug}`;
    const place = `${page.city}, ${page.state}`;
    return pageHead({
      title: page.metaTitle,
      description: page.metaDescription,
      path,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${absoluteUrl(path)}#service`,
          name: `House Cleaning in ${place}`,
          serviceType: "House cleaning",
          url: absoluteUrl(path),
          description: page.metaDescription,
          provider: { "@id": BUSINESS_ID },
          areaServed: {
            "@type": "City",
            name: page.city,
            containedInPlace: { "@type": "State", name: page.stateName },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Cleaning services in ${place}`,
            itemListElement: SERVICE_PAGES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                url: absoluteUrl(`/services/${service.slug}`),
              },
            })),
          },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: place, path },
        ]),
        faqJsonLd(page.faqs),
      ],
    });
  },
  component: AreaDetailPage,
});

function AreaDetailPage() {
  const page = Route.useLoaderData();
  const place = `${page.city}, ${page.state}`;

  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: place },
          ]}
        />
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-xs font-semibold uppercase tracking-widest text-primary">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>
              Serving {page.city}, {page.stateName}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            {page.h1}
          </h1>
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="text-base text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full text-xs uppercase tracking-widest hover:bg-primary/95 transition-all shadow-md border border-accent/40"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4 text-accent" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-foreground font-semibold rounded-full text-xs uppercase tracking-wider border border-border hover:bg-secondary/80 transition-all"
            >
              <Phone className="w-4 h-4 text-accent" /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Cleaning Services in {place}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_PAGES.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-accent/60 transition-all flex flex-col"
            >
              <div className="aspect-16/9 bg-black overflow-hidden">
                <ServiceImage
                  src={service.image}
                  alt={service.imageAlt ?? service.name}
                  label={service.name}
                  slug={service.slug}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary pt-1">
                  Learn more <ArrowRight className="w-4 h-4 text-accent" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local notes */}
      <section className="bg-secondary/60 py-14 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why {page.city} Chooses Southern Suds and Smiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.localNotes.map((note) => (
              <div
                key={note.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-xs"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{note.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-foreground mb-3">
              Communities we serve in and around {page.city}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {page.neighborhoods.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} title={`Cleaning in ${place}: FAQ`} />

      <AreaLinkList title="Nearby Areas We Also Serve" slugs={page.nearby} />

      <QuoteSection
        heading={`Get a Free Cleaning Quote in ${place}`}
        defaultCity={page.formValue}
      />
    </div>
  );
}
