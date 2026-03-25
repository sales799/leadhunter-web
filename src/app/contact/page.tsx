"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";
import ConsentCheckbox from "@/components/ui/ConsentCheckbox";
import { getStoredUTM } from "@/lib/utm";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: true,
          consent_timestamp: new Date().toISOString(),
          ...getStoredUTM(),
        }),
      });
    } catch {
      // Silent fail — form still shows success
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's talk"
        description="Have a question? Want a demo? We respond within 24 hours."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <FadeIn>
            <Card>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">Message sent!</h3>
                  <p className="mt-2 text-gray-500 font-body">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Name</label>
                      <input name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Email</label>
                      <input name="email" type="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Phone</label>
                      <input name="phone" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Company</label>
                      <input name="company" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Interest</label>
                    <select name="interest" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white">
                      <option value="demo">Book a Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="enterprise">Enterprise Plan</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows={4} required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-colors" />
                  </div>
                  <ConsentCheckbox
                    checked={consent}
                    onChange={setConsent}
                  />
                  <Button type="submit" className="w-full" disabled={!consent}>Send Message</Button>
                </form>
              )}
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-heading font-bold text-gray-900">Direct contact</h3>
                <div className="mt-4 space-y-4">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold">Email</p>
                      <p className="text-sm font-body">{SITE.email}</p>
                    </div>
                  </a>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.215l-.3-.18-3.106.922.87-3.18-.194-.31A7.96 7.96 0 014 12a8 8 0 1116 0 8 8 0 01-8 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold">WhatsApp</p>
                      <p className="text-sm font-body">Chat with us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold">Phone</p>
                      <p className="text-sm font-body">{SITE.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
                <h3 className="text-lg font-heading font-bold text-gray-900">Office</h3>
                <p className="mt-2 text-sm text-gray-500 font-body">
                  {SITE.company}<br />
                  {SITE.address}
                </p>
                <p className="mt-2 text-xs text-gray-400 font-mono">
                  GSTIN: {SITE.gstin}
                </p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-sm font-heading font-bold text-blue-900">Prefer a quick demo?</h3>
                <p className="mt-1 text-sm text-blue-700 font-body">
                  Book a 15-minute call and see real signals from your target market live.
                </p>
                <Button href="/demo" variant="primary" size="sm" className="mt-4">
                  Book Demo Call
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
