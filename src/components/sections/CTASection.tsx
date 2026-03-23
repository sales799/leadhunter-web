"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTASection({
  title = "Your next ₹50L contract starts with one signal.",
  description = "Join India's fastest-growing staffing agencies using AI-powered signal intelligence.",
}: {
  title?: string;
  description?: string;
}) {
  const [email, setEmail] = useState("");

  return (
    <Section bg="navy-radial" overlay>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-heading text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-400">{description}</p>
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
            className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <Button type="submit" size="lg">
            Get Started
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          14-day free trial. No credit card required.
        </p>
      </div>
    </Section>
  );
}
