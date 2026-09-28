import * as React from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { WORK_GALLERY, type GalleryProject } from "../lib/business-data";
import { ServiceImage } from "./SeoSections";

const HAS_PHOTOS = WORK_GALLERY.some((item) => item.imageUrl);

export function WorkShowcaseGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const total = WORK_GALLERY.length;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 4.5s. Depending on currentIndex restarts the countdown whenever the
  // slide changes (including taps/clicks), so a picked photo stays up for the full interval.
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(nextSlide, 4500);
    return () => clearTimeout(timer);
  }, [isPaused, nextSlide, currentIndex]);

  // Keep the active thumbnail visible in the one-row strip on mobile. Scrolls only the strip
  // (not the page), and does nothing on desktop where the thumbnails wrap into a grid.
  const thumbStripRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const strip = thumbStripRef.current;
    const thumb = strip?.children[currentIndex] as HTMLElement | undefined;
    if (!strip || !thumb || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({
      left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const activeProject: GalleryProject = WORK_GALLERY[currentIndex] ?? WORK_GALLERY[0]!;

  return (
    <section
      id="work-gallery"
      className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"
      // Pause only while a real mouse hovers. On touch screens a tap fires a mouse "enter" with
      // no matching "leave", which used to stop the slideshow for good.
      onPointerEnter={(e) => e.pointerType === "mouse" && setIsPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setIsPaused(false)}
      aria-label="Southern Suds and Smiles work gallery"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-border pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{HAS_PHOTOS ? "Clean Homes & Businesses" : "Photos Coming Soon"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Work in Action</h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            {HAS_PHOTOS
              ? "House, apartment, commercial and carpet cleaning plus laundry service for homes and businesses across Charleston and Southeast Missouri."
              : "House, apartment, commercial and carpet cleaning plus laundry service across Charleston and Southeast Missouri. Photos from our jobs are on the way!"}
          </p>
        </div>

        {/* Navigation arrows & slide indicators */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-muted-foreground tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project photo"
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center text-foreground transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project photo"
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center text-foreground transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Spotlight Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Caption card above the image */}
          <div className="p-4 rounded-2xl bg-primary text-primary-foreground border border-border/70 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold">{activeProject.title}</h3>
                <p className="text-xs text-primary-foreground/80 line-clamp-1">
                  {activeProject.seoDescription}
                </p>
              </div>
              <a
                href="#quote-section"
                className="shrink-0 self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90 transition-colors shadow"
              >
                <span>Request Clean</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Featured Image Frame */}
          <div className="relative bg-black/95 rounded-3xl overflow-hidden border border-border/70 shadow-xl group aspect-4/3 sm:aspect-16/10 flex items-center justify-center">
            {activeProject.imageUrl ? (
              <>
                {/* Blurred copy fills the empty space around photos that don't match the frame shape */}
                <img
                  key={`${activeProject.id}-backdrop`}
                  src={activeProject.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
                  loading="lazy"
                />
                {/* Whole photo, never cropped, on every screen size */}
                <img
                  key={activeProject.id}
                  src={activeProject.imageUrl}
                  alt={activeProject.seoAlt}
                  className="relative w-full h-full object-contain transition-all duration-700 animate-in fade-in zoom-in-95"
                  loading="lazy"
                />
              </>
            ) : (
              <ServiceImage
                key={activeProject.id}
                alt={activeProject.seoAlt}
                label={`${activeProject.category} · Photos coming soon`}
                slug={activeProject.serviceSlug}
                className="absolute inset-0 w-full h-full animate-in fade-in"
              />
            )}

            {/* Badge indicator */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground border border-accent/40 shadow-sm backdrop-blur-md">
                {activeProject.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white/90 border border-white/20 backdrop-blur-md">
                {activeProject.location}
              </span>
            </div>
          </div>
        </div>

        {/* Details & Thumbnail list */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4 bg-card p-6 rounded-3xl border border-border shadow-xs">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                Project Details
              </span>
              <h4 className="text-xl font-bold text-foreground">{activeProject.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border">
              <span className="text-xs font-semibold text-foreground">Highlights:</span>
              <ul className="space-y-1.5">
                {activeProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Thumbnails to jump directly */}
          <div className="space-y-2 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Browse:</span>
              <span className="text-[11px] text-accent font-medium">Auto-sliding</span>
            </div>
            <div
              ref={thumbStripRef}
              className="relative flex gap-2 overflow-x-auto snap-x snap-mandatory p-1 -m-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:overflow-visible"
            >
              {WORK_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to project: ${item.title}`}
                  className={`relative shrink-0 w-16 sm:w-20 lg:w-auto snap-start aspect-square rounded-xl overflow-hidden border-2 transition-all group ${
                    idx === currentIndex
                      ? "border-primary ring-2 ring-accent/30 scale-105"
                      : "border-border/70 opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.seoAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <ServiceImage
                      alt={item.category}
                      label=""
                      slug={item.serviceSlug}
                      className="w-full h-full [&>span:first-of-type]:w-9 [&>span:first-of-type]:h-9 [&_svg]:w-4 [&_svg]:h-4"
                    />
                  )}
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      idx === currentIndex
                        ? "bg-primary/10"
                        : "bg-black/20 group-hover:bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
        {WORK_GALLERY.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
