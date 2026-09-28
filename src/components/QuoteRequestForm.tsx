import React, { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Loader2,
  Smile,
} from "lucide-react";
import { BUSINESS_INFO } from "../lib/business-data";

type Option = { value: string; label: string };

export const SERVICE_OPTIONS = [
  "House Cleaning",
  "Apartment Cleaning",
  "Commercial Cleaning",
  "Carpet Cleaning",
  "Laundry Service",
] as const;

export const CITY_OPTIONS: Option[] = [
  { value: "Charleston", label: "Charleston, MO" },
  { value: "Sikeston", label: "Sikeston, MO" },
  { value: "New Madrid", label: "New Madrid, MO" },
  { value: "Benton", label: "Benton, MO" },
  { value: "Bertrand", label: "Bertrand, MO" },
  { value: "Anniston", label: "Anniston, MO" },
  { value: "Surrounding Area", label: "Surrounding Area" },
];

// The "size" and "frequency" questions depend on the service: bedrooms don't matter for an
// office or a load of laundry, so those services ask about the space or amount instead.
const HOME_SIZE_OPTIONS: Option[] = [
  { value: "Studio / 1 Bedroom", label: "Studio / 1 Bedroom" },
  { value: "2 Bedrooms", label: "2 Bedrooms" },
  { value: "3 Bedrooms", label: "3 Bedrooms" },
  { value: "4+ Bedrooms", label: "4+ Bedrooms" },
];
const COMMERCIAL_SIZE_OPTIONS: Option[] = [
  { value: "Commercial space: Under 1,500 sq ft", label: "Under 1,500 sq ft" },
  { value: "Commercial space: 1,500 - 3,000 sq ft", label: "1,500 - 3,000 sq ft" },
  { value: "Commercial space: 3,000 - 6,000 sq ft", label: "3,000 - 6,000 sq ft" },
  { value: "Commercial space: 6,000+ sq ft / not sure", label: "6,000+ sq ft / not sure" },
];
const CARPET_AREA_OPTIONS: Option[] = [
  { value: "Carpet: 1-2 rooms", label: "1-2 rooms" },
  { value: "Carpet: 3-4 rooms", label: "3-4 rooms" },
  { value: "Carpet: 5+ rooms / whole home", label: "5+ rooms / whole home" },
  { value: "Carpet: Area rugs or stairs only", label: "Area rugs or stairs only" },
];
const LAUNDRY_AMOUNT_OPTIONS: Option[] = [
  { value: "Laundry: 1-2 loads", label: "1-2 loads" },
  { value: "Laundry: 3-4 loads", label: "3-4 loads" },
  { value: "Laundry: 5+ loads", label: "5+ loads" },
  { value: "Laundry: Sheets & towels only", label: "Sheets & towels only" },
];
const CLEANING_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time Clean", label: "One-time Clean" },
  { value: "Recurring Weekly", label: "Recurring Weekly" },
  { value: "Recurring Bi-weekly", label: "Recurring Bi-weekly" },
  { value: "Recurring Monthly", label: "Recurring Monthly" },
];
const CARPET_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time", label: "One-time" },
  { value: "Every few months", label: "Every few months" },
  { value: "Not sure yet", label: "Not sure yet" },
];
const LAUNDRY_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time", label: "One-time" },
  { value: "Weekly", label: "Weekly" },
  { value: "Bi-weekly", label: "Bi-weekly" },
  { value: "With each cleaning visit", label: "With each cleaning visit" },
];

function sizeQuestion(service: string) {
  if (service === "Commercial Cleaning")
    return { label: "Size of the Space", options: COMMERCIAL_SIZE_OPTIONS, fallback: 0 };
  if (service === "Carpet Cleaning")
    return { label: "Carpet to Clean", options: CARPET_AREA_OPTIONS, fallback: 1 };
  if (service === "Laundry Service")
    return { label: "Laundry Amount", options: LAUNDRY_AMOUNT_OPTIONS, fallback: 0 };
  return { label: "Home Size", options: HOME_SIZE_OPTIONS, fallback: 2 };
}

function frequencyOptions(service: string) {
  if (service === "Carpet Cleaning") return CARPET_FREQUENCY_OPTIONS;
  if (service === "Laundry Service") return LAUNDRY_FREQUENCY_OPTIONS;
  return CLEANING_FREQUENCY_OPTIONS;
}

const defaultFrequency = (service: string) => frequencyOptions(service)[0]!.value;

const defaultSize = (service: string) => {
  const q = sizeQuestion(service);
  return q.options[q.fallback]!.value;
};

interface QuoteFormProps {
  defaultService?: string | undefined;
  defaultCity?: string | undefined;
}

export function QuoteRequestForm({
  defaultService = "House Cleaning",
  defaultCity = "Charleston",
}: QuoteFormProps) {
  const [service, setService] = useState(defaultService);
  const [propertySize, setPropertySize] = useState(() => defaultSize(defaultService));
  const [frequency, setFrequency] = useState(() => defaultFrequency(defaultService));
  const size = sizeQuestion(service);
  const frequencies = frequencyOptions(service);

  // Switching services keeps the answers if they still apply, otherwise resets to that service's defaults.
  const changeService = (next: string) => {
    setService(next);
    if (!sizeQuestion(next).options.some((o) => o.value === propertySize)) {
      setPropertySize(defaultSize(next));
    }
    if (!frequencyOptions(next).some((o) => o.value === frequency)) {
      setFrequency(defaultFrequency(next));
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const summary = [
    `Quote request from ${[firstName, lastName].filter(Boolean).join(" ")}`,
    `Service: ${service}`,
    `${size.label}: ${propertySize}`,
    `Frequency: ${frequency}`,
    `City: ${city}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Notes: ${notes || "None"}`,
  ].join("\n");
  const mailtoHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Cleaning quote request - ${service}`,
  )}&body=${encodeURIComponent(summary)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !phone || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(false);

    // Send the lead to the GHL workflow (Inbound Webhook) via our own server route.
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          city,
          service,
          property_size: propertySize,
          frequency,
          notes,
          page_url: window.location.href,
          company_website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(`Quote request failed (${res.status})`);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setSubmitError(true);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl border border-accent/40 shadow-2xl text-center space-y-6 animate-in fade-in-50">
        <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-foreground">Quote Request Received</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-foreground">{firstName}</span>. We've
            received your request for <span className="font-medium text-foreground">{service}</span>{" "}
            and we'll get back to you as soon as possible to go over the details and get you on the
            schedule!
          </p>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-medium text-foreground">
            Need us right away? Call or text us directly at{" "}
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-primary underline font-bold">
              {BUSINESS_INFO.phone}
            </a>
            .
          </p>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground underline pt-2"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border/80 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 sm:p-8 border-b border-accent/20 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Free Quote Request</span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            <Smile className="w-3.5 h-3.5" />
            <span>No Obligation</span>
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Let Us Do the Sudsing!</h3>
        <p className="text-primary-foreground/80 text-xs sm:text-sm">
          Tell us a little about your space and we'll get back to you with a free quote as soon as
          possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Spam trap: hidden from people, often filled in by bots */}
        <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
          <label>
            Company website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>
        {/* Cleaning details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Specialty / Service
            </label>
            <select
              value={service}
              onChange={(e) => changeService(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {size.label}
            </label>
            <select
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {size.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Schedule / Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {frequencies.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-2 border-t border-border/70 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Your Contact Information
            </span>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Privacy Protected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                required
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              >
                {CITY_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <textarea
              rows={2}
              placeholder="Tell us about your home or business and any special requests (e.g. pets, problem areas, preferred days)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
            />
          </div>
        </div>

        {submitError && (
          <p
            role="alert"
            className="text-sm font-medium text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3"
          >
            Sorry, we couldn't send your request. Please call or text us at{" "}
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-bold">
              {BUSINESS_INFO.phone}
            </a>
            , or{" "}
            <a href={mailtoHref} className="underline font-bold">
              email your request to us
            </a>
            .
          </p>
        )}

        {/* Action button & guarantees */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" /> Quick Response
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-primary">
              <Smile className="w-4 h-4 text-accent" /> Free, No-Obligation Quote
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm uppercase tracking-widest hover:bg-primary/95 transition-all shadow-lg flex items-center justify-center gap-2 border border-accent/40 hover:scale-[1.02] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-accent" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
