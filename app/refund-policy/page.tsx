import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Review the refund and resolution policy for BuyStrongIPTV8K subscription inquiries.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Refund Policy", path: "/refund-policy" },
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
            Refund & Resolution Policy
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
            <span className="font-bold">Business Launch Notice:</span> Specific commercial refund timeframes, merchant account processor guidelines, and regional statutory cooling-off rights must be ratified by the business operator prior to taking paid transactions.
          </div>
        </div>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">1. Digital Nature of Service</h2>
          <p>
            {siteConfig.name} delivers digital access credentials and server configurations. Because digital credentials become active upon generation and distribution, standard physical product returns do not automatically apply.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">2. Pre-Purchase Verification Recommended</h2>
          <p>
            To prevent dissatisfaction or device incompatibility, we strongly urge every customer to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li>Communicate with our WhatsApp support desk to confirm compatibility for your exact hardware and operating system.</li>
            <li>Verify that your internet connection speed meets minimum recommended bandwidth standards (at least 20-30 Mbps for HD/UHD content).</li>
            <li>Consult with our team on player application recommendations suitable for your setup.</li>
          </ul>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">3. Resolution & Assistance Protocol</h2>
          <p>
            If you encounter technical issues after your subscription has been configured, our team is committed to troubleshooting:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li><strong className="text-fg">Technical Troubleshooting:</strong> We will assist you in testing alternate server routes, verifying DNS settings, or configuring alternative player software.</li>
            <li><strong className="text-fg">Credential Resets:</strong> If your account experiences unauthorized connection conflicts or corrupted playlist data, we will reissue fresh configuration parameters.</li>
            <li><strong className="text-fg">Arrangement Adjustments:</strong> Where verified technical incompatibility cannot be resolved on our end, refund requests or alternative subscription adjustments are reviewed case-by-case by our support management.</li>
          </ul>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">4. Non-Refundable Scenarios</h2>
          <p>Refunds or cancellations are generally not granted under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li>Customer-side network failure, local Wi-Fi disruptions, or ISP-level restrictions that are outside our server controls.</li>
            <li>Change of mind after credentials have been issued and utilized.</li>
            <li>Violation of service terms, such as sharing single-user credentials across unauthorized multiple locations.</li>
          </ul>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">5. Submitting a Resolution Request</h2>
          <p>
            To submit an inquiry regarding your subscription status or request a resolution review, please message our support desk with your order details and error description:
          </p>
          <div className="p-6 rounded-2xl bg-surface border border-line text-sm space-y-2 text-fg-2">
            <p><strong className="text-fg">Brand:</strong> {siteConfig.name}</p>
            <p><strong className="text-fg">Support Email:</strong> <a href={`mailto:${siteConfig.email.support}`} className="text-cyan-400 hover:underline">{siteConfig.email.support}</a></p>
            <p><strong className="text-fg">WhatsApp Resolution Line:</strong> {siteConfig.whatsApp.display}</p>
          </div>
        </section>
      </div>
    </>
  );
}
