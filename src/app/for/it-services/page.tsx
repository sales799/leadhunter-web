import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For IT Services Companies | LeadHunterIQ",
  description:
    "Win cloud migration, cybersecurity, and modernization projects before your competitors know they exist. LeadHunterIQ monitors hiring, infrastructure, and technology signals across Indian enterprises.",
};

const painPoints = [
  {
    title: "Deals go to the fastest vendor",
    description:
      "Cloud migration and modernization projects go to the first vendor who understands the scope. By the time the RFI reaches you, three competitors have already submitted proposals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Reactive pipeline, not proactive",
    description:
      "Your sales team waits for RFIs or relies on partner referrals. There is no systematic way to detect which companies are about to need cloud, security, or modernization services.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Can not spot tech transformation early",
    description:
      "Companies hiring cloud architects, posting for CISO roles, or procuring GPU clusters are starting projects worth crores. These signals are scattered across dozens of sources.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "No India-specific tech signals",
    description:
      "Global databases track US tech adoption. Who tracks Indian companies filing for STPI benefits, expanding EPFO registrations, or signing large commercial leases in IT corridors?",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const signals = [
  { metric: "Cloud Migration", label: "Cloud architect hiring surges", detail: "Companies posting AWS/Azure/GCP roles are starting migration projects" },
  { metric: "Cybersecurity", label: "CERT-In alerts and breach signals", detail: "Post-breach companies urgently need security services and audits" },
  { metric: "Legacy Modernization", label: "Mainframe-to-cloud hiring", detail: "COBOL migration and legacy system replacement signals" },
  { metric: "AI/ML Adoption", label: "First ML engineer hires", detail: "Companies building AI teams need implementation and infrastructure partners" },
];

const plays = [
  { number: "01", title: "Cloud Migration Wave", description: "Track companies posting cloud architect roles or announcing cloud-first initiatives. Cloud migration projects worth 50L-5Cr need implementation partners with deep platform expertise." },
  { number: "02", title: "Cybersecurity Incident Response", description: "Monitor CERT-In advisories, breach disclosures, and security hiring surges. Post-breach companies need immediate security assessment, remediation, and compliance recovery." },
  { number: "03", title: "Legacy Modernization", description: "Detect companies posting for mainframe-to-cloud or COBOL migration roles. These multi-year transformation projects are high-value, sticky engagements." },
  { number: "04", title: "AI/ML Adoption", description: "Track companies hiring their first ML engineers, procuring GPUs, or expanding R&D teams. They need AI implementation partners for model deployment and MLOps infrastructure." },
];

const comparisonRows = [
  { feature: "India IT signal coverage", leadhunter: "51 verified sources", competitor: "US/EU focused" },
  { feature: "Signal lead time", leadhunter: "90 days before RFI", competitor: "At RFI stage" },
  { feature: "Monthly cost", leadhunter: "From \u20B919,999/mo", competitor: "$15,000+/year" },
  { feature: "Technology signals", leadhunter: "Cloud, Security, AI, Legacy", competitor: "Generic intent" },
  { feature: "Contact enrichment", leadhunter: "CTO/CIO mobile + email", competitor: "Company-level" },
  { feature: "Indian regulatory signals", leadhunter: "STPI, MCA, CERT-In, EPFO", competitor: "None" },
  { feature: "AI lead scoring", leadhunter: "TALPRO-IQ (49 signals)", competitor: "Manual" },
  { feature: "Outreach templates", leadhunter: "Tech-specific AI templates", competitor: "Generic" },
];

export default function ITServicesPage() {
  return (
    <>
      <PageHero
        badge="For IT Services"
        title="Win projects before the RFI drops"
        description="LeadHunterIQ monitors cloud migration, cybersecurity, AI adoption, and modernization signals across Indian enterprises. Reach decision-makers 90 days before competitors."
        cta1={{ label: "Start Free Trial", href: "/signup" }}
        cta2={{ label: "See GTM Plays", href: "/plays" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "IT Services", href: "/for/it-services" },
        ]}
      />

      <Section bg="white">
        <SectionHead badge="The Problem" badgeVariant="red" title="Your pipeline problem is a signal problem" description="IT services deals go to the vendor who shows up first with the right understanding. Without signals, you show up last." />
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
        <SectionHead badge="Signal Types" badgeVariant="blue" title="Technology signals your competitors miss" description="LeadHunterIQ tracks the hiring and infrastructure patterns that predict IT services demand." />
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
        <SectionHead badge="GTM Plays for IT Services" badgeVariant="emerald" title="Proven playbooks for IT services revenue" description="Pre-built signal-to-deal workflows designed for technology services companies." />
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
        <SectionHead badge="Comparison" badgeVariant="gold" title="LeadHunterIQ vs waiting for RFIs" description="Proactive signal intelligence versus reactive pipeline dependency." />
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-heading font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-6 font-heading font-semibold text-blue-600">LeadHunterIQ</th>
                <th className="text-center py-4 px-6 font-heading font-semibold text-gray-400">Traditional Approach</th>
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
              LeadHunterIQ flagged a manufacturing company hiring 8 cloud architects. We pitched a full AWS migration before they even started vendor evaluation. Closed at 1.2 Cr.
            </blockquote>
            <div className="mt-8">
              <p className="font-heading font-bold text-gray-900">Arun S.</p>
              <p className="text-sm text-gray-500 font-body">CEO, PrimeForce HR, Mumbai</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection title="Your IT services firm deserves signal-driven deals." description="Join Indian IT services companies using AI-powered intelligence to win projects before the RFI. 14-day free trial." />
    </>
  );
}
