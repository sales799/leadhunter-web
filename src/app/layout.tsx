import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ConditionalShell from "@/components/layout/ConditionalShell";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import LinkedInInsight from "@/components/analytics/LinkedInInsight";
import TwitterPixel from "@/components/analytics/TwitterPixel";
import CookieConsent from "@/components/analytics/CookieConsent";
import UTMCapture from "@/components/analytics/UTMCapture";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
    template: "%s | LeadHunterIQ",
  },
  description:
    "Monitor 50+ data sources, score leads with proprietary AI signals, and deliver dossier-grade intelligence 90 days before your competitors. Built for Indian IT staffing agencies. Starts at ₹19,999/month.",
  metadataBase: new URL("https://leadhunteriq.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://leadhunteriq.in",
    siteName: "LeadHunterIQ",
    title: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
    description:
      "Monitor 50+ data sources, score leads with proprietary AI signals, and close more staffing deals. Built for Indian IT staffing agencies.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <meta name="theme-color" content="#0B1D3A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <GoogleAnalytics />
          <LinkedInInsight />
          <TwitterPixel />
          <UTMCapture />
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <ConditionalShell>{children}</ConditionalShell>
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
