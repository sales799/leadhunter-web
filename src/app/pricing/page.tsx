import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PricingCards from "@/components/sections/PricingCards";
import ROICalculator from "@/components/sections/ROICalculator";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import { FAQS, SITE } from "@/lib/constants";
import { ProductJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "LeadHunterIQ starts at ₹19,999/month — that's ₹666/day for enterprise-grade signal intelligence. 50+ sources, proprietary AI scoring, multi-layer verification. 14-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <ProductJsonLd />
      <FAQJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Pricing", href: "/pricing" }]} />
      <PageHero
        badge="Pricing"
        title="Starts at ₹666/day. Your ROI? Infinite."
        description="Enterprise-grade signal intelligence at a fraction of what global tools charge. Every plan includes a 14-day free trial."
        breadcrumbs={[{ name: "Pricing", href: "/pricing" }]}
      />

      <PricingCards />
      <ROICalculator />

      {/* FAQ */}
      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          {FAQS.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Section>

      {/* Enterprise */}
      <Section bg="gray">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="gold">Enterprise</Badge>
          <h2 className="mt-4 text-2xl font-heading font-bold text-gray-900">
            Need custom signals?
          </h2>
          <p className="mt-4 text-gray-500 font-body">
            Command plans include custom signal sources, phone-verified contacts,
            48-hour lead exclusivity, competitor density intelligence, and weekly
            strategy calls. Let&apos;s build a plan that fits your agency.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Talk to Sales
            </Button>
          </div>
          <p className="mt-6 text-xs text-gray-400 font-body">
            Backed by {SITE.company} &middot; 15+ years of IT staffing expertise
            &middot; GSTIN: {SITE.gstin}
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
