"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import ConsentCheckbox from "@/components/ui/ConsentCheckbox";
import { getStoredUTM } from "@/lib/utm";

const TOC = [
  "GCC Expansion Signals (12 signal types)",
  "Funding & Investment Signals (8 signal types)",
  "Hiring Surge Indicators (10 signal types)",
  "Compliance & Regulatory Triggers (6 signal types)",
  "Real Estate & Infrastructure Signals (5 signal types)",
  "Leadership Change Signals (4 signal types)",
  "Signal Scoring Methodology Overview",
];

const inputClass =
  "w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-body text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors";

export default function SignalTaxonomyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent || !form.email || !form.name) return;

    setLoading(true);
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          asset: "signal-taxonomy-2026",
          consent: true,
          consent_timestamp: new Date().toISOString(),
          ...getStoredUTM(),
        }),
      });
    } catch {
      // Silent fail
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        badge="Free Guide"
        title="The Complete Signal Taxonomy for Indian IT Staffing"
        description="45+ signal types across 7 categories. The definitive classification of business signals that predict IT staffing demand in India."
        breadcrumbs={[
          { name: "Resources", href: "/resources" },
          { name: "Signal Taxonomy", href: "/resources/signal-taxonomy" },
        ]}
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Content preview */}
          <FadeIn>
            <div>
              <Badge variant="gold">2026 Edition</Badge>
              <h3 className="mt-4 text-xl font-heading font-bold text-gray-900 dark:text-white">
                What&apos;s inside
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400 font-body leading-relaxed">
                A 15-page guide covering every signal type that indicates
                upcoming IT staffing demand in India. Built from 15+ years
                of staffing industry expertise and refined through our
                AI signal intelligence engine.
              </p>
              <div className="mt-6 space-y-3">
                {TOC.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm font-body"
                  >
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-heading font-bold text-blue-600 dark:text-blue-400">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-heading font-bold text-blue-900 dark:text-blue-300">
                  Who this is for
                </p>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-400 font-body">
                  BD team leads, agency owners, and sales managers at Indian
                  IT staffing firms who want to move from reactive to
                  signal-driven prospecting.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Download form */}
          <FadeIn delay={0.2}>
            <Card className="lg:sticky lg:top-24">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                    <svg
                      className="h-8 w-8 text-emerald-500"
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
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                    Check your email!
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 font-body">
                    We&apos;ve sent the Signal Taxonomy guide to{" "}
                    <strong>{form.email}</strong>. Check your inbox (and
                    spam folder).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white">
                    Download free guide
                  </h3>
                  <div>
                    <label className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full name *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                      className={inputClass}
                      placeholder="Rajesh Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Work email *
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      type="email"
                      required
                      className={inputClass}
                      placeholder="rajesh@youragency.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={inputClass}
                      placeholder="Your staffing agency"
                    />
                  </div>
                  <ConsentCheckbox
                    checked={consent}
                    onChange={setConsent}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    shimmer
                    disabled={!consent || loading}
                  >
                    {loading ? "Sending..." : "Get Free Guide"}
                  </Button>
                  <p className="text-xs text-gray-400 dark:text-gray-500 text-center font-body">
                    No spam. We&apos;ll also subscribe you to The Signal Report.
                  </p>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
