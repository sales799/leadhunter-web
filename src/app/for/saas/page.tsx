import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For B2B SaaS Companies | LeadHunterIQ",
  description:
    "Find companies actively buying software before they hit G2. LeadHunterIQ detects tech adoption signals, funding rounds, and compliance deadlines across Indian B2B.",
};

const painPoints = [
  {
    title: "Cold outbound is dying",
    description:
      "Response rates on generic cold emails have dropped below 1%. Your SDRs blast thousands of emails hoping someone bites. There is a better way.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "India is a black box",
    description:
      "Global intent tools like Bombora and 6sense barely cover India. You are flying blind in one of the fastest-growing SaaS markets in the world.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "Competitors get there first",
    description:
      "By the time a company shows up on G2 or Capterra, five vendors have already pitched. Timing is everything in SaaS sales.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "No signal-to-pipeline workflow",
    description:
      "Even when you spot a trigger event, there is no system to score it, enrich contacts, and route to the right AE instantly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const signals = [
  { metric: "Funding Rounds", label: "Series A-D announcements", detail: "Companies scaling post-funding actively buy SaaS tools" },
  { metric: "Tech Adoption", label: "Stack change signals", detail: "Detect when companies adopt complementary technologies" },
  { metric: "Compliance Deadlines", label: "DPDPA, SOC2, ISO triggers", detail: "Regulatory deadlines create urgent buying windows" },
  { metric: "Leadership Changes", label: "New CTO/CIO appointments", detail: "New tech leaders bring new vendor evaluations" },
];

const plays = [
  {
    number: "01",
    title: "Competitor Displacement Play",
    description: "Find companies using your competitor who are showing signs of dissatisfaction — negative reviews, support complaints, contract renewal windows.",
  },
  {
    number: "02",
    title: "Post-Funding Tech Stack Play",
    description: "Target Series A-C companies in the 90-day window after funding. They have budget and urgency to professionalize their tech stack.",
  },
  {
    number: "03",
    title: "Compliance Deadline Play",
    description: "Companies facing DPDPA, SOC 2, or ISO deadlines need solutions fast. Time-sensitive, high-intent, and willing to pay for speed.",
  },
  {
    number: "04",
    title: "Tech Stack Adoption Play",
    description: "Track companies adopting complementary technologies that indicate readiness for your solution. If they just bought Salesforce, they need integrations.",
  },
];

const comparisonRows = [
  { feature: "India market coverage", leadhunter: "51 verified sources", competitor: "Minimal" },
  { feature: "Signal types", leadhunter: "Funding, hiring, tech, compliance", competitor: "Web visits only" },
  { feature: "Monthly cost", leadhunter: "From \u20B919,999/mo", competitor: "$30,000+/year" },
  { feature: "Contact enrichment", leadhunter: "Indian mobile + email verified", competitor: "Email only" },
  { feature: "CRM integration", leadhunter: "HubSpot, Zoho native", competitor: "Salesforce-centric" },
  { feature: "Time to value", leadhunter: "5 minutes", competitor: "4-6 weeks" },
  { feature: "AI lead scoring", leadhunter: "TALPRO-IQ (49 signals)", competitor: "Basic intent score" },
  { feature: "Outreach templates", leadhunter: "AI-personalized included", competitor: "DIY" },
];

export default function SaaSPage() {
  return (
    <>
      <PageHero
        badge="For B2B SaaS"
        title="Find companies buying software before they hit G2"
        description="LeadHunterIQ detects funding rounds, tech adoption signals, and compliance deadlines across Indian B2B. Reach prospects 90 days before your competitors."
        cta1={{ label: "Start Free Trial", href: "/signup" }}
        cta2={{ label: "See GTM Plays", href: "/plays" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "B2B SaaS", href: "/for/saas" },
        ]}
      />

      <Section bg="white">
        <SectionHead
          badge="The Problem"
          badgeVariant="red"
          title="Your pipeline problem is a timing problem"
          description="Indian B2B SaaS companies waste 70% of outbound effort on contacts who are not in a buying cycle. Sound familiar?"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed font-body">{point.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead
          badge="Signal Types"
          badgeVariant="blue"
          title="The buying signals your competitors miss"
          description="LeadHunterIQ monitors India-specific signals that global intent tools cannot see."
        />
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
        <SectionHead
          badge="GTM Plays for SaaS"
          badgeVariant="emerald"
          title="Proven playbooks for SaaS revenue teams"
          description="Pre-built signal-to-pipeline workflows designed for B2B SaaS selling into India."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {plays.map((play, i) => (
            <FadeIn key={play.number} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                  {play.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-heading font-bold text-gray-900">{play.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed font-body">{play.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <FadeIn delay={0.5}>
            <a href="/plays" className="text-blue-600 font-heading font-semibold text-sm hover:underline">
              See all 20+ GTM plays {"->"}
            </a>
          </FadeIn>
        </div>
      </Section>

      <Section bg="gray">
        <SectionHead
          badge="Comparison"
          badgeVariant="gold"
          title="LeadHunterIQ vs Global Intent Tools"
          description="Enterprise-level signal intelligence built for the Indian market."
        />
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-heading font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-heading font-semibold text-blue-600">LeadHunterIQ</th>
                  <th className="text-center py-4 px-6 font-heading font-semibold text-gray-400">Bombora / 6sense</th>
                </tr>
              </thead>
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
              We closed a 6-figure deal because LeadHunterIQ flagged a Series B company hiring cloud engineers 2 months before they started evaluating vendors.
            </blockquote>
            <div className="mt-8">
              <p className="font-heading font-bold text-gray-900">Vikram T.</p>
              <p className="text-sm text-gray-500 font-body">Founder, BlueSky Consulting, Pune</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Your SaaS deserves signal-driven pipeline."
        description="Join Indian B2B SaaS teams using AI-powered signal intelligence to close faster. 14-day free trial."
      />
    </>
  );
}
