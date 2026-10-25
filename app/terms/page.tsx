import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service and acceptable use policies for BuyStrongIPTV8K.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-gradient-to-b from-bg-2 to-bg border-b border-line/80 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-cyan-400 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted font-mono">
            Last updated: October 2026 • Effective Date: Immediate
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-fg-2 leading-relaxed text-sm sm:text-base">
        {/* Launch Requirement Advisory */}
        <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-3 shadow-lg">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Business Launch Notice:</span> Specific legal jurisdiction, registration identity, and terms governing commercial arrangements must be confirmed by the business owner before operating in specific territories.
          </div>
        </div>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">1. Acceptance of Terms</h2>
          <p>
            By accessing the website at <span className="font-mono text-cyan-300">{siteConfig.domain}</span> or communicating with {siteConfig.name} support representatives, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue using this website.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">2. Service Description & Scope</h2>
          <p>
            {siteConfig.name} provides informational access and personalized customer support for digital streaming arrangements. Subscription credentials, compatible media player setups, and connection arrangements are coordinated directly through our verified communication lines.
          </p>
          <p>
            We do not manufacture hardware devices or own third-party media player applications (such as VLC, TiviMate, or IPTV Smarters). Users remain responsible for procuring their own compatible playback hardware and software licenses.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">3. User Obligations and Compatibility</h2>
          <p>To use our services, you acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li>You must have a stable high-speed broadband internet connection suitable for high-definition media streaming.</li>
            <li>You will communicate with our support desk to verify compatibility for your device model prior to completing subscription agreements.</li>
            <li>You are solely responsible for compliance with all local laws and telecommunication regulations in your country of residence.</li>
            <li>Streaming credentials provided for personal subscriptions may not be re-sold, redistributed, or shared across simultaneous connections beyond the limits agreed upon with support.</li>
          </ul>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">4. Service Performance and Availability</h2>
          <p>
            While we strive to provide reliable support and high-performance server routing, video streaming performance is inherently subject to external variables, including ISP throttling, regional internet routing, home Wi-Fi signal strength, and device hardware decoding capabilities. We do not make misleading promises of zero buffering or unconditional 100% uptime.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">5. Payment Arrangements & Inquiries</h2>
          <p>
            All subscription requests are handled individually. No automated credit card charges or recurring subscriptions are billed through this website without explicit customer consent and manual renewal approval.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">6. Modifications to Terms</h2>
          <p>
            We reserve the right to revise these Terms of Service at any time. Changes will be posted to this page with an updated revision date.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">7. Contact Information</h2>
          <p>
            For questions regarding these Terms, contact our customer desk:
          </p>
          <div className="p-6 rounded-2xl bg-surface border border-line text-sm space-y-2 text-fg-2">
            <p><strong className="text-fg">Brand:</strong> {siteConfig.name}</p>
            <p><strong className="text-fg">Email:</strong> <a href={`mailto:${siteConfig.email.support}`} className="text-cyan-400 hover:underline">{siteConfig.email.support}</a></p>
            <p><strong className="text-fg">WhatsApp Support:</strong> {siteConfig.whatsApp.display}</p>
          </div>
        </section>
      </div>
    </>
  );
}
