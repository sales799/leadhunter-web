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
    "LeadHunterIQ starts at ₹2,999/month — that's ₹99/day for enterprise-grade signal intelligence. 14-day free trial, no credit card required.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Starts at ₹99/day. Seriously."
        description="Enterprise-grade signal intelligence at a fraction of what global tools charge. Every plan includes a 14-day free trial."
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
