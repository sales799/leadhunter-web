import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy | LeadHunterIQ",
  description:
    "LeadHunterIQ cookie policy. ePrivacy / GDPR Art 7 / DPDP §6 compliant. Categories, purposes, retention, and consent withdrawal mechanism.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Cookie Policy"
        description="How LeadHunterIQ uses cookies and similar storage technologies."
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          <div
            role="alert"
            className="mb-8 rounded-lg border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900"
          >
            <strong className="block font-bold">DRAFT — pending NYAYA review and two-key sign-off (CEO + CTO).</strong>
            <span>
              Cookie consent UI is live (see the banner at first visit). The detailed policy
              below describes current practices; final ratification under CTO Constitution v11.1
              pending.
            </span>
          </div>

          <div className="prose prose-lg prose-gray">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mt-0">1. What are cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files stored in your browser. Similar technologies include
              local storage, session storage, and pixel tags. This page covers all of these
              collectively as &quot;cookies&quot;.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">2. Categories we use</h2>

            <h3 className="font-heading text-xl font-semibold text-gray-900">2.1 Strictly Necessary</h3>
            <p className="text-gray-600 leading-relaxed">
              These cookies make the site work. They cannot be switched off. No consent required
              under ePrivacy / DPDP §7(b).
            </p>
            <ul className="text-gray-600 leading-relaxed">
              <li><code>lh_session</code> — authentication session, HttpOnly, Secure, SameSite=Lax. Expires on logout.</li>
              <li><code>__Host-csrf</code> — CSRF protection. Session-lifetime.</li>
              <li><code>cookie_consent_v1</code> — your consent choices on this banner. 12 months.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-gray-900">2.2 Analytics (consent required)</h3>
            <p className="text-gray-600 leading-relaxed">
              Loaded only after you accept &quot;Analytics&quot; on the consent banner.
            </p>
            <ul className="text-gray-600 leading-relaxed">
              <li>Umami (self-hosted at analytics.pramaan.online) — page views, country (no IP retained). 13 months.</li>
              <li>Google Analytics 4 — used selectively; consent-mode v2 default-deny. 14 months.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-gray-900">2.3 Marketing (consent required)</h3>
            <p className="text-gray-600 leading-relaxed">
              Loaded only after explicit consent. Currently: none active. Reserved for future
              campaign attribution.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">3. How to manage consent</h2>
            <p className="text-gray-600 leading-relaxed">
              The consent banner appears on first visit with three choices: Accept all, Reject
              non-essential, or Manage preferences. You can reopen the preferences at any time
              by clicking &quot;Cookie settings&quot; in the footer (link added with consent
              banner v2).
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">4. Third-party cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We avoid third-party tracking cookies by default. Stripe and Razorpay set their
              own cookies on checkout pages (necessary for payment flow). YouTube embeds (if any)
              use privacy-enhanced mode (<code>youtube-nocookie.com</code>).
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">5. Withdrawing consent</h2>
            <p className="text-gray-600 leading-relaxed">
              Click &quot;Cookie settings&quot; in the footer or clear your browser&apos;s site
              data. Withdrawal does not affect lawful processing done before withdrawal.
            </p>

            <h2 className="font-heading text-2xl font-bold text-gray-900">6. Related Notices</h2>
            <ul className="text-gray-600 leading-relaxed">
              <li><Link href="/privacy" className="text-teal-700 underline">Privacy Policy</Link></li>
              <li><Link href="/dpdp" className="text-teal-700 underline">DPDP Act 2023 Notice (India)</Link></li>
              <li><Link href="/gdpr" className="text-teal-700 underline">GDPR Notice (EU/EEA)</Link></li>
              <li><Link href="/terms" className="text-teal-700 underline">Terms of Service</Link></li>
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
