// Content for the individual service pages (/services/:slug) and service-area pages
// (/service-areas/:slug). Each page targets a specific search ("house cleaning charleston mo",
// "carpet cleaning sikeston mo", ...), so keep titles, descriptions and copy unique per page.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Short name used in navigation, links and schema. */
  name: string;
  /** Matching option value in the quote form's service dropdown. */
  formValue: string;
  /** id of the CORE_SPECIALTIES card that links to this page. */
  specialtyId?: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, location-neutral summary used on cards (city pages, etc.). */
  summary: string;
  h1: string;
  intro: string[];
  idealFor: string[];
  included: { area: string; tasks: string[] }[];
  whyUs: { title: string; text: string }[];
  faqs: Faq[];
  /** Gallery photo shown on the page (and used as its social sharing image). Optional until a real photo exists. */
  image?: string;
  imageAlt?: string;
}

export interface AreaPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  /** Matching option value in the quote form's city dropdown. */
  formValue: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  localNotes: { title: string; text: string }[];
  neighborhoods: string[];
  nearby: string[];
  faqs: Faq[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    formValue: "House Cleaning",
    specialtyId: "house-cleaning",
    metaTitle: "Recurring House Cleaning Service | Charleston & Sikeston, MO",
    metaDescription:
      "Friendly, thorough house cleaning in Charleston, Sikeston, New Madrid, Benton & nearby MO towns. Weekly, bi-weekly, monthly or one-time. Free quote.",
    summary:
      "Recurring or one-time house cleaning: kitchens, bathrooms, bedrooms and living areas, top to bottom.",
    h1: "House Cleaning in Charleston, MO & Southeast Missouri",
    intro: [
      "Keeping a house clean on top of work, kids, errands and everything else is exhausting. Southern Suds and Smiles is a locally owned cleaning service based in Charleston, Missouri, and we take that stress off your plate so you can come home and spend quality time with your family instead of scrubbing.",
      "We clean homes in Charleston, Sikeston, New Madrid, Benton, Bertrand, Anniston and the surrounding communities. Choose weekly, bi-weekly or monthly visits to keep things fresh, or book a one-time clean when you need to catch up, get ready for company or reset after the holidays.",
    ],
    idealFor: [
      "Busy families and working parents",
      "Seniors who'd like a helping hand",
      "Homeowners who want their weekends back",
      "Anyone getting ready for guests or the holidays",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, backsplash and sink cleaned and sanitized",
          "Stovetop, microwave and appliance fronts wiped",
          "Cabinet fronts and handles wiped down",
          "Floors swept and mopped",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilets scrubbed and sanitized",
          "Tubs, showers and sinks scrubbed",
          "Mirrors and fixtures shined",
          "Floors cleaned and trash emptied",
        ],
      },
      {
        area: "Bedrooms & living areas",
        tasks: [
          "Dusting of surfaces, shelves and decor",
          "Carpets and rugs vacuumed",
          "Hard floors mopped",
          "Beds made and rooms tidied",
        ],
      },
      {
        area: "Throughout the home",
        tasks: [
          "Light switches and door handles wiped",
          "Baseboards and window sills dusted",
          "Trash collected and liners replaced",
          "Laundry can be added to any visit",
        ],
      },
    ],
    whyUs: [
      {
        title: "Locally owned",
        text: "We're your neighbors in Charleston, not a franchise. You'll know exactly who is cleaning your home.",
      },
      {
        title: "We clean like it's our own",
        text: "We take our time on the details, so you walk in to a home that looks, feels and smells clean.",
      },
      {
        title: "Service with a smile",
        text: "Seeing you relax and enjoy your time at home is why we do this. Friendly, respectful and easy to work with.",
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Charleston, MO?",
        answer:
          "It depends on the size of your home, its condition and how often you'd like us to come. Request a free quote with a few details and we'll get back to you with a price. There's no obligation.",
      },
      {
        question: "How often should I schedule a house cleaning?",
        answer:
          "Most families choose weekly or bi-weekly cleaning to keep up with everyday mess, and monthly works well for smaller or quieter households. We also do one-time cleans.",
      },
      {
        question: "Do I need to be home while you clean?",
        answer:
          "No. Many customers let us in and head to work, or leave us a way in. We'll agree on what works best for you when we schedule.",
      },
      {
        question: "Can you do laundry while you're cleaning?",
        answer:
          "Yes. You can add laundry service to any visit: we'll wash, dry and fold, and change the bed sheets if you'd like.",
      },
    ],
  },
  {
    slug: "apartment-cleaning",
    name: "Apartment Cleaning",
    formValue: "Apartment Cleaning",
    specialtyId: "apartment-cleaning",
    metaTitle: "Apartment Cleaning in Charleston, MO | Southern Suds and Smiles",
    metaDescription:
      "Apartment and rental cleaning in Charleston, Sikeston & Southeast Missouri. Recurring cleans for renters and move-in/move-out cleaning for landlords.",
    summary:
      "Apartment and rental cleaning for renters, plus move-in and move-out cleans for landlords.",
    h1: "Apartment & Rental Cleaning in Charleston and Sikeston, MO",
    intro: [
      "Apartments may be smaller, but kitchens and bathrooms still get grimy and the floors still need love. Southern Suds and Smiles keeps apartments, duplexes and rental homes fresh for renters in Charleston, Sikeston and nearby towns.",
      "Moving in or out? We clean empty units so renters can get their deposit back and landlords can get the place ready for the next tenant faster.",
    ],
    idealFor: [
      "Renters who want a clean place without the chore",
      "Tenants moving out and hoping for their deposit back",
      "Landlords turning over units between tenants",
      "Duplex and small rental owners",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, sink and backsplash sanitized",
          "Stovetop and appliance fronts cleaned",
          "Inside the microwave",
          "Floors swept and mopped",
        ],
      },
      {
        area: "Bathroom",
        tasks: [
          "Toilet, tub and shower scrubbed",
          "Sink, mirror and fixtures shined",
          "Floors cleaned",
          "Trash emptied",
        ],
      },
      {
        area: "Living & bedrooms",
        tasks: [
          "Dusting of surfaces and window sills",
          "Carpets vacuumed and hard floors mopped",
          "Light switches and door handles wiped",
          "Beds made and rooms tidied",
        ],
      },
      {
        area: "Move-in / move-out",
        tasks: [
          "Inside cabinets and drawers",
          "Inside the fridge and oven (on request)",
          "Baseboards and doors wiped",
          "Empty-unit clean ready for the walkthrough",
        ],
      },
    ],
    whyUs: [
      {
        title: "Flexible scheduling",
        text: "We work around your lease dates, your work schedule and your landlord's walkthrough.",
      },
      {
        title: "Right-sized pricing",
        text: "You pay for the space you have. Tell us about your apartment and we'll quote it fairly.",
      },
      {
        title: "Local and reliable",
        text: "We're based in Charleston, so we're close by and easy to reach by phone or text.",
      },
    ],
    faqs: [
      {
        question: "Do you do move-out cleaning for apartments?",
        answer:
          "Yes. We clean empty apartments and rentals for tenants moving out and for landlords getting a unit ready for the next renter.",
      },
      {
        question: "Can landlords schedule cleaning between tenants?",
        answer:
          "Absolutely. Let us know the unit size and your turnover dates and we'll schedule the clean so the unit is ready to show or rent.",
      },
      {
        question: "How much does apartment cleaning cost?",
        answer:
          "Pricing depends on the number of bedrooms and bathrooms and the type of clean. Request a free quote and we'll get back to you with a price.",
      },
    ],
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    formValue: "Commercial Cleaning",
    specialtyId: "commercial-cleaning",
    metaTitle: "Commercial & Office Cleaning in Charleston & Sikeston, MO",
    metaDescription:
      "Office and commercial cleaning for small businesses in Charleston, Sikeston, New Madrid & Benton MO. Restrooms, break rooms, floors. Free quote.",
    summary:
      "Office, storefront and small business cleaning on a schedule that works around your hours.",
    h1: "Commercial & Office Cleaning in Southeast Missouri",
    intro: [
      "A clean business tells customers you care. Southern Suds and Smiles provides commercial cleaning for offices, shops, churches and small businesses in Charleston, Sikeston, New Madrid, Benton and the surrounding area.",
      "We can clean before you open, after you close or on weekends, so your staff and customers always walk into a fresh, welcoming space.",
    ],
    idealFor: [
      "Offices and professional practices",
      "Retail shops and storefronts",
      "Churches and community buildings",
      "Small businesses that need a reliable cleaner",
    ],
    included: [
      {
        area: "Work areas",
        tasks: [
          "Desks and surfaces dusted and wiped",
          "Trash and recycling emptied",
          "Door handles and light switches sanitized",
          "Glass doors and entry areas cleaned",
        ],
      },
      {
        area: "Restrooms",
        tasks: [
          "Toilets and sinks cleaned and sanitized",
          "Mirrors and fixtures shined",
          "Supplies checked and refilled (your stock)",
          "Floors cleaned",
        ],
      },
      {
        area: "Break rooms",
        tasks: [
          "Counters, tables and sink wiped down",
          "Microwave and appliance fronts cleaned",
          "Trash removed",
          "Floors swept and mopped",
        ],
      },
      {
        area: "Floors",
        tasks: [
          "Carpets vacuumed",
          "Hard floors swept and mopped",
          "Entry mats cleaned",
          "Carpet cleaning available on request",
        ],
      },
    ],
    whyUs: [
      {
        title: "On your schedule",
        text: "Before hours, after hours or weekends, so cleaning never gets in the way of your business.",
      },
      {
        title: "Consistent results",
        text: "The same checklist every visit, so your space looks the same great way every time.",
      },
      {
        title: "Local and responsive",
        text: "Need an extra clean before an event or inspection? Call or text and we'll do our best to fit you in.",
      },
    ],
    faqs: [
      {
        question: "What kinds of businesses do you clean?",
        answer:
          "Offices, retail shops, churches and other small commercial spaces in Charleston, Sikeston, New Madrid, Benton and nearby towns. If you're not sure, just ask.",
      },
      {
        question: "Can you clean after business hours?",
        answer: "Yes. We can schedule cleaning before you open, after you close or on weekends.",
      },
      {
        question: "How is commercial cleaning priced?",
        answer:
          "It depends on the size of the space, what needs cleaning and how often. Request a free quote and we'll put together a price for your business.",
      },
    ],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    formValue: "Carpet Cleaning",
    specialtyId: "carpet-cleaning",
    metaTitle: "Carpet Cleaning in Charleston, MO | Southern Suds and Smiles",
    metaDescription:
      "Carpet and rug cleaning in Charleston, Sikeston, New Madrid & nearby Missouri towns. Lift dirt, stains and pet odors from high-traffic rooms. Free quote.",
    summary: "Carpet and rug cleaning that lifts ground-in dirt, stains and odors.",
    h1: "Carpet Cleaning in Charleston, Sikeston & Southeast Missouri",
    intro: [
      "Between muddy boots, farm dirt, pets and kids, carpets in Southeast Missouri work hard. Southern Suds and Smiles cleans carpets and rugs in homes and businesses in Charleston, Sikeston, New Madrid, Benton and surrounding towns.",
      "We focus on the high-traffic paths, spots and smells that vacuuming alone can't fix, so your floors look brighter and your home smells fresher.",
    ],
    idealFor: [
      "Homes with pets or little ones",
      "High-traffic hallways and living rooms",
      "Move-in and move-out cleans",
      "Offices and commercial carpet",
    ],
    included: [
      {
        area: "Preparation",
        tasks: [
          "Thorough vacuuming first",
          "Light furniture moved where possible",
          "Problem spots pointed out and pre-treated",
          "Walkthrough of the rooms with you",
        ],
      },
      {
        area: "Deep cleaning",
        tasks: [
          "Carpet deep cleaned room by room",
          "High-traffic paths given extra attention",
          "Spot and stain treatment",
          "Pet odor freshening",
        ],
      },
      {
        area: "Rugs & stairs",
        tasks: ["Area rugs", "Carpeted stairs", "Hallways and closets", "Entry mats"],
      },
      {
        area: "Finishing up",
        tasks: [
          "Carpet fibers groomed",
          "Tips for faster drying",
          "Furniture returned",
          "Pair it with a house cleaning visit",
        ],
      },
    ],
    whyUs: [
      {
        title: "One call for everything",
        text: "Book carpet cleaning together with your house cleaning and get the whole home fresh at once.",
      },
      {
        title: "Careful in your home",
        text: "We treat your home and furniture with respect and leave it the way we found it, only cleaner.",
      },
      {
        title: "Honest expectations",
        text: "We'll tell you up front which stains should come out and which ones might not.",
      },
    ],
    faqs: [
      {
        question: "How much does carpet cleaning cost?",
        answer:
          "It depends on the number of rooms, the size of each area and the condition of the carpet. Request a free quote and tell us how many rooms you have.",
      },
      {
        question: "Can you get pet stains and odors out?",
        answer:
          "We treat pet stains and freshen odors. Most everyday stains come out; some older or set-in stains may lighten rather than disappear, and we'll be honest with you about that up front.",
      },
      {
        question: "Do you clean area rugs and stairs?",
        answer: "Yes. Area rugs, carpeted stairs, hallways and closets can all be included.",
      },
    ],
  },
  {
    slug: "laundry-service",
    name: "Laundry Service",
    formValue: "Laundry Service",
    specialtyId: "laundry-service",
    metaTitle: "Laundry Service in Charleston, MO | Southern Suds and Smiles",
    metaDescription:
      "Wash, dry & fold laundry service in Charleston, Sikeston & nearby MO towns. Clothes, towels and linens, plus fresh sheets. Add it to any cleaning.",
    summary: "Wash, dry and fold for clothes, towels and linens, plus fresh sheets on the beds.",
    h1: "Laundry Service in Charleston, MO: Wash, Dry & Fold",
    intro: [
      "The laundry pile is the one chore that never seems to end. Southern Suds and Smiles takes it off your hands: we wash, dry and fold your clothes, towels and bed linens so you get your evenings back.",
      "Laundry service is available to families in Charleston, Sikeston, New Madrid, Benton, Bertrand, Anniston and surrounding towns, and you can add it to any house or apartment cleaning visit.",
    ],
    idealFor: [
      "Busy families with never-ending laundry",
      "Seniors and anyone who'd like a helping hand",
      "New parents",
      "Customers who want it done during their cleaning visit",
    ],
    included: [
      {
        area: "Washing",
        tasks: [
          "Sorted by color and fabric",
          "Your detergent or ours (just let us know)",
          "Care labels followed",
          "Delicates handled with care",
        ],
      },
      {
        area: "Drying",
        tasks: [
          "Tumble or hang-dry as needed",
          "Checked before folding",
          "Wrinkle-prone items hung",
          "Towels fluffed",
        ],
      },
      {
        area: "Folding",
        tasks: [
          "Clothes neatly folded",
          "Towels folded and stacked",
          "Items put away on request",
          "Matched socks (we promise to try!)",
        ],
      },
      {
        area: "Bedding",
        tasks: [
          "Sheets stripped and washed",
          "Beds made with fresh linens",
          "Blankets and throws washed",
          "Pillowcases changed",
        ],
      },
    ],
    whyUs: [
      {
        title: "Done while we clean",
        text: "Add laundry to your cleaning visit and come home to a clean house and folded clothes.",
      },
      {
        title: "Care you can trust",
        text: "We follow care labels and handle your family's things the way you would.",
      },
      {
        title: "Your preferences",
        text: "Favorite detergent, how you fold towels, where things go: tell us once and we'll remember.",
      },
    ],
    image: "/images/laundry-service-fresh-bed-linens-charleston-mo.jpg",
    imageAlt: "Bed made with fresh, crisp white linens, laundry service in Charleston, MO",
    faqs: [
      {
        question: "Can I add laundry to my house cleaning?",
        answer:
          "Yes. Laundry service can be added to any house or apartment cleaning visit. Just mention it when you request your quote.",
      },
      {
        question: "Do you change the bed sheets?",
        answer: "Yes. We can strip the beds, wash the sheets and make the beds with fresh linens.",
      },
      {
        question: "How is laundry service priced?",
        answer:
          "It depends on how many loads you have and how often. Request a free quote and tell us roughly how much laundry your household has.",
      },
    ],
  },
];

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "charleston-mo",
    city: "Charleston",
    state: "MO",
    stateName: "Missouri",
    formValue: "Charleston",
    metaTitle: "House Cleaning in Charleston, MO | Southern Suds and Smiles",
    metaDescription:
      "Locally owned house cleaning in Charleston, MO: homes, apartments, offices, carpet cleaning and laundry. Call or text (573) 591-3375 for a free quote.",
    h1: "House Cleaning Services in Charleston, MO",
    intro: [
      "Southern Suds and Smiles is a locally owned cleaning service right here in Charleston, Missouri. We help families, renters, landlords and local businesses keep their spaces clean, from regular house cleaning to carpet cleaning and laundry.",
      "Charleston is home, so we're close by, easy to reach and proud to help our neighbors spend less time cleaning and more time with the people they love.",
    ],
    localNotes: [
      {
        title: "Your hometown cleaners",
        text: "We're based in Charleston, so scheduling is easy and we're never far away when you need an extra clean.",
      },
      {
        title: "Ready for company",
        text: "Hosting family for the holidays or guests in town for the Dogwood-Azalea Festival? We'll get your home guest-ready.",
      },
      {
        title: "Homes, rentals and businesses",
        text: "From family homes to apartments and Main Street businesses, we clean the spaces Charleston lives and works in.",
      },
    ],
    neighborhoods: ["Charleston", "Bertrand", "Anniston", "Wyatt", "East Prairie"],
    nearby: ["bertrand-mo", "anniston-mo", "sikeston-mo", "new-madrid-mo", "benton-mo"],
    faqs: [
      {
        question: "Are you a local Charleston, MO cleaning company?",
        answer:
          "Yes. Southern Suds and Smiles is locally owned and based in Charleston, Missouri, and we serve Charleston along with Sikeston, New Madrid, Benton, Bertrand, Anniston and nearby communities.",
      },
      {
        question: "What cleaning services do you offer in Charleston?",
        answer:
          "House cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service.",
      },
      {
        question: "How do I get a cleaning quote in Charleston?",
        answer:
          "Fill out the quote form on this page or call or text (573) 591-3375. Quotes are free with no obligation.",
      },
    ],
  },
  {
    slug: "sikeston-mo",
    city: "Sikeston",
    state: "MO",
    stateName: "Missouri",
    formValue: "Sikeston",
    metaTitle: "House Cleaning in Sikeston, MO | Southern Suds and Smiles",
    metaDescription:
      "House, apartment and office cleaning in Sikeston, MO, plus carpet cleaning and laundry service. Locally owned. Call or text (573) 591-3375.",
    h1: "House Cleaning Services in Sikeston, MO",
    intro: [
      "Southern Suds and Smiles brings friendly, thorough cleaning to Sikeston, Missouri. We clean houses, apartments, rentals and small businesses, and we also offer carpet cleaning and laundry service.",
      "We're a short drive from our home base in Charleston, so Sikeston families and business owners get a local cleaner who actually picks up the phone.",
    ],
    localNotes: [
      {
        title: "Busy families",
        text: "Between work, school and ball games, weekends go fast. Recurring cleaning keeps your home under control without giving up your Saturdays.",
      },
      {
        title: "Rentals and apartments",
        text: "Sikeston has plenty of apartments and rental homes. We help renters stay on top of things and landlords get units ready between tenants.",
      },
      {
        title: "Local businesses",
        text: "Offices, shops and churches across Sikeston can count on us for clean restrooms, floors and work areas.",
      },
    ],
    neighborhoods: ["Sikeston", "Miner", "Morehouse", "Matthews", "Bertrand"],
    nearby: ["bertrand-mo", "charleston-mo", "benton-mo", "new-madrid-mo"],
    faqs: [
      {
        question: "Do you clean homes in Sikeston, MO?",
        answer:
          "Yes. We offer house cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service in Sikeston and nearby towns.",
      },
      {
        question: "Do you clean offices and businesses in Sikeston?",
        answer:
          "Yes. We clean offices, shops and other small commercial spaces, and we can work before or after business hours.",
      },
      {
        question: "How do I book a cleaning in Sikeston?",
        answer:
          "Request a free quote on this page or call or text (573) 591-3375 and we'll get you on the schedule.",
      },
    ],
  },
  {
    slug: "new-madrid-mo",
    city: "New Madrid",
    state: "MO",
    stateName: "Missouri",
    formValue: "New Madrid",
    metaTitle: "House Cleaning in New Madrid, MO | Southern Suds and Smiles",
    metaDescription:
      "House cleaning, carpet cleaning, laundry and office cleaning in New Madrid, MO from a locally owned Southeast Missouri team. Free quote.",
    h1: "House Cleaning Services in New Madrid, MO",
    intro: [
      "Southern Suds and Smiles provides house cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service in New Madrid, Missouri.",
      "Whether you need a regular cleaner for your home, a deep carpet cleaning or help keeping a small business tidy, we bring the suds and the smiles to New Madrid and nearby communities.",
    ],
    localNotes: [
      {
        title: "Humid river-town summers",
        text: "Warm, humid weather along the Mississippi means bathrooms need extra attention. We scrub showers, tubs and grout so they stay fresh.",
      },
      {
        title: "Carpet that works hard",
        text: "Mud season, pets and farm work all end up in the carpet. Our carpet cleaning lifts dirt from high-traffic rooms.",
      },
      {
        title: "Helping hands for seniors",
        text: "We help older residents keep up with cleaning and laundry so they can keep enjoying their homes.",
      },
    ],
    neighborhoods: ["New Madrid", "Lilbourn", "Marston", "Matthews"],
    nearby: ["sikeston-mo", "charleston-mo", "anniston-mo"],
    faqs: [
      {
        question: "Do you provide cleaning services in New Madrid, MO?",
        answer:
          "Yes. We offer house, apartment and commercial cleaning, carpet cleaning and laundry service in New Madrid and nearby towns.",
      },
      {
        question: "Can you clean carpets in New Madrid?",
        answer:
          "Yes. We clean carpets and area rugs, including spot treatment and pet odor freshening. Request a free quote with the number of rooms.",
      },
      {
        question: "How do I get a quote in New Madrid?",
        answer: "Use the form on this page or call or text (573) 591-3375.",
      },
    ],
  },
  {
    slug: "benton-mo",
    city: "Benton",
    state: "MO",
    stateName: "Missouri",
    formValue: "Benton",
    metaTitle: "House Cleaning in Benton, MO | Southern Suds and Smiles",
    metaDescription:
      "House, apartment and office cleaning in Benton, MO, plus carpet cleaning and laundry service. Locally owned in Southeast Missouri. Free quote.",
    h1: "House Cleaning Services in Benton, MO",
    intro: [
      "Southern Suds and Smiles serves Benton, Missouri with house cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service.",
      "We're a locally owned Southeast Missouri team, so Benton homeowners and businesses get the personal, friendly service you'd expect from a neighbor.",
    ],
    localNotes: [
      {
        title: "Small-town homes",
        text: "Weekly, bi-weekly or monthly cleaning keeps Benton homes fresh so you can spend your free time on what you enjoy.",
      },
      {
        title: "Offices near the courthouse",
        text: "Benton is the Scott County seat, and we help local offices and businesses stay clean and welcoming.",
      },
      {
        title: "One team for everything",
        text: "House cleaning, carpets and laundry from one trusted team, so you only have one call to make.",
      },
    ],
    neighborhoods: ["Benton", "Kelso", "Oran", "Scott City"],
    nearby: ["sikeston-mo", "bertrand-mo", "charleston-mo"],
    faqs: [
      {
        question: "Do you clean houses in Benton, MO?",
        answer:
          "Yes. We offer house cleaning and apartment cleaning in Benton, plus commercial cleaning, carpet cleaning and laundry service.",
      },
      {
        question: "Do you clean offices in Benton?",
        answer:
          "Yes. We clean offices and small businesses and can schedule around your business hours.",
      },
      {
        question: "How do I book a cleaning in Benton?",
        answer: "Request a free quote on this page or call or text (573) 591-3375.",
      },
    ],
  },
  {
    slug: "bertrand-mo",
    city: "Bertrand",
    state: "MO",
    stateName: "Missouri",
    formValue: "Bertrand",
    metaTitle: "House Cleaning in Bertrand, MO | Southern Suds and Smiles",
    metaDescription:
      "Friendly house cleaning, carpet cleaning and laundry service in Bertrand, MO, from a locally owned team based in nearby Charleston. Free quote.",
    h1: "House Cleaning Services in Bertrand, MO",
    intro: [
      "Southern Suds and Smiles is based just down the road in Charleston and proudly serves Bertrand, Missouri with house cleaning, apartment cleaning, carpet cleaning, laundry service and commercial cleaning.",
      "Small-town service is what we're all about: we show up when we say we will, clean like it's our own home and leave you smiling.",
    ],
    localNotes: [
      {
        title: "Right next door",
        text: "Bertrand is minutes from our home base, so scheduling regular cleaning is easy.",
      },
      {
        title: "Farm and family life",
        text: "Dirt, dust and muddy boots come with country living. We keep floors and carpets clean so your home stays comfortable.",
      },
      {
        title: "Laundry help",
        text: "Add laundry to your cleaning and we'll wash, dry and fold while we clean.",
      },
    ],
    neighborhoods: ["Bertrand", "Charleston", "Sikeston"],
    nearby: ["charleston-mo", "sikeston-mo", "anniston-mo"],
    faqs: [
      {
        question: "Do you offer cleaning in Bertrand, MO?",
        answer:
          "Yes. Bertrand is right next to our home base in Charleston, and we offer all of our services there.",
      },
      {
        question: "What services do you offer in Bertrand?",
        answer:
          "House cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service.",
      },
      {
        question: "How do I get a quote?",
        answer: "Fill out the form on this page or call or text (573) 591-3375.",
      },
    ],
  },
  {
    slug: "anniston-mo",
    city: "Anniston",
    state: "MO",
    stateName: "Missouri",
    formValue: "Anniston",
    metaTitle: "House Cleaning in Anniston, MO | Southern Suds and Smiles",
    metaDescription:
      "House cleaning, carpet cleaning and laundry service in Anniston, MO from a locally owned team based in Charleston. Call or text for a free quote.",
    h1: "House Cleaning Services in Anniston, MO",
    intro: [
      "Southern Suds and Smiles serves Anniston, Missouri with friendly, thorough house cleaning, carpet cleaning and laundry service, along with apartment and commercial cleaning.",
      "We're based nearby in Charleston and love helping Mississippi County families take a load off.",
    ],
    localNotes: [
      {
        title: "Close to home",
        text: "Anniston is a quick drive from Charleston, so we can fit you into our regular schedule.",
      },
      {
        title: "Country living, clean home",
        text: "Field dust and muddy boots are part of life here. Regular cleaning and carpet care keep it from taking over.",
      },
      {
        title: "Extra help when you need it",
        text: "Before the holidays, after a busy season or when life gets hectic, a one-time clean gets you caught up.",
      },
    ],
    neighborhoods: ["Anniston", "Charleston", "Wyatt", "East Prairie"],
    nearby: ["charleston-mo", "bertrand-mo", "new-madrid-mo"],
    faqs: [
      {
        question: "Do you clean homes in Anniston, MO?",
        answer:
          "Yes. We offer house cleaning, carpet cleaning, laundry service and more in Anniston and nearby communities.",
      },
      {
        question: "Can I book a one-time cleaning?",
        answer: "Yes. We offer one-time cleans as well as weekly, bi-weekly and monthly service.",
      },
      {
        question: "How do I get a quote in Anniston?",
        answer: "Use the form on this page or call or text (573) 591-3375.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((page) => page.slug === slug);
}

export function servicePathForSpecialty(specialtyId: string) {
  const page = SERVICE_PAGES.find((p) => p.specialtyId === specialtyId);
  return page ? `/services/${page.slug}` : "/services";
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas does Southern Suds and Smiles serve?",
    answer:
      "We're based in Charleston, MO and serve Charleston, Sikeston, New Madrid, Benton, Bertrand, Anniston and nearby communities in Southeast Missouri.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "House cleaning, apartment cleaning, commercial cleaning, carpet cleaning and laundry service.",
  },
  {
    question: "How much does house cleaning cost?",
    answer:
      "Pricing depends on the size and condition of your home, the type of cleaning and how often you'd like us to come. Request a free quote and we'll get back to you with a price.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. You can book weekly, bi-weekly or monthly cleaning, or a one-time clean whenever you need it.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "Fill out the free quote form or call or text (573) 591-3375. We'll get back to you as soon as possible to confirm the details and schedule your clean.",
  },
];
