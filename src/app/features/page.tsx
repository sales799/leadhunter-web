import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/graphics/FeatureIcons";
import StickyTabs from "@/components/ui/StickyTabs";
import CTASection from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Platform Features",
  description:
    "Six powerful engines built for Indian IT staffing: Signal Discovery, TALPRO-IQ Scoring, 7-Gate SAV Verification, Contact Enrichment, AI Outreach, and Intelligence Dossiers. 51 sources, 49 signals.",
};

const deepDive = [
  {
    id: "signal-discovery",
    icon: "gcc" as const,
    title: "Signal Discovery Engine",
    shortTitle: "Discovery",
    badge: "51 Sources",
    badgeVariant: "emerald" as const,
    link: "/solutions/gcc-tracking",
    description:
      "Monitor 51 data sources across 15 industries and every major Indian city. Our proprietary crawlers run 4 daily cron cycles, scanning ROC filings, STPI registrations, commercial real estate transactions, funding announcements, and job postings in real-time.",
    bullets: [
      "51 data sources (18 free, 33 paid/API)",
      "15 industries x 10 cities, 4 daily scan cycles",
      "GCC expansions, funding rounds, hiring surges, regulatory filings",
    ],
  },
  {
    id: "talpro-iq",
    icon: "brain" as const,
    title: "TALPRO-IQ Scoring Engine",
    shortTitle: "Scoring",
    badge: "49 Signals",
    badgeVariant: "blue" as const,
    link: "/solutions/lead-scoring",
    description:
      "Every signal is scored 0-100 by our Opus 4.6 AI engine across 5 categories and 49 distinct signals. The scoring model is trained on 15 years of IT staffing deal data and classifies every lead into 4 buyer types with timing predictions.",
    bullets: [
      "49-signal scoring across 5 categories (100-point scale)",
      "4 buyer type classification: Contract, Permanent, RPO, Vendor",
      "Timing prediction: when the prospect will need staffing",
    ],
  },
  {
    id: "sav-verification",
    icon: "shield" as const,
    title: "7-Gate SAV Verification",
    shortTitle: "Verification",
    badge: "Zero Junk",
    badgeVariant: "emerald" as const,
    link: "/features",
    description:
      "Every lead passes through 7 verification gates before reaching your dashboard. Multi-source corroboration, entity verification via MCA/GSTIN, temporal freshness checks, contact deliverability, decision-maker confirmation, score thresholds, and duplicate prevention.",
    bullets: [
      "Gate 1-2: Multi-source corroboration + MCA/GSTIN entity verification",
      "Gate 3-5: Temporal freshness, deliverability, decision-maker confirmation",
      "Gate 6-7: Score threshold (70+) + duplicate/conflict prevention",
    ],
  },
  {
    id: "contact-enrichment",
    icon: "india" as const,
    title: "5-Waterfall Contact Enrichment",
    shortTitle: "Enrichment",
    badge: "India-Built",
    badgeVariant: "gold" as const,
    link: "/solutions/india-data",
    description:
      "Global tools give you US emails. We give you Indian mobile numbers that actually connect. Our proprietary 5-waterfall enrichment pipeline combines LinkedIn, Snov.io, RocketReach, Hunter.io, and Opus AI extraction.",
    bullets: [
      "5-waterfall: LinkedIn, Snov.io, RocketReach, Hunter.io, Opus AI",
      "Contact deliverability verified, bounce rate < 2%",
      "Decision-makers only: VP+ title, 3+ months tenure",
    ],
  },
  {
    id: "outreach-engine",
    icon: "whatsapp" as const,
    title: "AI Outreach Engine",
    shortTitle: "Outreach",
    badge: "6 Personas",
    badgeVariant: "blue" as const,
    link: "/features",
    description:
      "Sonnet 4.6 generates 5-stage outreach sequences customized for 6 persona variants. Each message is crafted for the specific decision-maker type, company context, and signal that triggered the lead.",
    bullets: [
      "5-stage sequences: Intro/Pilot, Differentiators, Proof/Metrics, Plan/Commercials, Nudge/Escalation",
      "6 persona variants: Site Lead, TA, HR, CTO, CFO, GM",
      "3 delivery formats: Dashboard, Email digest, WhatsApp/Slack",
    ],
  },
  {
    id: "dossier-assembly",
    icon: "crm" as const,
    title: "Intelligence Dossier Assembly",
    shortTitle: "Dossier",
    badge: "Dossier-Grade",
    badgeVariant: "gold" as const,
    link: "/features",
    description:
      "Every confirmed lead comes with a 6-component intelligence package — not just a name and email, but a complete briefing your BD team can use to walk into any pitch fully prepared.",
    bullets: [
      "6 components: Intelligence Brief, TALPRO-IQ Scorecard, Decision-Maker Profiles, Outreach Sequences, JD Bundle, Timing Intelligence",
      "Client-ready format with one-click export",
      "CRM sync: auto-create deals in HubSpot, Zoho, or via API",
    ],
  },
];

const tabs = deepDive.map((f) => ({
  id: f.id,
  label: f.shortTitle,
  badge: f.badge,
}));

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Features", href: "/features" }]} />
      <PageHero
        badge="Platform"
        title="Every feature built for how Indian staffing actually works"
        description="Not a global tool with India tacked on. Built from scratch for Indian market intelligence, Indian contacts, and Indian compliance."
        breadcrumbs={[{ name: "Features", href: "/features" }]}
      />

      {/* Sticky tab navigation */}
      <StickyTabs tabs={tabs} />

      {/* Feature deep dives */}
      {deepDive.map((feat, i) => (
        <Section
          key={feat.title}
          bg={i % 2 === 0 ? "white" : "gray"}
          id={feat.id}
        >
          <div
            className={`grid gap-12 lg:grid-cols-2 items-center ${
              i % 2 === 1 ? "direction-reverse" : ""
            }`}
          >
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <FeatureIcon icon={feat.icon} />
                  {feat.badge && (
                    <Badge variant={feat.badgeVariant}>{feat.badge}</Badge>
                  )}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 lg:text-3xl">
                  {feat.title}
                </h3>
                <p className="mt-4 text-gray-500 leading-relaxed font-body">
                  {feat.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feat.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-600 font-body"
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
            <FadeIn
              direction={i % 2 === 0 ? "right" : "left"}
              delay={0.2}
            >
              <div
                className={`rounded-2xl bg-gray-100 p-12 flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="w-48 h-48">
                  <FeatureIcon icon={feat.icon} />
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}

      <CTASection
        title="Ready to see it in action?"
        description="Book a 15-minute demo and see how LeadHunterIQ works for your agency."
      />
    </>
  );
}
