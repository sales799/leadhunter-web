"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { CalBookingButton } from "@/components/cal";
import HeroDashboard from "@/components/graphics/HeroDashboard";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero-animated">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise" />
      <div className="container-lg relative flex min-h-screen items-center py-32">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <FadeIn delay={0}>
              <Badge variant="emerald">India&apos;s #1 Intent-First GTM Platform</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-display text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Stop guessing.
              </h1>
              <p className="mt-2 font-heading text-4xl font-extrabold tracking-display sm:text-5xl lg:text-6xl xl:text-7xl text-gradient-gold">
                Start knowing who&apos;s ready to buy.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed font-body">
                LeadHunterIQ monitors 50+ data sources, scores leads with proprietary AI
                signals, and delivers dossier-grade intelligence 90 days before
                your competitors even know the opportunity exists.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup" size="lg" shimmer>
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
                <CalBookingButton variant="outline_white" size="lg">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Demo
                </CalBookingButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs font-body font-medium text-gray-300">DPDPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs font-body font-medium text-gray-300">AES-256 Encrypted</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
                  <svg className="h-4 w-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-body font-medium text-gray-300">15+ Years Staffing Expertise</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — 40% Product Dashboard */}
          <div className="hidden lg:block lg:col-span-2">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
