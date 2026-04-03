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
    "Six powerful engines built for Indian IT staffing: Signal Discovery, TALPRO-IQ Scoring, SAV Verification, Contact Enrichment, AI Outreach, and Intelligence Dossiers. Proprietary Indian market intelligence.",
};

const deepDive = [
  {
    id: "signal-discovery",
    icon: "gcc" as const,
    title: "Signal Discovery Engine",
    shortTitle: "Discovery",
    badge: "50+ Sources",
    badgeVariant: "emerald" as const,
    link: "/solutions/gcc-tracking",
    description:
      "Our proprietary intelligence engine monitors dozens of data sources across 15+ industries and every major Indian city. Continuous scanning detects GCC expansions, funding rounds, hiring surges, and regulatory filings in real-time.",
    bullets: [
      "50+ proprietary intelligence sources",
      "15+ industries, all major Indian cities, continuous monitoring",
      "GCC expansions, funding rounds, hiring surges, regulatory filings",
    ],
  },
  {
    id: "talpro-iq",
    icon: "brain" as const,
    title: "TALPRO-IQ Scoring Engine",
    shortTitle: "Scoring",
    badge: "Proprietary AI",
    badgeVariant: "blue" as const,
    link: "/solutions/lead-scoring",
    description:
      "Every signal is scored 0-100 by our proprietary TALPRO-IQ AI engine. The scoring model draws on 15+ years of IT staffing domain expertise to classify leads by buyer type, predict timing, and eliminate false positives.",
    bullets: [
      "Proprietary multi-signal AI scoring on a 100-point scale",
      "Buyer type classification: Contract, Permanent, RPO, Vendor",
      "Timing prediction: when the prospect will need staffing",
    ],
  },
  {
    id: "sav-verification",
    icon: "shield" as const,
    title: "SAV Verification Framework",
    shortTitle: "Verification",
    badge: "Zero Junk",
    badgeVariant: "emerald" as const,
    link: "/features",
    description:
      "Every lead passes through our proprietary SAV (Signal Authenticity Verification) framework — a rigorous multi-layer verification process that eliminates false positives and ensures only actionable, confirmed leads reach your dashboard.",
    bullets: [
      "Multi-layer verification with entity, temporal, and deliverability checks",
      "Proprietary false positive detection filters out noise",
      "Score threshold + duplicate prevention = zero junk guarantee",
    ],
  },
  {
    id: "contact-enrichment",
    icon: "india" as const,
    title: "Contact Enrichment Pipeline",
    shortTitle: "Enrichment",
    badge: "India-Built",
    badgeVariant: "gold" as const,
    link: "/solutions/india-data",
    description:
      "Global tools give you US emails. We give you Indian mobile numbers that actually connect. Our proprietary multi-source enrichment pipeline combines leading data providers with AI extraction to find verified decision-maker contacts.",
    bullets: [
      "Proprietary multi-source enrichment pipeline",
      "Verified Indian mobile numbers and email addresses",
      "Decision-makers only: VP+ title, 3+ months tenure",
    ],
  },
  {
    id: "outreach-engine",
    icon: "whatsapp" as const,
    title: "AI Outreach Engine",
    shortTitle: "Outreach",
    badge: "Personalized",
    badgeVariant: "blue" as const,
    link: "/features",
    description:
      "Our AI generates multi-stage outreach sequences customized for different decision-maker personas. Every message embeds Talpro's proven value propositions — adapted to the signal context and the person you're reaching.",
    bullets: [
      "Multi-stage sequences tailored to signal type and urgency",
      "Persona-aware messaging for different decision-maker types",
      "Copy/paste ready across email, WhatsApp, and LinkedIn",
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
      "Every confirmed lead comes with a complete intelligence package — not just a name and email, but a full briefing your BD team can use to walk into any pitch fully prepared.",
    bullets: [
      "Complete intelligence brief with company analysis and scoring breakdown",
      "Verified decision-maker profiles with recommended approach angles",
      "Ready-to-send outreach sequences + JD templates matched to tech stack",
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
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white lg:text-3xl">
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
