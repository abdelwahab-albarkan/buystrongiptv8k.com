import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare, Mail, Clock, Headphones, Sparkles } from "lucide-react";

export function SupportSection() {
  const whatsAppUrl = getWhatsAppLink(
    "Hello BuyStrongIPTV8K, I need assistance with subscription options and device configuration."
  );

  return (
    <section id="support" className="py-24 bg-bg border-b border-line/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Dedicated Customer Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Need Help? We&apos;re Here to Assist.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            Have questions about device compatibility, available subscription plans, or playlist onboarding? Contact our support team through our official channels.
          </p>
        </div>

        {/* Visual Cinematic Banner */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden border border-line bg-bg text-fg relative shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/9]">
            <Image
              src="/images/lucid-origin_Luxury_home_theater_with_Google_TV_streaming_ultra_HD_4K_entertainment_premium_O-0.jpg"
              alt="BuyStrongIPTV8K Customer Support and Setup Guidance"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent p-6 sm:p-10 flex flex-col justify-center max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Headphones className="w-4 h-4" /> Personal Human Onboarding
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg mb-2">
                Step-by-Step Device Setup Assistance
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 font-normal leading-relaxed">
                From finding and downloading the right player application to entering M3U playlist credentials, our support team guides you directly via WhatsApp until your streams are running smoothly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Support Card */}
          <div className="p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-surface to-surface shadow-xl shadow-emerald-950/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-950/50">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-fg mb-2">
                WhatsApp Direct Support
              </h3>
              <p className="text-sm text-fg-2 leading-relaxed mb-6 font-normal">
                Our primary and fastest communication line. Inquire directly about plan rates, payment options, and setup steps.
              </p>
              <div className="py-2.5 px-4 rounded-xl bg-bg/70 border border-emerald-500/30 inline-block mb-6">
                <span className="text-[11px] text-muted block font-medium">Official WhatsApp Line:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-emerald-400">
                  {siteConfig.whatsApp.display}
                </span>
              </div>
            </div>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact BuyStrongIPTV8K directly on WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all duration-200 shadow-lg shadow-emerald-950/50 border border-emerald-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Start WhatsApp Conversation
            </a>
          </div>

          {/* Email Support Card */}
          <div className="p-8 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-surface to-bg-2 shadow-xl shadow-blue-950/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-950/50">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-fg mb-2">
                Email Customer Support
              </h3>
              <p className="text-sm text-fg-2 leading-relaxed mb-6 font-normal">
                For detailed account inquiries, formal requests, and technical log reviews. Our desk responds during operational hours.
              </p>
              <div className="py-2.5 px-4 rounded-xl bg-bg/70 border border-blue-500/30 inline-block mb-6">
                <span className="text-[11px] text-muted block font-medium">Official Support Email:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-cyan-300">
                  {siteConfig.email.support}
                </span>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.email.support}`}
              aria-label="Send an email to BuyStrongIPTV8K support"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-950/50 border border-cyan-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Send an Email
            </a>
          </div>
        </div>

        {/* Support hours and response time clarification */}
        <div className="mt-14 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-muted text-center">
          <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Inquiries are handled in the order received. For the fastest response regarding setup and plan pricing, please contact us via WhatsApp.
          </span>
        </div>
      </div>
    </section>
  );
}
