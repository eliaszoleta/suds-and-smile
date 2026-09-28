import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, Phone, ArrowRight, Star } from "lucide-react";
import { BUSINESS_INFO } from "../lib/business-data";
import { AREA_PAGES, getServicePage } from "../lib/seo-content";
import { BUSINESS_ID, breadcrumbJsonLd, faqJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  FaqSection,
  QuoteSection,
  ServiceImage,
  ServiceLinkGrid,
} from "../components/SeoSections";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData: page }) => {
    if (!page) return {};
    const path = `/services/${page.slug}`;
    return pageHead({
      title: page.metaTitle,
      description: page.metaDescription,
      path,
      ...(page.image ? { image: page.image } : {}),
      ...(page.imageAlt ? { imageAlt: page.imageAlt } : {}),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${absoluteUrl(path)}#service`,
          name: page.name,
          serviceType: page.name,
          description: page.metaDescription,
          url: absoluteUrl(path),
          ...(page.image ? { image: absoluteUrl(page.image) } : {}),
          provider: { "@id": BUSINESS_ID },
          areaServed: AREA_PAGES.map((area) => ({
            "@type": "City",
            name: `${area.city}, ${area.state}`,
          })),
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.name, path },
        ]),
        faqJsonLd(page.faqs),
      ],
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const page = Route.useLoaderData();

  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.name },
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
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
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl bg-black aspect-4/3">
              <ServiceImage
                src={page.image}
                alt={page.imageAlt ?? page.name}
                label={page.name}
                slug={page.slug}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary/60 border border-border rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Who This Service Is For
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {page.included.map((group) => (
            <div
              key={group.area}
              className="bg-card border border-border rounded-2xl p-6 shadow-xs"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">{group.area}</h3>
              <ul className="space-y-2">
                {group.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Why Choose Southern Suds and Smiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.whyUs.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Star className="w-5 h-5 text-accent fill-current mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} title={`${page.name} FAQ`} />

      <AreaLinkList title={`${page.name} Near You`} />

      <ServiceLinkGrid title="Other Cleaning Services" excludeSlug={page.slug} />

      <QuoteSection heading={`Get a Free ${page.name} Quote`} defaultService={page.formValue} />
    </div>
  );
}
