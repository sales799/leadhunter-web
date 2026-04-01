/* eslint-disable */
"use client";

import { useEffect, useCallback } from "react";
import Button from "@/components/ui/Button";
import { CAL_CONFIG } from "@/lib/constants";

type CalBookingButtonProps = {
  variant?: "primary" | "secondary" | "white" | "outline_white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
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

export default function CalBookingButton({
  variant = "secondary",
  size = "md",
  className = "",
  children,
}: CalBookingButtonProps) {
  const calLink = `${CAL_CONFIG.username}/${CAL_CONFIG.eventSlug}`;

  useEffect(() => {
    loadCalEmbed();
    (window as any).Cal?.("init", { origin: "https://cal.com" });
    (window as any).Cal?.("ui", {
      theme: CAL_CONFIG.theme,
      styles: { branding: { brandColor: CAL_CONFIG.brandColor } },
      hideEventTypeDetails: false,
    });
  }, []);

  const openCalPopup = useCallback(() => {
    (window as any).Cal?.("modal", {
      calLink,
      layout: "month_view",
    });
  }, [calLink]);

  return (
    <Button variant={variant} size={size} className={className} onClick={openCalPopup}>
      {children || (
        <>
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Demo
        </>
      )}
    </Button>
  );
}
