/**
 * GA4 Event Tracking for LeadHunterIQ
 * Fires custom events for signup, CTA clicks, and demo bookings
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

// Pre-defined events
export const GA_EVENTS = {
  SIGNUP_START: "signup_form_start",
  SIGNUP_SUBMIT: "signup_form_submit",
  SIGNUP_SUCCESS: "signup_success",
  SIGNUP_ERROR: "signup_error",
  CTA_CLICK: "cta_click",
  DEMO_BOOK: "demo_booking_open",
  PLAY_VIEW: "play_card_view",
  PRICING_TOGGLE: "pricing_toggle",
  COMPARISON_VIEW: "comparison_page_view",
} as const;

export function trackSignupStart() {
  trackEvent(GA_EVENTS.SIGNUP_START);
}

export function trackSignupSubmit(industry: string) {
  trackEvent(GA_EVENTS.SIGNUP_SUBMIT, { industry });
}

export function trackSignupSuccess(industry: string, teamSize: string) {
  trackEvent(GA_EVENTS.SIGNUP_SUCCESS, { industry, team_size: teamSize });
}

export function trackSignupError(error: string) {
  trackEvent(GA_EVENTS.SIGNUP_ERROR, { error_message: error });
}

export function trackCTAClick(location: string, destination: string) {
  trackEvent(GA_EVENTS.CTA_CLICK, { cta_location: location, cta_destination: destination });
}

export function trackDemoBooking(source: string) {
  trackEvent(GA_EVENTS.DEMO_BOOK, { booking_source: source });
}
