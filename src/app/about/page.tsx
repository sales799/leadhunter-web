import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LeadHunterIQ is built by Talpro India Pvt Ltd — 15+ years of IT staffing expertise, now powered by AI. Based in Bengaluru. 51 sources, 49 signals, 7 verification gates.",
};

const numbers = [
  { value: "15+", label: "Years in IT staffing", color: "text-blue-600" },
  { value: "51", label: "Data sources monitored", color: "text-emerald-500" },
  { value: "49", label: "AI scoring signals", color: "text-gold-600" },
  { value: "₹19,999", label: "Starting price/month", color: "text-blue-600" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="15 years of staffing expertise, powered by AI"
        description="Built by practitioners who understand the Indian IT staffing market from the inside. Not a Western tool adapted for India."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Our story
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed font-body">
              Talpro India started in 2011 as an IT contract staffing firm in
              Bengaluru. Over 15 years, we placed thousands of technology
              professionals across India&apos;s top companies. We lived the pain of
              manual lead generation — scanning job boards, chasing cold leads,
              missing GCC opportunities.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed font-body">
              LeadHunterIQ was born from that frustration. We built the tool we
              always wanted — one that monitors 51 data sources, scores across 49
              signals, verifies through 7 gates, and delivers dossier-grade
              intelligence to your WhatsApp before your morning chai.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section bg="gray">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Our mission
            </h2>
            <p className="mt-4 text-xl text-blue-600 font-heading font-semibold">
              &ldquo;Every staffing agency deserves enterprise-grade
              intelligence.&rdquo;
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed font-body">
              ZoomInfo charges $7,000/year for CONTACTS. We charge ₹3.5L/year for
              TIMING INTELLIGENCE. One converted lead pays for 5 years of
              LeadHunterIQ. The tools built for US enterprise sales teams cost
              ₹12-50 lakh per year and still don&apos;t understand Indian data. We
              believe Indian staffing agencies should have access to world-class
              signal intelligence at Indian prices.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section bg="white">
        <FadeIn>
          <SectionHead title="By the numbers" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-3xl mx-auto">
            {numbers.map((n) => (
              <Card key={n.label} className="text-center">
                <p className={`font-mono text-3xl font-bold ${n.color}`}>
                  {n.value}
                </p>
                <p className="mt-2 text-sm text-gray-500 font-body">
                  {n.label}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Market opportunity */}
      <Section bg="navy-radial" overlay gridPattern>
        <SectionHead
          badge="Market Opportunity"
          badgeVariant="white"
          title="The numbers behind the opportunity"
          light
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto">
          {[
            { value: "$64.6B", label: "GCC market (2024), projected $100B by 2030", source: "EY India, Sep 2025", color: "text-blue-400" },
            { value: "$5.6B", label: "India IT staffing market with 20-30% growth FY26", source: "ISG / NASSCOM", color: "text-emerald-400" },
            { value: "$3.48B", label: "Indian startup funding in Q1 2026 alone", source: "Tracxn, Mar 2026", color: "text-gold-400" },
            { value: "23/50", label: "Top 50 life sciences companies with Indian GCCs", source: "EY Analysis, 2025", color: "text-blue-400" },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <p className={`font-mono text-3xl font-bold ${stat.color} lg:text-4xl`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-400 font-body">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-gray-600 font-body">
                  {stat.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Why India-first
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed font-body">
              Built in Bengaluru, for Indian staffing economics. We understand
              that a 2-person agency in Pune has different needs than a 500-person
              RPO in Mumbai. Our pricing, data sources, and signal categories are
              designed for the Indian market — MCA filings, EPFO registrations,
              STPI data, Indian mobile numbers, and INR billing.
            </p>
            <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6">
              <p className="text-sm font-heading font-bold text-gray-900">
                {SITE.company}
              </p>
              <p className="mt-1 text-sm text-gray-500 font-body">
                Registered company | {SITE.address}
              </p>
              <p className="text-sm text-gray-400 mt-1 font-mono">
                GSTIN: {SITE.gstin}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTASection title="Join us in transforming Indian staffing" />
    </>
  );
}
