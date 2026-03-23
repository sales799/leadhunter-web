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
  title: "Compliance Intelligence",
  description:
    "Every lead comes compliance-ready. PF, PT, TDS, ESIC status per company. State-specific regulatory tracking. DPDPA 2023 consent management built in.",
};

const complianceAreas = [
  {
    code: "PF",
    name: "Provident Fund",
    description: "Employee Provident Fund registration status, contribution compliance, and establishment code verification.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    code: "PT",
    name: "Professional Tax",
    description: "State-wise professional tax registration and monthly/annual return filing status. Varies by state legislation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    code: "TDS",
    name: "Tax Deducted at Source",
    description: "TDS return filing compliance, TAN verification, and deduction certificate issuance status for contractor payments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    code: "ESIC",
    name: "Employee State Insurance",
    description: "ESIC registration status, contribution compliance, and coverage applicability based on employee count and wages.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const stateRequirements = [
  {
    state: "Karnataka",
    regulations: ["Karnataka Shops & Commercial Establishments Act", "Karnataka Professional Tax", "Karnataka Labour Welfare Fund"],
    note: "Bengaluru GCC hub. Shops Act registration mandatory for all commercial establishments.",
  },
  {
    state: "Maharashtra",
    regulations: ["Maharashtra Shops & Establishments Act", "Maharashtra PT (varies by city)", "Maharashtra Labour Welfare Fund"],
    note: "Mumbai and Pune tech corridors. PT rates differ between Mumbai/Pune and rest of state.",
  },
  {
    state: "Telangana",
    regulations: ["Telangana Shops & Establishments Act", "Telangana Professional Tax", "Building & Other Construction Workers Act"],
    note: "Hyderabad GCC cluster. Separate registration for each branch office required.",
  },
  {
    state: "Tamil Nadu",
    regulations: ["Tamil Nadu Shops & Establishments Act", "Tamil Nadu Professional Tax", "Tamil Nadu Labour Welfare Fund"],
    note: "Chennai IT corridor. Bi-annual PT returns required.",
  },
  {
    state: "Delhi NCR",
    regulations: ["Delhi Shops & Establishments Act", "No state PT in Delhi", "Delhi Labour Welfare Fund"],
    note: "Gurugram and Noida fall under Haryana and UP respectively with different rules.",
  },
];

const dpdpaFeatures = [
  "Consent collection for contact data processing",
  "Right to erasure (data deletion on request)",
  "Purpose limitation for data usage",
  "Data processing activity records",
  "Consent withdrawal mechanism",
  "Cross-border data transfer compliance",
];

const howItWorks = [
  {
    number: "01",
    title: "Entity identification",
    description:
      "When a signal is detected, we identify the legal entity using CIN, GSTIN, and PAN. This maps to the exact compliance obligations.",
  },
  {
    number: "02",
    title: "Compliance data pull",
    description:
      "We check PF establishment codes, PT registration, TDS return filing status, and ESIC coverage against government databases.",
  },
  {
    number: "03",
    title: "State-level mapping",
    description:
      "Each entity is mapped to its operating states. State-specific requirements like Karnataka Shops Act or Maharashtra PT are automatically applied.",
  },
  {
    number: "04",
    title: "Compliance scoring",
    description:
      "A compliance readiness score is generated and attached to the lead. Your BD team walks in knowing exactly where the client stands.",
  },
];

const pitchAdvantages = [
  "Open with compliance insights that demonstrate domain expertise",
  "Identify gaps where your agency can add value beyond just staffing",
  "Tailor proposals to the client's specific state and regulatory environment",
  "Avoid pitching to companies with unresolved compliance issues",
  "Position your agency as a compliance-aware partner, not just a vendor",
  "Include compliance support as a value-add in your staffing proposals",
];

const metrics = [
  { value: "100%", label: "Compliance coverage on every lead", color: "text-blue-600" },
  { value: "5 states", label: "State-specific tracking (expanding)", color: "text-emerald-500" },
  { value: "DPDPA", label: "2023 consent management built in", color: "text-gold-500" },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        badge="Compliance"
        title="Every lead comes compliance-ready"
        description="Walk into client meetings knowing their PF status, PT compliance, TDS filing history, and ESIC coverage. Compliance intelligence that turns your BD team into trusted advisors."
        breadcrumbs={[
          { name: "Solutions", href: "/features" },
          { name: "Compliance", href: "/solutions/compliance" },
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
                Staffing agencies pitch blind on compliance
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Your BD team walks into client meetings without knowing whether the company has active PF registration, is compliant on professional tax, or has ESIC coverage for its workforce. This is information the client expects you to know.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Worse, different states have different compliance requirements. What works in Karnataka doesn&apos;t apply in Maharashtra. The Karnataka Shops &amp; Commercial Establishments Act has specific provisions that staffing agencies must understand. Without this knowledge, you look unprepared next to competitors who do their homework.
              </p>
            </div>
            <Card variant="flat" className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                The compliance blind spot
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "No visibility into client's PF/PT/TDS/ESIC status before meetings",
                  "State-specific regulations missed in proposal preparation",
                  "Manual compliance research takes hours per client",
                  "Risk of non-compliance penalties passed to your agency",
                  "Competitors who know compliance status win trust faster",
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

      {/* Compliance Areas */}
      <Section bg="gray">
        <SectionHead
          badge="Coverage"
          badgeVariant="blue"
          title="Four pillars of compliance intelligence"
          description="Every lead in LeadHunterIQ is enriched with compliance data across these four critical areas."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {complianceAreas.map((area, i) => (
            <FadeIn key={area.code} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    {area.icon}
                  </div>
                  <div>
                    <Badge variant="navy">{area.code}</Badge>
                    <h4 className="font-semibold text-gray-900">{area.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section bg="white">
        <SectionHead
          badge="Process"
          title="How compliance intelligence works"
          description="From entity identification to a compliance-ready score on every lead."
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

      {/* State-Specific Requirements */}
      <Section bg="gray">
        <SectionHead
          badge="State-Level"
          badgeVariant="emerald"
          title="State-specific regulatory tracking"
          description="India's labour laws vary by state. LeadHunterIQ tracks the specific requirements for each state where your clients operate."
        />
        <div className="space-y-4">
          {stateRequirements.map((state, i) => (
            <FadeIn key={state.state} delay={i * 0.08}>
              <Card padding="p-0" className="overflow-hidden">
                <div className="sm:flex">
                  <div className="flex items-center justify-center bg-blue-600 px-6 py-4 sm:py-0 sm:min-w-[140px]">
                    <span className="text-lg font-bold text-white">{state.state}</span>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {state.regulations.map((reg) => (
                        <Badge key={reg} variant="blue">{reg}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{state.note}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* DPDPA Section */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <FadeIn direction="left">
            <SectionHead
              badge="DPDPA 2023"
              badgeVariant="gold"
              title="Data protection compliance built in"
              align="left"
              description="The Digital Personal Data Protection Act, 2023 requires explicit consent for processing personal data. LeadHunterIQ handles this automatically."
            />
            <ul className="space-y-4">
              {dpdpaFeatures.map((item) => (
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
            <SectionHead
              badge="Pitch Advantage"
              badgeVariant="emerald"
              title="Turn compliance into a competitive weapon"
              align="left"
            />
            <ul className="space-y-4">
              {pitchAdvantages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/demo" size="lg">
                See compliance in action
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Key Metrics */}
      <Section bg="navy-radial" overlay>
        <SectionHead
          badge="Results"
          badgeVariant="white"
          title="Compliance intelligence at scale"
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
        title="Walk into every meeting compliance-ready."
        description="No more manual research. Every lead comes with PF, PT, TDS, and ESIC status. Start your free trial today."
      />
    </>
  );
}
