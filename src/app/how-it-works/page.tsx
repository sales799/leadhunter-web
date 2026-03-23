import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From signal to revenue in three steps: Detect opportunities, score with AI, deliver to your team. Set up in 5 minutes.",
};

const steps = [
  {
    number: "01",
    title: "Detect",
    color: "bg-blue-600",
    description:
      "LeadHunterIQ continuously scans 47+ signal sources across India — ROC filings, funding announcements, job postings, GCC registrations, STPI data, and commercial real estate transactions.",
    details: [
      "Job boards (Naukri, LinkedIn, Indeed, TimesJobs)",
      "Regulatory filings (MCA, STPI, ROC, GST)",
      "News & PR (funding rounds, expansions, acquisitions)",
      "Real estate (commercial leases, co-working signups)",
      "Government tenders & procurement portals",
    ],
  },
  {
    number: "02",
    title: "Score & Enrich",
    color: "bg-emerald-500",
    description:
      "Every signal passes through TALPRO-IQ, our AI scoring engine trained on 15 years of IT staffing deal data. Signals are scored 0-100 and enriched with contact data.",
    details: [
      "Deal size potential (based on company revenue & headcount)",
      "Skill demand urgency (hiring velocity metrics)",
      "Competition density (how many agencies are pitching)",
      "Compliance readiness (PF/PT/TDS status)",
      "Contact enrichment (mobile, email, LinkedIn, designation)",
    ],
  },
  {
    number: "03",
    title: "Deliver & Close",
    color: "bg-gold-400",
    description:
      "Hot signals are delivered to your BD team on WhatsApp, Slack, email, or directly into your CRM. Your team acts first, pitches with compliance leverage, and closes before competitors even know.",
    details: [
      "WhatsApp instant alerts for 90+ score signals",
      "CRM auto-deal creation (HubSpot, Zoho, Salesforce)",
      "Email outreach templates pre-filled with signal context",
      "Slack channel integration for team collaboration",
      "Daily digest for comprehensive signal reviews",
    ],
  },
];

const timeline = [
  { time: "Day 1", event: "Sign up & connect your CRM", color: "bg-blue-600" },
  { time: "Day 1", event: "First signals delivered to WhatsApp", color: "bg-emerald-500" },
  { time: "Week 1", event: "First outreach sent with signal context", color: "bg-gold-400" },
  { time: "Month 1", event: "First placement from a LeadHunterIQ signal", color: "bg-emerald-500" },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="How It Works"
        title="From signal to revenue in three steps"
        description="Set up in 5 minutes. Start catching signals on day one. Close your first deal within a month."
        breadcrumbs={[{ name: "How It Works", href: "/how-it-works" }]}
      />

      {/* Steps */}
      {steps.map((step, i) => (
        <Section key={step.title} bg={i % 2 === 0 ? "white" : "gray"}>
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <div className={`h-1 w-16 rounded-full ${step.color} mb-6`} />
                <span className="font-mono text-6xl font-bold text-gray-100">{step.number}</span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">{step.title}</h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-lg">{step.description}</p>
              </div>
              <Card>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                  What&apos;s included
                </h4>
                <ul className="space-y-3">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </FadeIn>
        </Section>
      ))}

      {/* Timeline */}
      <Section bg="navy-radial" overlay>
        <SectionHead
          badge="Timeline"
          badgeVariant="white"
          title="Your first 30 days"
          light
        />
        <div className="mx-auto max-w-2xl">
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`h-4 w-4 rounded-full ${item.color}`} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/20 my-1" />}
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200">{item.time}</p>
                  <p className="text-lg text-white">{item.event}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection title="Start catching signals today" description="5 minutes to set up. 14-day free trial. No credit card required." />
    </>
  );
}
