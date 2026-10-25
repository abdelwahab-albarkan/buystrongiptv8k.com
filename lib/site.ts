/**
 * Centralized site configuration for BuyStrongIPTV8K.
 * Update branding, contact channels, and domain in this single file.
 */

export const siteConfig = {
  name: "BuyStrongIPTV8K",
  tagline: "Your Entertainment. One Powerful Experience.",
  domain: "https://buystrongiptv8k.com",
  canonicalUrl: "https://buystrongiptv8k.com",
  description:
    "Explore available Strong 8K subscription options, check device compatibility, and contact our support team for setup assistance and plan information.",
  whatsApp: {
    display: "+212 625-218443",
    number: "+212625218443",
    cleanNumber: "212625218443",
    defaultMessage:
      "Hello BuyStrongIPTV8K, I would like more information about your available subscription plans.",
  },
  email: {
    support: "support@streamb4.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Plans", href: "/plans" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  setupLinks: [
    { label: "FireStick Setup", href: "/setup/firestick" },
    { label: "TiviMate Setup", href: "/setup/tivimate" },
    { label: "Smart TV Setup", href: "/setup/smart-tv" },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};
