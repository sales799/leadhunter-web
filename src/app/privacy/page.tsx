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
          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
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

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">2. Data We Collect</h2>
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

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">3. How We Use Your Data</h2>
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

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">4. DPDPA 2023 Compliance</h2>
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

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures including:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
            <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication for internal systems.</li>
            <li><strong>Infrastructure:</strong> Hosted on secure cloud infrastructure with SOC 2 compliance.</li>
            <li><strong>Monitoring:</strong> Continuous security monitoring, vulnerability scanning, and annual penetration testing.</li>
            <li><strong>Incident Response:</strong> Documented breach notification process compliant with DPDPA requirements.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">6. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your personal data only as long as necessary for the purposes described in this policy:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Active accounts:</strong> Data is retained for the duration of your subscription.</li>
            <li><strong>Closed accounts:</strong> Personal data is deleted within 90 days of account closure, except where retention is required by law.</li>
            <li><strong>Payment records:</strong> Retained for 8 years as required under the Income Tax Act and GST regulations.</li>
            <li><strong>Usage logs:</strong> Anonymized and aggregated after 12 months.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">Under the DPDPA 2023, you have the right to:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Access:</strong> Request a summary of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
            <li><strong>Grievance Redressal:</strong> Lodge a complaint with our Data Protection Officer or the Data Protection Board of India.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">8. Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            We use essential cookies for platform functionality and analytics cookies (with your consent) to
            improve user experience. You can manage cookie preferences through your browser settings.
            We do not sell or share cookie data with third-party advertisers.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">9. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">We use the following third-party services that may process your data:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Razorpay:</strong> Payment processing (PCI-DSS compliant)</li>
            <li><strong>Google Analytics 4:</strong> Website analytics and conversion tracking (consent-based loading)</li>
            <li><strong>LinkedIn Insight Tag:</strong> Conversion tracking and audience insights for LinkedIn advertising (consent-based)</li>
            <li><strong>Twitter/X Pixel:</strong> Conversion tracking for Twitter/X advertising (consent-based)</li>
            <li><strong>AWS / Cloud Infrastructure:</strong> Data hosting and storage</li>
            <li><strong>Postmark / Email Service:</strong> Transactional email delivery</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">10. Social Media and Tracking Technologies</h2>
          <p className="text-gray-600 leading-relaxed">
            We maintain a presence on social media platforms including LinkedIn, Twitter/X, and YouTube.
            When you interact with our social media profiles or follow links from our social posts to
            our website, the following data practices apply:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>UTM Parameters:</strong> Links shared from our social media posts may contain UTM tracking parameters (source, medium, campaign). These help us understand which content drives visits to our site. UTM data is stored in your browser session and included with form submissions to measure content effectiveness. This data is not personally identifiable on its own.</li>
            <li><strong>LinkedIn Insight Tag:</strong> With your consent, we use the LinkedIn Insight Tag to measure the effectiveness of our LinkedIn campaigns and understand our website audience. LinkedIn may use this data according to their own privacy policy. You can opt out at <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="underline text-blue-600">LinkedIn Ad Preferences</a>.</li>
            <li><strong>Twitter/X Pixel:</strong> With your consent, we use the Twitter/X conversion tracking pixel to measure the effectiveness of our Twitter campaigns. You can opt out in your <a href="https://twitter.com/settings/privacy_and_safety" className="underline text-blue-600">Twitter Privacy Settings</a>.</li>
            <li><strong>Newsletter Data:</strong> When you subscribe to The Signal Report or our newsletter, we collect your email address and the source of your subscription (which page or social post you signed up from). Email addresses are stored securely and used solely for sending our newsletter. Every email includes an unsubscribe link. You may request deletion of your data at any time.</li>
            <li><strong>Consent Management:</strong> All analytics and tracking technologies on our website are consent-based. On your first visit, you will be presented with a cookie consent banner. Analytics scripts only load after you explicitly grant consent. You can change your preference at any time by clearing your browser&apos;s local storage.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">11. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of material
            changes via email or a prominent notice on our platform at least 30 days before the
            changes take effect.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-10">12. Contact Us</h2>
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
