"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { PRICING } from "@/lib/constants";

const tiers = [PRICING.starter, PRICING.growth, PRICING.enterprise];

export default function PricingCards({ preview = false }: { preview?: boolean }) {
  const [annual, setAnnual] = useState(true);

  return (
    <Section bg={preview ? "gray" : "white"}>
      <SectionHead
        badge="Pricing"
        title={preview ? "Simple, transparent pricing" : "Confirmed leads, not contacts."}
        description="Every lead passes our 7-gate SAV verification. You pay for dossier-grade intelligence — not raw data. 14-day free trial."
      />

      {/* Toggle */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative h-7 w-12 rounded-full transition-colors ${
            annual ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
              annual ? "translate-x-5" : ""
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}>
          Annual <span className="text-emerald-500 text-xs font-bold">Save 17%</span>
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl border p-8 ${
                tier.popular
                  ? "border-blue-600 bg-white shadow-xl scale-105 z-10"
                  : "border-gray-200 bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="blue">Most Popular</Badge>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  ₹{annual ? tier.annual : tier.price}
                </span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button
                href="/demo"
                variant={tier.popular ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {tier.cta}
              </Button>
              <ul className="mt-8 space-y-3">
                {(preview ? tier.features.slice(0, 3) : tier.features).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              {preview && (
                <p className="mt-4 text-xs text-blue-600 font-medium">
                  + {tier.features.length - 3} more features
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
      {preview && (
        <div className="mt-12 text-center">
          <Button href="/pricing" variant="secondary">
            See full pricing
          </Button>
        </div>
      )}
    </Section>
  );
}
