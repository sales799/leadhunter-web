import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
    template: "%s | LeadHunterIQ",
  },
  description:
    "Detect GCC expansions, score leads with AI, and close more staffing deals. Built for Indian IT staffing agencies. Starts at ₹2,999/month.",
  metadataBase: new URL("https://leadhunteriq.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://leadhunteriq.in",
    siteName: "LeadHunterIQ",
    title: "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing",
    description:
      "Detect GCC expansions, score leads with AI, and close more staffing deals. Built for Indian IT staffing agencies.",
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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
