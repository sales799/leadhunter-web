import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security & Compliance | LeadHunterIQ",
  description:
    "LeadHunterIQ is DPDPA 2023 compliant with AES-256 encryption, TLS 1.3, role-based access, and full audit trails. Built for enterprise-grade data protection.",
};

const securityPillars = [
  {
    title: "Data Encryption",
    badge: "AES-256",
    description:
      "All data encrypted at rest using AES-256 and in transit using TLS 1.3. Database-level encryption ensures your signal intelligence and client data remain protected even in the event of physical media compromise.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "DPDPA 2023 Compliance",
    badge: "COMPLIANT",
    description:
      "Full compliance with India's Digital Personal Data Protection Act. Explicit consent collection, purpose limitation, data minimisation, right to erasure, and consent withdrawal mechanisms are built into every data flow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access Control",
    badge: "RBAC",
    description:
      "Granular permissions by team, branch, and seniority. Managers see the full pipeline, reps see their assigned territories. No unauthorized access to client intelligence data.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Full Audit Trails",
    badge: "LOGGED",
    description:
      "Every data access, signal viewed, export, and outreach action is logged with timestamp, user identity, and IP address. Full audit trails for internal compliance teams and external audits.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const dataHandling = [
  { item: "Contact data sourced from public business directories and verified APIs only", status: "Active" },
  { item: "No scraping of personal social media profiles or private data", status: "Active" },
  { item: "Consent-based processing with explicit purpose limitation", status: "Active" },
  { item: "Right to erasure — data deletion within 72 hours on request", status: "Active" },
  { item: "Data retention limited to active subscription period + 30 days", status: "Active" },
  { item: "No cross-border data transfer without adequate protection measures", status: "Active" },
  { item: "Data Processing Activity records maintained per DPDPA Section 8", status: "Active" },
  { item: "Consent withdrawal mechanism accessible from customer dashboard", status: "Active" },
];

const infrastructure = [
  { label: "Hosting", value: "India-based cloud infrastructure (data residency)" },
  { label: "Database", value: "PostgreSQL with row-level security" },
  { label: "Encryption at rest", value: "AES-256" },
  { label: "Encryption in transit", value: "TLS 1.3" },
  { label: "Authentication", value: "Session-based with CSRF protection" },
  { label: "API security", value: "Rate limiting, API key rotation, IP allowlisting" },
  { label: "Backups", value: "Daily automated backups with 30-day retention" },
  { label: "Monitoring", value: "24/7 infrastructure monitoring with alerting" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        badge="Security & Compliance"
        title="Enterprise-grade security. India-first compliance."
        description="Your signal intelligence data is protected by bank-grade encryption, DPDPA-compliant data handling, and full audit trails. Built for enterprise procurement requirements."
        breadcrumbs={[{ name: "Security", href: "/security" }]}
      />

      {/* Security Pillars */}
      <Section bg="white">
        <SectionHead
          badge="Security Posture"
          badgeVariant="blue"
          title="Four pillars of data protection"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {securityPillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-gray-900">{pillar.title}</h3>
                      <Badge variant="emerald">{pillar.badge}</Badge>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-body">{pillar.description}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* DPDPA Data Handling */}
      <Section bg="gray">
        <SectionHead
          badge="DPDPA 2023"
          badgeVariant="emerald"
          title="Data handling commitments"
          description="Every data flow in LeadHunterIQ is designed around India's Digital Personal Data Protection Act requirements."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {dataHandling.map((item, i) => (
            <FadeIn key={item.item} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700 font-body flex-1">{item.item}</span>
                <Badge variant="emerald">{item.status}</Badge>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Infrastructure */}
      <Section bg="white">
        <SectionHead
          badge="Infrastructure"
          title="Technical security details"
        />
        <FadeIn>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <tbody>
                {infrastructure.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="py-3 px-6 font-heading font-semibold text-gray-900 w-1/3">{row.label}</td>
                    <td className="py-3 px-6 text-gray-600 font-body">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* Company Info */}
      <Section bg="navy-radial" overlay gridPattern>
        <SectionHead
          badge="Registered Entity"
          badgeVariant="white"
          title="Backed by Talpro India Pvt Ltd"
          description="15+ years of IT staffing expertise. Registered company with full regulatory compliance."
          light
        />
        <FadeIn>
          <div className="max-w-md mx-auto glass-card p-8 text-center">
            <p className="font-heading font-bold text-white text-lg">{SITE.company}</p>
            <p className="mt-2 text-sm text-gray-400 font-body">{SITE.address}</p>
            <p className="mt-2 text-sm text-gray-500 font-mono">GSTIN: {SITE.gstin}</p>
            <div className="mt-4 flex justify-center gap-3">
              <Badge variant="emerald">DPDPA Compliant</Badge>
              <Badge variant="blue">AES-256</Badge>
              <Badge variant="gold">TLS 1.3</Badge>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Questions about our security practices?"
        description="Our team is happy to discuss security requirements, compliance certifications, and custom data handling agreements for enterprise customers."
      />
    </>
  );
}
