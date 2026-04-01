import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For Consulting Firms | LeadHunterIQ",
  description:
    "Win consulting engagements before the RFP drops. LeadHunterIQ detects digital transformation signals, M&A activity, and compliance deadlines across Indian enterprises.",
};

const painPoints = [
  {
    title: "RFPs arrive too late",
    description:
      "By the time a formal RFP hits your inbox, the incumbent has already shaped the scope. You need to be in the room 6 months earlier, when the decision is still being formed.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Relationship-driven pipeline is fragile",
    description:
      "Your pipeline depends on who-knows-who. When a key partner leaves, deals evaporate. You need a signal-driven pipeline that feeds itself.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "No early warning system",
    description:
      "Digital transformation projects, M&A integrations, and compliance initiatives start months before anyone publishes an RFP. Without signals, you miss the window.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "India market intelligence gap",
    description:
      "Global consulting databases cover Fortune 500s. Who covers the 10,000+ Indian enterprises filing MCA returns, expanding offices, and hiring transformation leaders?",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
];

const signals = [
  { metric: "M&A Activity", label: "Post-acquisition integration", detail: "Companies need consulting for systems, culture, and process integration" },
  { metric: "Board Changes", label: "New independent directors", detail: "Governance changes trigger strategic consulting and audit readiness" },
  { metric: "ESG Compliance", label: "BRSR filings and sustainability hires", detail: "First-time ESG reporters need frameworks, processes, and external validation" },
  { metric: "Market Entry", label: "New office and entity registrations", detail: "Companies entering new cities need local strategy, compliance, and ops support" },
];

const plays = [
  { number: "01", title: "Digital Transformation Signal", description: "Detect companies posting CDO/CTO roles or cloud migration engineers. These hiring patterns precede transformation RFPs by 3-6 months." },
  { number: "02", title: "M&A Integration Play", description: "Track MCA filings and press for merger activity. Post-acquisition companies need consulting for systems integration and process standardization." },
  { number: "03", title: "ESG Compliance Push", description: "Companies publishing first ESG reports or hiring sustainability officers. BRSR compliance creates urgent consulting demand." },
  { number: "04", title: "Expansion Market Entry", description: "Track STPI registrations and commercial leases. Companies opening new offices need local consulting for compliance, hiring, and operations." },
];

const comparisonRows = [
  { feature: "India enterprise coverage", leadhunter: "10,000+ companies tracked", competitor: "Fortune 500 focus" },
  { feature: "Signal lead time", leadhunter: "3-6 months before RFP", competitor: "RFP stage only" },
  { feature: "Monthly cost", leadhunter: "From \u20B919,999/mo", competitor: "\u20B95L+/year" },
  { feature: "Signal types", leadhunter: "M&A, Board, ESG, Hiring, Expansion", competitor: "News alerts only" },
  { feature: "Contact enrichment", leadhunter: "Decision-maker mobile + email", competitor: "Company-level only" },
  { feature: "AI scoring", leadhunter: "TALPRO-IQ (49 signals)", competitor: "Manual qualification" },
  { feature: "Outreach support", leadhunter: "AI-personalized templates", competitor: "None" },
  { feature: "Compliance intelligence", leadhunter: "MCA, SEBI, BRSR, DPDPA", competitor: "Minimal" },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        badge="For Consulting Firms"
        title="Win engagements before the RFP drops"
        description="LeadHunterIQ detects digital transformation signals, M&A activity, board changes, and compliance deadlines across 10,000+ Indian enterprises. Be in the room 6 months early."
        cta1={{ label: "Start Free Trial", href: "/signup" }}
        cta2={{ label: "See GTM Plays", href: "/plays" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "Consulting", href: "/for/consulting" },
        ]}
      />

      <Section bg="white">
        <SectionHead badge="The Problem" badgeVariant="red" title="The consulting pipeline problem" description="Most consulting firms learn about opportunities after the scope is already locked. By then, the incumbent wins 80% of the time." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">{point.icon}</div>
                <h3 className="text-lg font-heading font-bold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed font-body">{point.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead badge="Signal Types" badgeVariant="blue" title="Signals that predict consulting demand" description="LeadHunterIQ monitors India-specific triggers that create consulting engagements worth crores." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <Card className="text-center h-full">
                <p className="text-2xl font-mono font-bold text-blue-600">{s.metric}</p>
                <p className="mt-2 text-base font-heading font-semibold text-gray-900">{s.label}</p>
                <p className="mt-1 text-sm text-gray-500 font-body">{s.detail}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHead badge="GTM Plays for Consulting" badgeVariant="emerald" title="Proven playbooks for consulting firms" description="Pre-built signal-to-engagement workflows designed for management and technology consulting." />
        <div className="max-w-3xl mx-auto space-y-6">
          {plays.map((play, i) => (
            <FadeIn key={play.number} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">{play.number}</div>
                <div className="pt-1">
                  <h3 className="text-lg font-heading font-bold text-gray-900">{play.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed font-body">{play.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <FadeIn delay={0.5}><a href="/plays" className="text-blue-600 font-heading font-semibold text-sm hover:underline">See all 20+ GTM plays {"->"}</a></FadeIn>
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead badge="Comparison" badgeVariant="gold" title="Signal intelligence vs traditional BD" description="Replace relationship dependency with data-driven pipeline generation." />
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-heading font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-6 font-heading font-semibold text-blue-600">LeadHunterIQ</th>
                <th className="text-center py-4 px-6 font-heading font-semibold text-gray-400">Traditional BD</th>
              </tr></thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="py-3 px-6 text-gray-700 font-body">{row.feature}</td>
                    <td className="py-3 px-6 text-center font-semibold text-gray-900 font-body">{row.leadhunter}</td>
                    <td className="py-3 px-6 text-center text-gray-400 font-body">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <svg className="mx-auto h-10 w-10 text-emerald-500/20" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="mt-6 text-xl font-heading font-medium text-gray-900 leading-relaxed sm:text-2xl">
              We spotted a pharma company restructuring its board and adding ESG directors 4 months before they published a consulting RFP. We were already their trusted advisor by then.
            </blockquote>
            <div className="mt-8">
              <p className="font-heading font-bold text-gray-900">Deepa R.</p>
              <p className="text-sm text-gray-500 font-body">Operations Head, StaffMax, Chennai</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection title="Your consulting firm deserves earlier signals." description="Join Indian consulting firms using AI-powered intelligence to win engagements before the RFP. 14-day free trial." />
    </>
  );
}
