import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PricingCards from "@/components/sections/PricingCards";
import ROICalculator from "@/components/sections/ROICalculator";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "LeadHunterIQ starts at ₹24,999/month for 30 confirmed, dossier-grade leads. Every lead is SAV-verified across 7 gates. 14-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="₹833/day for confirmed, dossier-grade leads."
        description="One converted lead pays for 5 years of LeadHunterIQ. Every lead is SAV-verified, AI-scored, and delivered with ready-to-send outreach. 14-day free trial."
        breadcrumbs={[{ name: "Pricing", href: "/pricing" }]}
      />

      <PricingCards />
      <ROICalculator />

      {/* FAQ */}
      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          {FAQS.map((faq) => (
            <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      {/* Enterprise */}
      <Section bg="gray">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need custom signals?</h2>
          <p className="mt-4 text-gray-500">
            Enterprise plans include custom signal sources, dedicated analysts, API access, and SLA guarantees.
            Let&apos;s build a plan that fits your agency.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Talk to Sales
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
