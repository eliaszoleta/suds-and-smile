import { pageHead, breadcrumbJsonLd } from "../lib/seo";
import { AREA_PAGES } from "../lib/seo-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS_INFO } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { Phone, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Us for a Free Cleaning Quote | Southern Suds and Smiles",
      description:
        "Call or text (573) 591-3375 or request a free online quote. Southern Suds and Smiles serves Charleston, Sikeston, New Madrid, Benton, Bertrand & Anniston MO.",
      path: "/contact",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Connect With Our Team</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl mx-auto">
          Let's Get Your Home Sparkling
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Whether you need house cleaning, apartment cleaning, commercial cleaning, carpet cleaning
          or laundry service, we'll do the soaking and sudsing for you, with a smile! Call or text
          for a free estimate, or send us the form below.
        </p>
      </section>

      {/* Main Grid: Direct Info + Integrated Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Business Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Company & Contact Information</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Based In</h3>
                    <p className="text-muted-foreground">{BUSINESS_INFO.address}</p>
                    <p className="text-muted-foreground">{BUSINESS_INFO.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call or Text</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-primary hover:text-accent font-semibold transition-colors text-base"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Direct line for quotes and schedule adjustments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-primary hover:text-accent font-medium transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-foreground">Service Footprint</h3>
              <p className="text-xs text-muted-foreground">
                We clean homes and businesses across Southeast Missouri:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {AREA_PAGES.map((area) => (
                  <Link
                    key={area.slug}
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary hover:underline underline-offset-4"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>
                      {area.city}, {area.state}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="p-3 bg-secondary/80 rounded-xl border border-border/60 text-[11px] text-muted-foreground mt-2">
                Don't see your town? We also serve nearby communities in Southeast Missouri. Contact
                us and we'll let you know if we can reach you.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
