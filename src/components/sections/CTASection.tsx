"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function CTASection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const [email, setEmail] = useState("");

  return (
    <Section bg="navy-radial" overlay gridPattern>
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl font-extrabold tracking-heading text-white sm:text-4xl lg:text-5xl">
            {title || "Your next ₹50L contract"}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/demo?email=${encodeURIComponent(email)}`;
            }}
            className="mt-8 flex max-w-md mx-auto gap-3"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm font-body focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <Button type="submit" size="lg" shimmer>
              Get Early Access
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-500 font-body">
            No credit card required. 14-day free trial.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
