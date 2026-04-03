import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For Staffing Agency Owners | LeadHunterIQ",
  description:
    "Stop losing deals to faster agencies. LeadHunterIQ monitors 50+ sources, scores with proprietary AI signals, and delivers dossier-grade intelligence for ₹19,999/month.",
};

const painPoints = [
  {
    title: "Deals lost to faster competitors",
    description:
      "By the time you hear about a GCC expansion or new IT project, three agencies have already pitched. Speed is the new moat.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Global tools, Indian prices impossible",
    description:
      "ZoomInfo charges $7,000/year for contacts that barely cover India. Apollo can't read government filings. Your Indian market needs Indian intelligence.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "BD team guessing, not hunting",
    description:
      "Your team scrolls LinkedIn, cold-calls from stale lists, and hopes for the best. There is no systematic pipeline of high-intent signals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "No visibility into pipeline health",
    description:
      "You find out about missed opportunities weeks later. No early warnings, no signal-to-action workflow, no accountability trail.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    metric: "₹170",
    label: "per confirmed lead (fully loaded)",
    detail: "vs. ₹2,000+ with manual BD research",
  },
  {
    metric: "3.2x",
    label: "more qualified meetings",
    detail: "Signal-driven outreach converts better",
  },
  {
    metric: "90 days",
    label: "earlier than competitors",
    detail: "Detect GCC expansions before the news",
  },
  {
    metric: "50+",
    label: "data sources monitored 24/7",
    detail: "Including government filings, regulatory data, GSTIN",
  },
];

const daySteps = [
  {
    time: "8:00 AM",
    title: "Morning WhatsApp Alerts",
    description:
      "Your phone buzzes with 3 high-intent signals: a GCC just posted 12 Java roles, a fintech raised Series B, and a pharma company filed for IT vendor registration. All scored with proprietary AI signals, all contextualised.",
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
      "Every signal comes with source attribution, GSTIN verification, and hiring timeline estimates. Your proposal looks like you have an inside track — because you do.",
  },
  {
    time: "2:00 PM",
    title: "Close Faster",
    description:
      "While competitors are still discovering the opportunity, you are already in the second meeting. The deal is yours because you moved first with better data.",
  },
];

const comparisonRows = [
  { feature: "Monthly cost", leadhunter: "From ₹19,999", competitor: "$7,000+/year" },
  { feature: "Confirmed leads/month", leadhunter: "40-400", competitor: "DIY" },
  { feature: "India-specific signals (gov filings, regulatory)", leadhunter: "Yes", competitor: "No" },
  { feature: "WhatsApp alerts", leadhunter: "Yes", competitor: "No" },
  { feature: "GCC expansion tracking", leadhunter: "90 days early", competitor: "No" },
  { feature: "AI lead scoring (proprietary)", leadhunter: "TALPRO-IQ", competitor: "Basic" },
  { feature: "Decision-maker contacts", leadhunter: "Multi-layer verified", competitor: "Often outdated" },
  { feature: "Setup time", leadhunter: "5 minutes", competitor: "2-4 weeks" },
];

export default function AgencyOwnersPage() {
  return (
    <>
      <PageHero
        badge="For Agency Owners"
        title="Stop losing deals to faster agencies"
        description="LeadHunterIQ monitors 50+ sources, scores with proprietary AI signals, and delivers dossier-grade intelligence to your WhatsApp — at ₹19,999/month, not $7,000/year."
        cta1={{ label: "Start Free Trial", href: "/demo" }}
        cta2={{ label: "See Pricing", href: "/pricing" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "Agency Owners", href: "/for/agency-owners" },
        ]}
      />

      {/* Pain Points */}
      <Section bg="white">
        <SectionHead
          badge="The Problem"
          badgeVariant="red"
          title="Running an agency shouldn't feel like guesswork"
          description="Most staffing agencies lose 60% of winnable deals simply because they found out too late. Sound familiar?"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed font-body">
                  {point.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Solution / ROI */}
      <Section bg="gray">
        <SectionHead
          badge="The ROI"
          badgeVariant="emerald"
          title="The ROI is impossible to ignore"
          description="One closed deal from a signal pays for 5+ years of LeadHunterIQ. Here is what agency owners see in the first 90 days."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <Card className="text-center h-full">
                <p className="text-4xl font-mono font-bold text-blue-600">
                  {s.metric}
                </p>
                <p className="mt-2 text-base font-heading font-semibold text-gray-900">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-gray-500 font-body">{s.detail}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Day in the Life */}
      <Section bg="white">
        <SectionHead
          badge="A Day With LeadHunterIQ"
          title="From signal to signed contract"
          description="Here is what a typical day looks like for agencies using LeadHunterIQ."
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-blue-200 hidden sm:block" />
          <div className="space-y-10">
            {daySteps.map((step, i) => (
              <FadeIn key={step.time} delay={i * 0.15}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold">
                      {step.time}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-heading font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed font-body">
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
        <SectionHead
          badge="Comparison"
          badgeVariant="gold"
          title="₹19,999/mo vs $7,000+/year"
          description="Enterprise-level intelligence without the enterprise price tag."
        />
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-heading font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-heading font-semibold text-blue-600">
                    LeadHunterIQ
                  </th>
                  <th className="text-center py-4 px-6 font-heading font-semibold text-gray-400">
                    Global Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="py-3 px-6 text-gray-700 font-body">{row.feature}</td>
                    <td className="py-3 px-6 text-center font-semibold text-gray-900 font-body">
                      {row.leadhunter}
                    </td>
                    <td className="py-3 px-6 text-center text-gray-400 font-body">
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
              className="mx-auto h-10 w-10 text-emerald-500/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="mt-6 text-xl font-heading font-medium text-gray-900 leading-relaxed sm:text-2xl">
              We detected a Deloitte GCC expansion 3 months before it hit the
              news. That one signal paid for a year of LeadHunterIQ.
            </blockquote>
            <div className="mt-8">
              <p className="font-heading font-bold text-gray-900">Rajesh K.</p>
              <p className="text-sm text-gray-500 font-body">
                Director, TechStaff Solutions, Bengaluru
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Your agency deserves better leads."
        description="Join Indian staffing agencies using AI-powered signal intelligence to win more contracts. 14-day free trial."
      />
    </>
  );
}
