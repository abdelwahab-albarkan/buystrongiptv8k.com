import React from "react";
import { ShieldCheck, MessageSquareCheck, FileText, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="py-24 bg-bg-2 border-b border-line/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Our Transparency Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Clarity, Honesty & Realistic Expectations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            We prioritize open communication, documented policies, and dependable personal assistance over sensational marketing claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="p-7 rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-blue-500/40 shadow-xl shadow-shade/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-600/40 text-cyan-400 flex items-center justify-center mb-5 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-fg mb-2.5">
                Accurate Descriptions
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                We make no unsupported promises of zero buffering or impossible 100% uptime. Playback depends on your local broadband speed, Wi-Fi stability, and hardware decoder performance.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-emerald-500/40 shadow-xl shadow-shade/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 flex items-center justify-center mb-5 shadow-md">
                <MessageSquareCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-fg mb-2.5">
                Direct Human Support
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Speak directly with real agents via WhatsApp ({siteConfig.whatsApp.display}) or email ({siteConfig.email.support}) for setup guidance and live troubleshooting.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-indigo-500/40 shadow-xl shadow-shade/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-600/40 text-indigo-400 flex items-center justify-center mb-5 shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-fg mb-2.5">
                Clearly Documented Policies
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Review our comprehensive{" "}
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline font-medium">Terms of Service</Link>,{" "}
                <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline font-medium">Privacy Policy</Link>, and{" "}
                <Link href="/refund-policy" className="text-cyan-400 hover:text-cyan-300 underline font-medium">Refund Policy</Link> before onboarding.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-amber-500/40 shadow-xl shadow-shade/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 text-amber-400 flex items-center justify-center mb-5 shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-fg mb-2.5">
                No Auto-Renewal Traps
              </h3>
              <p className="text-xs sm:text-sm text-fg-2 leading-relaxed font-normal">
                Subscriptions do not automatically debit your bank account or credit card. You retain full control over when and how you renew your service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
