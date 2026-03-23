import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import DashboardMockup from "@/components/graphics/DashboardMockup";
import TestimonialCards from "@/components/sections/TestimonialCards";
import PricingCards from "@/components/sections/PricingCards";
import CompareTable from "@/components/sections/CompareTable";
import CTASection from "@/components/sections/CTASection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
  description:
    "Detect GCC expansions, score leads with AI, and close more staffing deals. Built for Indian IT staffing agencies. Starts at ₹2,999/month.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorksSteps />
      <Section bg="navy-radial" overlay>
        <div className="py-8">
          <DashboardMockup />
        </div>
      </Section>
      <TestimonialCards count={3} />
      <PricingCards preview />
      <CompareTable rows={5} />
      <CTASection />
    </>
  );
}
