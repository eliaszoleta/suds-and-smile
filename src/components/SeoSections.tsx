import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Droplets,
  Home,
  MapPin,
  Shirt,
  Sparkles,
  Store,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { AREA_PAGES, SERVICE_PAGES, type Faq } from "../lib/seo-content";
import { QuoteRequestForm } from "./QuoteRequestForm";

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="w-3 h-3" />}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-primary underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group bg-card border border-border rounded-2xl p-5 shadow-xs open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
              <h3 className="text-base">{faq.question}</h3>
              <ChevronRight className="w-4 h-4 shrink-0 text-accent transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServiceLinkGrid({
  title = "Our Cleaning Services",
  excludeSlug,
  cityLabel,
}: {
  title?: string;
  excludeSlug?: string;
  cityLabel?: string;
}) {
  const pages = SERVICE_PAGES.filter((page) => page.slug !== excludeSlug);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to="/services/$slug"
            params={{ slug: page.slug }}
            className="group flex items-center justify-between gap-3 bg-card border border-border rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-accent/60 transition-all"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">
              {page.name}
              {cityLabel ? ` in ${cityLabel}` : ""}
            </span>
            <ArrowRight className="w-4 h-4 shrink-0 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AreaLinkList({
  title = "Areas We Serve",
  slugs,
}: {
  title?: string;
  slugs?: string[];
}) {
  const pages = slugs
    ? slugs.map((slug) => AREA_PAGES.find((p) => p.slug === slug)).filter((p) => p !== undefined)
    : AREA_PAGES;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to="/service-areas/$slug"
            params={{ slug: page.slug }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4 text-accent" />
            {page.city}, {page.state}
          </Link>
        ))}
        <Link
          to="/service-areas"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          All service areas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function QuoteSection({
  heading = "Request Your Free Cleaning Quote",
  defaultService,
  defaultCity,
}: {
  heading?: string;
  defaultService?: string;
  defaultCity?: string;
}) {
  return (
    <section id="quote-form" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free, No-Obligation Quote</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{heading}</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Tell us about your home or business and we'll get back to you as soon as possible.
        </p>
      </div>
      <QuoteRequestForm defaultService={defaultService} defaultCity={defaultCity} />
    </section>
  );
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "house-cleaning": Home,
  "apartment-cleaning": Building2,
  "commercial-cleaning": Store,
  "carpet-cleaning": Wind,
  "laundry-service": Shirt,
};

/**
 * Service photo, or a branded "suds" panel with the service's icon until real photos are added.
 * `slug` picks the icon (a service page slug / specialty id).
 */
export function ServiceImage({
  src,
  alt,
  label,
  slug,
  className = "",
  loading = "lazy",
}: {
  src?: string | undefined;
  alt: string;
  label: string;
  slug?: string | undefined;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  if (src) {
    return <img src={src} alt={alt} className={className} loading={loading} />;
  }
  const Icon = (slug && SERVICE_ICONS[slug]) || Droplets;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary via-primary to-[oklch(0.3_0.06_215)] text-primary-foreground ${className}`}
    >
      <SudsBubbles />
      <span className="relative w-16 h-16 rounded-full bg-white/10 border border-white/25 flex items-center justify-center shadow-inner">
        <Icon className="w-8 h-8 text-accent" />
      </span>
      <span className="relative px-6 text-center text-sm font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

/** Decorative soap bubbles used on image placeholders and the hero. */
export function SudsBubbles({ className = "" }: { className?: string }) {
  const bubbles = [
    { size: 70, top: "8%", left: "6%", o: 0.18 },
    { size: 28, top: "22%", left: "26%", o: 0.22 },
    { size: 46, top: "64%", left: "12%", o: 0.16 },
    { size: 18, top: "80%", left: "34%", o: 0.25 },
    { size: 90, top: "58%", left: "72%", o: 0.14 },
    { size: 34, top: "12%", left: "80%", o: 0.2 },
    { size: 16, top: "38%", left: "90%", o: 0.26 },
  ];
  return (
    <div aria-hidden="true" className={`absolute inset-0 pointer-events-none ${className}`}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full border border-white"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: b.o,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(255,255,255,0.05) 60%)",
          }}
        />
      ))}
    </div>
  );
}
