import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DevicesSection } from "@/components/sections/DevicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { FAQSection, faqItems } from "@/components/sections/FAQSection";
import { getFaqJsonLd } from "@/lib/seo";

export default function HomePage() {
  const faqJsonLd = getFaqJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <DevicesSection />
      <GallerySection />
      <PricingSection />
      <TrustSection />
      <SupportSection />
      <FAQSection />
    </>
  );
}
