"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("https://n8n.talpro.in/webhook/leadhunter-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's talk"
        description="Have a question? Want a demo? We'd love to hear from you."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
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
                <h3 className="text-xl font-bold text-gray-900">Message sent!</h3>
                <p className="mt-2 text-gray-500">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input name="email" type="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input name="company" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows={4} required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Direct contact</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-500">
                <p>Email: <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:underline">{SITE.email}</a></p>
                <p>WhatsApp: <a href={SITE.whatsapp} className="text-blue-600 hover:underline">Chat with us</a></p>
                <p>Phone: {SITE.phone}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Office</h3>
              <p className="mt-2 text-sm text-gray-500">{SITE.company}<br />{SITE.address}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
