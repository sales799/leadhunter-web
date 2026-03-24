"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const inputClass =
  "w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors";

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "1-5",
    currentTools: "None / Manual process",
  });

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Silent fail — still show success
    }
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
                <h3 className="text-xl font-heading font-bold text-gray-900">Demo requested!</h3>
                <p className="mt-2 text-gray-500 font-body">We&apos;ll reach out within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <div>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-heading font-bold transition-colors ${
                          step >= s
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step > s ? (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          s
                        )}
                      </div>
                      {s < 2 && (
                        <div className={`h-0.5 w-12 rounded transition-colors ${step > s ? "bg-blue-600" : "bg-gray-200"}`} />
                      )}
                    </div>
                  ))}
                  <span className="ml-2 text-xs text-gray-400 font-body">
                    Step {step} of 2
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h4 className="font-heading font-bold text-gray-900">Your details</h4>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          Full name *
                        </label>
                        <input
                          value={formData.name}
                          onChange={(e) => update("name", e.target.value)}
                          required
                          className={inputClass}
                          placeholder="Rajesh Kumar"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          Work email *
                        </label>
                        <input
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          type="email"
                          required
                          className={inputClass}
                          placeholder="rajesh@youragency.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          Phone (for WhatsApp demo link)
                        </label>
                        <input
                          value={formData.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className={inputClass}
                          placeholder="+91 98450 XXXXX"
                        />
                      </div>
                      <Button
                        type="button"
                        className="w-full"
                        size="lg"
                        onClick={() => {
                          if (formData.name && formData.email) setStep(2);
                        }}
                      >
                        Next: Company details
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h4 className="font-heading font-bold text-gray-900">About your agency</h4>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          Company name *
                        </label>
                        <input
                          value={formData.company}
                          onChange={(e) => update("company", e.target.value)}
                          required
                          className={inputClass}
                          placeholder="Your staffing agency"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          BD team size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => update("teamSize", e.target.value)}
                          className={`${inputClass} bg-white`}
                        >
                          <option>1-5</option>
                          <option>6-15</option>
                          <option>16-50</option>
                          <option>50+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1">
                          What do you use today?
                        </label>
                        <select
                          value={formData.currentTools}
                          onChange={(e) => update("currentTools", e.target.value)}
                          className={`${inputClass} bg-white`}
                        >
                          <option>None / Manual process</option>
                          <option>Apollo.io</option>
                          <option>ZoomInfo</option>
                          <option>LinkedIn Sales Navigator only</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="secondary"
                          className="flex-1"
                          onClick={() => setStep(1)}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          className="flex-1"
                          size="lg"
                          shimmer
                          onClick={() => {
                            if (formData.company) handleSubmit();
                          }}
                        >
                          Request Demo
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Card>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-6">What to expect</h3>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-heading font-bold text-blue-600">{s.num}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900">{s.title}</p>
                    <p className="mt-1 text-sm text-gray-500 font-body">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            {/* Trust signals */}
            <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-heading font-bold text-gray-900">No credit card required</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-500 font-body">
                <li>14-day free trial included</li>
                <li>Cancel anytime, no questions asked</li>
                <li>Your data is AES-256 encrypted</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
