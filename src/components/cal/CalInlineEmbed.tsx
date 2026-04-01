/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import { CAL_CONFIG } from "@/lib/constants";

type CalInlineEmbedProps = {
  className?: string;
  calLink?: string;
};

function loadCalEmbed() {
  if ((window as any).Cal) return;
  const d = document;
  const s = d.createElement("script");
  s.src = "https://app.cal.com/embed/embed.js";
  s.async = true;
  d.head.appendChild(s);
  (window as any).Cal = (window as any).Cal || function(...args: any[]) {
    ((window as any).Cal.q = (window as any).Cal.q || []).push(args);
  };
  (window as any).Cal.loaded = true;
}

export default function CalInlineEmbed({ className = "", calLink }: CalInlineEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const link = calLink || `${CAL_CONFIG.username}/${CAL_CONFIG.eventSlug}`;

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    loadCalEmbed();
    (window as any).Cal?.("init", { origin: "https://cal.com" });
    (window as any).Cal?.("inline", {
      elementOrSelector: containerRef.current,
      calLink: link,
      layout: "month_view",
      config: { theme: CAL_CONFIG.theme },
    });
    (window as any).Cal?.("ui", {
      theme: CAL_CONFIG.theme,
      styles: { branding: { brandColor: CAL_CONFIG.brandColor } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [link]);

  return (
    <div className={className}>
      <div ref={containerRef} style={{ width: "100%", height: "100%", minHeight: 500, overflow: "auto" }} />
    </div>
  );
}
