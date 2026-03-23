"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import RadarGraphic from "@/components/graphics/RadarGraphic";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden gradient-navy-radial">
      <div className="absolute inset-0 grid-overlay" />
      <div className="container-lg relative flex min-h-screen items-center py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <Badge variant="white">AI Signal Intelligence</Badge>
            <h1 className="mt-6 text-4xl font-extrabold tracking-display text-white sm:text-5xl lg:text-6xl">
              Your competitors find clients faster.{" "}
              <span className="text-gold-400">Now it&apos;s your turn.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-400 leading-relaxed">
              Detect GCC expansions, funding rounds, and hiring intent 90 days before anyone else.
              Built for Indian IT staffing agencies.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/demo?email=${encodeURIComponent(email)}`;
              }}
              className="mt-8 flex max-w-md gap-3"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <Button type="submit" size="lg">
                Get Early Access
              </Button>
            </form>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                47+ signal types
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                90 days ahead
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                80% cost savings
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                5 min setup
              </span>
            </div>
          </div>

          {/* Right - Radar */}
          <div className="hidden lg:block">
            <RadarGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
