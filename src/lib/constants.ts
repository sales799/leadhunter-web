export const SITE = {
  name: "LeadHunterIQ",
  tagline: "AI Signal Intelligence for Indian IT Staffing",
  url: "https://leadhunteriq.in",
  company: "Talpro India Pvt Ltd",
  email: "hello@talpro.in",
  phone: "+91 98450 00000",
  whatsapp: "https://wa.me/919845000000",
  address: "Bengaluru, Karnataka, India",
  gstin: "29AAHCT9485A1ZX",
  linkedin: "https://linkedin.com/company/leadhunteriq",
  twitter: "https://x.com/LeadHunterIQ",
  youtube: "https://youtube.com/@LeadHunterIQ",
};

export const STATS = [
  { value: "50+", label: "Intelligence Sources", numericValue: 50 },
  { value: "100", label: "Point AI Score", numericValue: 100 },
  { value: "90", label: "Days Early", numericValue: 90 },
  { value: "24/7", label: "Signal Monitoring", numericValue: 24 },
];

export const PROBLEMS = [
  {
    title: "4+ hours wasted daily",
    description:
      "Your BD team manually scans LinkedIn, job boards, and news. By the time you spot a GCC expansion, your competitor's already pitched.",
  },
  {
    title: "Global tools don't work here",
    description:
      "International databases miss the data that matters in India. Your market needs intelligence built for Indian business signals.",
  },
  {
    title: "₹0 spent on timing",
    description:
      "You're spending lakhs on contact databases but ₹0 on TIMING intelligence — knowing WHO will need staffing BEFORE they start looking.",
  },
];

export const FEATURES = [
  {
    title: "Signal Discovery Engine",
    description:
      "Proprietary AI scans dozens of intelligence sources across every major Indian industry and city — 24/7.",
    tag: null,
    tagColor: null,
    icon: "gcc" as const,
  },
  {
    title: "TALPRO-IQ Scoring",
    description:
      "Our proprietary AI scores every signal on a 100-point scale. Zero guesswork.",
    tag: null,
    tagColor: null,
    icon: "brain" as const,
  },
  {
    title: "SAV Verification",
    description:
      "Multi-layer verification framework. Zero junk leads. Guaranteed.",
    tag: "Verified",
    tagColor: "emerald" as const,
    icon: "shield" as const,
  },
  {
    title: "Contact Enrichment",
    description:
      "Proprietary enrichment pipeline. Verified emails and Indian mobile numbers. Decision-makers only.",
    tag: null,
    tagColor: null,
    icon: "india" as const,
  },
  {
    title: "AI Outreach Engine",
    description:
      "Multi-stage personalized sequences. Multiple persona variants. Ready to send.",
    tag: null,
    tagColor: null,
    icon: "whatsapp" as const,
  },
  {
    title: "Intelligence Dossier",
    description:
      "Complete intelligence packages. Dossier-grade. Client-ready.",
    tag: "Premium",
    tagColor: "gold" as const,
    icon: "crm" as const,
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Detect",
    description:
      "Our proprietary intelligence engine scans dozens of sources 24/7 — government filings, funding databases, hiring signals, and real estate moves across India.",
    color: "blue" as const,
  },
  {
    number: "02",
    title: "Score & Verify",
    description:
      "Our TALPRO-IQ AI engine scores each signal on a 100-point scale and runs it through multi-layer verification. Only confirmed leads reach you.",
    color: "emerald" as const,
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "WhatsApp. Email. Dashboard. Your inbox. Hot signals land in real-time so your BD team calls first.",
    color: "gold" as const,
  },
];

export const DASHBOARD_SIGNALS = [
  {
    company: "Costco India",
    signal: "GCC Setup — Bengaluru",
    type: "GCC" as const,
    score: 94,
    tier: "ULTRA-HOT" as const,
    time: "2h ago",
    detail: "Major tech center expansion detected",
  },
  {
    company: "Stryker",
    signal: "Bengaluru Expansion",
    type: "GCC" as const,
    score: 87,
    tier: "HOT" as const,
    time: "4h ago",
    detail: "200+ engineering roles detected",
  },
  {
    company: "Rapid7 India",
    signal: "Engineering Hub",
    type: "Hiring" as const,
    score: 78,
    tier: "HOT" as const,
    time: "6h ago",
    detail: "Large cybersecurity hiring wave, Pune",
  },
  {
    company: "Series B Startup",
    signal: "Hiring 50+ Engineers",
    type: "Funding" as const,
    score: 72,
    tier: "HOT" as const,
    time: "8h ago",
    detail: "Post-funding India team scale-up",
  },
];

export const PRICING = {
  analyst: {
    name: "Analyst",
    price: "19,999",
    annual: "16,666",
    annualTotal: "1,99,990",
    pricePerLead: "₹500",
    description: "For agencies getting started with signal intelligence",
    leads: "40 confirmed leads/mo",
    seats: "2 user seats",
    features: [
      "40 confirmed leads/month",
      "2 user seats",
      "Multi-stage outreach sequences",
      "Email alerts",
      "CSV export",
      "TALPRO-IQ AI scoring",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  strategist: {
    name: "Strategist",
    price: "49,999",
    annual: "41,666",
    annualTotal: "4,99,990",
    pricePerLead: "₹333",
    description: "For growing agencies that want every advantage",
    leads: "150 confirmed leads/mo",
    seats: "5 user seats",
    features: [
      "150 confirmed leads/month",
      "5 user seats",
      "Full outreach sequences",
      "Email + WhatsApp alerts",
      "JD bundles included",
      "GCC Tracker access",
      "HubSpot/Zoho CRM integration",
      "Monthly strategy call (30 min)",
    ],
    cta: "Start free trial",
    popular: true,
  },
  command: {
    name: "Command",
    price: "1,19,999",
    annual: "99,999",
    annualTotal: "11,99,990",
    pricePerLead: "₹300",
    description: "For large agencies dominating their markets",
    leads: "400 confirmed leads/mo",
    seats: "15 user seats",
    features: [
      "400 confirmed leads/month",
      "15 user seats",
      "Full outreach sequences",
      "All alerts + Slack + webhooks",
      "Phone verification (human verified)",
      "48-hour lead exclusivity",
      "Competitor density intelligence",
      "Full API + custom integrations",
      "Weekly strategy calls",
    ],
    cta: "Talk to sales",
    popular: false,
  },
};

export const COMPARISON = [
  {
    feature: "India-specific intelligence data",
    leadhunter: true,
    others: false,
  },
  {
    feature: "Signal timing intelligence",
    leadhunter: "90 days ahead",
    others: "Contact data only",
  },
  {
    feature: "Multi-layer lead verification",
    leadhunter: "Zero junk guarantee",
    others: "Unverified lists",
  },
  {
    feature: "Pricing for Indian market",
    leadhunter: "From ₹19,999/mo",
    others: "$7,000+/year",
  },
  {
    feature: "Ready-to-send outreach",
    leadhunter: "Multi-stage, persona-aware",
    others: "DIY",
  },
  {
    feature: "Indian mobile enrichment",
    leadhunter: true,
    others: false,
  },
  {
    feature: "Proprietary TALPRO-IQ AI scoring",
    leadhunter: true,
    others: false,
  },
  {
    feature: "Compliance intelligence (PF/PT/TDS)",
    leadhunter: true,
    others: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We detected a Deloitte GCC expansion 3 months before it hit the news. That one signal paid for a year of LeadHunterIQ.",
    name: "Rajesh K.",
    title: "Director",
    company: "TechStaff Solutions, Bengaluru",
  },
  {
    quote:
      "Our BD team saves 4 hours every day. The WhatsApp alerts mean we're always first to reach out.",
    name: "Priya M.",
    title: "Head of BD",
    company: "NexGen Staffing, Hyderabad",
  },
  {
    quote:
      "Switched from ZoomInfo and saved ₹8 lakh a year. The India data is actually accurate — mobile numbers that work.",
    name: "Arun S.",
    title: "CEO",
    company: "PrimeForce HR, Mumbai",
  },
  {
    quote:
      "The compliance intelligence alone is worth the subscription. We never miss PF or ESIC deadlines now.",
    name: "Deepa R.",
    title: "Operations Head",
    company: "StaffMax, Chennai",
  },
  {
    quote:
      "TALPRO-IQ scoring is like having a 15-year staffing veteran reviewing every lead. It just knows which ones will convert.",
    name: "Vikram T.",
    title: "Founder",
    company: "BlueSky Consulting, Pune",
  },
  {
    quote:
      "Enterprise-grade intelligence at SMB pricing. Our close rate went up 40% in the first quarter.",
    name: "Neha G.",
    title: "VP Sales",
    company: "TalentBridge India, Bengaluru",
  },
];

export const FAQS = [
  {
    question: "How is LeadHunterIQ different from Apollo or ZoomInfo?",
    answer:
      "Apollo and ZoomInfo are global contact databases. LeadHunterIQ is signal intelligence — we detect events (GCC expansions, funding rounds, hiring surges) that indicate buying intent, then enrich with India-specific data like mobile numbers and compliance status. Our proprietary engine monitors dozens of sources and scores leads using our TALPRO-IQ AI.",
  },
  {
    question: "What exactly is a 'confirmed lead'?",
    answer:
      "A confirmed lead has passed all layers of our proprietary SAV (Signal Authenticity Verification) framework — including multi-source corroboration, entity verification, temporal freshness, contact deliverability, decision-maker confirmation, AI score threshold, and duplicate prevention. Only leads that clear every layer reach your dashboard.",
  },
  {
    question: "Can I try before paying?",
    answer:
      "Yes. Every plan starts with a 14-day free trial with full access to all features in your tier. No credit card required to start.",
  },
  {
    question: "Does it work with my existing CRM?",
    answer:
      "Analyst plans export via CSV. Strategist plans integrate natively with HubSpot and Zoho CRM. Command plans get full API access plus custom integrations with any CRM or ATS.",
  },
  {
    question: "How do you get Indian mobile numbers?",
    answer:
      "We use a proprietary multi-source enrichment pipeline that combines several industry-leading data providers with our own AI extraction layer. Every contact is verified for deliverability before reaching your inbox.",
  },
  {
    question: "What's the setup fee?",
    answer:
      "Analyst: ₹4,999. Strategist: ₹9,999. Command: ₹19,999. This covers onboarding, CRM integration setup, and initial signal configuration for your target industries and geographies.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All data is encrypted at rest and in transit. We're DPDPA 2023 compliant with full consent management and data deletion capabilities.",
  },
  {
    question: "Do you offer custom signal sources?",
    answer:
      "Command plans include custom signal configuration. We can track specific competitors, industries, geographic regions, or regulatory filings based on your requirements. You also get 48-hour lead exclusivity and competitor density intelligence.",
  },
];

export const NAV_LINKS = {
  solutions: {
    capability: [
      {
        name: "GCC Expansion Tracker",
        href: "/solutions/gcc-tracking",
        desc: "Detect GCC setups 90 days early",
      },
      {
        name: "AI Lead Scoring",
        href: "/solutions/lead-scoring",
        desc: "Proprietary TALPRO-IQ engine",
      },
      {
        name: "India Data Layer",
        href: "/solutions/india-data",
        desc: "Deep Indian intelligence sources",
      },
      {
        name: "Compliance Intelligence",
        href: "/solutions/compliance",
        desc: "PF, PT, ESIC auto-tracked",
      },
    ],
    role: [
      { name: "For Agency Owners", href: "/for/agency-owners" },
      { name: "For BD Teams", href: "/for/bd-teams" },
      { name: "For Enterprise", href: "/for/enterprise" },
    ],
    compare: [
      { name: "vs ZoomInfo", href: "/compare/zoominfo" },
      { name: "vs Apollo", href: "/compare/apollo" },
      { name: "vs Manual Process", href: "/compare/manual-process" },
    ],
  },
  product: [
    { name: "Platform Overview", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Integrations", href: "/integrations" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Customer Stories", href: "/customers" },
    { name: "Guides & Templates", href: "/resources" },
    { name: "Security & Compliance", href: "/security" },
  ],
};

// Cal.com Booking Configuration
export const CAL_CONFIG = {
  username: "talpro",
  eventSlug: "leadhunteriq-demo",
  duration: 15,
  bookingUrl: "https://cal.com/talpro/leadhunteriq-demo",
  brandColor: "#2563EB",
  theme: "light" as const,
};
