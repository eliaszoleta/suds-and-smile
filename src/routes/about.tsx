import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Phone, Quote, Smile, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../lib/business-data";
import { BUSINESS_ID, breadcrumbJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  QuoteSection,
  ServiceLinkGrid,
  SudsBubbles,
} from "../components/SeoSections";

const ABOUT_IMAGE = "/images/sparkling-clean-bathroom-southeast-missouri.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us | Southern Suds and Smiles, Charleston, MO",
      description:
        "Meet the two southern charms behind Southern Suds and Smiles, a locally owned cleaning service in Charleston, MO, and learn why we do what we do.",
      path: "/about",
      image: ABOUT_IMAGE,
      imageAlt: "Sparkling clean bathroom",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: "About Southern Suds and Smiles",
          about: { "@id": BUSINESS_ID },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Bring joy",
    text: "A clean home takes a weight off your shoulders. We want you to feel that relief every time you walk through the door.",
  },
  {
    icon: Sparkles,
    title: "Do it right",
    text: "We clean your home the way we'd clean our own: carefully, thoroughly and with respect for your space and your things.",
  },
  {
    icon: Smile,
    title: "Always with a smile",
    text: "Friendly, easy to talk to and easy to work with. Southern hospitality is part of every visit.",
  },
];

function AboutPage() {
  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Meet the Owners
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Two Southern Charms on a Mission
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {BUSINESS_INFO.name} is a locally owned cleaning service based in Charleston,
              Missouri. We clean homes, apartments and businesses across Southeast Missouri, and we
              do it with a whole lot of heart.
            </p>
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
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-4/3 bg-black">
              <img
                src={ABOUT_IMAGE}
                alt="Sparkling clean bathroom with fresh towels"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our story (in the owners' words) */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16">
        <SudsBubbles className="opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Our Story</h2>
          <figure className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-2xl space-y-5">
            <Quote className="w-8 h-8 text-accent" />
            <blockquote className="space-y-4 text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              <p>
                We're two southern charms who wanted to bring joy while relieving the daily stress
                and anxiety we all feel from keeping up a clean house. Instead of sulking, we do the
                soaking and sudsing for you, with a smile!
              </p>
              <p>
                We find happiness and fulfillment in picking up where you left off on the to-do
                list. Seeing people happy, knowing they can come home and spend quality time with
                their family, is why we work so hard.
              </p>
            </blockquote>
            <figcaption className="pt-4 border-t border-white/10 text-sm">
              <p className="font-bold text-white">{BUSINESS_INFO.owners} &amp; team</p>
              <p className="text-primary-foreground/70">Owners, {BUSINESS_INFO.name}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Less Stress at Home, More Time With Family
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceLinkGrid title="How We Can Help" />

      <AreaLinkList title="Where We Clean" />

      <QuoteSection heading="Let Us Do the Soaking and Sudsing" />
    </div>
  );
}
