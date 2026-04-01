"use client";

import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import CalBookingButton from "./CalBookingButton";

type ScheduleCallSectionProps = {
  bg?: "white" | "gray" | "navy";
  heading?: string;
  subheading?: string;
};

/**
 * Complete CTA section with Cal.com booking button + trust badges.
 * Drop onto /pricing ("Not sure which plan?"), /contact, or any page footer.
 */
export default function ScheduleCallSection({
  bg = "navy",
  heading = "Not sure which plan fits?",
  subheading = "Book a free 15-min discovery call. We\u2019ll map LeadHunterIQ to your exact workflow \u2014 no pitch, just value.",
}: ScheduleCallSectionProps) {
  const isDark = bg === "navy";

  return (
    <Section bg={bg}>
      <FadeIn className="text-center max-w-2xl mx-auto">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold tracking-wide mb-4 ${
            isDark ? "bg-white/10 text-blue-300" : "bg-blue-50 text-blue-600"
          }`}
        >
          Free — No obligation
        </span>

        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {heading}
        </h2>

        <p
          className={`text-lg font-body mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subheading}
        </p>

        <CalBookingButton variant={isDark ? "white" : "primary"} size="lg">
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule a Call
        </CalBookingButton>

        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-body ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            15-minute call
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Custom demo for your agency
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card needed
          </span>
        </div>
      </FadeIn>
    </Section>
  );
}
