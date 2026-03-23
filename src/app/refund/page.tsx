import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Refund Policy | LeadHunterIQ",
  description:
    "LeadHunterIQ refund policy. 14-day free trial, 30-day money-back guarantee on annual plans. Fair and transparent cancellation terms.",
};

export default function RefundPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Refund Policy"
        description="Last updated: 15 March 2026"
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl prose prose-lg prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We want you to be completely satisfied with LeadHunterIQ. We offer a generous trial
            period and money-back guarantee so you can evaluate the platform risk-free. This
            policy applies to all subscriptions purchased directly through leadhunteriq.in.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">14-Day Free Trial</h2>
          <ul className="text-gray-600 space-y-2">
            <li>All new users receive a 14-day free trial with full access to Growth plan features.</li>
            <li>No credit card is required to start the trial.</li>
            <li>You will not be charged during the trial period under any circumstances.</li>
            <li>At the end of 14 days, you choose whether to subscribe to a paid plan.</li>
            <li>If you do not subscribe, your trial account is deactivated. No charges are applied.</li>
            <li>Trial data is retained for 30 days after trial expiry, then permanently deleted.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Monthly Subscriptions</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Monthly subscriptions can be cancelled at any time from your account settings.</li>
            <li>Upon cancellation, you retain access to the Platform until the end of your current billing cycle.</li>
            <li>No prorated refunds are issued for partial months.</li>
            <li>Example: If you cancel on day 10 of your billing cycle, you have access for the remaining 20 days. No refund is issued for the 10 days already used.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Annual Subscriptions — 30-Day Money-Back Guarantee</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Annual plans come with a 30-day money-back guarantee from the date of purchase.</li>
            <li>If you are not satisfied within the first 30 days, request a full refund by emailing billing@leadhunteriq.in.</li>
            <li>Refunds are processed within 7 to 10 business days to the original payment method.</li>
            <li>After the 30-day window, annual subscriptions are non-refundable for the remainder of the term.</li>
            <li>You may cancel an annual plan at any time, and access continues until the end of the annual period. No partial refund is issued after the 30-day guarantee window.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Enterprise Plans</h2>
          <p className="text-gray-600 leading-relaxed">
            Enterprise plans have custom terms negotiated in the service agreement. Refund and
            cancellation terms are specified in your individual contract. Please contact your
            dedicated account manager for Enterprise billing inquiries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">How to Request a Refund</h2>
          <p className="text-gray-600 leading-relaxed">To request a refund:</p>
          <ol className="text-gray-600 space-y-2 list-decimal pl-5">
            <li>Email billing@leadhunteriq.in with your registered email address and reason for the refund request.</li>
            <li>Our billing team will acknowledge your request within 1 business day.</li>
            <li>Eligible refunds are processed within 7 to 10 business days.</li>
            <li>You will receive email confirmation once the refund is initiated.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Refund Method</h2>
          <ul className="text-gray-600 space-y-2">
            <li>Refunds are credited to the original payment method used for the purchase.</li>
            <li>UPI refunds: 1 to 3 business days.</li>
            <li>Credit/debit card refunds: 5 to 10 business days (depends on your bank).</li>
            <li>Net banking refunds: 5 to 7 business days.</li>
            <li>All refunds are processed in Indian Rupees (INR).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Exceptions</h2>
          <p className="text-gray-600 leading-relaxed">Refunds are not available in the following cases:</p>
          <ul className="text-gray-600 space-y-2">
            <li>Accounts terminated for violation of our Terms of Service.</li>
            <li>Monthly subscriptions after the billing cycle has begun (cancellation stops future charges).</li>
            <li>Annual subscriptions after the 30-day money-back window.</li>
            <li>Disputes raised more than 90 days after the charge date.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Plan Changes</h2>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Upgrade:</strong> Prorated charges apply immediately. You pay the difference for the remaining billing period.</li>
            <li><strong>Downgrade:</strong> Takes effect at the start of your next billing cycle. No refund for the current cycle difference.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            For billing questions, refund requests, or subscription changes:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Email:</strong> billing@leadhunteriq.in</li>
            <li><strong>Support Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST</li>
            <li><strong>Response Time:</strong> Within 1 business day</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
