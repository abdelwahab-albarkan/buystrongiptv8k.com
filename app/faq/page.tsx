import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo";
import { faqItems } from "@/components/sections/FAQSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ArrowLeft, HelpCircle, Sparkles, Tv, Smartphone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find straightforward answers about BuyStrongIPTV8K subscription plans, compatible devices, playlist activation, and customer support.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/faq`,
  },
};

export default function FAQPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  const faqSchema = getFaqJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <Sparkles className="w-3.5 h-3.5" /> Help Center & Knowledge Base
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 max-w-3xl leading-relaxed font-normal">
            Everything you need to know about our Strong 8K streaming subscription options, device setup procedures, payment arrangements, and direct customer assistance.
          </p>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="bg-bg py-10 border-b border-line/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/setup/firestick"
              className="p-4 rounded-xl bg-surface/60 border border-line hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-950 text-cyan-400 flex items-center justify-center shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-fg group-hover:text-cyan-300 transition-colors block">
                  FireStick Guide
                </span>
                <span className="text-xs text-muted">Step-by-step setup</span>
              </div>
            </Link>

            <Link
              href="/setup/tivimate"
              className="p-4 rounded-xl bg-surface/60 border border-line hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-fg group-hover:text-cyan-300 transition-colors block">
                  TiviMate Guide
                </span>
                <span className="text-xs text-muted">Xtream codes login</span>
              </div>
            </Link>

            <Link
              href="/setup/smart-tv"
              className="p-4 rounded-xl bg-surface/60 border border-line hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-fg group-hover:text-amber-300 transition-colors block">
                  Smart TV Guide
                </span>
                <span className="text-xs text-muted">Samsung & LG setup</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main FAQ Content */}
      <section className="py-20 bg-bg-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-surface to-bg-2 p-7 sm:p-10 rounded-3xl border border-line shadow-2xl shadow-shade/60 mb-12">
            <FAQAccordion items={faqItems} />
          </div>

          {/* Need More Assistance Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-surface to-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-fg text-base sm:text-lg">
                  Still have unanswered questions?
                </h2>
                <p className="text-xs sm:text-sm text-fg-2 mt-1 max-w-xl">
                  Our live support team can answer questions about server stability, device setups, plan pricing, and compatible player applications.
                </p>
              </div>
            </div>

            <WhatsAppButton
              size="md"
              message="Hello BuyStrongIPTV8K, I have a question after reviewing your FAQ page."
              className="shrink-0"
            >
              Chat with Support
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
