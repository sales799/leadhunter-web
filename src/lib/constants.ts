export const SITE = {
  name: "LeadHunterIQ",
  tagline: "AI Signal Intelligence for Indian IT Staffing",
  url: "https://leadhunteriq.in",
  company: "Talpro India Pvt Ltd",
  email: "hello@talpro.in",
  phone: "+91 98450 00000",
  whatsapp: "https://wa.me/919845000000",
  address: "Bengaluru, Karnataka, India",
  gstin: "29AADCT1234F1Z5",
  linkedin: "https://linkedin.com/company/talpro-india",
  twitter: "https://twitter.com/talproindia",
};

export const STATS = [
  { value: "47+", label: "Signal Types" },
  { value: "90", label: "Days Head Start", suffix: " days" },
  { value: "80%", label: "Cost Savings vs Global Tools" },
  { value: "5", label: "Minute Setup", suffix: " min" },
];

export const PROBLEMS = [
  {
    title: "4+ hours wasted daily",
    description: "Your BD team manually scans job boards, news, and LinkedIn — missing 80% of real opportunities hiding in plain sight.",
  },
  {
    title: "GCC signals missed entirely",
    description: "Deloitte opened a 500-seat GCC in Hyderabad. Cognism didn't flag it. Apollo missed it. You heard about it 4 months late.",
  },
  {
    title: "Global tools don't get India",
    description: "ZoomInfo charges ₹50L/year and still can't find Indian mobile numbers, PAN-linked companies, or MCA filings.",
  },
];

export const FEATURES = [
  {
    title: "GCC Expansion Tracker",
    description: "Track GCC openings, expansions, and hiring across India. Monitors ROC filings, STPI registrations, and commercial lease signals.",
    tag: "Unique",
    tagColor: "emerald" as const,
    icon: "gcc" as const,
  },
  {
    title: "TALPRO-IQ Scoring",
    description: "AI scores every signal 0-100 based on hiring velocity, funding stage, expansion timeline, and historical win patterns.",
    tag: null,
    tagColor: null,
    icon: "brain" as const,
  },
  {
    title: "India-First Data Layer",
    description: "Indian mobile numbers, MCA data, PAN-linked entities, GSTIN verification. Built from the ground up for Indian business intelligence.",
    tag: "India-built",
    tagColor: "gold" as const,
    icon: "india" as const,
  },
  {
    title: "WhatsApp Hot Alerts",
    description: "Get 90+ score signals delivered to WhatsApp instantly. Your BD team can call within minutes — first-mover advantage, automated.",
    tag: null,
    tagColor: null,
    icon: "whatsapp" as const,
  },
  {
    title: "Compliance Intelligence",
    description: "Every company enriched with PF registration, PT status, TDS compliance, and GSTIN verification. Walk into pitches armed.",
    tag: null,
    tagColor: null,
    icon: "shield" as const,
  },
  {
    title: "CRM Pipeline Sync",
    description: "Signals flow directly into HubSpot, Zoho CRM, or your existing ATS. Auto-create deals and trigger follow-up sequences.",
    tag: null,
    tagColor: null,
    icon: "crm" as const,
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Detect",
    description: "LeadHunterIQ scans 47+ signal sources — ROC filings, funding rounds, job postings, GCC registrations, STPI data, and commercial real estate.",
    color: "blue" as const,
  },
  {
    number: "02",
    title: "Score & Enrich",
    description: "TALPRO-IQ scores each signal 0-100 and enriches contacts with Indian mobile numbers, decision-maker emails, and compliance data.",
    color: "emerald" as const,
  },
  {
    number: "03",
    title: "Deliver & Close",
    description: "Hot signals land on WhatsApp and your CRM in real-time. Your BD team calls first and closes before competitors even know.",
    color: "gold" as const,
  },
];

export const DASHBOARD_SIGNALS = [
  { company: "Deloitte", signal: "New GCC — Hyderabad", type: "GCC" as const, score: 96, time: "2h ago", detail: "500-seat facility, STPI registration filed" },
  { company: "Tiger Global", signal: "Series B — FinTech Portfolio", type: "Funding" as const, score: 89, time: "4h ago", detail: "$40M round, hiring 200+ engineers" },
  { company: "Wipro", signal: "VLSI Division Expansion", type: "Hiring" as const, score: 82, time: "6h ago", detail: "120 semiconductor roles, Bangalore" },
  { company: "Amazon", signal: "DevOps Center Scale-up", type: "Hiring" as const, score: 78, time: "8h ago", detail: "Chennai facility, 85 DevOps engineers" },
];

export const PRICING = {
  starter: {
    name: "Analyst",
    price: "24,999",
    annual: "20,833",
    description: "For agencies discovering signal-driven BD",
    features: [
      "30 confirmed leads/month",
      "2 team seats",
      "49-signal TALPRO-IQ scoring",
      "7-gate SAV verified leads",
      "3-stage outreach sequences",
      "Email delivery + CSV export",
      "GCC expansion alerts",
      "Setup fee: ₹4,999",
    ],
    cta: "Start 14-day trial",
    popular: false,
  },
  growth: {
    name: "Strategist",
    price: "74,999",
    annual: "62,499",
    description: "For agencies that want every intelligence advantage",
    features: [
      "100 confirmed leads/month",
      "5 team seats",
      "Full 5-stage outreach + JD bundles",
      "GCC Tracker dashboard",
      "WhatsApp hot alerts",
      "CRM integration (HubSpot, Zoho)",
      "Monthly strategy call (30 min)",
      "Setup fee: ₹9,999",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  enterprise: {
    name: "Command",
    price: "1,99,999",
    annual: "1,66,666",
    description: "For agencies dominating their markets with full intelligence",
    features: [
      "250 confirmed leads/month",
      "15 team seats",
      "All Strategist features",
      "48-hour lead exclusivity",
      "Competitor density intelligence",
      "Phone-verified contacts",
      "Full Outreach Kit (emails + LinkedIn + pitch deck + 12 JDs)",
      "Weekly strategy calls + quarterly industry report",
    ],
    cta: "Talk to sales",
    popular: false,
  },
};

export const COMPARISON = [
  { feature: "India GCC tracking", leadhunter: true, others: false },
  { feature: "Indian mobile enrichment", leadhunter: true, others: false },
  { feature: "TALPRO-IQ AI scoring", leadhunter: true, others: false },
  { feature: "Compliance intelligence (PF/PT/TDS)", leadhunter: true, others: false },
  { feature: "WhatsApp delivery", leadhunter: true, others: false },
  { feature: "IT staffing-specific signals", leadhunter: true, others: false },
  { feature: "Starting price", leadhunter: "₹2,999/mo", others: "₹40,000+/mo" },
  { feature: "Setup time", leadhunter: "5 minutes", others: "2-4 weeks" },
];

export const TESTIMONIALS = [
  {
    quote: "We detected a Deloitte GCC expansion 3 months before it hit the news. That one signal paid for a year of LeadHunterIQ.",
    name: "Rajesh K.",
    title: "Director",
    company: "TechStaff Solutions, Bengaluru",
  },
  {
    quote: "Our BD team saves 4 hours every day. The WhatsApp alerts mean we're always first to reach out.",
    name: "Priya M.",
    title: "Head of BD",
    company: "NexGen Staffing, Hyderabad",
  },
  {
    quote: "Switched from ZoomInfo and saved ₹8 lakh a year. The India data is actually accurate — mobile numbers that work.",
    name: "Arun S.",
    title: "CEO",
    company: "PrimeForce HR, Mumbai",
  },
  {
    quote: "The compliance intelligence alone is worth the subscription. We never miss PF or ESIC deadlines now.",
    name: "Deepa R.",
    title: "Operations Head",
    company: "StaffMax, Chennai",
  },
  {
    quote: "TALPRO-IQ scoring is like having a 15-year staffing veteran reviewing every lead. It just knows which ones will convert.",
    name: "Vikram T.",
    title: "Founder",
    company: "BlueSky Consulting, Pune",
  },
  {
    quote: "Enterprise-grade intelligence at SMB pricing. Our close rate went up 40% in the first quarter.",
    name: "Neha G.",
    title: "VP Sales",
    company: "TalentBridge India, Bengaluru",
  },
];

export const FAQS = [
  {
    question: "How is LeadHunterIQ different from Apollo or ZoomInfo?",
    answer: "Apollo and ZoomInfo are global contact databases. LeadHunterIQ is signal intelligence — we detect events (GCC expansions, funding rounds, hiring surges) that indicate buying intent, then enrich with India-specific data like mobile numbers, compliance status, and MCA filings.",
  },
  {
    question: "What exactly is a 'signal'?",
    answer: "A signal is a verified business event indicating a company needs staffing services. Examples: a new GCC registration in STPI, a Series B funding with hiring plans, 200+ new PF registrations, or a 50,000 sq ft commercial lease. Each is scored 0-100 by TALPRO-IQ.",
  },
  {
    question: "Can I try before paying?",
    answer: "Yes. Every plan starts with a 14-day free trial with full access to all features in your tier. No credit card required to start.",
  },
  {
    question: "Does it work with my existing CRM?",
    answer: "LeadHunterIQ integrates natively with HubSpot, Zoho CRM, and Zoho Recruit. We also offer API access for custom integrations.",
  },
  {
    question: "How do you get Indian mobile numbers?",
    answer: "We use a proprietary India-first data waterfall — RocketReach, Snov.io, Apollo, NeverBounce verification, plus LinkedIn and MCA director filings. Our hit rate on Indian mobiles is 73%+.",
  },
  {
    question: "What's the minimum commitment?",
    answer: "Month-to-month billing with no lock-in. Annual plans save up to 17%. Cancel anytime with a 30-day money-back guarantee.",
  },
  {
    question: "Is my data secure?",
    answer: "All data is encrypted at rest and in transit. We're DPDPA 2023 compliant with full consent management and data deletion capabilities.",
  },
  {
    question: "Do you offer custom signal sources?",
    answer: "Enterprise plans include custom signal configuration. We can track specific competitors, industries, or geographic regions based on your requirements.",
  },
];

export const NAV_LINKS = {
  solutions: {
    capability: [
      { name: "GCC Expansion Tracker", href: "/solutions/gcc-tracking", desc: "Detect GCC setups 90 days early" },
      { name: "AI Lead Scoring", href: "/solutions/lead-scoring", desc: "TALPRO-IQ scores every signal" },
      { name: "India Data Layer", href: "/solutions/india-data", desc: "95% accurate Indian contacts" },
      { name: "Compliance Intelligence", href: "/solutions/compliance", desc: "PF, PT, ESIC auto-tracked" },
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
  ],
};
