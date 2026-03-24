"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { PRICING } from "@/lib/constants";

const tiers = [PRICING.analyst, PRICING.strategist, PRICING.command];

export default function PricingCards({ preview = false }: { preview?: boolean }) {
  const [annual, setAnnual] = useState(true);

  return (
    <Section bg={preview ? "gray" : "white"}>
      <SectionHead
        badge="Pricing"
        badgeVariant={preview ? "gold" : "blue"}
        title={
          preview
            ? "Starts at ₹666/day. Seriously."
            : "Starts at ₹666/day. Your ROI? Infinite."
        }
        description="Every plan includes a 14-day free trial. No credit card required."
      />

      {/* Toggle */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium font-body ${
            !annual ? "text-gray-900 dark:text-white" : "text-gray-400"
          }`}
        >
          Monthly
        </span>
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
        <span
          className={`text-sm font-medium font-body ${
            annual ? "text-gray-900 dark:text-white" : "text-gray-400"
          }`}
        >
          Annual{" "}
          <Badge variant="emerald">Save 2 months</Badge>
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                tier.popular
                  ? "border-blue-600 bg-white dark:bg-gray-800 shadow-xl scale-105 z-10"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="blue">Most Popular</Badge>
                </div>
              )}
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400 font-body">
                {tier.description}
              </p>
              <div className="mt-6">
                <span className="font-mono text-4xl font-bold text-gray-900 dark:text-white">
                  ₹{annual ? tier.annual : tier.price}
                </span>
                <span className="text-gray-400 font-body">/month</span>
              </div>
              <p className="mt-1 text-xs text-gray-400 font-mono">
                {tier.pricePerLead}/lead
              </p>
              <div className="mt-2 text-sm font-body text-gray-500">
                {tier.leads} &middot; {tier.seats}
              </div>
              <Button
                href="/demo"
                variant={tier.popular ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {tier.cta}
              </Button>
              <ul className="mt-8 space-y-3">
                {(preview ? tier.features.slice(0, 4) : tier.features).map(
                  (f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600 font-body"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  )
                )}
              </ul>
              {preview && (
                <p className="mt-4 text-xs text-blue-600 font-medium font-body">
                  See full plan
                  <svg
                    className="inline-block ml-1 h-3 w-3"
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
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
      {preview && (
        <div className="mt-12 text-center">
          <Button href="/pricing" variant="secondary">
            Compare all plans
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
        </div>
      )}
    </Section>
  );
}
