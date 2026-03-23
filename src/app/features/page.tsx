import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/graphics/FeatureIcons";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Platform Features",
  description:
    "Six powerful engines built for Indian IT staffing: GCC tracking, AI scoring, India data, WhatsApp alerts, compliance intelligence, and CRM sync.",
};

const deepDive = [
  {
    icon: "gcc" as const,
    title: "GCC Expansion Tracker",
    badge: "Unique to LeadHunterIQ",
    link: "/solutions/gcc-tracking",
    description:
      "Track Global Capability Centers opening, expanding, or hiring across India. Our proprietary tracker monitors 17 distinct signal categories including ROC filings, STPI registrations, commercial real estate transactions, and regulatory filings.",
    bullets: [
      "17 signal categories monitored in real-time",
      "90-day average head start on competitors",
      "Commercial real estate and regulatory filing tracking",
    ],
  },
  {
    icon: "brain" as const,
    title: "TALPRO-IQ Scoring Engine",
    badge: null,
    link: "/solutions/lead-scoring",
    description:
      "Every signal is scored 0-100 by our AI engine, trained on 15 years of IT staffing deal data. TALPRO-IQ considers deal size potential, skill demand urgency, competition density, compliance readiness, and historical conversion patterns.",
    bullets: [
      "0-100 scoring with transparent factor breakdown",
      "Custom weight configuration for your agency's focus",
      "Continuous learning from your win/loss patterns",
    ],
  },
  {
    icon: "india" as const,
    title: "India-First Data Layer",
    badge: "India-Built",
    link: "/solutions/india-data",
    description:
      "Global tools give you US emails. We give you Indian mobile numbers that actually connect. Our proprietary waterfall enrichment combines RocketReach, Snov.io, Apollo, NeverBounce, LinkedIn, and MCA director filings.",
    bullets: [
      "73%+ hit rate on Indian mobile numbers",
      "MCA company data and PAN-linked entity resolution",
      "GSTIN verification and director mapping",
    ],
  },
  {
    icon: "whatsapp" as const,
    title: "WhatsApp Hot Alerts",
    badge: null,
    link: "/features",
    description:
      "When a signal scores 90+, your BD team gets it on WhatsApp instantly. No dashboards to check, no emails to dig through. Your team calls within minutes while competitors are still searching job boards.",
    bullets: [
      "Instant delivery for 90+ score signals",
      "Configurable score thresholds per channel",
      "Slack and email delivery included",
    ],
  },
  {
    icon: "shield" as const,
    title: "Compliance Intelligence",
    badge: null,
    link: "/solutions/compliance",
    description:
      "Every company in your signal feed is enriched with compliance data. Walk into client meetings knowing their PF registration status, PT compliance, TDS filing history, and ESIC coverage.",
    bullets: [
      "PF, PT, TDS, ESIC compliance status per company",
      "State-specific regulatory requirements (Karnataka Shops Act)",
      "DPDPA 2023 consent management built-in",
    ],
  },
  {
    icon: "crm" as const,
    title: "CRM Pipeline Sync",
    badge: null,
    link: "/integrations",
    description:
      "Signals flow directly into HubSpot, Zoho CRM, or Salesforce. Auto-create deals with enriched contact data, assign to the right rep, and trigger follow-up sequences — all without leaving your CRM.",
    bullets: [
      "Native HubSpot, Zoho CRM, and Salesforce integration",
      "Auto-deal creation with enriched contacts",
      "API access for custom integrations",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="Platform"
        title="The platform built for Indian IT staffing"
        description="Every feature engineered for the way Indian staffing agencies actually work. Not a global tool with India tacked on."
        breadcrumbs={[{ name: "Features", href: "/features" }]}
      />

      {/* Feature deep dives */}
      {deepDive.map((feat, i) => (
        <Section key={feat.title} bg={i % 2 === 0 ? "white" : "gray"} id={feat.icon}>
          <div className={`grid gap-12 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <FeatureIcon icon={feat.icon} />
                  {feat.badge && <Badge variant="emerald">{feat.badge}</Badge>}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">{feat.title}</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">{feat.description}</p>
                <ul className="mt-6 space-y-3">
                  {feat.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href={feat.link} variant="secondary" size="sm">
                    Learn more
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={0.2}>
              <div className={`rounded-2xl bg-gray-100 p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="w-48 h-48">
                  <FeatureIcon icon={feat.icon} />
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}

      <CTASection title="Ready to see it in action?" description="Book a 15-minute demo and see how LeadHunterIQ works for your agency." />
    </>
  );
}
