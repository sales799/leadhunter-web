import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "LeadHunterIQ is built by Talpro India — 15+ years of IT staffing expertise, now powered by AI. Based in Bengaluru.",
};

const numbers = [
  { value: "15+", label: "Years in IT staffing" },
  { value: "8,400+", label: "Staffing agencies in India" },
  { value: "47", label: "Signal types tracked" },
  { value: "₹2,999", label: "Starting price/month" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="15 years of staffing expertise, powered by AI"
        description="Built by practitioners who understand the Indian IT staffing market from the inside."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />
      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-gray-900">Our story</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Talpro India started in 2011 as an IT contract staffing firm in Bengaluru. Over 15 years, we placed thousands of technology professionals across India&apos;s top companies. We lived the pain of manual lead generation — scanning job boards, chasing cold leads, missing GCC opportunities.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              LeadHunterIQ was born from that frustration. We built the tool we always wanted — one that could detect staffing opportunities before they hit the market, score them with the instinct of a veteran BD head, and deliver them to your WhatsApp before your morning chai.
            </p>
          </FadeIn>
        </div>
      </Section>
      <Section bg="gray">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-4 text-lg text-blue-600 font-semibold">
              &ldquo;Every staffing agency deserves enterprise-grade intelligence.&rdquo;
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              The tools built for US enterprise sales teams cost ₹12-50 lakh per year and still don&apos;t understand Indian data. We believe Indian staffing agencies should have access to world-class signal intelligence at Indian prices — without compromising on data quality, accuracy, or features.
            </p>
          </FadeIn>
        </div>
      </Section>
      <Section bg="white">
        <FadeIn>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">By the numbers</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-3xl mx-auto">
            {numbers.map((n) => (
              <Card key={n.label} className="text-center">
                <p className="font-mono text-3xl font-bold text-blue-600">{n.value}</p>
                <p className="mt-2 text-sm text-gray-500">{n.label}</p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>
      <Section bg="gray">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-gray-900">Why India</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Built in Bengaluru, for Indian staffing economics. We understand that a 2-person agency in Pune has different needs than a 500-person RPO in Mumbai. Our pricing, data sources, and signal categories are designed for the Indian market.
            </p>
            <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6">
              <p className="text-sm font-bold text-gray-900">Talpro India Pvt Ltd</p>
              <p className="mt-1 text-sm text-gray-500">Registered company | Bengaluru, Karnataka</p>
              <p className="text-sm text-gray-400 mt-1">GSTIN: 29AADCT1234F1Z5</p>
            </div>
          </FadeIn>
        </div>
      </Section>
      <CTASection title="Join us in transforming Indian staffing" />
    </>
  );
}
