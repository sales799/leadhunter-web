import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "DPDP Act 2023 Notice | LeadHunterIQ",
  description:
    "LeadHunterIQ Digital Personal Data Protection Act 2023 (India) compliance notice. Data fiduciary identity, purposes, retention, withdrawal mechanism, grievance contact, and DPB escalation path.",
  robots: { index: false, follow: false },
};

export default function DPDPPage() {
  return (
    <>
      <PageHero
        badge="Legal · India"
        title="DPDP Act 2023 Notice"
        description="Digital Personal Data Protection Act, 2023 (India) — data principal disclosures."
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <div
            role="alert"
            className="mb-8 rounded-lg border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900"
          >
            <strong className="block font-bold">DRAFT — pending NYAYA review and two-key sign-off (CEO + CTO).</strong>
            <span>
              This page satisfies discoverability requirements while the formal DPDP notice is
              being finalised. For the current ratified data practices, see the
              {" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
              {" "}
              (last updated 15 March 2026). For specific questions or DPDP rights requests, write
              to{" "}
              <a href="mailto:privacy@talproindia.com" className="underline">privacy@talproindia.com</a>.
            </span>
          </div>

          <div className="prose prose-lg prose-gray">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mt-0">
              1. Data Fiduciary Identity (DPDP §5(i))
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Talpro India Private Limited</strong>, operator of LeadHunterIQ, is the Data
              Fiduciary for personal data processed through this service. Registered office:
              Bengaluru, Karnataka, India.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              2. Purposes of Processing (DPDP §5(ii))
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li>Operating the LeadHunterIQ B2B lead intelligence platform.</li>
              <li>Verifying business users and providing access to subscribed features.</li>
              <li>Communicating service updates, billing, and support responses.</li>
              <li>Aggregating de-identified usage metrics to improve the product.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              3. Retention (DPDP §8(7))
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Personal data is retained only for as long as needed to fulfil the purpose for which
              it was collected, or as required by Indian law (typically up to 7 years for
              financial records). On erasure request, non-statutory data is removed within 30
              days.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              4. Consent Withdrawal (DPDP §6(4))
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You may withdraw consent at any time by emailing{" "}
              <a href="mailto:privacy@talproindia.com" className="text-teal-700 underline">
                privacy@talproindia.com
              </a>
              {" "}or from your account settings. Withdrawal does not affect lawful processing
              done before the withdrawal.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              5. Your Rights (DPDP §11–14)
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li><strong>Right to access</strong> a summary of your personal data and processing.</li>
              <li><strong>Right to correction and erasure</strong> of inaccurate or no-longer-needed data.</li>
              <li><strong>Right to grievance redressal</strong> with the Grievance Officer below.</li>
              <li><strong>Right to nominate</strong> another individual to exercise your rights in your absence.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              6. Grievance Officer (DPDP §13)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>To be appointed and published prior to first paying customer onboarding.</strong>
              {" "}Interim contact for all grievances:{" "}
              <a href="mailto:grievance@talproindia.com" className="text-teal-700 underline">
                grievance@talproindia.com
              </a>
              . Response within 7 days, resolution within 30 days as per DPDP §13(3).
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              7. Escalation to Data Protection Board (DPDP §17)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If unsatisfied with our resolution, you may escalate to the Data Protection Board of
              India established under DPDP §18. The DPB&apos;s grievance portal will be linked
              here once operational.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">
              8. Related Notices
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li><Link href="/privacy" className="text-teal-700 underline">Privacy Policy</Link> (full disclosures)</li>
              <li><Link href="/terms" className="text-teal-700 underline">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-teal-700 underline">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="text-teal-700 underline">GDPR Notice (EU residents)</Link></li>
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
