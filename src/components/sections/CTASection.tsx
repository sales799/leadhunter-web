"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CalBookingButton } from "@/components/cal";
import FadeIn from "@/components/ui/FadeIn";

export default function CTASection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section bg="navy-radial" overlay gridPattern>
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl font-extrabold tracking-heading text-white sm:text-4xl lg:text-5xl">
            {title || "Your next \u20B950L contract"}
          </h2>
          {!title && (
            <p className="mt-2 font-heading text-3xl font-extrabold tracking-heading sm:text-4xl lg:text-5xl text-gradient-gold">
              starts with one signal.
            </p>
          )}
          {description && (
            <p className="mt-4 text-lg text-gray-400 font-body">
              {description}
            </p>
          )}
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/signup" size="lg" shimmer>
              Start Free Trial
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <CalBookingButton variant="outline_white" size="lg">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Demo
            </CalBookingButton>
          </div>
          <p className="mt-4 text-sm text-gray-500 font-body">
            No credit card required. 14-day free trial.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
