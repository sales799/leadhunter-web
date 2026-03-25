"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

export default function LinkedInInsight() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem("lhiq_analytics_consent") === "granted");
    };
    check();
    window.addEventListener("analytics-consent-granted", check);
    return () => window.removeEventListener("analytics-consent-granted", check);
  }, []);

  if (!PARTNER_ID || !consented) return null;

  return (
    <>
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "${PARTNER_ID}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
