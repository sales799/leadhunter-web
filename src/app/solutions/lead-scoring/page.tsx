import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Lead Scoring \u2014 TALPRO-IQ",
  description:
    "AI lead scoring trained on 15 years of IT staffing data. Score every signal 0-100 with transparent factor breakdown. 40% better conversion rates.",
};

const scoringFactors = [
  {
    name: "Hiring Intent Signals",
    weight: "Highest weight",
    description: "Job postings, contractor listings, urgency indicators. Measures active demand for talent across job boards, LinkedIn, and internal career pages.",
  },
  {
    name: "Company Size & Budget",
    weight: "High weight",
    description: "Revenue bracket, IT budget percentage, headcount trajectory. Larger companies with dedicated IT budgets close faster and at higher contract values.",
  },
  {
    name: "Growth & Expansion",
    weight: "High weight",
    description: "New office/GCC setup, funding rounds, leadership changes. Expansion signals indicate imminent large-scale hiring needs.",
  },
  {
    name: "Tech Transformation",
    weight: "Significant weight",
    description: "Cloud migration, digital transformation initiatives, legacy modernization projects. Companies undergoing tech change need specialized staffing.",
  },
  {
    name: "Staffing Compatibility",
    weight: "Significant weight",
    description: "Contract staffing history, vendor empanelment status, geography match. Companies already using staffing partners convert 3x faster.",
  },
];

const scoreBands = [
  {
    range: "90 \u2013 100",
    label: "Ultra-Hot",
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    bgLight: "bg-emerald-50 border-emerald-200",
    description: "Immediate opportunity. Your BD team gets a WhatsApp alert within minutes. Call today.",
  },
  {
    range: "70 \u2013 89",
    label: "Confirmed",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50 border-blue-200",
    description: "Passed all SAV verification layers. Strong opportunity. Add to your outreach sequence and engage within the week.",
  },
  {
    range: "50 \u2013 69",
    label: "Probable",
    color: "bg-gold-400",
    textColor: "text-gold-600",
    bgLight: "bg-amber-50 border-amber-200",
    description: "Included as free bonus leads. Emerging signals — score often increases as more signals correlate.",
  },
  {
    range: "0 \u2013 49",
    label: "Monitoring",
    color: "bg-gray-400",
    textColor: "text-gray-500",
    bgLight: "bg-gray-50 border-gray-200",
    description: "Insufficient signal strength. Kept in the database for future correlation and trend analysis.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Signal ingestion",
    description:
      "Raw signals from our proprietary intelligence sources enter the scoring pipeline. Each signal is classified by type, source credibility, and recency.",
  },
  {
    number: "02",
    title: "Factor analysis",
    description:
      "TALPRO-IQ evaluates each signal across multiple proprietary categories and weighted signals, pulling in enrichment data for a complete picture.",
  },
  {
    number: "03",
    title: "Score assignment",
    description:
      "A composite score from 0 to 100 is assigned with a transparent breakdown showing exactly why each signal scored the way it did.",
  },
  {
    number: "04",
    title: "Continuous recalibration",
    description:
      "Scores update in real-time as new signals arrive. A company that scored 60 yesterday might score 90 today after a funding announcement.",
  },
];

const capabilities = [
  "Custom weight configuration for your agency's focus areas",
  "Score history timeline showing how signals evolve over time",
  "Win/loss feedback loop that improves accuracy for your deals",
  "Transparent factor breakdown for every single score",
  "Bulk re-scoring when market conditions shift",
  "API access for custom scoring integrations",
];

const metrics = [
  { value: "40%", label: "Better conversion rate vs. manual qualification", color: "text-blue-600" },
  { value: "60%", label: "Less time spent on lead qualification", color: "text-emerald-500" },
  { value: "0\u2013100", label: "Transparent score with full factor breakdown", color: "text-gold-500" },
];

export default function LeadScoringPage() {
  return (
    <>
      <PageHero
        badge="TALPRO-IQ"
        title="AI that scores leads like a 15-year staffing veteran"
        description="Every signal scored 0-100 with transparent reasoning. TALPRO-IQ evaluates deal size, urgency, competition, compliance, velocity, and funding stage to tell your BD team exactly where to focus."
        breadcrumbs={[
          { name: "Solutions", href: "/features" },
          { name: "Lead Scoring", href: "/solutions/lead-scoring" },
        ]}
        cta1={{ label: "Start free trial", href: "/demo" }}
        cta2={{ label: "See all features", href: "/features" }}
      />

      {/* Problem Section */}
      <Section bg="white">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="red">The Problem</Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
                Manual lead qualification is killing your pipeline
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Your BD team spends hours researching each company, cross-referencing data from multiple sources, and making gut-feel decisions about which leads to pursue. The best leads slip through while your team wastes time on companies that will never convert.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Manual qualification misses nuance. A company might look small but have massive staffing needs. Another might look large but already have exclusive vendor agreements. TALPRO-IQ sees what humans miss by correlating signals that no single person can track.
              </p>
            </div>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                The cost of gut-feel qualification
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "BD reps spend 3+ hours per lead on manual research",
                  "Inconsistent scoring across team members",
                  "High-value signals buried in noise",
                  "No feedback loop to improve qualification over time",
                  "Hot leads go cold while your team is still researching",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* Scoring Factors */}
      <Section bg="gray">
        <SectionHead
          badge="Scoring Model"
          badgeVariant="blue"
          title="Multiple categories, proprietary signals, one score"
          description="TALPRO-IQ evaluates every signal across multiple weighted categories encompassing proprietary signals, each trained on 15+ years of IT staffing deal data."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scoringFactors.map((factor, i) => (
            <FadeIn key={factor.name} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{factor.name}</h4>
                  <Badge variant="navy">{factor.weight}</Badge>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{factor.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Score Bands */}
      <Section bg="white">
        <SectionHead
          badge="Score Ranges"
          badgeVariant="emerald"
          title="Clear scoring bands, clear actions"
          description="Every score maps to a specific action for your BD team. No ambiguity, no guesswork."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {scoreBands.map((band, i) => (
            <FadeIn key={band.label} delay={i * 0.1}>
              <Card padding="p-0" className={`overflow-hidden border ${band.bgLight}`}>
                <div className="flex items-stretch">
                  <div className={`w-2 ${band.color}`} />
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-2xl font-extrabold ${band.textColor}`}>{band.range}</span>
                      <Badge variant={band.label === "Hot" ? "emerald" : band.label === "Warm" ? "blue" : band.label === "Monitor" ? "gold" : "blue"}>
                        {band.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{band.description}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section bg="gray">
        <SectionHead
          badge="Process"
          title="How TALPRO-IQ scores every signal"
          description="From raw data to actionable score in under a second."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {howItWorks.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <Card>
                <span className="font-mono text-4xl font-bold text-gray-100">{step.number}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-500 leading-relaxed">{step.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What You Get */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <FadeIn direction="left">
            <SectionHead
              badge="Capabilities"
              badgeVariant="gold"
              title="What you get with TALPRO-IQ"
              align="left"
            />
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                Try TALPRO-IQ free
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Example score breakdown
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Deal size potential</span>
                  <span className="font-semibold text-gray-900">92/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: "92%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Skill demand urgency</span>
                  <span className="font-semibold text-gray-900">88/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: "88%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Competition density</span>
                  <span className="font-semibold text-gray-900">75/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: "75%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Compliance readiness</span>
                  <span className="font-semibold text-gray-900">95/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: "95%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Hiring velocity</span>
                  <span className="font-semibold text-gray-900">82/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: "82%" }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Funding stage</span>
                  <span className="font-semibold text-gray-900">70/100</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-gold-400" style={{ width: "70%" }} />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">Composite Score</span>
                  <span className="text-2xl font-extrabold text-emerald-600">87/100</span>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Key Metrics */}
      <Section bg="navy-radial" overlay>
        <SectionHead
          badge="Results"
          badgeVariant="white"
          title="The impact of AI scoring"
          light
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.15}>
              <div className="text-center">
                <p className={`text-5xl font-extrabold lg:text-6xl ${metric.color}`}>
                  {metric.value}
                </p>
                <p className="mt-2 text-lg text-gray-400">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection
        title="Let AI do the qualification. Your team does the closing."
        description="Start scoring leads with TALPRO-IQ today. 14-day free trial, no credit card required."
      />
    </>
  );
}
