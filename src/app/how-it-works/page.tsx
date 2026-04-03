import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How It Works — Proprietary Signal Intelligence Pipeline",
  description:
    "From signal discovery to delivery: proprietary AI engine, multi-layer SAV verification, contact enrichment, AI-generated outreach, and dossier-grade intelligence. Built for Indian IT staffing.",
};

const layers = [
  {
    number: "01",
    title: "Signal Discovery",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "Our proprietary intelligence engine monitors 50+ data sources across 15+ industries and every major Indian city. Continuous scanning detects the signals that matter — before your competitors know they exist.",
    details: [
      "50+ proprietary intelligence sources",
      "15+ industries across all major Indian cities",
      "Continuous real-time monitoring, 24/7",
      "Government filings, corporate registrations, regulatory data",
      "Job market signals, funding databases, commercial real estate",
    ],
    badge: "50+ Sources",
  },
  {
    number: "02",
    title: "TALPRO-IQ AI Engine",
    color: "bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconColor: "text-emerald-500",
    description:
      "Every signal passes through our proprietary TALPRO-IQ AI engine, which scores each lead on a 100-point scale using multi-dimensional analysis. The model classifies each lead by buyer type and predicts optimal engagement timing.",
    details: [
      "Proprietary multi-signal AI scoring",
      "100-point TALPRO-IQ scale",
      "Buyer type classification: Contract, Permanent, RPO, Vendor",
      "Timing prediction for optimal outreach",
      "Built on 15+ years of Indian IT staffing domain expertise",
    ],
    badge: "Proprietary AI",
  },
  {
    number: "03",
    title: "SAV Verification Framework",
    color: "bg-gold-400",
    ringColor: "ring-gold-400/20",
    iconColor: "text-gold-600",
    description:
      "Our proprietary Signal Authenticity Verification framework eliminates false positives through rigorous multi-layer checks. Only leads that pass every verification layer reach your dashboard — zero junk, guaranteed.",
    details: [
      "Multi-source corroboration required",
      "Entity verification against government databases",
      "Temporal freshness and signal decay checks",
      "Contact deliverability verification",
      "Decision-maker confirmation and score threshold enforcement",
      "Duplicate and conflict prevention",
    ],
    badge: "Zero Junk",
  },
  {
    number: "04",
    title: "Contact Enrichment",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "Our proprietary multi-source enrichment pipeline finds verified decision-maker contacts with Indian mobile numbers. Each contact passes through deliverability verification before reaching your CRM.",
    details: [
      "Proprietary multi-source enrichment pipeline",
      "Indian mobile number enrichment",
      "Decision-maker targeting: VP+ title verification",
      "Active professional profile confirmation",
      "Deliverability guarantee on every contact",
    ],
    badge: "India-Built",
  },
  {
    number: "05",
    title: "AI Outreach Engine",
    color: "bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconColor: "text-emerald-500",
    description:
      "Our AI generates multi-stage outreach sequences customized for different decision-maker personas. Every message embeds proven value propositions adapted to the signal context and the person you're reaching out to.",
    details: [
      "Multi-stage outreach sequences from introduction to close",
      "Persona-aware messaging for different decision-maker types",
      "Proven value propositions embedded in every message",
      "Adapted to signal context and company situation",
      "Ready to send via email, WhatsApp, and LinkedIn",
    ],
    badge: "Personalized",
  },
  {
    number: "06",
    title: "Dossier Assembly",
    color: "bg-gold-400",
    ringColor: "ring-gold-400/20",
    iconColor: "text-gold-600",
    description:
      "Every confirmed lead comes with a complete intelligence dossier — not just a name and email, but a comprehensive briefing your BD team can use to walk into any pitch fully prepared.",
    details: [
      "Company intelligence brief with verified entity data",
      "TALPRO-IQ scorecard with category breakdown",
      "Verified decision-maker profiles with approach recommendations",
      "Ready-to-send outreach sequences across all channels",
      "JD templates matched to the company's detected tech stack",
      "Timing intelligence with engagement window analysis",
    ],
    badge: "Complete",
  },
  {
    number: "07",
    title: "Multi-Channel Delivery",
    color: "bg-blue-600",
    ringColor: "ring-blue-600/20",
    iconColor: "text-blue-600",
    description:
      "Confirmed signals reach your team through your preferred channels in real-time. Multiple dashboard views give you complete control over how you consume intelligence.",
    details: [
      "Interactive dashboard with multiple view modes",
      "Configurable email digests (daily/weekly)",
      "Real-time WhatsApp hot alerts",
      "Slack channel integration",
      "Webhook API for custom integrations",
      "CRM auto-deal creation (HubSpot, Zoho, Salesforce)",
    ],
    badge: "Real-Time",
  },
];

const falsePositives = [
  "Office relocation (not expansion)",
  "M&A integration (not new hiring)",
  "Seasonal or project-based hiring spikes",
  "Non-actionable job postings",
  "PR announcements without substantive backing",
  "Dormant entities despite active registrations",
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
