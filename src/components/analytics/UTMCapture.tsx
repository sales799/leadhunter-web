"use client";

import { useEffect } from "react";
import { parseUTM, storeUTM } from "@/lib/utm";

/** Zero-UI component that captures UTM params from the URL on page load */
export default function UTMCapture() {
  useEffect(() => {
    const utm = parseUTM(window.location.search);
    if (utm) storeUTM(utm);
  }, []);

  return null;
}
