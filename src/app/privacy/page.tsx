import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadHunterIQ",
  description:
    "LeadHunterIQ privacy policy. DPDPA 2023 compliant. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description="Last updated: 15 March 2026"
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl prose prose-lg prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            LeadHunterIQ (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a product of Talpro India
            Private Limited, registered in Bengaluru, Karnataka, India. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal data when you
            use our platform, website (leadhunteriq.in), and related services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are committed to compliance with the Digital Personal Data Protection Act, 2023
            (DPDPA) and all applicable Indian data protection laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">2. Data We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect the following categories of personal data:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Account Information:</strong> Name, email address, phone number, company name, designation, and billing address provided during registration.</li>
            <li><strong>Usage Data:</strong> Pages visited, features used, search queries, time spent, browser type, device information, and IP address.</li>
            <li><strong>Payment Data:</strong> Processed securely through Razorpay. We do not store credit card or bank account details on our servers.</li>
            <li><strong>Communication Data:</strong> Emails, support tickets, and chat messages you send to us.</li>
            <li><strong>Business Intelligence Data:</strong> Company and contact information sourced from publicly available sources for our lead intelligence platform.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">3. How We Use Your Data</h2>
          <p className="text-gray-600 leading-relaxed">We use your personal data for the following purposes:</p>
          <ul className="text-gray-600 space-y-2">
            <li>Providing, maintaining, and improving our platform and services</li>
            <li>Processing payments and managing subscriptions</li>
            <li>Sending transactional emails (account confirmations, billing receipts, feature updates)</li>
            <li>Sending marketing communications (with your consent; you can opt out at any time)</li>
            <li>Analyzing platform usage to improve user experience</li>
            <li>Preventing fraud, enforcing our terms, and ensuring platform security</li>
            <li>Complying with legal obligations under Indian law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">4. DPDPA 2023 Compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            In accordance with the Digital Personal Data Protection Act, 2023, we observe the following:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Lawful Purpose:</strong> We process personal data only for lawful purposes with your consent or as permitted under the Act.</li>
            <li><strong>Data Principal Rights:</strong> You have the right to access, correct, and erase your personal data. You may withdraw consent at any time by contacting us at privacy@leadhunteriq.in.</li>
            <li><strong>Data Fiduciary Obligations:</strong> As a Data Fiduciary, we implement reasonable security safeguards, maintain accuracy of data, and delete data when the purpose is fulfilled.</li>
            <li><strong>Grievance Redressal:</strong> Our Data Protection Officer can be reached at dpo@leadhunteriq.in. We will respond to all grievances within 7 business days.</li>
            <li><strong>Cross-Border Transfer:</strong> Personal data may be transferred to countries not restricted by the Central Government under the DPDPA. All transfers are subject to appropriate safeguards.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures including:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
            <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication for internal systems.</li>
            <li><strong>Infrastructure:</strong> Hosted on secure cloud infrastructure with SOC 2 compliance.</li>
            <li><strong>Monitoring:</strong> Continuous security monitoring, vulnerability scanning, and annual penetration testing.</li>
            <li><strong>Incident Response:</strong> Documented breach notification process compliant with DPDPA requirements.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">6. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your personal data only as long as necessary for the purposes described in this policy:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Active accounts:</strong> Data is retained for the duration of your subscription.</li>
            <li><strong>Closed accounts:</strong> Personal data is deleted within 90 days of account closure, except where retention is required by law.</li>
            <li><strong>Payment records:</strong> Retained for 8 years as required under the Income Tax Act and GST regulations.</li>
            <li><strong>Usage logs:</strong> Anonymized and aggregated after 12 months.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">Under the DPDPA 2023, you have the right to:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Access:</strong> Request a summary of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
            <li><strong>Grievance Redressal:</strong> Lodge a complaint with our Data Protection Officer or the Data Protection Board of India.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">8. Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            We use essential cookies for platform functionality and analytics cookies (with your consent) to
            improve user experience. You can manage cookie preferences through your browser settings.
            We do not sell or share cookie data with third-party advertisers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">9. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">We use the following third-party services that may process your data:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Razorpay:</strong> Payment processing (PCI-DSS compliant)</li>
            <li><strong>Google Analytics:</strong> Website analytics (anonymized IP)</li>
            <li><strong>AWS / Cloud Infrastructure:</strong> Data hosting and storage</li>
            <li><strong>Postmark / Email Service:</strong> Transactional email delivery</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">10. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of material
            changes via email or a prominent notice on our platform at least 30 days before the
            changes take effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">11. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related inquiries, data access requests, or grievances:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Data Protection Officer:</strong> dpo@leadhunteriq.in</li>
            <li><strong>General Privacy Queries:</strong> privacy@leadhunteriq.in</li>
            <li><strong>Registered Address:</strong> Talpro India Private Limited, Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
