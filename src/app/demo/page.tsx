"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
  }

  const steps = [
    { num: "1", title: "15-min discovery call", desc: "We learn about your agency, team size, and current lead gen process." },
    { num: "2", title: "Custom demo", desc: "See LeadHunterIQ configured for your industry vertical and geography." },
    { num: "3", title: "Free trial setup", desc: "Start catching signals immediately with a 14-day free trial." },
  ];

  return (
    <>
      <PageHero
        badge="Demo"
        title="See LeadHunterIQ in action"
        description="Book a 15-minute call. We'll show you exactly how LeadHunterIQ finds signals your competitors miss."
        breadcrumbs={[{ name: "Demo", href: "/demo" }]}
      />
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card>
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Demo requested!</h3>
                <p className="mt-2 text-gray-500">We&apos;ll reach out within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work email *</label>
                    <input name="email" type="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                    <input name="company" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team size</label>
                    <select name="teamSize" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                      <option>1-5</option>
                      <option>6-15</option>
                      <option>16-50</option>
                      <option>50+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current tools</label>
                    <select name="currentTools" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                      <option>None / Manual process</option>
                      <option>Apollo.io</option>
                      <option>ZoomInfo</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">Request Demo</Button>
              </form>
            )}
          </Card>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">What to expect</h3>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{s.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{s.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
