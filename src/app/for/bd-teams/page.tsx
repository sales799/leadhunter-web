import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "For BD Teams | LeadHunterIQ",
  description:
    "Stop cold-calling from stale lists. LeadHunterIQ delivers real-time hiring signals straight to your WhatsApp so you can book more meetings with less effort.",
};

const painPoints = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Stale contact lists",
    description:
      "You spend hours building lists that are outdated by the time you start calling. Decision-makers have moved on, and your data is dead on arrival.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Hours lost to manual research",
    description:
      "Scrolling LinkedIn, checking job boards, reading press releases — your mornings disappear into research that should be automated.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Cold outreach, cold responses",
    description:
      "Without timing context, every call is a cold call. Prospects are not hiring, not expanding, not interested — and you had no way to know.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "No signal, just noise",
    description:
      "Your CRM is full of accounts but empty of intent. You need to know who is hiring now, not who hired six months ago.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Signals detected",
    description:
      "LeadHunterIQ scans job boards, press releases, funding announcements, and regulatory filings 24/7. AI scores each signal for relevance and urgency.",
    color: "bg-blue-600",
  },
  {
    step: "02",
    title: "WhatsApp alert lands",
    description:
      "High-priority signals arrive on your phone instantly. Company name, hiring details, decision-maker contacts, and a suggested outreach angle — all in one message.",
    color: "bg-emerald-600",
  },
  {
    step: "03",
    title: "Personalised outreach in minutes",
    description:
      "Use pre-built outreach templates tailored to the signal type. Reference the specific trigger — a new office, a funding round, a hiring surge — so your pitch feels insider-level.",
    color: "bg-purple-600",
  },
  {
    step: "04",
    title: "Meeting booked, CRM updated",
    description:
      "One-click log to your CRM. Track which signals convert to meetings, proposals, and closed deals. Your manager sees the full pipeline, you get the credit.",
    color: "bg-gold-600",
  },
];

const outreachTemplate = {
  subject: "Re: Your {{role_title}} expansion in {{city}}",
  body: `Hi {{first_name}},

I noticed {{company}} recently posted {{num_roles}} {{role_type}} positions in {{city}} — looks like an exciting expansion.

We work with companies scaling their tech teams in India and have a bench of pre-vetted {{skill}} professionals who could be interview-ready within 48 hours.

Would a quick 15-minute call this week make sense to see if there is a fit?`,
  tag: "Signal-triggered template",
};

const dailyWorkflow = [
  {
    time: "8:00 AM",
    action: "Check WhatsApp",
    detail: "5 new high-intent signals scored and prioritised overnight",
  },
  {
    time: "8:30 AM",
    action: "Review top 3 signals",
    detail:
      "Read company intel, check decision-maker profiles, pick outreach angle",
  },
  {
    time: "9:00 AM",
    action: "Send personalised emails",
    detail:
      "Use signal-specific templates — reference the exact hiring trigger",
  },
  {
    time: "10:00 AM",
    action: "Follow up on LinkedIn",
    detail: "Connect with decision-makers using the intel from the signal",
  },
  {
    time: "11:00 AM",
    action: "First meeting booked",
    detail: "Prospect replies — they are impressed you knew about their plans",
  },
  {
    time: "12:00 PM",
    action: "Log to CRM",
    detail: "One-click signal-to-CRM logging, full attribution tracked",
  },
];

export default function BDTeamsPage() {
  return (
    <>
      <PageHero
        badge="For BD Teams"
        title="Your next 10 meetings are hiding in plain sight"
        description="Real-time hiring signals delivered to your WhatsApp. Know who is hiring, what they need, and who to call — before your competitors even find out."
        cta1={{ label: "Start Free Trial", href: "/demo" }}
        cta2={{ label: "See How It Works", href: "/how-it-works" }}
        breadcrumbs={[
          { name: "For", href: "/features" },
          { name: "BD Teams", href: "/for/bd-teams" },
        ]}
      />

      {/* Pain Points */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              The daily grind
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              BD without signals is just cold calling
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Every hour spent on manual research is an hour not spent closing.
              Your competitors are already automating this.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <Card variant="flat" className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Signal-to-Meeting Workflow */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              How signals flow
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              From signal to meeting in under 2 hours
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              A simple four-step workflow that turns raw intelligence into booked
              meetings.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <Card className="h-full">
                <div
                  className={`w-10 h-10 rounded-lg ${step.color} text-white flex items-center justify-center text-sm font-bold`}
                >
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Outreach Template Preview */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn direction="left">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                Outreach templates
              </p>
              <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
                Personalised pitches in seconds, not hours
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Every signal comes with context-aware outreach templates.
                Reference the exact hiring trigger so your email feels
                researched — because it is.
              </p>
              <div className="mt-8">
                <Button href="/demo">Try It Free</Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <Card variant="flat" padding="p-0">
              <div className="border-b border-gray-200 px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  {outreachTemplate.tag}
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Subject
                </p>
                <p className="text-sm font-medium text-gray-900 mb-4">
                  {outreachTemplate.subject}
                </p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Body
                </p>
                <pre className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap font-sans">
                  {outreachTemplate.body}
                </pre>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Daily Workflow Visualization */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              Your new daily workflow
            </p>
            <h2 className="text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              A BD rep&apos;s morning with LeadHunterIQ
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              From signal alert to booked meeting — all before lunch.
            </p>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {dailyWorkflow.map((item, i) => (
              <FadeIn key={item.time} delay={i * 0.1}>
                <Card className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-20 text-center">
                    <span className="text-sm font-bold text-blue-600">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-12 bg-blue-200 hidden sm:block" />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.action}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.detail}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="mt-6 text-xl font-medium text-gray-900 leading-relaxed sm:text-2xl">
              I used to spend my entire morning researching leads. Now I get
              pre-qualified signals on WhatsApp before my coffee is ready. Last
              month I booked 14 meetings from signals alone.
            </blockquote>
            <div className="mt-8">
              <p className="font-bold text-gray-900">Priya M.</p>
              <p className="text-sm text-gray-500">
                Head of BD, IT Staffing Firm, Hyderabad
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <CTASection
        title="Your next 10 meetings are one click away."
        description="Start your free trial and see real-time hiring signals delivered to your WhatsApp within minutes."
      />
    </>
  );
}
