import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import CTASection from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { DASHBOARD_SIGNALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Signal Report — Weekly Intelligence for IT Staffing | LeadHunterIQ",
  description:
    "Get the top staffing signals of the week delivered to your inbox. GCC expansions, funding rounds, hiring surges, and AI-powered insights for Indian IT staffing agencies.",
  openGraph: {
    title: "The Signal Report — Weekly Intelligence for IT Staffing",
    description:
      "Free weekly newsletter with the top staffing signals. GCC expansions, funding rounds, and hiring surges — before your competitors see them.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

const BENEFITS = [
  {
    icon: "📡",
    title: "Top 10 signals of the week",
    desc: "Curated GCC expansions, funding rounds, and hiring surges across India.",
  },
  {
    icon: "📊",
    title: "Market intelligence briefs",
    desc: "Industry trends, competitor moves, and sector analysis for IT staffing.",
  },
  {
    icon: "🎯",
    title: "Actionable BD tips",
    desc: "Outreach templates, conversation starters, and timing strategies.",
  },
  {
    icon: "⚡",
    title: "Early access to features",
    desc: "Subscribers get first look at new LeadHunterIQ capabilities.",
  },
];

export default function SignalReportPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "The Signal Report", href: "/signal-report" }]}
      />
      <PageHero
        badge="Free Newsletter"
        title="The Signal Report"
        description="Weekly intelligence on GCC expansions, hiring surges, and market shifts — delivered to your inbox every Monday. Free forever."
        breadcrumbs={[{ name: "Signal Report", href: "/signal-report" }]}
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          {/* Signup form */}
          <FadeIn>
            <Card className="lg:sticky lg:top-24">
              <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
                Subscribe for free
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-body mb-6">
                Join 500+ Indian IT staffing leaders who get The Signal Report
                every week.
              </p>
              <NewsletterSignup source="signal-report" variant="card" />
            </Card>
          </FadeIn>

          {/* What you get */}
          <div>
            <FadeIn>
              <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-6">
                What you&apos;ll get every Monday
              </h3>
            </FadeIn>
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-lg">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900 dark:text-white">
                      {b.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-body">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Sample signals preview */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="emerald">Sample Signals</Badge>
            <h2 className="mt-4 text-2xl font-heading font-extrabold text-gray-900 dark:text-white sm:text-3xl">
              A taste of what subscribers see
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 font-body">
              Real-time signals from our intelligence engine.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {DASHBOARD_SIGNALS.map((signal, i) => (
            <FadeIn key={signal.company} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant={
                      signal.tier === "ULTRA-HOT" ? "gold" : "blue"
                    }
                  >
                    {signal.tier}
                  </Badge>
                  <span className="text-xs text-gray-400 font-mono">
                    {signal.time}
                  </span>
                </div>
                <p className="font-heading font-bold text-gray-900 dark:text-white">
                  {signal.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-body mt-1">
                  {signal.signal} &mdash; {signal.detail}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
                      style={{ width: `${signal.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
                    {signal.score}
                  </span>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
