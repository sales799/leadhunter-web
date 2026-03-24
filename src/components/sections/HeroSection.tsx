"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import RadarGraphic from "@/components/graphics/RadarGraphic";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen overflow-hidden gradient-navy-radial">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise" />
      <div className="container-lg relative flex min-h-screen items-center py-32">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <FadeIn delay={0}>
              <Badge variant="emerald">AI-Powered Signal Intelligence</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-display text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Your competitors find clients faster.
              </h1>
              <p className="mt-2 font-heading text-4xl font-extrabold tracking-display sm:text-5xl lg:text-6xl xl:text-7xl text-gradient-gold">
                Now it&apos;s your turn.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed font-body">
                LeadHunterIQ monitors 51 data sources, scores leads across 49
                signals, and delivers dossier-grade intelligence 90 days before
                your competitors even know the opportunity exists.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/demo" size="lg" shimmer>
                  Get Early Access
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
                <Button href="/how-it-works" variant="outline_white" size="lg">
                  Watch Demo
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10">
                <p className="text-xs text-gray-500 font-body uppercase tracking-widest mb-4">
                  Trusted by staffing agencies across India
                </p>
                <div className="flex items-center gap-8">
                  {["TechStaff", "NexGen", "PrimeForce", "StaffMax", "BlueSky"].map(
                    (name) => (
                      <div
                        key={name}
                        className="text-sm font-heading font-bold text-gray-600 opacity-40"
                      >
                        {name}
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — 40% Radar */}
          <div className="hidden lg:block lg:col-span-2">
            <FadeIn delay={0.3} direction="right">
              <RadarGraphic />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
