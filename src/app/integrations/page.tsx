import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect LeadHunterIQ with HubSpot, Salesforce, Zoho CRM, WhatsApp, Slack, and more. Signals flow directly into your existing workflow.",
};

const INTEGRATIONS = [
  {
    name: "HubSpot",
    description:
      "Auto-create contacts, companies, and deals in HubSpot when high-score signals are detected. Trigger workflows and sequences instantly.",
    howItWorks:
      "Connect via OAuth. Map signal fields to HubSpot properties. Signals above your score threshold auto-create deals in your pipeline.",
  },
  {
    name: "Salesforce",
    description:
      "Push enriched leads and signal data directly into Salesforce. Create opportunities, update accounts, and trigger assignment rules.",
    howItWorks:
      "Authenticate with Salesforce credentials. Configure object mapping and score thresholds. Signals sync in real-time to your org.",
  },
  {
    name: "Zoho CRM",
    description:
      "Native integration with Zoho CRM and Zoho Recruit. Sync signals as leads, create potentials, and auto-assign to your BD team.",
    howItWorks:
      "One-click Zoho OAuth. Select modules to sync (Leads, Contacts, Potentials). LeadHunterIQ pushes enriched data with every signal.",
  },
  {
    name: "WhatsApp",
    description:
      "Get hot signals delivered to WhatsApp the moment they are detected. Your BD team can act within minutes -- first-mover advantage.",
    howItWorks:
      "Link your WhatsApp Business number. Set score thresholds (e.g., 80+). Receive formatted signal cards with company details and contacts.",
  },
  {
    name: "Slack",
    description:
      "Route signals to dedicated Slack channels by type, score, or region. Keep your entire team informed without leaving Slack.",
    howItWorks:
      "Add the LeadHunterIQ Slack app. Choose channels for different signal categories. Customize notification format and frequency.",
  },
  {
    name: "Email",
    description:
      "Daily and weekly signal digests delivered to your inbox. Customise frequency, filters, and formatting to match your workflow.",
    howItWorks:
      "Configure delivery schedule (real-time, daily, weekly). Set filters by signal type, score range, or geography. HTML or plain-text format.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        badge="Integrations"
        title="Works with your existing stack"
        description="LeadHunterIQ plugs into the tools your team already uses. No migration, no disruption -- just smarter signals flowing into your workflow."
        breadcrumbs={[{ name: "Integrations", href: "/integrations" }]}
      />

      {/* Integration cards grid */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="blue">Native Integrations</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Connect in minutes, not weeks
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              One-click setup for the tools your team already depends on.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((intg, i) => (
            <FadeIn key={intg.name} delay={i * 0.08}>
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <span className="text-lg font-bold text-blue-600">
                      {intg.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {intg.name}
                  </h3>
                </div>
                <p className="flex-1 text-gray-500 leading-relaxed">
                  {intg.description}
                </p>
                <div className="mt-5 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    How it works
                  </p>
                  <p className="text-sm text-gray-600">{intg.howItWorks}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* API section */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center gap-2">
              <Badge variant="gold">API</Badge>
              <Badge variant="emerald">Coming Soon</Badge>
            </div>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Build custom integrations
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Need something custom? Our REST API lets you pull signals, enrichment data, and TALPRO-IQ scores directly into your own systems. Available on Enterprise plans.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/contact" size="lg">
                Talk to sales
              </Button>
              <Button href="/demo" variant="secondary" size="lg">
                Request early access
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Webhook documentation preview */}
      <Section bg="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Badge variant="navy">Webhooks</Badge>
              <h2 className="mt-4 text-2xl font-extrabold tracking-heading text-gray-900 sm:text-3xl">
                Real-time webhook delivery
              </h2>
              <p className="mt-4 text-gray-500">
                Receive signal events as they happen via webhook. Perfect for custom dashboards, internal tools, and automation pipelines.
              </p>
            </div>
            <Card variant="flat" padding="p-0">
              <div className="rounded-t-2xl bg-gray-900 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-gray-400 font-mono">
                    POST /webhooks/signals
                  </span>
                </div>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-relaxed font-mono text-gray-700 bg-gray-50">
{`{
  "event": "signal.detected",
  "score": 92,
  "company": "Deloitte",
  "signal_type": "gcc_expansion",
  "location": "Hyderabad",
  "detail": "500-seat facility, STPI filing",
  "contacts": [
    {
      "name": "Rajiv Menon",
      "title": "VP Engineering",
      "mobile": "+91 98xxx xxxxx"
    }
  ],
  "timestamp": "2025-01-15T09:30:00Z"
}`}
              </pre>
            </Card>
            <p className="mt-6 text-center text-sm text-gray-400">
              Webhook documentation will be available with the API launch. Enterprise customers can request early access.
            </p>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
