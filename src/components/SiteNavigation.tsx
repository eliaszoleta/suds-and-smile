import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS_INFO, SOCIAL_LINKS } from "../lib/business-data";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { Phone, Mail, Menu, X, MapPin, Heart } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/95 border-b border-border/80 transition-all">
      {/* Top contact banner */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-white/10 font-medium">
        <div className="flex items-center gap-3 text-[11px] text-primary-foreground/80">
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-accent" />
            <span>
              Locally owned in Charleston, MO
              <span className="hidden lg:inline"> · Proudly serving Southeast Missouri</span>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="hidden sm:inline-block hover:text-accent transition-colors underline-offset-4 hover:underline text-[11px]"
          >
            Email Us
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-white border-2 border-accent/60 shadow-lg shrink-0 flex items-center justify-center group-hover:border-accent transition-all">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Southern Suds and Smiles logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="flex flex-col leading-none">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
                Southern Suds
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-logo-coral mt-1.5">
                and Smiles
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            activeProps={{ className: "text-primary font-bold border-b-2 border-accent pb-1" }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            activeProps={{ className: "text-primary font-bold border-b-2 border-accent pb-1" }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            to="/service-areas"
            activeProps={{ className: "text-primary font-bold border-b-2 border-accent pb-1" }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Service Areas
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary font-bold border-b-2 border-accent pb-1" }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-primary font-bold border-b-2 border-accent pb-1" }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border border-accent/40 shadow-sm transition-all hover:scale-[1.02]"
          >
            Request Free Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary focus:outline-hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-base">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-border/50 text-foreground"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-border/50 text-foreground"
            >
              Services
            </Link>
            <Link
              to="/service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-border/50 text-foreground"
            >
              Service Areas
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-border/50 text-foreground"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-border/50 text-foreground"
            >
              Contact
            </Link>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full text-center py-3 bg-secondary text-foreground rounded-lg font-semibold flex items-center justify-center gap-2 border border-border"
            >
              <Phone className="w-4 h-4 text-accent" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-primary text-primary-foreground rounded-lg font-semibold tracking-wider uppercase text-xs shadow-md"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-accent/50 shadow-md shrink-0 flex items-center justify-center">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Southern Suds and Smiles logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Instead of sulking, we do the soaking and sudsing for you, with a smile! ✨ Locally
              owned house, apartment, commercial and carpet cleaning plus laundry service in
              Charleston, MO and Southeast Missouri.
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <div className="pt-1 flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors underline"
                  >
                    Find us on {link.label} →
                  </a>
                ))}
              </div>
            )}
            <Link
              to="/about"
              className="inline-flex text-xs font-semibold text-accent hover:text-white transition-colors underline"
            >
              Meet the owners →
            </Link>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: page.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs">
              Service Area
            </h4>
            <p className="text-xs text-primary-foreground/90 font-medium">
              Proudly serving Charleston and Southeast Missouri:
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {AREA_PAGES.map((area) => (
                <li key={area.slug} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <Link
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    House cleaning in {area.city}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.address}</p>
                  <p>{BUSINESS_INFO.addressLine2}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-accent font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-block text-center py-2.5 px-4 bg-accent text-accent-foreground font-semibold rounded-lg text-xs uppercase tracking-wider hover:opacity-95 shadow"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/60 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <span>Charleston, MO & Southeast Missouri</span>
        </div>
      </div>
    </footer>
  );
}
