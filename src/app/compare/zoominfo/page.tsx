import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "LeadHunterIQ vs ZoomInfo | India-Built Signal Intelligence",
  description:
    "Compare LeadHunterIQ and ZoomInfo for Indian IT staffing. See why agencies save 80% while getting India-specific GCC tracking, mobile numbers, and compliance data that ZoomInfo can't provide.",
};

function Check() {
  return (
    <svg
      className="h-5 w-5 text-emerald-500 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="h-5 w-5 text-gray-300 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

const features: {
  feature: string;
  leadhunter: boolean | string;
  zoominfo: boolean | string;
}[] = [
  { feature: "India GCC tracking", leadhunter: true, zoominfo: false },
  { feature: "Indian mobile numbers (73%+ hit rate)", leadhunter: true, zoominfo: false },
  { feature: "TALPRO-IQ scoring (staffing-specific)", leadhunter: true, zoominfo: false },
  { feature: "Compliance intelligence (PF/PT/TDS/ESIC)", leadhunter: true, zoominfo: false },
  { feature: "WhatsApp hot alerts", leadhunter: true, zoominfo: false },
  { feature: "India-specific hiring signals", leadhunter: true, zoominfo: false },
  { feature: "MCA/ROC filing monitoring", leadhunter: true, zoominfo: false },
  { feature: "Contact accuracy (India)", leadhunter: "73%+", zoominfo: "~25%" },
  { feature: "Starting price", leadhunter: "\u20B919,999/mo", zoominfo: "\u20B91L+/mo" },
  { feature: "Setup time", leadhunter: "< 1 hour", zoominfo: "2-4 weeks" },
  { feature: "Minimum contract", leadhunter: "Monthly", zoominfo: "Annual" },
  { feature: "Free trial", leadhunter: "14 days", zoominfo: "Demo only" },
  { feature: "CRM integration", leadhunter: true, zoominfo: true },
  { feature: "API access", leadhunter: true, zoominfo: true },
  { feature: "Customer support", leadhunter: "India-based, same-day", zoominfo: "US-based, ticketed" },
  { feature: "Data freshness", leadhunter: "Real-time signals", zoominfo: "Quarterly refresh" },
  { feature: "DPDPA 2023 compliance", leadhunter: true, zoominfo: false },
];

const gaps = [
  {
    title: "No GCC intelligence",
    description:
      "ZoomInfo has zero visibility into Global Capability Center movements in India. No ROC filings, no STPI registrations, no commercial real estate tracking. You are flying blind on the biggest opportunity in Indian staffing.",
  },
  {
    title: "Indian mobile numbers are a black hole",
    description:
      "ZoomInfo was built for US direct dials. Indian mobile numbers, WhatsApp-reachable contacts, and regional number formats are almost entirely missing. Our tests show under 25% accuracy for Indian contacts.",
  },
  {
    title: "No staffing-specific scoring",
    description:
      "ZoomInfo gives you firmographic data, not staffing intelligence. There is no signal scoring for hiring velocity, bench strength demand, or contract staffing propensity. Every lead looks the same.",
  },
  {
    title: "Compliance blind spot",
    description:
      "Walk into a client meeting quoting their PF registration status? Impossible with ZoomInfo. Indian compliance data (PF, PT, TDS, ESIC, Shops Act) is completely absent.",
  },
  {
    title: "Price built for US enterprise",
    description:
      "ZoomInfo pricing starts at \u20B912L+/year and can go to \u20B950L+ for full access. For an Indian staffing agency doing \u20B95-50Cr revenue, that is 2-10% of topline just for lead data.",
  },
];

const steps = [
  {
    number: "1",
    title: "Sign up for a free trial",
    description:
      "Create your LeadHunterIQ account in under 2 minutes. No credit card required. Your 14-day trial includes full platform access.",
  },
  {
    number: "2",
    title: "Connect your CRM",
    description:
      "Native integrations with HubSpot, Zoho CRM, and Salesforce. Your existing pipeline data stays intact while new signals flow in alongside.",
  },
  {
    number: "3",
    title: "Configure your signals",
    description:
      "Set up your target industries, geographies, and company sizes. Customize TALPRO-IQ scoring weights to match your agency's sweet spot.",
  },
  {
    number: "4",
    title: "Go live same day",
    description:
      "Signals start flowing within hours, not weeks. WhatsApp alerts fire for 90+ scores. Your BD team starts calling on real-time intelligence from day one.",
  },
];

export default function CompareZoomInfoPage() {
  return (
    <>
      <PageHero
        badge="Compare"
        title="LeadHunterIQ vs ZoomInfo"
        description="ZoomInfo is the global giant. But for Indian IT staffing, its data gaps cost you deals. See the side-by-side breakdown."
        breadcrumbs={[
          { name: "Compare", href: "/features" },
          { name: "vs ZoomInfo", href: "/compare/zoominfo" },
        ]}
        cta1={{ label: "Try free for 14 days", href: "/demo" }}
        cta2={{ label: "See pricing", href: "/pricing" }}
      />

      {/* Side-by-side Feature Table */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="blue">Feature-by-Feature</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The full comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              How LeadHunterIQ stacks up against ZoomInfo for Indian IT staffing agencies.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">
                    LeadHunterIQ
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">
                    ZoomInfo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.leadhunter === "boolean" ? (
                        <Check />
                      ) : (
                        <span className="font-semibold text-blue-600">
                          {row.leadhunter}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.zoominfo === "boolean" ? (
                        row.zoominfo ? (
                          <Check />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span className="text-gray-400">{row.zoominfo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* Pricing Comparison */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="emerald">80% Savings</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Save 80%+ while getting better India data
            </h2>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card variant="light" className="border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-6">
                <Badge variant="blue">Recommended</Badge>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                LeadHunterIQ
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {"\u20B9"}2.4L{" "}
                </span>
                <span className="text-gray-500">
                  {" "}
                  &ndash; {"\u20B9"}12L/year
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Monthly billing available",
                  "14-day free trial included",
                  "No setup fees",
                  "India-specific GCC + compliance data",
                  "WhatsApp + Slack + email alerts",
                  "Same-day India-based support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
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
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/demo" size="lg" className="w-full">
                  Start free trial
                </Button>
              </div>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card variant="light">
              <h3 className="text-xl font-bold text-gray-900">ZoomInfo</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {"\u20B9"}12L{" "}
                </span>
                <span className="text-gray-500">
                  {" "}
                  &ndash; {"\u20B9"}50L+/year
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Annual contracts only",
                  "No free trial (demo only)",
                  "Setup and onboarding fees extra",
                  "US/global data focus",
                  "Email alerts only",
                  "US-based ticketed support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="https://www.zoominfo.com"
                  variant="ghost"
                  size="lg"
                  className="w-full"
                >
                  Visit ZoomInfo
                </Button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* India-Specific Gaps */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="red">India Gaps</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Where ZoomInfo falls short in India
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              ZoomInfo is excellent for US B2B sales. But Indian IT staffing has
              unique requirements it was never built to solve.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {gaps.map((gap, i) => (
            <FadeIn key={gap.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <h3 className="text-lg font-bold text-gray-900">{gap.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {gap.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How to Switch */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="blue">Easy Switch</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How to switch from ZoomInfo
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Most agencies are live within a single day. No data migration headaches.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div className="mx-auto max-w-3xl mt-10 text-center">
            <Button href="/demo" size="lg">
              Try free for 14 days
            </Button>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Ready to stop paying US prices for India data?"
        description="Join 100+ Indian staffing agencies who switched to LeadHunterIQ and never looked back."
      />
    </>
  );
}
