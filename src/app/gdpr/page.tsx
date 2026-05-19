import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "GDPR Notice | LeadHunterIQ",
  description:
    "LeadHunterIQ General Data Protection Regulation (EU 2016/679) compliance notice. Data controller, legal basis, data subject rights, retention, and supervisory authority complaint path.",
  robots: { index: false, follow: false },
};

export default function GDPRPage() {
  return (
    <>
      <PageHero
        badge="Legal · EU/EEA"
        title="GDPR Notice"
        description="General Data Protection Regulation (EU 2016/679) — data subject disclosures."
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <div
            role="alert"
            className="mb-8 rounded-lg border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900"
          >
            <strong className="block font-bold">DRAFT — pending NYAYA review and two-key sign-off (CEO + CTO).</strong>
            <span>
              This page satisfies discoverability requirements while the formal GDPR notice is
              being finalised. For the current ratified data practices see the
              {" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
              . For GDPR rights requests, write to{" "}
              <a href="mailto:privacy@talproindia.com" className="underline">privacy@talproindia.com</a>.
            </span>
          </div>

          <div className="prose prose-lg prose-gray">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mt-0">
              1. Data Controller (Art 13(1)(a))
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Talpro India Private Limited</strong>, registered in Bengaluru, Karnataka,
              India, is the Data Controller for personal data processed via LeadHunterIQ. We do
              not currently have an EU establishment; EU representative to be appointed under
              Art 27 if EU customer volume requires it.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              2. Data Protection Officer (Art 37)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>DPO designation pending</strong> — to be appointed prior to first EU
              enterprise customer onboarding. Interim contact:{" "}
              <a href="mailto:dpo@talproindia.com" className="text-teal-700 underline">
                dpo@talproindia.com
              </a>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              3. Categories of Personal Data Processed
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li>Identity: name, business email, business phone.</li>
              <li>Account: login credentials (hashed), authentication logs.</li>
              <li>Usage: pages viewed, actions taken, IP address, user agent.</li>
              <li>Billing: company name, GSTIN/VAT, billing address (no card data stored — Stripe/Razorpay handle).</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              4. Legal Basis per Processing Activity (Art 6)
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li><strong>Contract performance (Art 6(1)(b)):</strong> account operation, billing, service delivery.</li>
              <li><strong>Legitimate interest (Art 6(1)(f)):</strong> security monitoring, fraud prevention, product improvement on de-identified data.</li>
              <li><strong>Consent (Art 6(1)(a)):</strong> marketing emails, non-essential cookies, analytics.</li>
              <li><strong>Legal obligation (Art 6(1)(c)):</strong> tax records, regulatory compliance.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              5. Recipients / Sub-processors
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sub-processor list (Art 28) — full list at{" "}
              <Link href="/privacy" className="text-teal-700 underline">Privacy Policy §Sub-processors</Link>
              . Includes infrastructure (Hostinger), email (Microsoft 365 Graph), payments
              (Stripe, Razorpay), and analytics (Umami self-hosted).
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              6. International Transfers (Art 44–49)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Personal data is stored in India (Talpro VPS, Bengaluru region). Transfers from EU
              to India rely on Standard Contractual Clauses (Art 46(2)(c)) or equivalent
              safeguards as part of our DPA template. Adequacy decision for India is not yet in
              place.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              7. Retention Periods (Art 13(2)(a))
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li>Account data: lifetime of account + 90 days.</li>
              <li>Authentication logs: 13 months (security).</li>
              <li>Billing records: 7 years (Indian tax law).</li>
              <li>Marketing consent records: until withdrawn + 12 months.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              8. Your Rights (Art 15–22)
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li>Right of access (Art 15) — request a copy of your data.</li>
              <li>Right to rectification (Art 16) — correct inaccurate data.</li>
              <li>Right to erasure / &quot;right to be forgotten&quot; (Art 17).</li>
              <li>Right to restriction of processing (Art 18).</li>
              <li>Right to data portability (Art 20) — machine-readable export.</li>
              <li>Right to object (Art 21) — to legitimate-interest processing.</li>
              <li>Right not to be subject to automated decision-making (Art 22).</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise any right, email{" "}
              <a href="mailto:privacy@talproindia.com" className="text-teal-700 underline">
                privacy@talproindia.com
              </a>
              . We respond within 30 days (Art 12(3)).
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              9. Right to Lodge a Complaint (Art 77)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to lodge a complaint with your local EU/EEA supervisory
              authority. Directory:{" "}
              <a
                href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline"
              >
                EDPB members list
              </a>
              .
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              10. Related Notices
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li><Link href="/privacy" className="text-teal-700 underline">Privacy Policy</Link> (full disclosures)</li>
              <li><Link href="/terms" className="text-teal-700 underline">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-teal-700 underline">Cookie Policy</Link></li>
              <li><Link href="/dpdp" className="text-teal-700 underline">DPDP Act 2023 Notice (India residents)</Link></li>
            </ul>

            <p className="mt-12 text-sm text-gray-500">
              Document version: v0.1 DRAFT · pending two-key sign-off (CEO + CTO) per CTO
              Constitution v11.1.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
