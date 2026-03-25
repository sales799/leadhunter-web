"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ConsentCheckbox from "@/components/ui/ConsentCheckbox";
import { getStoredUTM } from "@/lib/utm";

type NewsletterSignupProps = {
  source: string;
  variant?: "inline" | "card";
  heading?: string;
  description?: string;
};

export default function NewsletterSignup({
  source,
  variant = "inline",
  heading,
  description,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent || !email) return;

    setLoading(true);
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          consent: true,
          consent_timestamp: new Date().toISOString(),
          ...getStoredUTM(),
        }),
      });
    } catch {
      // Silent fail — still show success
    }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-6 ${
          variant === "card" ? "text-center" : ""
        }`}
      >
        <p className="font-semibold text-emerald-700 dark:text-emerald-400 font-heading">
          You&apos;re subscribed!
        </p>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-500 font-body">
          Check your inbox for a confirmation email.
        </p>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="mx-auto max-w-xl text-center">
        {heading && (
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {heading}
          </h2>
        )}
        {description && (
          <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed font-body">
            {description}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-body"
              required
            />
            <Button type="submit" size="lg" disabled={!consent || loading}>
              {loading ? "..." : "Subscribe"}
            </Button>
          </div>
          <div className="flex justify-center">
            <ConsentCheckbox
              checked={consent}
              onChange={setConsent}
              compact
            />
          </div>
        </form>
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500 font-body">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  // Inline variant (for Footer)
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex max-w-xs gap-2">
        <input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-gray-500 font-body focus:border-blue-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={!consent || loading}
          className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white font-heading hover:bg-blue-500 transition-colors disabled:opacity-50"
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </div>
      <ConsentCheckbox
        checked={consent}
        onChange={setConsent}
        compact
        className="max-w-xs [&_span]:text-gray-500"
      />
    </form>
  );
}
