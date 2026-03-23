"use client";

import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";

// export const metadata is not allowed in client components,
// so metadata is defined in a separate layout or via generateMetadata in a parent.

const GUIDES = [
  {
    title: "IT Staffing Lead Gen Playbook",
    description:
      "A step-by-step guide to building a signal-driven lead generation engine for IT staffing agencies. Covers GCC tracking, funding signals, and compliance-based outreach.",
    tag: "Playbook",
  },
  {
    title: "GCC Tracking Starter Kit",
    description:
      "Everything you need to start tracking Global Capability Centre setups and expansions across India. Includes signal sources, scoring criteria, and outreach templates.",
    tag: "Starter Kit",
  },
];

const TEMPLATES = [
  {
    title: "Email Outreach Templates",
    description:
      "12 proven email templates for staffing BD teams. Cold outreach, signal-triggered follow-ups, GCC introductions, and re-engagement sequences.",
    tag: "Templates",
  },
  {
    title: "BD Call Scripts",
    description:
      "Phone scripts for signal-driven conversations. How to reference a specific signal, establish credibility, and book meetings within the first 60 seconds.",
    tag: "Scripts",
  },
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        badge="Resources"
        title="Tools and guides for staffing leaders"
        description="Free playbooks, templates, and tools to help your agency grow faster with signal intelligence."
        breadcrumbs={[{ name: "Resources", href: "/resources" }]}
      />

      {/* ROI Calculator link */}
      <Section bg="white">
        <FadeIn>
          <Card className="text-center mx-auto max-w-2xl">
            <Badge variant="gold">Interactive Tool</Badge>
            <h2 className="mt-4 text-2xl font-extrabold tracking-heading text-gray-900 sm:text-3xl">
              ROI Calculator
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              See exactly how much revenue LeadHunterIQ can add to your
              agency. Input your team size, current close rate, and deal value
              to get a personalised projection.
            </p>
            <div className="mt-6">
              <Button href="/pricing#roi-calculator" size="lg">
                Calculate your ROI
              </Button>
            </div>
          </Card>
        </FadeIn>
      </Section>

      {/* Guides section */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="blue">Guides</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              In-depth playbooks for staffing BD
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Actionable frameworks built from 15+ years of IT staffing
              experience.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {GUIDES.map((guide, i) => (
            <FadeIn key={guide.title} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <div className="mb-3">
                  <Badge variant="emerald">{guide.tag}</Badge>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {guide.title}
                </h3>
                <p className="mt-3 flex-1 text-gray-500 leading-relaxed">
                  {guide.description}
                </p>
                <div className="mt-5">
                  <Button href="/demo" variant="secondary" size="sm">
                    Download free
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Templates section */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="gold">Templates</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Ready-to-use BD templates
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Copy, customise, and close. Outreach templates designed for
              signal-driven staffing sales.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {TEMPLATES.map((tmpl, i) => (
            <FadeIn key={tmpl.title} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <div className="mb-3">
                  <Badge variant="navy">{tmpl.tag}</Badge>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {tmpl.title}
                </h3>
                <p className="mt-3 flex-1 text-gray-500 leading-relaxed">
                  {tmpl.description}
                </p>
                <div className="mt-5">
                  <Button href="/demo" variant="secondary" size="sm">
                    Get template
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Newsletter signup */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="blue">Newsletter</Badge>
            <h2 className="mt-4 text-2xl font-extrabold tracking-heading text-gray-900 sm:text-3xl">
              Staffing Signal Weekly
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Get the top 10 staffing signals of the week, market insights,
              and BD tips delivered to your inbox every Monday.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-lg bg-emerald-50 border border-emerald-200 p-6">
                <p className="font-semibold text-emerald-700">
                  You&apos;re subscribed!
                </p>
                <p className="mt-1 text-sm text-emerald-600">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 flex max-w-md mx-auto gap-3"
              >
                <input
                  type="email"
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-gray-400">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
