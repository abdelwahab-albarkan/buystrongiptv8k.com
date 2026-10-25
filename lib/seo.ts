import { siteConfig } from "./site";

/**
 * Generates JSON-LD for Organization and WebSite schema.
 */
export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.canonicalUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.canonicalUrl,
        email: siteConfig.email.support,
        telephone: siteConfig.whatsApp.number,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.whatsApp.number,
            contactType: "customer service",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}/#website`,
        url: siteConfig.canonicalUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.canonicalUrl}/#organization`,
        },
      },
    ],
  };
}

/**
 * Generates JSON-LD BreadcrumbList schema for inner pages.
 */
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.canonicalUrl}${item.path}`,
    })),
  };
}

/**
 * Generates JSON-LD FAQPage schema for pages containing visible FAQs.
 */
export function getFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

