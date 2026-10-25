import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { SupportSection } from "@/components/sections/SupportSection";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Customer Support",
  description:
    "Get in touch with the BuyStrongIPTV8K support team via WhatsApp or email. Fast assistance for plan inquiries, device compatibility, and playlist setup.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-b from-bg-2 to-bg border-b border-line/80 py-16 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-cyan-400 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Direct Support Lines
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Contact Support & Inquiries
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 max-w-3xl leading-relaxed font-normal">
            Our team is available through direct, verified communication channels to assist with plan selection, compatibility checks, and playlist onboarding.
          </p>
        </div>
      </div>

      <SupportSection />

      {/* Security Advisory Note */}
      <section className="py-16 bg-bg-2 border-t border-line/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 rounded-2xl bg-surface border border-cyan-500/30 shadow-xl shadow-shade/50 space-y-3">
            <div className="flex items-center gap-3 text-cyan-400">
              <ShieldAlert className="w-6 h-6 shrink-0" />
              <h2 className="text-lg font-bold text-fg">
                Official Communication Policy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
              BuyStrongIPTV8K operates strictly through our verified WhatsApp line ({siteConfig.whatsApp.display}) and official support email ({siteConfig.email.support}). We never initiate unsolicited contacts asking for banking passwords, OTP codes, or third-party gift cards. Always ensure you are communicating through our verified links.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
