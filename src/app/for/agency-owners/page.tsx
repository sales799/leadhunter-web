import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For Staffing Agency Owners | LeadHunterIQ",
  description:
    "Stop losing deals to faster agencies. LeadHunterIQ gives you the signals, data, and speed to win more IT staffing contracts.",
};

const painPoints = [
  {
    icon: "⏳",
    title: "Deals lost to faster competitors",
    description:
      "By the time you hear about a GCC expansion or new IT project, three agencies have already pitched. Speed is the new moat.",
  },
  {
    icon: "💸",
    title: "Expensive tools, low ROI",
    description:
      "ZoomInfo, Lusha, Apollo — built for US markets, priced for US budgets. You are paying ₹12L+/year for data that barely covers India.",
  },
  {
    icon: "🎯",
    title: "BD team guessing, not hunting",
    description:
      "Your team scrolls LinkedIn, cold-calls from stale lists, and hopes for the best. There is no systematic pipeline of high-intent signals.",
  },
  {
    icon: "📊",
    title: "No visibility into pipeline health",
    description:
      "You find out about missed opportunities weeks later. No early warnings, no signal-to-action workflow, no accountability trail.",
  },
];

const solutions = [
  {
    metric: "47x",
    label: "cheaper than ZoomInfo",
    detail: "₹2,999/mo vs ₹12L+/year",
  },
  {
    metric: "3.2x",
    label: "more qualified meetings",
    detail: "Signal-driven outreach converts better",
  },
  {
    metric: "6 hrs",
    label: "saved per BD rep per week",
    detail: "No more manual research and list building",
  },
  {
    metric: "24 hrs",
    label: "faster to market",
    detail: "Real-time alerts, not weekly reports",
  },
];

const daySteps = [
  {
    time: "8:00 AM",
    title: "Morning WhatsApp Alerts",
    description:
      "Your phone buzzes with 3 high-intent signals: a GCC just posted 12 Java roles, a fintech raised Series B, and a pharma company filed for IT vendor registration. All scored, all contextualised.",
  },
  {
    time: "9:30 AM",
    title: "BD Team Acts in Minutes",
    description:
      "Your BD reps open their dashboard, see prioritised leads with decision-maker contacts, company intel, and suggested outreach angles. No research needed — they pitch immediately.",
  },
  {
    time: "11:00 AM",
    title: "Compliance-Ready Pitch",
    description:
      "Every signal comes with source attribution, company registration details, and hiring timeline estimates. Your proposal looks like you have an inside track — because you do.",
  },
  {
    time: "2:00 PM",
    title: "Close Faster",
    description:
      "While competitors are still discovering the opportunity, you are already in the second meeting. The deal is yours because you moved first with better data.",
  },
];

const comparisonRows = [
  { feature: "Monthly cost", leadhunter: "₹2,999", competitor: "₹1,00,000+" },
  { feature: "Annual cost", leadhunter: "₹35,988", competitor: "₹12,00,000+" },
  { feature: "India-specific signals", leadhunter: "Yes", competitor: "Limited" },
  { feature: "WhatsApp alerts", leadhunter: "Yes", competitor: "No" },
  { feature: "GCC expansion tracking", leadhunter: "Yes", competitor: "No" },
  { feature: "AI lead scoring", leadhunter: "Yes", competitor: "Basic" },
  { feature: "Decision-maker contacts", leadhunter: "Verified", competitor: "Often outdated" },
  { feature: "Setup time", leadhunter: "10 minutes", competitor: "2-4 weeks" },
];

export default function AgencyOwnersPage() {
  return (
    <>
      <PageHero
        badge="For Agency Owners"
        title="Stop losing deals to faster agencies"
        description="LeadHunterIQ gives you the signals, data, and speed to win more IT staffing contracts — at a fraction of the cost of legacy tools."
        cta1={{ label: "Start Free Trial", href: "/demo" }}
        cta2={{ label: "See Pricing", href: "/pricing" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "Agency Owners", href: "/for/agency-owners" },
        ]}
      />

      {/* Pain Points */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              The problem
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Running an agency shouldn&apos;t feel like guesswork
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Most staffing agencies lose 60% of winnable deals simply because
              they found out too late. Sound familiar?
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <span className="text-3xl">{point.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Solution / ROI */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              The LeadHunterIQ advantage
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              The ROI is impossible to ignore
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              One closed deal from a signal pays for 3+ years of LeadHunterIQ.
              Here is what agency owners see in the first 90 days.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <Card className="text-center h-full">
                <p className="text-4xl font-extrabold text-blue-600">
                  {s.metric}
                </p>
                <p className="mt-2 text-base font-semibold text-gray-900">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-gray-500">{s.detail}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Day in the Life */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              A day with LeadHunterIQ
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              From signal to signed contract
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Here is what a typical day looks like for agencies using
              LeadHunterIQ.
            </p>
          </div>
        </FadeIn>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-blue-200 hidden sm:block" />
          <div className="space-y-10">
            {daySteps.map((step, i) => (
              <FadeIn key={step.time} delay={i * 0.15}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      {step.time}
                    </div>
                  </div>
                  <div className="pt-2">
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
        </div>
      </Section>

      {/* Pricing Comparison */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              Pricing comparison
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              ₹2,999/mo vs ₹12L+/year
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Enterprise-level intelligence without the enterprise price tag.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">
                    LeadHunterIQ
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-400">
                    Legacy Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="py-3 px-6 text-gray-700">{row.feature}</td>
                    <td className="py-3 px-6 text-center font-semibold text-gray-900">
                      {row.leadhunter}
                    </td>
                    <td className="py-3 px-6 text-center text-gray-400">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonial */}
      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="mt-6 text-xl font-medium text-gray-900 leading-relaxed sm:text-2xl">
              We closed 3 new contracts in the first month — all from signals we
              would have completely missed before. The ROI was obvious within the
              first week.
            </blockquote>
            <div className="mt-8">
              <p className="font-bold text-gray-900">Rajesh K.</p>
              <p className="text-sm text-gray-500">
                CEO, 150-person Staffing Agency, Bangalore
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <CTASection
        title="Your agency deserves better leads."
        description="Join 200+ Indian staffing agencies using AI-powered signal intelligence to win more contracts."
      />
    </>
  );
}
