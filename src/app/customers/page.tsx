import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "See how India's top staffing agencies use LeadHunterIQ to detect opportunities earlier, close deals faster, and save lakhs on lead generation.",
};

const LOGOS = [
  "TeamLease",
  "Quess",
  "Randstad",
  "Adecco",
  "ManpowerGroup",
  "NexGen",
  "TechStaff",
  "PrimeForce",
  "StaffMax",
  "BlueSky",
];

const INDUSTRIES = [
  {
    title: "IT Staffing",
    description:
      "Detect hiring surges, new tech mandates, and budget approvals across India's top IT companies. Our clients place 3x more candidates by reaching out first.",
  },
  {
    title: "RPO",
    description:
      "Identify companies scaling recruitment teams or exiting RPO contracts. Signal intelligence helps RPO firms time their pitches perfectly.",
  },
  {
    title: "GCC Hiring",
    description:
      "Track every GCC setup, expansion, and headcount ramp across India. From STPI filings to commercial leases -- know before anyone else.",
  },
  {
    title: "Contract Staffing",
    description:
      "Monitor PF registration spikes, compliance deadlines, and project ramp-ups to identify contract staffing demand before it hits job boards.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        badge="Customers"
        title="Trusted by India's growing staffing agencies"
        description="From 2-person agencies to 500-seat RPOs, LeadHunterIQ powers smarter business development across India."
        breadcrumbs={[{ name: "Customers", href: "/customers" }]}
      />

      {/* Customer logos */}
      <Section bg="white">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">
            Trusted by staffing leaders across India
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {LOGOS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-5"
              >
                <span className="text-sm font-bold text-gray-400">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials grid */}
      <Section bg="gray">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="blue">Testimonials</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Real results from real staffing agencies using signal intelligence.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <p className="flex-1 text-gray-600 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Industry breakdown */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="emerald">Industries</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-heading text-gray-900 sm:text-4xl">
              Signal intelligence for every staffing vertical
            </h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <FadeIn key={ind.title} delay={i * 0.1}>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-gray-900">
                  {ind.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {ind.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Want to be featured CTA */}
      <Section bg="gray">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-heading text-gray-900 sm:text-3xl">
              Want to be featured?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              If LeadHunterIQ has transformed your business development process,
              we&apos;d love to share your story. Get featured on our website and
              reach thousands of staffing leaders.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Share your story
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
