/**
 * JSON-LD Structured Data Components
 *
 * These components inject schema.org structured data into page <head>
 * via Next.js script tags. Google uses this for rich results:
 * - Organization: company knowledge panel
 * - Product: product cards in search
 * - FAQPage: FAQ accordion in search results
 * - BreadcrumbList: breadcrumb trail in search results
 * - WebSite: sitelinks search box
 */

import { SITE, FAQS, PRICING } from "@/lib/constants";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.company,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    description: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      telephone: SITE.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [SITE.linkedin, SITE.twitter, SITE.youtube],
    taxID: SITE.gstin,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    publisher: {
      "@type": "Organization",
      name: SITE.company,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered signal intelligence platform for Indian IT staffing firms. Monitors 50+ data sources, scores with proprietary AI signals, and delivers dossier-grade intelligence.",
    offers: [
      {
        "@type": "Offer",
        name: PRICING.analyst.name,
        price: "19999",
        priceCurrency: "INR",
        priceValidUntil: "2027-03-31",
        availability: "https://schema.org/InStock",
        description: PRICING.analyst.description,
      },
      {
        "@type": "Offer",
        name: PRICING.strategist.name,
        price: "49999",
        priceCurrency: "INR",
        priceValidUntil: "2027-03-31",
        availability: "https://schema.org/InStock",
        description: PRICING.strategist.description,
      },
      {
        "@type": "Offer",
        name: PRICING.command.name,
        price: "119999",
        priceCurrency: "INR",
        priceValidUntil: "2027-03-31",
        availability: "https://schema.org/InStock",
        description: PRICING.command.description,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
      bestRating: "5",
    },
    provider: {
      "@type": "Organization",
      name: SITE.company,
      url: SITE.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE.url}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
