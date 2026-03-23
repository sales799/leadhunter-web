import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service | LeadHunterIQ",
  description:
    "LeadHunterIQ terms of service. Subscription terms, SLA commitments, liability, and usage policies for our staffing intelligence platform.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms of Service"
        description="Last updated: 15 March 2026"
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl prose prose-lg prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using LeadHunterIQ (&quot;the Platform&quot;), operated by Talpro India
            Private Limited (&quot;Company&quot;), you agree to be bound by these Terms of Service
            (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Platform.
            These Terms constitute a legally binding agreement between you and the Company.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed">
            LeadHunterIQ is a B2B signal intelligence platform that provides hiring signals, company
            intelligence, and lead scoring for Indian IT staffing agencies. The Platform aggregates
            publicly available data from job boards, news sources, regulatory filings, and other
            public sources to generate actionable business intelligence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">3. Account Registration</h2>
          <ul className="text-gray-600 space-y-2">
            <li>You must provide accurate, current, and complete information during registration.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>One account per individual. Team access requires a Team or Enterprise plan.</li>
            <li>You must be at least 18 years old and authorized to bind your organization to these Terms.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">4. Subscription Plans and Billing</h2>
          <p className="text-gray-600 leading-relaxed"><strong>Plans:</strong></p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Starter:</strong> Rs 2,999/month (billed monthly) or Rs 29,990/year</li>
            <li><strong>Growth:</strong> Rs 6,999/month (billed monthly) or Rs 69,990/year</li>
            <li><strong>Enterprise:</strong> Custom pricing with dedicated support</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4"><strong>Billing Terms:</strong></p>
          <ul className="text-gray-600 space-y-2">
            <li>All prices are in Indian Rupees (INR) and exclusive of applicable GST (18%).</li>
            <li>Monthly subscriptions are billed on the same date each month.</li>
            <li>Annual subscriptions are billed upfront for the full year.</li>
            <li>Payments are processed through Razorpay. We accept UPI, credit cards, debit cards, and net banking.</li>
            <li>Failed payment attempts will be retried for up to 7 days before account suspension.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">5. Free Trial</h2>
          <p className="text-gray-600 leading-relaxed">
            New users receive a 14-day free trial with access to Growth plan features. No credit card
            is required to start the trial. At the end of the trial period, you must select a paid plan
            to continue using the Platform. Trial accounts that are not converted will be deactivated
            and data will be retained for 30 days before deletion.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">6. Service Level Agreement (SLA)</h2>
          <p className="text-gray-600 leading-relaxed">We commit to the following service levels for paid plans:</p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Uptime:</strong> 99.5% monthly uptime for the Platform (excluding scheduled maintenance).</li>
            <li><strong>Data Freshness:</strong> Hiring signals updated daily. Company data refreshed weekly.</li>
            <li><strong>Support Response:</strong> Starter: 24-hour email response. Growth: 12-hour response with chat support. Enterprise: 4-hour response with dedicated account manager.</li>
            <li><strong>Scheduled Maintenance:</strong> Advance notice of at least 48 hours for planned downtime, scheduled during off-peak hours (IST 1:00 AM to 5:00 AM).</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            If we fail to meet the 99.5% uptime commitment in any calendar month, affected customers
            are eligible for a service credit of 5% of that month&apos;s subscription fee for each
            additional 0.5% of downtime, up to a maximum of 30% of the monthly fee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">7. Acceptable Use</h2>
          <p className="text-gray-600 leading-relaxed">You agree not to:</p>
          <ul className="text-gray-600 space-y-2">
            <li>Resell, redistribute, or sublicense Platform data without written authorization.</li>
            <li>Use automated scraping tools to extract bulk data from the Platform.</li>
            <li>Use Platform data for unsolicited mass email campaigns (spam).</li>
            <li>Attempt to reverse-engineer, decompile, or access the Platform&apos;s source code.</li>
            <li>Circumvent usage limits, rate limits, or access controls.</li>
            <li>Use the Platform for any unlawful purpose or in violation of any applicable laws.</li>
            <li>Share account credentials with unauthorized users.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">8. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All intellectual property rights in the Platform, including its software, design, algorithms,
            scoring models, and documentation, are owned by Talpro India Private Limited. Your
            subscription grants you a limited, non-exclusive, non-transferable license to use the
            Platform during your active subscription period.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Data insights and reports generated through the Platform may be used internally by your
            organization. Public redistribution of Platform-generated intelligence requires our
            written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">9. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the maximum extent permitted by applicable Indian law:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>The Platform is provided &quot;as is&quot; without warranties of any kind, either express or implied.</li>
            <li>We do not guarantee the accuracy, completeness, or timeliness of data provided through the Platform.</li>
            <li>Our total liability for any claim arising from use of the Platform shall not exceed the amount you paid to us in the 12 months preceding the claim.</li>
            <li>We shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of business, revenue, or data.</li>
            <li>We are not responsible for business decisions made based on Platform intelligence.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">10. Termination</h2>
          <ul className="text-gray-600 space-y-2">
            <li>You may cancel your subscription at any time through your account settings.</li>
            <li>Monthly subscriptions: Access continues until the end of the current billing period.</li>
            <li>Annual subscriptions: Refer to our Refund Policy for cancellation terms.</li>
            <li>We may terminate your account immediately for violation of these Terms.</li>
            <li>Upon termination, your data will be retained for 30 days and then permanently deleted.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">11. Dispute Resolution</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms are governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of courts in Bengaluru, Karnataka. Before initiating formal legal
            proceedings, both parties agree to attempt resolution through good-faith negotiation
            for a period of 30 days.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">12. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            We may modify these Terms at any time. Material changes will be communicated via email
            at least 30 days before taking effect. Continued use of the Platform after the effective
            date constitutes acceptance of the modified Terms. If you disagree with the changes, you
            may cancel your subscription before the effective date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">13. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms, contact us at:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Email:</strong> legal@leadhunteriq.in</li>
            <li><strong>Address:</strong> Talpro India Private Limited, Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
