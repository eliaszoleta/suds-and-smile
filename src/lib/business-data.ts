export interface BusinessInfo {
  name: string;
  /** Short brand line used in the header, footer and social previews. */
  tagline: string;
  /** Owner(s), shown in the "Meet the owners" story. */
  owners: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  /** Add the Facebook / Google Business Profile links here once they exist; they show up site-wide. */
  facebookUrl?: string;
  googleBusinessUrl?: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Southern Suds and Smiles",
  tagline: "We do the soaking and sudsing for you, with a smile!",
  owners: "Michaela Burcks",
  logoUrl: "/logo.svg",
  phone: "(573) 591-3375",
  phoneRaw: "5735913375",
  email: "southernsudsandsmiles@outlook.com",
  address: "606 Naomi St",
  addressLine2: "Charleston, MO 63834",
  city: "Charleston",
  state: "MO",
  zip: "63834",
};

/** Links to the business's social / review profiles that exist (used for schema sameAs and footer links). */
export const SOCIAL_LINKS = [
  BUSINESS_INFO.facebookUrl && { label: "Facebook", url: BUSINESS_INFO.facebookUrl },
  BUSINESS_INFO.googleBusinessUrl && { label: "Google", url: BUSINESS_INFO.googleBusinessUrl },
].filter((link): link is { label: string; url: string } => Boolean(link));

export interface Specialty {
  /** Same as the service page slug. */
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  /** Photo for the card. Leave undefined to show the branded icon panel until real photos are added. */
  image?: string;
  imageAlt?: string;
}

// The services listed on the client's application (house, apartment, commercial, carpet + laundry).
export const CORE_SPECIALTIES: Specialty[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    badge: "Most Popular",
    summary:
      "Weekly, bi-weekly, monthly or one-time house cleaning so you can come home to a fresh, tidy house.",
    description:
      "We dust, vacuum, mop, scrub and sanitize the rooms you live in every day, from the kitchen and bathrooms to bedrooms and living areas, so your evenings and weekends are yours again.",
    features: [
      "Kitchens wiped down and sanitized",
      "Bathrooms scrubbed top to bottom",
      "Dusting, vacuuming and mopping throughout",
      "Recurring or one-time cleans",
    ],
    image: "/images/house-cleaning-charleston-mo.jpg",
    imageAlt:
      "Spotless white soaking tub and fresh towels after a house cleaning in Charleston, MO",
  },
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    badge: "Renters & Landlords",
    summary:
      "Thorough cleaning for apartments, duplexes and rentals, whether you live there or you're getting it ready for the next tenant.",
    description:
      "Smaller spaces get dirty fast. We keep apartments fresh on a schedule that fits your life, and we help landlords get units clean between tenants.",
    features: [
      "Kitchen, bathroom and living areas",
      "Floors vacuumed and mopped edge to edge",
      "Move-in and move-out cleans for rentals",
      "Flexible scheduling around your lease",
    ],
    image: "/images/apartment-cleaning-charleston-mo.jpg",
    imageAlt: "Clean, tidy apartment living room in Charleston, MO",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    badge: "Businesses",
    summary:
      "Offices, shops and small businesses kept clean and welcoming for your staff and customers.",
    description:
      "First impressions matter. We clean offices, storefronts, break rooms and restrooms on a schedule that works around your business hours.",
    features: [
      "Offices, lobbies and storefronts",
      "Restrooms and break rooms sanitized",
      "Trash removal and floor care",
      "Before or after business hours",
    ],
    image: "/images/commercial-office-cleaning-charleston-mo.jpg",
    imageAlt: "Clean office meeting room and floors, commercial cleaning in Charleston, MO",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    badge: "Fresh Floors",
    summary:
      "Carpet and rug cleaning that lifts ground-in dirt, stains and odors from high-traffic rooms.",
    description:
      "Farm dirt, muddy boots, pets and kids all end up in the carpet. We deep clean carpets and rugs so they look, feel and smell fresh again.",
    features: [
      "High-traffic areas and hallways",
      "Spot and stain treatment",
      "Pet odor freshening",
      "Area rugs and stairs",
    ],
    image: "/images/carpet-cleaning-charleston-mo.jpg",
    imageAlt: "Vacuuming a carpet during carpet cleaning in Charleston, MO",
  },
  {
    id: "laundry-service",
    title: "Laundry Service",
    badge: "Time Saver",
    summary:
      "Washing, drying and folding done for you, so the laundry pile never takes over your week.",
    description:
      "Laundry is the chore that never ends. Add it to your cleaning visit and we'll wash, dry and fold clothes, towels and linens, and even change the sheets.",
    features: [
      "Wash, dry and fold",
      "Towels and bed linens",
      "Beds made with fresh sheets",
      "Add it to any cleaning visit",
    ],
    image: "/images/laundry-service-fresh-bed-linens-charleston-mo.jpg",
    imageAlt: "Bed made with fresh, crisp white linens, laundry service in Charleston, MO",
  },
];

export interface GalleryProject {
  id: string;
  /** Service page slug this photo belongs to (also picks the placeholder icon). */
  serviceSlug: string;
  title: string;
  category: string;
  location: string;
  /** Photo path, e.g. "/gallery/house-cleaning-kitchen-charleston-mo.jpg". Leave empty to show a "photo coming soon" panel. */
  imageUrl?: string;
  seoAlt: string;
  seoDescription: string;
  highlights: string[];
  description: string;
}

// Home page gallery: one slide per service for now. To add a real photo, upload it to public/gallery/
// and set imageUrl (and update the alt text). Add more entries for more photos.
export const WORK_GALLERY: GalleryProject[] = [
  {
    id: "house-cleaning",
    serviceSlug: "house-cleaning",
    title: "Whole-Home House Cleaning",
    category: "House Cleaning",
    location: "Benton, MO",
    imageUrl: "/gallery/whole-home-house-cleaning-benton-mo.jpg",
    seoAlt:
      "Clean, tidy bedroom with fresh bedding and rugs after whole-home house cleaning in Benton, MO",
    seoDescription: "Kitchens, bathrooms, bedrooms and living areas cleaned top to bottom.",
    highlights: [
      "Kitchen and bathrooms sanitized",
      "Dusting, vacuuming and mopping",
      "Beds made and rooms tidied",
    ],
    description:
      "A fresh, tidy home from top to bottom, so you can come home and relax with your family.",
  },
  {
    id: "apartment-cleaning",
    serviceSlug: "apartment-cleaning",
    title: "Apartment & Rental Cleaning",
    category: "Apartment Cleaning",
    location: "Sikeston, MO",
    imageUrl: "/gallery/apartment-cleaning-sikeston-mo.jpg",
    seoAlt: "Clean apartment kitchen with wiped counters and cabinets in Sikeston, MO",
    seoDescription: "Apartments, duplexes and rentals cleaned for renters and landlords.",
    highlights: [
      "Kitchen and bathroom deep clean",
      "Floors vacuumed and mopped",
      "Move-in and move-out cleans",
    ],
    description:
      "Clean, move-in-ready apartments for renters and landlords across Southeast Missouri.",
  },
  {
    id: "commercial-cleaning",
    serviceSlug: "commercial-cleaning",
    title: "Office & Commercial Cleaning",
    category: "Commercial Cleaning",
    location: "Sikeston, MO",
    imageUrl: "/gallery/office-commercial-cleaning-sikeston-mo.jpg",
    seoAlt: "Clean, bright office with polished floors after commercial cleaning in Sikeston, MO",
    seoDescription: "Offices, shops and restrooms kept clean and welcoming.",
    highlights: [
      "Desks and work areas wiped down",
      "Restrooms and break rooms sanitized",
      "Floors and entryways cleaned",
    ],
    description: "A clean, welcoming space for your staff and customers, on your schedule.",
  },
  {
    id: "carpet-cleaning",
    serviceSlug: "carpet-cleaning",
    title: "Carpet & Rug Cleaning",
    category: "Carpet Cleaning",
    location: "New Madrid, MO",
    imageUrl: "/gallery/carpet-rug-cleaning-new-madrid-mo.jpg",
    seoAlt: "Deep cleaning a carpet with a vacuum, carpet and rug cleaning in New Madrid, MO",
    seoDescription: "High-traffic carpet, rugs and stairs freshened up.",
    highlights: ["High-traffic areas", "Spot and stain treatment", "Pet odor freshening"],
    description: "Fresher, brighter carpets and rugs in the rooms your family uses most.",
  },
  {
    id: "laundry-service",
    serviceSlug: "laundry-service",
    title: "Laundry: Wash, Dry & Fold",
    category: "Laundry Service",
    location: "Bertrand, MO",
    imageUrl: "/gallery/laundry-wash-dry-fold-bertrand-mo.jpg",
    seoAlt: "Freshly washed and folded clothes, laundry wash, dry and fold service in Bertrand, MO",
    seoDescription: "Clothes, towels and linens washed, dried and neatly folded.",
    highlights: ["Wash, dry and fold", "Towels and bed linens", "Beds made with fresh sheets"],
    description: "The laundry pile, handled. Come home to folded clothes and fresh sheets.",
  },
];
