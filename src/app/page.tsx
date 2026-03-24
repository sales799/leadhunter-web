import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import SignalTicker from "@/components/sections/SignalTicker";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { ProductJsonLd } from "@/components/seo/JsonLd";

// Lazy-load below-fold heavy components to reduce initial JS bundle
const VideoSection = dynamic(() => import("@/components/sections/VideoSection"), { ssr: true });
const BeforeAfterSlider = dynamic(() => import("@/components/sections/BeforeAfterSlider"), { ssr: true });
const DashboardMockup = dynamic(() => import("@/components/graphics/DashboardMockup"), { ssr: true });
const TestimonialCards = dynamic(() => import("@/components/sections/TestimonialCards"), { ssr: true });
const PricingCards = dynamic(() => import("@/components/sections/PricingCards"), { ssr: true });
const CompareTable = dynamic(() => import("@/components/sections/CompareTable"), { ssr: true });
const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: true });

export const metadata: Metadata = {
  title: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
  description:
    "Monitor 51 data sources, score leads across 49 signals, and deliver dossier-grade intelligence 90 days before your competitors. Built for Indian IT staffing agencies. Starts at ₹19,999/month.",
};

export default function Home() {
  return (
    <>
      <ProductJsonLd />
      {/* Section 1: Hero (DARK) */}
      <HeroSection />

      {/* Section 2: Stats Counter Bar (overlapping hero) */}
      <StatsBar />

      {/* Section 2.5: Live Signal Ticker */}
      <SignalTicker />

      {/* Section 3: Problem Band (WHITE with red accents) */}
      <ProblemSection />

      {/* Section 3.5: Before vs After comparison */}
      <BeforeAfterSlider />

      {/* Section 4: Solution Overview (LIGHT) */}
      <FeaturesGrid />

      {/* Section 5: How It Works Preview (WHITE) */}
      <HowItWorksSteps />

      {/* Section 5.5: Video Walkthrough (LIGHT) */}
      <VideoSection />

      {/* Section 6: Live Dashboard Mockup (DARK) */}
      <Section bg="navy-radial" overlay gridPattern>
        <SectionHead
          badge="Live Intelligence"
          badgeVariant="emerald"
          title="See what your dashboard looks like"
          description="Real-time signal feed with TALPRO-IQ scores, tier classifications, and one-click actions."
          light
        />
        <DashboardMockup />
      </Section>

      {/* Section 7: Social Proof (WHITE) */}
      <TestimonialCards count={3} />

      {/* Section 8: Pricing Preview (LIGHT) */}
      <PricingCards preview />

      {/* Section 9: Comparison Snapshot (WHITE) */}
      <CompareTable rows={5} />

      {/* Section 10: CTA Band (DARK) */}
      <CTASection />
    </>
  );
}
