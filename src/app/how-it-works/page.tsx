import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How It Works — 7-Layer Signal Intelligence Pipeline",
  description:
    "From signal discovery to delivery in 7 layers: 51 sources, Opus 4.6 AI brain, 7-gate SAV verification, 5-waterfall contact enrichment, AI outreach, dossier assembly, and multi-channel delivery.",
};

const layers = [
  {
    number: "01",
    title: "Signal Discovery",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "51 data sources feed our intelligence engine across 15 industries and 10 major Indian cities. Our crawlers run 4 daily cron cycles, scanning regulatory filings, job boards, funding databases, and commercial real estate platforms.",
    details: [
      "51 sources: 18 free + 33 paid/API",
      "15 industries x 10 cities coverage",
      "4 daily scan cycles for real-time detection",
      "ROC, STPI, MCA, GSTIN, EPFO registrations",
      "Job boards: Naukri, LinkedIn, Indeed, TimesJobs",
    ],
    badge: "51 Sources",
  },
  {
    number: "02",
    title: "Opus 4.6 AI Brain",
    color: "bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconColor: "text-emerald-500",
    description:
      "Every signal passes through our Opus 4.6 AI engine which scores across 49 distinct signals in 5 categories on a 100-point scale. The model classifies each lead into 4 buyer types and predicts optimal engagement timing.",
    details: [
      "49 signals across 5 scoring categories",
      "100-point TALPRO-IQ scale",
      "4 buyer types: Contract, Permanent, RPO, Vendor",
      "Timing prediction for optimal outreach",
      "Trained on 15 years of IT staffing deal data",
    ],
    badge: "49 Signals",
  },
  {
    number: "03",
    title: "7-Gate SAV Verification",
    color: "bg-gold-400",
    ringColor: "ring-gold-400/20",
    iconColor: "text-gold-600",
    description:
      "The Signal Authenticity Verification framework eliminates false positives through 7 rigorous gates. Only leads that pass ALL gates reach your dashboard — zero junk, guaranteed.",
    details: [
      "Gate 1: Multi-source corroboration (3+ sources required)",
      "Gate 2: Entity verification (MCA CIN + GSTIN active)",
      "Gate 3: Temporal freshness (signals decay by type)",
      "Gate 4: Contact deliverability (bounce rate < 2%)",
      "Gate 5: Decision-maker confirmation (VP+, 3+ months)",
      "Gate 6: TALPRO-IQ threshold (score 70+ = confirmed)",
      "Gate 7: Duplicate & conflict prevention",
    ],
    badge: "7 Gates",
  },
  {
    number: "04",
    title: "Contact Enrichment",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "Our 5-waterfall enrichment pipeline finds verified decision-maker contacts with Indian mobile numbers. Each contact goes through deliverability checks before reaching your CRM.",
    details: [
      "5-waterfall: LinkedIn, Snov.io, RocketReach, Hunter.io, Opus AI",
      "Indian mobile number enrichment (73%+ hit rate)",
      "Decision-maker targeting: VP+ title verification",
      "Active LinkedIn profile confirmation",
      "Bounce rate < 2% deliverability guarantee",
    ],
    badge: "5-Waterfall",
  },
  {
    number: "05",
    title: "AI Outreach Engine",
    color: "bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconColor: "text-emerald-500",
    description:
      "Sonnet 4.6 generates 5-stage outreach sequences customized for 6 persona variants. Each message is crafted for the specific decision-maker type, company context, and signal that triggered the lead.",
    details: [
      "5-stage sequences: Intro/Pilot, Differentiators, Proof/Metrics, Plan/Commercials, Nudge/Escalation",
      "6 persona variants: Site Lead, TA, HR, CTO, CFO, GM",
      "Context-aware messaging based on trigger signal",
      "A/B tested templates with proven conversion rates",
      "3 delivery formats: Dashboard, Email, WhatsApp/Slack",
    ],
    badge: "6 Personas",
  },
  {
    number: "06",
    title: "Dossier Assembly",
    color: "bg-gold-400",
    ringColor: "ring-gold-400/20",
    iconColor: "text-gold-600",
    description:
      "Every confirmed lead comes with a 6-component intelligence dossier — not just a name and email, but a complete briefing your BD team can use to walk into any pitch fully prepared.",
    details: [
      "Company Intelligence Brief (MCA/GSTIN verified, industry analysis)",
      "TALPRO-IQ Scorecard (full 5-category breakdown with justifications)",
      "Decision-Maker Profiles (3-5 contacts with verified channels)",
      "Ready-to-Send Outreach (5-stage sequences, 6 persona variants)",
      "JD Bundle (3-5 role templates matched to detected tech stack)",
      "Timing Intelligence (win probability, engagement window, competitor density)",
    ],
    badge: "6-Component",
  },
  {
    number: "07",
    title: "Multi-Channel Delivery",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "Confirmed signals reach your team through your preferred channels in real-time. 12 dashboard modes give you complete control over how you consume intelligence.",
    details: [
      "Dashboard with 12 view modes",
      "Email digest (daily/weekly configurable)",
      "Real-time WhatsApp hot alerts",
      "Slack channel integration",
      "Webhook API for custom integrations",
      "CRM auto-deal creation (HubSpot, Zoho, Salesforce)",
    ],
    badge: "3 Formats",
  },
];

const falsePositives = [
  "Office relocation (not expansion)",
  "M&A integration (not new hiring)",
  "Seasonal/project hiring (not permanent growth)",
  "Ghost job postings",
  "PR announcements without regulatory filings",
  "Dormant subsidiaries despite active MCA status",
];

const timeline = [
  { time: "Day 1", event: "Sign up and connect your CRM", color: "bg-blue-600" },
  { time: "Day 1", event: "First signals delivered to WhatsApp", color: "bg-emerald-500" },
  { time: "Week 1", event: "First outreach sent with signal context", color: "bg-gold-400" },
  { time: "Month 1", event: "First placement from a LeadHunterIQ signal", color: "bg-emerald-500" },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="How It Works"
        title="7-layer pipeline. Zero junk. Dossier-grade intelligence."
        description="From raw signal to confirmed lead in 7 layers. Set up in 5 minutes. Start catching signals on day one."
        breadcrumbs={[{ name: "How It Works", href: "/how-it-works" }]}
      />

      {/* 7-Layer Pipeline */}
      {layers.map((layer, i) => (
        <Section key={layer.title} bg={i % 2 === 0 ? "white" : "gray"}>
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-1 w-16 rounded-full ${layer.color}`} />
                  <Badge variant={i % 3 === 0 ? "blue" : i % 3 === 1 ? "emerald" : "gold"}>
                    {layer.badge}
                  </Badge>
                </div>
                <span className="block font-mono text-6xl font-bold text-gray-100">
                  {layer.number}
                </span>
                <h2 className="mt-1 text-3xl font-heading font-bold text-gray-900">
                  {layer.title}
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-lg font-body">
                  {layer.description}
                </p>
              </div>
              <Card className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 font-body">
                  What&apos;s included
                </h4>
                <ul className="space-y-3">
                  {layer.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-gray-600 font-body"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </FadeIn>
        </Section>
      ))}

      {/* False Positive Detection */}
      <Section bg="navy-radial" overlay gridPattern>
        <SectionHead
          badge="Quality Guarantee"
          badgeVariant="white"
          title="6 false positive patterns we catch"
          description="Our SAV framework specifically detects and filters these common false positives that waste your BD team's time."
          light
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {falsePositives.map((fp, i) => (
            <FadeIn key={fp} delay={i * 0.1}>
              <div className="glass-card p-5 flex items-start gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                <span className="text-sm text-gray-300 font-body">{fp}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="white">
        <SectionHead
          badge="Timeline"
          title="Your first 30 days"
          description="From signup to first placement in under a month."
        />
        <div className="mx-auto max-w-2xl">
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`h-4 w-4 rounded-full ${item.color}`} />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 my-1" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600 font-mono">
                    {item.time}
                  </p>
                  <p className="text-lg text-gray-900 font-heading font-semibold">
                    {item.event}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection
        title="Start catching signals today"
        description="5 minutes to set up. 14-day free trial. No credit card required."
      />
    </>
  );
}
