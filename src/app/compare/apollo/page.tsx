import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "LeadHunterIQ vs Apollo.io | India Staffing Intelligence",
  description:
    "Compare LeadHunterIQ and Apollo.io for Indian IT staffing. Apollo has a massive database and free tier. LeadHunterIQ adds India-specific GCC tracking, staffing scoring, and compliance intelligence.",
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
  apollo: boolean | string;
}[] = [
  { feature: "India GCC tracking", leadhunter: true, apollo: false },
  { feature: "Indian mobile numbers (industry-leading hit rate)", leadhunter: true, apollo: false },
  { feature: "TALPRO-IQ scoring (staffing-specific)", leadhunter: true, apollo: false },
  { feature: "Compliance intelligence (PF/PT/TDS/ESIC)", leadhunter: true, apollo: false },
  { feature: "WhatsApp hot alerts", leadhunter: true, apollo: false },
  { feature: "India-specific hiring signals", leadhunter: true, apollo: false },
  { feature: "Government filing monitoring", leadhunter: true, apollo: false },
  { feature: "Global contact database", leadhunter: "India-focused", apollo: "275M+ contacts" },
  { feature: "Email sequences", leadhunter: "Via CRM", apollo: true },
  { feature: "Free tier available", leadhunter: "14-day trial", apollo: "Yes (limited)" },
  { feature: "Contact accuracy (India)", leadhunter: "Industry-leading", apollo: "~35%" },
  { feature: "Starting price (paid)", leadhunter: "\u20B919,999/mo", apollo: "$49/mo" },
  { feature: "CRM integration", leadhunter: true, apollo: true },
  { feature: "API access", leadhunter: true, apollo: true },
  { feature: "DPDPA 2023 compliance", leadhunter: true, apollo: false },
  { feature: "Data freshness (India)", leadhunter: "Real-time signals", apollo: "Community-updated" },
];

const apolloStrengths = [
  {
    title: "Massive global database",
    description:
      "275M+ contacts worldwide. If you are doing outbound to US or European companies, Apollo gives you solid coverage at scale.",
  },
  {
    title: "Generous free tier",
    description:
      "Apollo offers a free plan with limited credits. Great for agencies just starting out with outbound or testing email sequences.",
  },
  {
    title: "Built-in email sequences",
    description:
      "Apollo includes email sequencing, A/B testing, and send scheduling natively. No need for a separate tool for basic outbound.",
  },
  {
    title: "Strong Chrome extension",
    description:
      "LinkedIn prospecting with Apollo's extension is smooth. Extract contacts while browsing profiles and push directly to sequences.",
  },
];

const leadhunterWins = [
  {
    title: "India data accuracy",
    description:
      "Apollo's India data is community-sourced and frequently outdated. LeadHunterIQ uses a proprietary enrichment pipeline for industry-leading Indian mobile accuracy.",
  },
  {
    title: "Staffing-specific intelligence",
    description:
      "Apollo gives you contacts. LeadHunterIQ gives you scored signals: which companies are expanding, hiring, opening GCCs, or showing contract staffing intent. Your BD team calls with context, not cold.",
  },
  {
    title: "GCC expansion tracking",
    description:
      "The single biggest opportunity in Indian IT staffing and Apollo has zero visibility. Our tracker monitors government filings, regulatory data, and commercial real estate for 90-day early warnings.",
  },
  {
    title: "Compliance intelligence",
    description:
      "Walk into meetings knowing the client's PF, PT, TDS, and ESIC compliance status. Apollo has no concept of Indian regulatory data.",
  },
  {
    title: "WhatsApp delivery",
    description:
      "Indian business decisions happen on WhatsApp, not email. Score-90+ signals hit your team's WhatsApp instantly. Apollo's email-first approach misses this entirely.",
  },
];

const useBoth = [
  {
    tool: "Apollo.io",
    useFor:
      "Global outbound prospecting, email sequences to US/EU contacts, LinkedIn data extraction, cold email campaigns to international clients.",
  },
  {
    tool: "LeadHunterIQ",
    useFor:
      "India-specific signal intelligence, GCC tracking, staffing lead scoring, Indian mobile numbers, compliance data, WhatsApp alerts for hot signals.",
  },
];

export default function CompareApolloPage() {
  return (
    <>
      <PageHero
        badge="Compare"
        title="LeadHunterIQ vs Apollo.io"
        description="Apollo is a powerful global prospecting tool. LeadHunterIQ is purpose-built for Indian IT staffing intelligence. Here's how they compare and how they complement each other."
        breadcrumbs={[
          { name: "Compare", href: "/features" },
          { name: "vs Apollo.io", href: "/compare/apollo" },
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
              Both are strong tools. The question is which one solves your specific problem.
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
                  <th className="px-6 py-4 text-center font-semibold text-purple-600">
                    Apollo.io
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
                        row.leadhunter ? (
                          <Check />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span className="font-semibold text-blue-600">
                          {row.leadhunter}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {typeof row.apollo === "boolean" ? (
                        row.apollo ? (
                          <Check />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span className="text-gray-500">{row.apollo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* Apollo Strengths (fair comparison) */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="emerald">Fair Comparison</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Where Apollo.io shines
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Credit where it is due. Apollo does several things very well.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {apolloStrengths.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Card variant="light" className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="h-5 w-5 text-purple-500"
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
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Where LeadHunterIQ Wins */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="blue">India Advantage</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Where LeadHunterIQ wins
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              For Indian IT staffing, these gaps in Apollo mean missed deals.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl space-y-6">
          {leadhunterWins.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <Card variant="flat" className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pricing Comparison */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="emerald">Pricing</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pricing comparison
            </h2>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card variant="light" className="border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-6">
                <Badge variant="blue">Best for India</Badge>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                LeadHunterIQ
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {"\u20B9"}19,999
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {"\u20B9"}2.4L &ndash; {"\u20B9"}12L/year depending on plan
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Full India signal intelligence",
                  "GCC tracking + compliance data",
                  "TALPRO-IQ scoring engine",
                  "WhatsApp + Slack alerts",
                  "CRM integration included",
                  "14-day free trial",
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
              <h3 className="text-xl font-bold text-gray-900">Apollo.io</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  $49
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                $49 &ndash; $119/mo paid plans; free tier available
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "275M+ global contacts",
                  "Email sequences built-in",
                  "Chrome extension for LinkedIn",
                  "Free tier with limited credits",
                  "CRM integration included",
                  "API access on paid plans",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-purple-400 mt-0.5"
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
                <Button
                  href="https://www.apollo.io"
                  variant="ghost"
                  size="lg"
                  className="w-full"
                >
                  Visit Apollo.io
                </Button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Use Both Section */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="gold">Pro Tip</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Use both for maximum coverage
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Many of our top-performing agencies use Apollo for global outbound and
              LeadHunterIQ for India intelligence. They complement each other perfectly.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
          {useBoth.map((item, i) => (
            <FadeIn key={item.tool} delay={i * 0.15}>
              <Card variant="flat" className="h-full">
                <Badge variant={i === 0 ? "navy" : "blue"}>
                  {item.tool}
                </Badge>
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  Use for
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.useFor}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mx-auto max-w-3xl mt-10 rounded-xl bg-blue-50 border border-blue-100 p-6 text-center">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Integration tip:</strong> Both tools integrate with HubSpot,
              Zoho CRM, and Salesforce. Run Apollo sequences for international
              outreach and LeadHunterIQ signals for India leads, all flowing
              into the same CRM pipeline.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Migration Section */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="blue">Getting Started</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Add LeadHunterIQ alongside Apollo
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              No need to replace anything. Sign up, connect your CRM, and start
              receiving India-specific signals within hours. Your Apollo workflow
              stays untouched.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/demo" size="lg">
                Try free for 14 days
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                Compare plans
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="India intelligence that Apollo can't match."
        description="Add LeadHunterIQ to your stack and unlock GCC tracking, staffing-specific scoring, and Indian mobile numbers."
      />
    </>
  );
}
