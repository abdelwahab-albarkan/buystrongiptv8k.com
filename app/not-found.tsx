import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Home, HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-bg px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-md w-full text-center space-y-6 relative">
        <div className="w-18 h-18 rounded-3xl bg-surface/90 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-950/40">
          <HelpCircle className="w-9 h-9" />
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/50">
            <Sparkles className="w-3.5 h-3.5" /> Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-fg tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-fg-2 leading-relaxed font-normal">
            The entertainment page you are looking for doesn&apos;t exist, has moved, or is temporarily offline.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-950/50 border border-cyan-400/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <WhatsAppButton
            size="md"
            variant="solid"
            className="w-full sm:w-auto"
            message="Hello BuyStrongIPTV8K, I encountered a missing link on the website and need assistance."
          >
            Contact Support
          </WhatsAppButton>
        </div>

        <p className="text-xs text-muted pt-4">
          Need quick assistance? Chat directly on WhatsApp at {siteConfig.whatsApp.display}.
        </p>
      </div>
    </div>
  );
}
