import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { DASHBOARD_SIGNALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Signal Intelligence",
  description:
    "Monitor buyer-timing signals across India with LeadHunterIQ's Signal Intelligence module. GCC expansion clues, hiring surges, funding motion, compliance events, and market shifts surfaced before outreach begins.",
};

const coverageAreas = [
  {
    title: "Expansion signals",
    description:
      "GCC setups, office launches, entity registrations, lease movement, and infrastructure provisioning that reveal fresh demand before a public announcement.",
  },
  {
    title: "Hiring momentum",
    description:
      "Bulk job posting spikes, new skill-cluster demand, recruiter activity, and leadership hiring patterns that indicate active staffing intent.",
  },
  {
    title: "Funding and growth",
    description:
      "Capital events, revenue expansion narratives, and market-entry activity that usually precede budget unlocks and hiring bursts.",
  },
  {
    title: "Compliance motion",
    description:
      "Regulatory registrations, labour-code obligations, and state-specific operating signals that expose which entities are ramping up headcount.",
  },
  {
    title: "Technology adoption",
    description:
      "Cloud, cybersecurity, data, and modernization indicators that show where new project demand is likely to convert into open requisitions.",
  },
  {
    title: "Competitive market shifts",
    description:
      "M&A activity, board changes, vendor resets, and urgency events that change timing in a way static contact databases never capture.",
  },
];

const sourceBands = [
  {
    name: "Corporate and regulatory",
    detail:
      "Entity filings, registrations, compliance records, and public disclosures monitored continuously across Indian operating jurisdictions.",
  },
  {
    name: "Commercial footprint",
    detail:
      "Real estate movement, technology-park activity, and location-specific operating signals across major Indian business hubs.",
  },
  {
    name: "Talent market",
    detail:
      "Job boards, hiring waves, leadership appointments, and career-page changes that reflect immediate staffing demand.",
  },
  {
    name: "News and capital",
    detail:
      "Funding coverage, launch narratives, press events, and market stories that confirm intent and add context to raw signals.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Monitor",
    description:
      "LeadHunterIQ watches 51 intelligence sources across industries, cities, and public market surfaces without waiting for a human analyst to poll them.",
  },
  {
    number: "02",
    title: "Correlate",
    description:
      "Single events stay noisy. The module links related movement across filings, hiring, geography, and market activity to isolate real demand patterns.",
  },
  {
    number: "03",
    title: "Package",
    description:
      "Every signal is assembled into a customer-facing opportunity brief with entity context, signal trail, freshness, and why the timing matters now.",
  },
  {
    number: "04",
    title: "Hand off",
    description:
      "Only then does the signal move downstream into scoring, verification, enrichment, and outreach. Discovery stays cleanly separated from later modules.",
  },
];

const outputs = [
  "A normalized signal trail showing what happened, where it happened, and why it matters",
  "Entity-level context so teams know which legal or operating footprint is actually moving",
  "Freshness windows and recency cues that help BD teams act while timing is still advantaged",
  "Geography and industry tagging for routing signals to the right desk, region, or vertical owner",
  "A clean module handoff into scoring and verification instead of mixing discovery with outreach logic",
  "Public-route ready examples that let prospects understand the intelligence model before booking a demo",
];

const metrics = [
  { value: "51", label: "Intelligence sources", tone: "text-emerald-400" },
  { value: "15+", label: "Industries monitored", tone: "text-blue-400" },
  { value: "24/7", label: "Signal monitoring", tone: "text-gold-400" },
];

export default function SignalIntelligencePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Solutions", href: "/features" },
          { name: "Signal Intelligence", href: "/solutions/signal-intelligence" },
        ]}
      />
      <PageHero
        badge="Signal Intelligence"
        title="Find buyer timing before your competitors even see the market move"
        description="LeadHunterIQ's Signal Intelligence module turns scattered Indian market activity into a live demand radar. It isolates expansion, hiring, funding, compliance, and technology signals before they are pushed into scoring or outreach."
        breadcrumbs={[
          { name: "Solutions", href: "/features" },
          { name: "Signal Intelligence", href: "/solutions/signal-intelligence" },
        ]}
        cta1={{ label: "Start free trial", href: "/demo" }}
        cta2={{ label: "View GCC tracker", href: "/solutions/gcc-tracking" }}
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn direction="left">
            <div>
              <Badge variant="emerald">Module Scope</Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
                Discovery first. Clean handoff later.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                This module exists to answer one question: which companies are moving right now in a way that creates staffing demand? It does not enrich contacts, write sequences, or qualify outreach. It captures timing intelligence and passes a clean package downstream.
              </p>
              <p className="mt-4 leading-relaxed text-gray-500">
                That separation matters. It keeps customer-facing data trustworthy, prevents duplicate logic across modules, and gives operations teams a clear audit line from raw market movement to final lead delivery.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Card variant="flat" className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Signal stack
                  </p>
                  <p className="mt-1 font-mono text-sm text-emerald-600">
                    Market motion only
                  </p>
                </div>
                <Badge variant="emerald">Module 01</Badge>
              </div>
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className={`font-mono text-3xl font-semibold ${metric.tone}`}>
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {metric.label}
                  </p>
                </div>
              ))}
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead
          badge="Coverage"
          badgeVariant="blue"
          title="What the Signal Intelligence module watches"
          description="Six categories of demand movement tracked across India's staffing-heavy markets."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverageAreas.map((area, index) => (
            <FadeIn key={area.title} delay={index * 0.06}>
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  {area.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHead
          badge="Source Bands"
          badgeVariant="emerald"
          title="Broad enough to detect movement, structured enough to trust it"
          description="The module groups raw feeds into consistent source bands so later stages inherit normalized, customer-safe signal context."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {sourceBands.map((band, index) => (
            <FadeIn key={band.name} delay={index * 0.08}>
              <Card className="h-full">
                <Badge variant="navy">Band {index + 1}</Badge>
                <h3 className="mt-3 font-heading text-xl font-bold text-gray-900">
                  {band.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {band.detail}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead
          badge="Workflow"
          badgeVariant="gold"
          title="How a market event becomes a usable signal"
          description="A production-safe discovery flow that keeps module boundaries strict."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {workflow.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <Card>
                <span className="font-mono text-4xl font-bold text-gray-100">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHead
          badge="Feed Preview"
          badgeVariant="blue"
          title="What signal output looks like before outreach starts"
          description="Example opportunities surfaced by the discovery layer and prepared for downstream qualification."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {DASHBOARD_SIGNALS.map((signal, index) => (
            <FadeIn key={signal.company} delay={index * 0.08}>
              <Card className="h-full">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant={signal.tier === "ULTRA-HOT" ? "gold" : "blue"}>
                    {signal.tier}
                  </Badge>
                  <span className="text-xs font-mono text-gray-400">
                    {signal.time}
                  </span>
                </div>
                <p className="font-heading font-bold text-gray-900">
                  {signal.company}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {signal.signal}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {signal.detail}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
                      style={{ width: `${signal.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-700">
                    {signal.score}
                  </span>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn direction="left">
            <SectionHead
              badge="Outputs"
              badgeVariant="emerald"
              title="What this module hands downstream"
              align="left"
            />
            <ul className="space-y-4">
              {outputs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
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
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Card variant="flat" className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Where this fits in the platform
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Signal Intelligence is the platform's public discovery layer. Once it identifies credible market movement, later modules score, verify, enrich, and operationalize the opportunity. That sequence prevents noisy data from leaking into customer delivery.
              </p>
              <div className="space-y-3">
                {[
                  "Signal Intelligence",
                  "Lead Intelligence and QA",
                  "Enrichment",
                  "Outreach and Meeting",
                ].map((module, index) => (
                  <div
                    key={module}
                    className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <span className="font-mono text-xs text-gray-400">
                      M{index + 1}
                    </span>
                    <span className="font-heading text-sm font-bold text-gray-900">
                      {module}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0 ? "bg-emerald-500" : "bg-gray-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <CTASection
        title="See the demand radar before the rest of the market does."
        description="Book a demo to review the Signal Intelligence module, sample opportunities, and discovery workflow."
      />
    </>
  );
}
