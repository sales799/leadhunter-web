import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For Enterprise | LeadHunterIQ",
  description:
    "Enterprise-grade signal intelligence with DPDPA compliance, API access, SLA guarantees, and volume pricing. Built for large staffing firms scaling across India.",
};

const painPoints = [
  {
    icon: "🏢",
    title: "Scaling without visibility",
    description:
      "Multiple branches, dozens of BD reps, thousands of accounts — but no unified signal layer telling everyone where to focus.",
  },
  {
    icon: "🔒",
    title: "Compliance is non-negotiable",
    description:
      "DPDPA, client NDAs, data residency requirements. Your current tools were not built with Indian regulatory frameworks in mind.",
  },
  {
    icon: "🔗",
    title: "Tool sprawl, broken workflows",
    description:
      "Your CRM, email tools, and research sources do not talk to each other. Every handoff is a leak in your pipeline.",
  },
  {
    icon: "📉",
    title: "Paying enterprise prices for SMB data",
    description:
      "Global platforms charge ₹12L+/year and still lack depth in Indian markets. You deserve India-first intelligence at fair pricing.",
  },
];

const securityFeatures = [
  {
    title: "DPDPA Compliant",
    description:
      "Full compliance with India's Digital Personal Data Protection Act. Consent management, data minimisation, and purpose limitation built in.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Data Encryption",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit. Your signal data and client intelligence are protected with bank-grade security.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Audit Trails",
    description:
      "Every data access, every signal viewed, every export logged. Full audit trails for internal compliance teams and external audits.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    description:
      "Granular permissions by team, branch, and seniority. Managers see the full pipeline, reps see their assigned territories.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const enterpriseFeatures = [
  {
    title: "REST API Access",
    description:
      "Integrate signals directly into your CRM, BI tools, or custom dashboards. Webhook support for real-time event streaming.",
    status: "Available",
  },
  {
    title: "SSO Integration",
    description:
      "SAML 2.0 and OAuth single sign-on integration with your existing identity provider. Centralised user management.",
    status: "Roadmap Q2",
  },
  {
    title: "SLA Guarantees",
    description:
      "99.9% uptime SLA with dedicated support channel. Priority incident response within 2 hours during business hours.",
    status: "Available",
  },
  {
    title: "Custom Signal Rules",
    description:
      "Define custom signal triggers based on your ICP. Filter by industry, geography, company size, tech stack, and hiring velocity.",
    status: "Available",
  },
  {
    title: "Dedicated Analyst",
    description:
      "A named account analyst who understands your market, fine-tunes your signals, and delivers monthly insight reports.",
    status: "Available",
  },
  {
    title: "Volume Pricing",
    description:
      "Flexible seat-based pricing for teams of 10+. Annual commitments unlock deeper discounts and premium signal tiers.",
    status: "Available",
  },
];

const daySteps = [
  {
    time: "7:30 AM",
    title: "Overnight Signal Digest",
    description:
      "Your leadership team receives a curated digest of the top 10 signals across all territories. GCC expansions, funding rounds, and regulatory filings — prioritised by revenue potential.",
  },
  {
    time: "9:00 AM",
    title: "Branch-Level Dashboards",
    description:
      "Each regional team sees signals filtered to their territory. Hyderabad sees GCC activity, Mumbai sees BFSI hiring, Pune tracks IT services — all automated, zero overlap.",
  },
  {
    time: "11:00 AM",
    title: "Coordinated Outreach",
    description:
      "BD reps across branches execute coordinated outreach from the same signal — no duplicate pitches, no stepping on each other. Territory rules enforced automatically.",
  },
  {
    time: "4:00 PM",
    title: "Pipeline Review with Signal Attribution",
    description:
      "VP Sales reviews the pipeline with full signal-to-revenue attribution. Every deal traced back to the exact signal, timing, and outreach that created it.",
  },
];

const pricingTiers = [
  {
    name: "Enterprise",
    seats: "10-50 users",
    price: "Custom",
    features: [
      "All Growth plan features",
      "REST API access",
      "Custom signal rules",
      "Dedicated analyst",
      "99.9% uptime SLA",
      "Priority support (2hr response)",
      "Quarterly business reviews",
    ],
  },
  {
    name: "Enterprise Plus",
    seats: "50+ users",
    price: "Custom",
    features: [
      "All Enterprise features",
      "SSO integration (roadmap)",
      "Custom data integrations",
      "On-premise deployment option",
      "Dedicated success manager",
      "Custom reporting and BI feeds",
      "Executive advisory sessions",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        badge="For Enterprise"
        title="Enterprise-grade intelligence at SMB pricing"
        description="DPDPA-compliant signal intelligence with API access, SLA guarantees, and volume pricing. Built for large staffing firms scaling across India."
        cta1={{ label: "Talk to Sales", href: "/demo?plan=enterprise" }}
        cta2={{ label: "View Security Docs", href: "/security" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "Enterprise", href: "/for/enterprise" },
        ]}
      />

      {/* Pain Points */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              Enterprise challenges
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Scaling a staffing firm is hard without the right intelligence
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Global tools were not built for Indian markets. You need
              intelligence that understands GCCs, DPDPA, and the way business
              development actually works in India.
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

      {/* Security & Compliance */}
      <Section bg="navy-radial" overlay>
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-3">
              Security &amp; compliance
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-white sm:text-4xl">
              Built for Indian regulatory requirements
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              DPDPA compliance is not an afterthought — it is foundational.
              Every feature is designed with data protection and audit readiness
              in mind.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {securityFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <Card variant="dark" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Enterprise Features */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              Enterprise capabilities
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Everything you need to scale signal-driven BD
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              API access, dedicated analysts, custom signals, and SLA guarantees
              — built for teams that need reliability at scale.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      feature.status === "Available"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Day in the Life */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              A day with LeadHunterIQ Enterprise
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Signal intelligence across every branch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              See how enterprise teams coordinate signal-driven outreach across
              multiple branches and territories.
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

      {/* Volume Pricing */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              Enterprise pricing
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Flexible pricing that scales with you
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Volume discounts for teams of 10+. Annual commitments unlock
              premium features and dedicated support.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.15}>
              <Card
                className={`h-full ${
                  i === 1 ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{tier.seats}</p>
                <p className="mt-4 text-3xl font-extrabold text-blue-600">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-emerald-500 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/demo?plan=enterprise"
                    variant={i === 1 ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Talk to Sales
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section bg="gray">
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
              We replaced a ₹15L/year global platform with LeadHunterIQ and
              actually got better India coverage. The API integration with our
              Salesforce instance took two days. Our BD team across 4 cities now
              runs on the same signal feed.
            </blockquote>
            <div className="mt-8">
              <p className="font-bold text-gray-900">Neha G.</p>
              <p className="text-sm text-gray-500">
                VP Sales, 500+ person Staffing Enterprise, Mumbai
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to scale signal-driven BD across your enterprise?"
        description="Talk to our enterprise team. Custom pricing, dedicated onboarding, and SLA guarantees — all included."
      />
    </>
  );
}
