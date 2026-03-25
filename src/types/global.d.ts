/* eslint-disable no-var */
export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    lintrk?: (...args: unknown[]) => void;
    twq?: (...args: unknown[]) => void;
  }
}
