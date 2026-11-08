import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PricingSection } from "@/components/sections/PricingSection";
import { PriceTable } from "@/components/sections/PriceTable";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Plans & Options",
  description:
    "BuyStrongIPTV8K plans for 3, 6 or 12 months, for 1 to 4 devices. See every price, then order in seconds on WhatsApp.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/plans`,
  },
};

export default function PlansPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> High-Resolution Entertainment Access
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Subscription Plans & Options
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 max-w-3xl leading-relaxed font-normal">
            Pick how many devices you need, choose 3, 6 or 12 months, and order on WhatsApp. The longer the plan, the less you pay per month.
          </p>
        </div>
      </div>

      <PricingSection showTitle={false} />
      <PriceTable />

      {/* Step by Step Inquiry Section */}
      <section className="py-20 bg-bg-2 border-t border-line/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-fg">
              How to Order Your Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-2xl bg-surface border border-line shadow-xl shadow-shade/40">
              <span className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-500/40 text-cyan-300 flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                1
              </span>
              <h3 className="font-bold text-fg text-base mb-2">
                Select Your Plan
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Choose your number of devices and duration, then tap &apos;Order&apos; to go to the checkout page for that exact plan.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-surface border border-line shadow-xl shadow-shade/40">
              <span className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                2
              </span>
              <h3 className="font-bold text-fg text-base mb-2">
                Confirm Compatibility
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Share your device model (Smart TV, FireStick, Apple TV, etc.) with our support representative to verify proper player setup.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-surface border border-line shadow-xl shadow-shade/40">
              <span className="w-9 h-9 rounded-xl bg-amber-950 border border-amber-500/40 text-amber-300 flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                3
              </span>
              <h3 className="font-bold text-fg text-base mb-2">
                Receive Setup Guidance
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Discuss accepted payment arrangements and receive step-by-step onboarding instructions from our live technical support team.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <WhatsAppButton
              size="lg"
              message="Hello BuyStrongIPTV8K, I have a question about your plans."
            >
              Questions? Chat with us
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
