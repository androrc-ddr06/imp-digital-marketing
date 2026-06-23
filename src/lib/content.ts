// ---------------------------------------------------------------------------
//  Single source of truth for I&P Digital Marketing site content.
//  Edit copy, stats, clients, and services here — the pages read from this.
// ---------------------------------------------------------------------------

export const site = {
  person: "Alejandro Rodriguez",
  company: "I&P Digital Marketing",
  role: "Founder & Lead Strategist",
  email: "andro.rc06@gmail.com",
  tagline: "Brands that grow on purpose.",
  description:
    "I&P Digital Marketing is a boutique studio led by Alejandro Rodriguez — building brands, content, and funnels that turn attention into revenue.",
  location: "California, USA",
  url: "https://impdigitalmarketing.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Email", href: "mailto:andro.rc06@gmail.com" },
  ],
  // Create a form at https://formspree.io and put its id in .env.local
  // as NEXT_PUBLIC_FORMSPREE_ID. Falls back to a placeholder until then.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "your-form-id",
};

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export const stats: Stat[] = [
  { value: "700 → 2K+", label: "Followers grown", detail: "Roosters Rolling BBQ on Instagram" },
  { value: "3M+", label: "Video views", detail: "Across short-form campaigns" },
  { value: "4", label: "Websites launched", detail: "Live, client-ready builds" },
  { value: "100%", label: "Hands-on", detail: "Accounts handled personally" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    short: "Content, posting, and growth handled end-to-end.",
    tagline: "Show up daily — without doing it yourself.",
    problem:
      "Most local businesses know they should post, but the day-to-day eats every spare minute. Inconsistent feeds, no strategy, and content that never converts.",
    approach: [
      "Monthly content calendars built around your offers and seasonality",
      "Short-form video shooting, editing, and captions designed to travel",
      "Community management — replies, DMs, and engagement that builds loyalty",
      "Profile optimization so new visitors instantly understand and trust you",
    ],
    deliverables: [
      "Done-for-you posting schedule",
      "Reels & short-form edits",
      "Monthly performance report",
    ],
    outcome:
      "Roosters Rolling BBQ went from 700 to over 2,000 followers and racked up 3M+ video views with this exact system.",
  },
  {
    slug: "rebranding",
    name: "Rebranding",
    short: "A complete visual identity that finally looks the part.",
    tagline: "Look like the business you're becoming.",
    problem:
      "A dated logo and inconsistent look quietly cost you trust — and premium pricing. If your brand looks small, people treat you like you're small.",
    approach: [
      "Brand discovery to define voice, audience, and positioning",
      "Logo system, color palette, and typography built for real-world use",
      "Full asset kit: social templates, business cards, signage, menus",
      "Brand guidelines so everything stays consistent everywhere",
    ],
    deliverables: ["Logo suite & brand kit", "Color + type system", "Templates & guidelines"],
    outcome:
      "We've rebranded Roosters Rolling BBQ, MJL Plumbing, and Lillard Restoration Services — giving each a look that matches the quality of their work.",
  },
  {
    slug: "website-influence",
    name: "Website Influence",
    short: "Authority, presence, and reputation that compound.",
    tagline: "Become the obvious choice in your market.",
    problem:
      "Being good isn't enough if no one can find you — or trust you at a glance. Scattered reviews, thin search presence, and zero social proof lose deals before the first call.",
    approach: [
      "Google Business Profile and local search optimization",
      "Review generation systems that build a wall of social proof",
      "Content positioning that frames you as the authority in your niche",
      "Consistent presence across the platforms your customers actually use",
    ],
    deliverables: ["Local SEO setup", "Reputation & reviews engine", "Authority content plan"],
    outcome:
      "A presence that makes prospects feel like they already know — and trust — you before they ever reach out.",
  },
  {
    slug: "funnel-creation",
    name: "Website & Funnel Creation",
    short: "Fast, beautiful sites engineered to convert.",
    tagline: "A website that actually books the job.",
    problem:
      "A pretty website that doesn't generate leads is a brochure. Slow load times, no clear next step, and no path from click to customer.",
    approach: [
      "Conversion-first design mapped to how your customers really buy",
      "Lightning-fast, mobile-first builds that rank and load instantly",
      "Lead funnels with forms, offers, and follow-up baked in",
      "Analytics and tracking so we know exactly what's working",
    ],
    deliverables: ["Custom website", "Lead-gen funnel", "Tracking & analytics"],
    outcome:
      "We've shipped sites for Roosters Rolling BBQ, The 10 Futbol, CCCA, and El Camarón Crudo — each built to turn visitors into customers.",
  },
  {
    slug: "ai-implementation",
    name: "AI Implementation",
    short: "Automate the busywork. Respond in seconds.",
    tagline: "Put AI to work in your business — today.",
    problem:
      "Leads go cold while you're busy. Repetitive questions and manual follow-up steal hours you don't have. Most businesses are leaving AI's leverage on the table.",
    approach: [
      "AI chat + auto-responders that answer and qualify leads 24/7",
      "Automated follow-up sequences so no lead slips through the cracks",
      "Content and creative workflows accelerated with AI tooling",
      "Custom automations that connect the tools you already use",
    ],
    deliverables: ["AI assistant setup", "Automated follow-ups", "Workflow automations"],
    outcome:
      "The modern edge we're adding to every engagement — so your business responds faster and runs leaner.",
  },
  {
    slug: "paid-advertising",
    name: "Paid Advertising",
    short: "Targeted ad campaigns that bring real customers.",
    tagline: "Put your offer in front of the right people.",
    problem:
      "Boosting posts and guessing at targeting burns budget fast. Without strategy, creative, and tracking, ad spend is just hope with a credit card attached.",
    approach: [
      "Meta, Google, and TikTok campaigns matched to your goals",
      "Scroll-stopping ad creative that's built to convert, not just impress",
      "Precise audience targeting and ongoing A/B testing",
      "Transparent reporting tied to leads and revenue — not vanity metrics",
    ],
    deliverables: ["Campaign strategy & setup", "Ad creative", "Optimization & reporting"],
    outcome:
      "Ad dollars that work as hard as you do — measured against booked jobs and sales.",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  location?: string;
  category: string;
  summary: string;
  services: string[];
  metrics?: { value: string; label: string }[];
  url?: string;
  image: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "roosters-rolling-bbq",
    name: "Roosters Rolling BBQ",
    location: "Vacaville, California",
    category: "Flagship Client",
    summary:
      "Our biggest and best client. We rebranded the business, took over social media, and built their website — turning a local BBQ spot into a content machine with serious reach.",
    services: ["Social Media Management", "Rebranding", "Website & Funnel Creation"],
    metrics: [
      { value: "700 → 2K+", label: "Instagram followers" },
      { value: "3M+", label: "Total video views" },
      { value: "Full", label: "Brand + website rebuild" },
    ],
    url: "https://www.roostersrollingbbq.com/",
    image: "/work/rebrand-roosters-mockup-1.jpg",
    featured: true,
  },
  {
    slug: "mjl-plumbing",
    name: "MJL Plumbing",
    category: "Rebranding",
    summary:
      "A complete brand refresh that gives a hard-working plumbing company a sharp, trustworthy identity to match the quality of their service.",
    services: ["Rebranding"],
    image: "/work/mjl.svg",
  },
  {
    slug: "lillard-restoration-services",
    name: "Lillard Restoration Services",
    category: "Rebranding",
    summary:
      "Rebranding for a specialist floor restoration company — a clean, premium identity that reflects craftsmanship and reliability.",
    services: ["Rebranding"],
    image: "/work/rebrand-lillard-mockup-1.jpg",
  },
];

// Before / after rebrand showcases — paired with the case studies above.
export type RebrandImage = {
  src: string;
  /** Background tint behind the (contained) logo, to match the source art. */
  bg: string;
};

export type Rebrand = {
  slug: string;
  name: string;
  blurb: string;
  before: RebrandImage;
  after: RebrandImage;
  mockups: { src: string; alt: string }[];
};

export const rebrands: Rebrand[] = [
  {
    slug: "roosters-rolling-bbq",
    name: "Roosters Rolling BBQ",
    blurb:
      "We retired the busy, hard-to-read mark and built a bold, modern identity — a clean rooster icon and confident wordmark that looks just as sharp on a cap as it does on a billboard.",
    before: { src: "/work/rebrand-roosters-before.png", bg: "#e9eae9" },
    after: { src: "/work/rebrand-roosters-after.png", bg: "#ede9e6" },
    mockups: [
      {
        src: "/work/rebrand-roosters-mockup-1.jpg",
        alt: "Roosters Rolling BBQ branded apron, taco packaging, and cap",
      },
      {
        src: "/work/rebrand-roosters-mockup-2.jpg",
        alt: "Roosters Rolling BBQ A-frame sign and branded apron",
      },
    ],
  },
  {
    slug: "lillard-restoration-services",
    name: "Lillard Restoration Services",
    blurb:
      "We replaced the generic clip-art logo and cramped type with a sharp, premium identity — a custom mark and clean system that signals craftsmanship across uniforms, badges, and the web.",
    before: { src: "/work/rebrand-lillard-before.png", bg: "#20252b" },
    after: { src: "/work/rebrand-lillard-after.jpg", bg: "#ececec" },
    mockups: [
      {
        src: "/work/rebrand-lillard-mockup-1.jpg",
        alt: "Lillard Restoration branded polos and employee ID badge",
      },
      {
        src: "/work/rebrand-lillard-mockup-2.jpg",
        alt: "Lillard Restoration website and brand presentation",
      },
    ],
  },
];

export type SiteBuild = {
  name: string;
  domain: string;
  url: string;
  blurb: string;
  image: string;
};

export const siteBuilds: SiteBuild[] = [
  {
    name: "Roosters Rolling BBQ",
    domain: "roostersrollingbbq.com",
    url: "https://www.roostersrollingbbq.com/",
    blurb: "Brand-forward site for our flagship BBQ client.",
    image: "/work/site-roosters.svg",
  },
  {
    name: "The 10 Futbol",
    domain: "the10futbol.com",
    url: "https://www.the10futbol.com/",
    blurb: "A bold, energetic site for a futbol brand.",
    image: "/work/site-the10.svg",
  },
  {
    name: "CCCA",
    domain: "cccaworks.org",
    url: "https://www.cccaworks.org/",
    blurb: "A clean, credible presence for an organization.",
    image: "/work/site-ccca.svg",
  },
  {
    name: "El Camarón Crudo",
    domain: "elcamaroncrudo.com",
    url: "https://elcamaroncrudo.com/",
    blurb: "An appetizing site built to drive orders.",
    image: "/work/site-camaron.svg",
  },
];

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
