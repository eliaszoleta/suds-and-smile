import { pageHead, breadcrumbJsonLd } from "../lib/seo";
import { servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { ServiceImage, ServiceLinkGrid } from "../components/SeoSections";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CORE_SPECIALTIES, BUSINESS_INFO } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { CheckCircle2, Sparkles, ArrowRight, Star, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Cleaning Services in Charleston, MO | Southern Suds and Smiles",
      description:
        "House, apartment and commercial cleaning, carpet cleaning and laundry service in Charleston, Sikeston, New Madrid, Benton & nearby Missouri towns.",
      path: "/services",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesPage,
});

export function ServicesPage() {
  return (
    <div className="py-12 md:py-20 space-y-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Proudly Serving Charleston & Southeast Missouri</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-3xl mx-auto">
          Our Cleaning Services
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Instead of sulking, let us do the soaking and sudsing for you, with a smile! Southern Suds
          and Smiles picks up where you left off on the to-do list so you can spend more time with
          the people you love.
        </p>
      </section>

      {/* Services List Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {CORE_SPECIALTIES.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-card rounded-3xl border border-border p-6 sm:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 shadow-md border border-border/60 ${isReversed ? "lg:order-2" : ""}`}
              >
                <ServiceImage
                  src={service.image}
                  alt={service.imageAlt ?? service.title}
                  label={service.title}
                  slug={service.id}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full border border-accent/40 shadow">
                  {service.badge}
                </span>
              </div>

              {/* Text content */}
              <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Suds &amp; Smiles Standard</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    <Link
                      to={servicePathForSpecialty(service.id)}
                      className="hover:text-primary hover:underline underline-offset-4"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-sm font-medium text-primary">{service.summary}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-foreground/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={servicePathForSpecialty(service.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground text-xs font-semibold uppercase tracking-widest hover:bg-secondary transition-all border border-border"
                  >
                    <span>Full Details</span>
                  </Link>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest hover:bg-primary/95 transition-all border border-accent/40 shadow"
                  >
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold uppercase tracking-wider transition-colors border border-border"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <span>Call {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <ServiceLinkGrid title="Browse Every Cleaning Service" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Where We Clean</h2>
        <div className="flex flex-wrap gap-3">
          {AREA_PAGES.map((area) => (
            <Link
              key={area.slug}
              to="/service-areas/$slug"
              params={{ slug: area.slug }}
              className="px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-primary transition-colors"
            >
              House cleaning in {area.city}, {area.state}
            </Link>
          ))}
        </div>
      </section>

      {/* Quote Request embedded on Services page */}
      <section id="quote-form" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Quote Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Request Your Free Cleaning Quote
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Tell us about your home or business and we'll get back to you as soon as possible.
          </p>
        </div>
        <QuoteRequestForm />
      </section>
    </div>
  );
}
