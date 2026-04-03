import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "GCC Expansion Tracker",
  description:
    "Detect GCC expansions across India 90 days before competitors. Proprietary intelligence engine monitors multiple signal categories across every major Indian city.",
};

const signalCategories = [
  { name: "Corporate filings", description: "New registrations, amendments, and compliance filings that indicate company setup or expansion" },
  { name: "Technology park registrations", description: "IT park and special zone registrations indicating tech operations establishment" },
  { name: "Tax & compliance registrations", description: "New registrations indicating commercial activity in new states or jurisdictions" },
  { name: "Commercial real estate", description: "Office space leases, fit-outs, and occupancy signals in IT hubs and SEZs" },
  { name: "Job market signals", description: "Bulk hiring patterns across major Indian job portals and career pages" },
  { name: "Professional network growth", description: "Employee headcount changes and location-tagged growth patterns" },
  { name: "News & media", description: "Press releases, media coverage, and public announcements of expansion plans" },
  { name: "Government procurement", description: "Tender filings and government portal activity indicating operational setup" },
  { name: "Regulatory filings", description: "Annual returns, financial disclosures, and compliance submissions" },
  { name: "Leadership changes", description: "Senior appointments signaling local operations establishment" },
  { name: "Capital movements", description: "Foreign investment inflows and capital allocation signals" },
  { name: "Infrastructure procurement", description: "IT hardware, office equipment, and infrastructure provisioning signals" },
];

const howItWorks = [
  {
    number: "01",
    title: "Continuous scanning",
    description:
      "Our proprietary intelligence engine monitors dozens of sources in real-time across all Indian cities. Every filing, lease agreement, and job posting is captured and classified.",
  },
  {
    number: "02",
    title: "Signal correlation",
    description:
      "Individual signals are noise. When a company files ROC papers, leases 50,000 sq ft, and posts 200 jobs in the same city within 30 days, that is a pattern. We connect the dots automatically.",
  },
  {
    number: "03",
    title: "Confidence scoring",
    description:
      "Each GCC expansion signal is scored by TALPRO-IQ on likelihood of a large staffing opportunity. Only high-confidence opportunities reach your team.",
  },
  {
    number: "04",
    title: "Instant delivery",
    description:
      "Hot GCC signals go straight to your WhatsApp, Slack, CRM, or email within minutes of detection. Your BD team calls first.",
  },
];

const deliverables = [
  "Company name and parent entity details",
  "Expansion city and specific location (IT park, SEZ)",
  "Estimated headcount ramp (based on office size and job postings)",
  "Key decision-maker contacts with Indian mobile numbers",
  "Compliance status of the entity (PF, PT, TDS, ESIC)",
  "Timeline estimate (lease start, hiring ramp, go-live)",
  "Signal confidence score with factor breakdown",
  "Historical signals timeline for the entity",
];

const metrics = [
  { value: "90-day", label: "Average head start on competitors", color: "text-blue-600" },
  { value: "Multi", label: "Signal categories monitored", color: "text-emerald-500" },
  { value: "95%", label: "GCC detection rate across India", color: "text-gold-500" },
];

export default function GCCTrackingPage() {
  return (
    <>
      <PageHero
        badge="GCC Intelligence"
        title="Detect GCC expansions 90 days before anyone else"
        description="Global Capability Centers are the largest staffing opportunities in India. LeadHunterIQ monitors multiple signal categories to surface GCC expansions before your competitors even know they exist."
        breadcrumbs={[
          { name: "Solutions", href: "/features" },
          { name: "GCC Tracking", href: "/solutions/gcc-tracking" },
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
                The biggest deals are invisible until it&apos;s too late
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                GCC expansions represent the largest staffing opportunities in India &mdash; often 500 to 2,000+ hires per center. But the signals are buried in regulatory filings, real estate transactions, and government portals that no human team can monitor manually.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                By the time a GCC expansion hits the news, every staffing agency in the city is already pitching. The agencies that win are the ones who detected the signal 90 days earlier, built relationships before RFPs went out, and walked in with compliance-ready proposals.
              </p>
            </div>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Without LeadHunterIQ
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Discover GCC expansions from news articles (already 3+ months old)",
                  "Compete with 50+ agencies responding to the same RFP",
                  "No insight into which entity or location to target",
                  "Manual monitoring of filings that update unpredictably",
                  "Miss opportunities in tier-2 and tier-3 cities entirely",
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

      {/* Signal Categories */}
      <Section bg="gray">
        <SectionHead
          badge="Signal Intelligence"
          badgeVariant="emerald"
          title="Multiple signal categories, one unified view"
          description="We don't just track one data source. LeadHunterIQ correlates signals across multiple categories to build a complete picture of every GCC expansion."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signalCategories.map((signal, i) => (
            <FadeIn key={signal.name} delay={i * 0.05}>
              <Card padding="p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{signal.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{signal.description}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section bg="white">
        <SectionHead
          badge="Process"
          title="How GCC tracking works"
          description="From raw regulatory data to actionable opportunity in your inbox."
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
      <Section bg="gray">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <FadeIn direction="left">
            <SectionHead
              badge="Deliverables"
              badgeVariant="gold"
              title="What you get for every GCC signal"
              align="left"
            />
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <Card variant="flat" className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Case example
              </h4>
              <div className="space-y-3">
                <Badge variant="emerald">Detected 87 days early</Badge>
                <h3 className="text-xl font-bold text-gray-900">
                  Deloitte GCC &mdash; Bengaluru expansion
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Day 1:</strong> Government filing detected for new subsidiary entity in Karnataka.</p>
                  <p><strong>Day 12:</strong> Commercial lease signed for 120,000 sq ft in Embassy Tech Village.</p>
                  <p><strong>Day 23:</strong> STPI unit registration application filed.</p>
                  <p><strong>Day 34:</strong> Bulk job postings (180+) appear on Naukri and LinkedIn.</p>
                  <p><strong>Day 87:</strong> News article announces the expansion. Competitors start pitching.</p>
                </div>
                <p className="text-sm font-semibold text-emerald-600">
                  LeadHunterIQ customers had 87 days of exclusive access to this opportunity.
                </p>
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
          title="The numbers speak"
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
        title="Stop finding out about GCC expansions from the news."
        description="Get the signals 90 days before everyone else. Start your free trial today."
      />
    </>
  );
}
