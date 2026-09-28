import type * as React from "react";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS, servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { FaqSection, ServiceImage, SudsBubbles } from "../components/SeoSections";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS_INFO, CORE_SPECIALTIES } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { WorkShowcaseGallery } from "../components/WorkShowcaseGallery";
import {
  Sparkles,
  Heart,
  CheckCircle,
  Phone,
  Clock,
  ArrowRight,
  MapPin,
  Home,
  Building2,
  Store,
  Wind,
  Shirt,
  Smile,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Charleston, MO House Cleaning & Maid Service | Southern Suds",
      description:
        "Locally owned house cleaning in Charleston, MO: homes, apartments, offices, carpet cleaning & laundry. Serving Sikeston, New Madrid & Benton. Free quote.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: Index,
});

const HERO_BADGES = [
  { icon: Home, title: "House Cleaning", sub: "Weekly, Bi-weekly, Monthly" },
  { icon: Building2, title: "Apartments", sub: "Renters & Landlords" },
  { icon: Store, title: "Commercial", sub: "Offices & Shops" },
  { icon: Wind, title: "Carpet Cleaning", sub: "Fresh, Clean Floors" },
  { icon: Shirt, title: "Laundry", sub: "Wash, Dry & Fold" },
  { icon: Heart, title: "Locally Owned", sub: "Charleston, MO" },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Request your free quote",
    text: "Tell us about your home or business in the form below, or call or text us. It only takes a minute.",
  },
  {
    icon: CalendarCheck,
    title: "Pick a time that works",
    text: "We'll get back to you with a price and find a day that fits your schedule, one-time or recurring.",
  },
  {
    icon: Smile,
    title: "Come home and smile",
    text: "We do the soaking and sudsing. You come home to a fresh, clean space and more time with your family.",
  },
];

export function Index() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-8 pb-0 md:pt-14 md:pb-4">
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-6">
              <p className="flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-primary">
                <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                Locally Owned in Charleston, MO · Free Quotes
              </p>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Charleston House Cleaning Services
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-primary">
                  Instead of sulking, let us do the soaking and sudsing, with a smile! ✨
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
                <strong className="text-foreground font-semibold">Southern Suds and Smiles</strong>{" "}
                takes the stress of keeping a clean house off your plate. From regular house
                cleaning and apartment cleaning to commercial cleaning, carpet cleaning and laundry
                service, we pick up where you left off on the to-do list so you can come home and
                spend quality time with your family.
              </p>

              <p className="flex items-start gap-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Serving Charleston and nearby communities including{" "}
                  {AREA_PAGES.filter((area) => area.slug !== "charleston-mo")
                    .map((area) => (
                      <Link
                        key={area.slug}
                        to="/service-areas/$slug"
                        params={{ slug: area.slug }}
                        className="font-medium text-foreground hover:text-primary underline-offset-4 hover:underline"
                      >
                        {area.city}
                      </Link>
                    ))
                    .reduce<React.ReactNode[]>(
                      (acc, link, i) => (i === 0 ? [link] : [...acc, ", ", link]),
                      [],
                    )}{" "}
                  and the rest of Southeast Missouri.
                </span>
              </p>

              {/* Core Offer Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {HERO_BADGES.map(({ icon: Icon, title, sub }) => (
                  <div
                    key={title}
                    className="p-3 bg-card rounded-xl border border-border shadow-xs"
                  >
                    <Icon className="w-4 h-4 text-accent mb-1.5" />
                    <div className="text-xs font-bold text-foreground">{title}</div>
                    <div className="text-[11px] text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-xs uppercase tracking-widest hover:bg-primary/95 transition-all shadow-md border border-accent/40 hover:scale-[1.02]"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-foreground hover:bg-secondary/80 font-semibold rounded-full text-xs tracking-wider uppercase border border-border transition-all"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right hero image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent/30 aspect-4/3 group bg-black">
                <img
                  src="/images/house-cleaning-services-charleston-mo.jpg"
                  alt="Sparkling clean kitchen island and living room after house cleaning services in Charleston, MO"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-2xl backdrop-blur-md bg-black/50 border border-white/20 flex items-center gap-3">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt=""
                    className="w-11 h-11 rounded-full bg-white shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold">Come home to clean.</p>
                    <p className="text-xs text-white/90 leading-relaxed">
                      Southern charm, spotless results. Proudly serving Southeast Missouri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-sliding gallery (one slide per service until real photos are added) */}
      <WorkShowcaseGallery />

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Easy as 1-2-3
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3"
            >
              <span className="absolute top-5 right-5 text-4xl font-bold text-accent/30">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Quote Request Section */}
      <section id="quote-section" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-border pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Cleaning Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            <span>Learn More About All Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SPECIALTIES.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.imageAlt ?? `${item.title} in Charleston, MO`}
                  label={item.title}
                  slug={item.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/95 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full border border-accent/40 shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link
                      to={servicePathForSpecialty(item.id)}
                      className="hover:underline underline-offset-4"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-primary font-medium">{item.summary}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <ul className="space-y-1.5 text-xs text-muted-foreground mb-4">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link
                      to={servicePathForSpecialty(item.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-background hover:bg-secondary text-foreground text-xs font-semibold uppercase tracking-wider transition-colors border border-border"
                    >
                      <span>Learn More</span>
                    </Link>
                    <a
                      href="#quote-section"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-white text-foreground text-xs font-semibold uppercase tracking-wider transition-colors border border-border"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-secondary/60 py-16 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Less Stress, More Time for What Matters
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Friendly, dependable and thorough cleaning for homes and businesses in Charleston and
              across Southeast Missouri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">We Clean Like It's Our Own</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We take our time on the details, from baseboards to bathroom fixtures, so your home
                looks, feels and smells clean.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Local & Family-Minded</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We're your neighbors in Charleston, not a franchise. You'll always know who's
                cleaning your home and how to reach them.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Prompt & Reliable</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Send a quote request and we'll get back to you as soon as possible. We show up when
                we say we will and leave you smiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser (full story lives on /about) */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16">
        <SudsBubbles className="opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-4/3 bg-black">
              <img
                src="/images/sparkling-clean-bathroom-southeast-missouri.jpg"
                alt="Sparkling clean bathroom with fresh towels"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Two Southern Charms on a Mission
            </h2>
            <p className="text-base text-primary-foreground/85 leading-relaxed">
              We started {BUSINESS_INFO.name} to bring a little joy and a lot less stress to our
              neighbors. We pick up where you left off on the to-do list so you can come home and
              spend quality time with your family.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full text-xs uppercase tracking-widest hover:opacity-95 transition-all shadow-md"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} />

      {/* Service Area Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-secondary via-card to-secondary p-8 sm:p-12 rounded-3xl border border-border shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-accent">
              <MapPin className="w-4 h-4" />
              <span>Service Area</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Proudly Serving Charleston & Southeast Missouri
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We cover Charleston, Sikeston, New Madrid, Benton, Bertrand, Anniston and neighboring
              communities. Let us take care of the mess so you can enjoy more of what matters.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {AREA_PAGES.map((area) => (
                <Link
                  key={area.slug}
                  to="/service-areas/$slug"
                  params={{ slug: area.slug }}
                  className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground hover:border-accent hover:text-primary transition-colors"
                >
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-full text-center hover:bg-primary/95 transition-all shadow-md border border-accent/40 hover:scale-[1.02]"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-4 bg-background text-foreground text-xs font-semibold uppercase tracking-widest rounded-full text-center border border-border hover:bg-secondary transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
