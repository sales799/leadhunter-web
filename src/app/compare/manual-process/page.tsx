import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "LeadHunterIQ vs Manual BD Process | Automate Signal Intelligence",
  description:
    "Compare LeadHunterIQ with manual BD processes for Indian IT staffing. Save 4 hours/day, cover 50+ signal sources, and replace a \u20B94-8L/yr BD salary with \u20B92.4L/yr in automation.",
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
  manual: boolean | string;
}[] = [
  { feature: "Time per day", leadhunter: "5 minutes", manual: "4+ hours" },
  { feature: "Signal sources monitored", leadhunter: "50+", manual: "3-5" },
  { feature: "Annual cost", leadhunter: "\u20B92.4L/yr", manual: "\u20B94-8L/yr (BD salary)" },
  { feature: "Speed to detect signals", leadhunter: "Real-time", manual: "60-90 day lag" },
  { feature: "GCC expansion tracking", leadhunter: true, manual: false },
  { feature: "AI-powered lead scoring", leadhunter: true, manual: false },
  { feature: "Indian mobile number enrichment", leadhunter: true, manual: false },
  { feature: "Compliance data included", leadhunter: true, manual: false },
  { feature: "WhatsApp instant alerts", leadhunter: true, manual: false },
  { feature: "CRM auto-sync", leadhunter: true, manual: false },
  { feature: "Consistent quality (no sick days)", leadhunter: true, manual: false },
  { feature: "Scales without additional hires", leadhunter: true, manual: false },
  { feature: "Government filing monitoring", leadhunter: true, manual: false },
  { feature: "DPDPA 2023 compliant", leadhunter: true, manual: "Varies" },
  { feature: "Relationship building", leadhunter: "Frees time for it", manual: "Buried in research" },
];

const timeBreakdown = [
  { task: "Scanning job boards (Naukri, Indeed, LinkedIn)", manual: "45 min", auto: "Automated" },
  { task: "Checking news for expansion signals", manual: "30 min", auto: "Automated" },
  { task: "LinkedIn company page monitoring", manual: "30 min", auto: "Automated" },
  { task: "Google Alerts review and filtering", manual: "20 min", auto: "Automated" },
  { task: "Finding contact details", manual: "45 min", auto: "Automated" },
  { task: "Data entry into CRM", manual: "30 min", auto: "Auto-synced" },
  { task: "Qualifying and scoring leads", manual: "40 min", auto: "AI-scored" },
  { task: "Preparing outreach context", manual: "20 min", auto: "Included" },
];

const roiData = {
  bdSalary: "4-8L",
  toolCost: "2.4L",
  timeSaved: "4 hrs/day",
  signalCoverage: "50+ sources vs 3-5 manual",
  speedAdvantage: "Real-time vs 60-90 day lag",
  dealAcceleration: "2-3x faster pipeline",
};

const gaps = [
  {
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Speed kills deals",
    description:
      "Manual BD spots signals 60-90 days late. By then, your competitor has already submitted profiles. In staffing, the first call wins 70% of the time.",
  },
  {
    iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Blind spots everywhere",
    description:
      "A human BD can realistically monitor 3-5 signal sources. LeadHunterIQ monitors 50+, including government filings, regulatory data, and commercial real estate that no person can track manually.",
  },
  {
    iconPath: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
    title: "Cannot scale",
    description:
      "Want to monitor 500 more companies? Hire another BD. With LeadHunterIQ, scaling from 100 to 10,000 monitored companies costs exactly the same. Your coverage grows without your headcount.",
  },
  {
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "No compliance context",
    description:
      "Your BD rep is not checking government filings, PF registration status, or ESIC compliance before calls. LeadHunterIQ enriches every signal with compliance data automatically.",
  },
];

const beforeAfterColumns = [
  {
    title: "Before LeadHunterIQ",
    items: [
      "4 hrs/day scanning job boards",
      "Outdated spreadsheet tracking",
      "3-5 signal sources max",
      "Guessing which leads to call first",
      "No compliance context",
    ],
    variant: "flat" as const,
    itemColor: "text-gray-400",
    iconType: "cross",
  },
  {
    title: "After LeadHunterIQ",
    items: [
      "AI-scored signals on WhatsApp by 9 AM",
      "50+ sources monitored automatically",
      "Contact data enriched and ready",
      "Compliance context per company",
      "CRM auto-populated with context",
    ],
    variant: "light" as const,
    itemColor: "text-gray-600",
    iconType: "check",
  },
  {
    title: "BD rep now spends time on",
    items: [
      "Building client relationships",
      "Understanding hiring needs",
      "Strategic account planning",
      "Closing high-value contracts",
      "Growing existing accounts",
    ],
    variant: "light" as const,
    itemColor: "text-gray-600",
    iconType: "star",
  },
];

export default function CompareManualPage() {
  return (
    <>
      <PageHero
        badge="Compare"
        title="LeadHunterIQ vs Manual BD Process"
        description="Your BD team spends 4+ hours a day on research that an AI engine does in 5 minutes. See the real cost of manual signal hunting."
        breadcrumbs={[
          { name: "Compare", href: "/features" },
          { name: "vs Manual Process", href: "/compare/manual-process" },
        ]}
        cta1={{ label: "Try free for 14 days", href: "/demo" }}
        cta2={{ label: "Calculate your ROI", href: "/pricing" }}
      />

      {/* Hero Stats */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { stat: "4 hrs/day", label: "Time saved per BD rep", color: "text-blue-600" },
              { stat: "50+", label: "Signal sources vs 3-5 manual", color: "text-emerald-600" },
              { stat: "\u20B92.4L/yr", label: "vs \u20B94-8L BD salary", color: "text-blue-600" },
              { stat: "Real-time", label: "vs 60-90 day lag", color: "text-emerald-600" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center rounded-xl border border-gray-200 p-6"
              >
                <div className={`text-3xl font-extrabold ${item.color} lg:text-4xl`}>
                  {item.stat}
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Side-by-side Feature Table */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="blue">Side by Side</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Automation vs manual research
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Every hour your BD team spends on research is an hour they are not building relationships.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Dimension
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">
                    LeadHunterIQ
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">
                    Manual BD
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
                      {typeof row.manual === "boolean" ? (
                        row.manual ? (
                          <Check />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span className="text-gray-400">{row.manual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* Time Breakdown */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="red">Time Analysis</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Where 4 hours a day actually goes
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A typical BD rep&apos;s daily research routine, broken down task by task.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    Daily task
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">
                    Manual
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">
                    LeadHunterIQ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {timeBreakdown.map((row) => (
                  <tr
                    key={row.task}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.task}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-400 font-medium">
                      {row.manual}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                        <svg
                          className="h-3.5 w-3.5"
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
                        {row.auto}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    Total daily time
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-red-600">
                    4+ hours
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-blue-600">
                    5 minutes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* India-Specific Gaps */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="red">Reality Check</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What manual BD is actually costing you
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              It is not just the salary. It is the deals you never see.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {gaps.map((gap, i) => (
            <FadeIn key={gap.title} delay={i * 0.1}>
              <Card variant="light" className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={gap.iconPath} />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">
                    {gap.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {gap.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ROI Calculation */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Badge variant="emerald">ROI Calculator</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The math is simple
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <Card variant="flat" padding="p-8 lg:p-10">
              <div className="space-y-6">
                {/* Cost comparison */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center">
                    <p className="text-sm font-semibold text-red-800 uppercase tracking-wide">
                      Manual BD Cost
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-red-600">
                      {"\u20B9"}{roiData.bdSalary}/yr
                    </p>
                    <p className="mt-1 text-xs text-red-400">
                      Salary + benefits + training + attrition
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-6 text-center">
                    <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">
                      LeadHunterIQ Cost
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-emerald-600">
                      {"\u20B9"}{roiData.toolCost}/yr
                    </p>
                    <p className="mt-1 text-xs text-emerald-500">
                      Full platform access, all features included
                    </p>
                  </div>
                </div>

                {/* ROI metrics */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {roiData.timeSaved}
                        </p>
                        <p className="text-xs text-gray-500">
                          Time saved daily per BD rep
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
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
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {roiData.signalCoverage}
                        </p>
                        <p className="text-xs text-gray-500">
                          Signal source coverage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                        <svg
                          className="h-5 w-5 text-emerald-600"
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
                        <p className="text-sm font-semibold text-gray-900">
                          {roiData.speedAdvantage}
                        </p>
                        <p className="text-xs text-gray-500">
                          Signal detection speed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                        <svg
                          className="h-5 w-5 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {roiData.dealAcceleration}
                        </p>
                        <p className="text-xs text-gray-500">
                          Pipeline acceleration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="rounded-xl bg-blue-600 p-6 text-center text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Bottom line
                  </p>
                  <p className="mt-2 text-xl font-extrabold">
                    Save {"\u20B9"}3.6L &ndash; {"\u20B9"}7.6L/year per BD rep while covering 10x more signals
                  </p>
                  <p className="mt-1 text-sm text-blue-200">
                    That is before counting the deals you win by being first to call.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* Not Replacing BD, Supercharging */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="gold">Important</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We don&apos;t replace your BD team. We supercharge them.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              LeadHunterIQ handles the research grunt work so your BD reps spend
              their time where humans are irreplaceable: building relationships,
              understanding client needs, and closing deals.
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-3">
          {beforeAfterColumns.map((col, colIndex) => (
            <FadeIn key={col.title} delay={colIndex * 0.1}>
              <Card variant={col.variant} className="h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${col.itemColor}`}
                    >
                      {col.iconType === "cross" ? (
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-gray-300 mt-0.5"
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
                      ) : col.iconType === "check" ? (
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5"
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
                      ) : (
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-blue-500 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Migration / Getting Started */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="blue">Get Started Today</Badge>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Go live in under an hour
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              No implementation project. No training program. Sign up, connect your
              CRM, and your BD team gets AI-scored signals on WhatsApp by tomorrow morning.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/demo" size="lg">
                Try free for 14 days
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                See pricing
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Stop hunting manually. Start closing faster."
        description="Join 100+ Indian staffing agencies who replaced 4 hours of daily research with 5 minutes of AI-powered intelligence."
      />
    </>
  );
}
