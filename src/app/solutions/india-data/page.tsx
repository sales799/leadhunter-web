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
  title: "India-First Data Layer",
  description:
    "Indian contact data that actually works. 73%+ mobile hit rate, 95% email verification, GST/PAN verification. Built for India, not adapted from global tools.",
};

const waterfallSteps = [
  {
    number: "01",
    source: "RocketReach",
    type: "Primary enrichment",
    description: "First-pass contact enrichment using the largest professional contact database. Provides email, phone, and social profiles.",
    hitRate: "45%",
  },
  {
    number: "02",
    source: "Snov.io",
    type: "Email enrichment",
    description: "Email-focused enrichment layer that fills gaps from RocketReach. Particularly strong on verified business email addresses.",
    hitRate: "+12%",
  },
  {
    number: "03",
    source: "Apollo",
    type: "Cross-reference",
    description: "Cross-references and validates contact data from previous steps. Adds missing phone numbers and job title verification.",
    hitRate: "+8%",
  },
  {
    number: "04",
    source: "NeverBounce",
    type: "Verification",
    description: "Every email address is verified for deliverability in real-time. Catches invalid, disposable, and catch-all addresses.",
    hitRate: "95% verified",
  },
  {
    number: "05",
    source: "LinkedIn",
    type: "Profile enrichment",
    description: "Enriches professional context: current designation, company tenure, reporting structure, and professional interests.",
    hitRate: "+5%",
  },
  {
    number: "06",
    source: "MCA filings",
    type: "India-specific",
    description: "Ministry of Corporate Affairs director data, registered office addresses, and authorized signatory information. The India-only layer no global tool has.",
    hitRate: "+3%",
  },
];

const globalVsIndia = [
  { feature: "Indian mobile numbers", global: "<20%", leadhunter: "73%+", winner: "leadhunter" },
  { feature: "Email deliverability", global: "60-70%", leadhunter: "95%+", winner: "leadhunter" },
  { feature: "GST/PAN verification", global: "No", leadhunter: "Yes", winner: "leadhunter" },
  { feature: "MCA director data", global: "No", leadhunter: "Yes", winner: "leadhunter" },
  { feature: "WhatsApp-ready numbers", global: "No", leadhunter: "Yes", winner: "leadhunter" },
  { feature: "State-level compliance data", global: "No", leadhunter: "Yes", winner: "leadhunter" },
  { feature: "Tier-2/3 city coverage", global: "Minimal", leadhunter: "Full", winner: "leadhunter" },
  { feature: "DPDPA-compliant processing", global: "No", leadhunter: "Yes", winner: "leadhunter" },
];

const dataPoints = [
  "Verified Indian mobile numbers (WhatsApp-ready)",
  "Business email addresses (95% deliverability)",
  "LinkedIn profile URL and current designation",
  "Direct reporting structure and team size",
  "Company GSTIN with active/inactive status",
  "Company PAN and registered office address",
  "MCA director names and DIN numbers",
  "Company incorporation date and authorized capital",
  "Registered office state for compliance mapping",
  "Historical director changes and board composition",
];

const metrics = [
  { value: "73%+", label: "Indian mobile number hit rate", color: "text-blue-600" },
  { value: "95%", label: "Email verification accuracy", color: "text-emerald-500" },
  { value: "6-layer", label: "Waterfall enrichment pipeline", color: "text-gold-500" },
];

export default function IndiaDataPage() {
  return (
    <>
      <PageHero
        badge="India-Built"
        title="Indian contact data that actually works"
        description="Global enrichment tools were built for the US. Indian mobile numbers, MCA filings, and GST verification are afterthoughts. We built the data layer India-first."
        breadcrumbs={[
          { name: "Solutions", href: "/features" },
          { name: "India Data", href: "/solutions/india-data" },
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
                Global tools give you US emails. Your BD team needs Indian mobile numbers.
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                ZoomInfo, Lusha, and Apollo were built for the US market. Their Indian data coverage is an afterthought &mdash; less than 20% hit rate on Indian mobile numbers, no GSTIN verification, no MCA data, and no understanding of Indian business hierarchies.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Your BD team doesn&apos;t send cold emails. They call, they WhatsApp, they walk into offices with printed compliance reports. They need Indian mobile numbers that connect, verified email addresses, and company data from MCA and GST portals.
              </p>
            </div>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                What global tools get wrong in India
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Mobile numbers are the primary business channel, not email",
                  "WhatsApp is how deals actually get done in Indian staffing",
                  "Company verification requires GSTIN and PAN, not just domain",
                  "MCA filings reveal directors, not just LinkedIn titles",
                  "State-level compliance data is critical for staffing pitches",
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

      {/* Waterfall Enrichment */}
      <Section bg="gray">
        <SectionHead
          badge="Enrichment Pipeline"
          badgeVariant="blue"
          title="6-layer waterfall enrichment"
          description="Each contact passes through six enrichment layers. If one source misses, the next one catches it. The result: 73%+ hit rate on Indian mobile numbers."
        />
        <div className="space-y-4">
          {waterfallSteps.map((step, i) => (
            <FadeIn key={step.source} delay={i * 0.08}>
              <Card padding="p-0" className="overflow-hidden">
                <div className="flex items-stretch">
                  <div className="flex items-center justify-center bg-blue-600 px-5 text-white font-mono font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-gray-900">{step.source}</h4>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">{step.type}</span>
                      </div>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:text-right">
                      <span className="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
                        {step.hitRate}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
            <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">Combined result</p>
            <p className="mt-1 text-3xl font-extrabold text-emerald-700">73%+ Indian mobile hit rate</p>
            <p className="mt-1 text-sm text-emerald-600">vs. &lt;20% from any single global tool</p>
          </div>
        </FadeIn>
      </Section>

      {/* Comparison Table */}
      <Section bg="white">
        <SectionHead
          badge="Comparison"
          badgeVariant="gold"
          title="Global tools vs. LeadHunterIQ"
          description="Side-by-side on Indian market data coverage."
        />
        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-400">Global Tools</th>
                  <th className="py-3 pl-4 text-center font-semibold text-blue-600">LeadHunterIQ</th>
                </tr>
              </thead>
              <tbody>
                {globalVsIndia.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-600">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{row.global}</td>
                    <td className="py-3 pl-4 text-center font-semibold text-emerald-600">{row.leadhunter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* What You Get */}
      <Section bg="gray">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <FadeIn direction="left">
            <SectionHead
              badge="Data Points"
              badgeVariant="emerald"
              title="Every contact, fully enriched"
              align="left"
            />
            <ul className="space-y-4">
              {dataPoints.map((item) => (
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
                See the data quality
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                GST &amp; PAN verification sample
              </h4>
              <div className="space-y-3 text-sm">
                <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company</span>
                    <span className="font-semibold text-gray-900">Infosys BPM Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">GSTIN</span>
                    <span className="font-mono text-gray-900">29AABCI1234F1Z5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">GST Status</span>
                    <Badge variant="emerald">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">PAN</span>
                    <span className="font-mono text-gray-900">AABCI1234F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">State</span>
                    <span className="text-gray-900">Karnataka</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Incorporation</span>
                    <span className="text-gray-900">April 2002</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Sample data for illustration only. Actual data verified against MCA and GST portals in real-time.
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
          title="Data quality that converts"
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
        title="Stop wasting time on bad data."
        description="Get Indian contact data that actually connects. Start your free trial today."
      />
    </>
  );
}
