"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lhiq_analytics_consent");
    if (!consent) {
      // Small delay to avoid layout shift on first paint
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("lhiq_analytics_consent", "granted");
    window.dispatchEvent(new Event("analytics-consent-granted"));
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("lhiq_analytics_consent", "denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow-xl backdrop-blur-xl">
        <p className="text-sm text-gray-600 dark:text-gray-300 font-body leading-relaxed">
          We use cookies and analytics to improve your experience. This includes
          Google Analytics, LinkedIn Insight Tag, and Twitter Pixel for
          measuring how visitors interact with our site.
        </p>
        <div className="mt-3 flex gap-3">
          <button
            onClick={handleAccept}
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white font-heading hover:bg-blue-500 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 font-heading hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
