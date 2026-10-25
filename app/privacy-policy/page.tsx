import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review the privacy policy for BuyStrongIPTV8K. Learn how inquiry data and communication details are handled securely.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
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
            Privacy Policy
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
            <span className="font-bold">Business Launch Notice:</span> Formal legal entity name, corporate registration number, and registered physical address must be confirmed by the client prior to launching formal paid advertising campaigns.
          </div>
        </div>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">1. Information We Collect</h2>
          <p>
            {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website at{" "}
            <span className="font-mono text-cyan-300">{siteConfig.domain}</span>. When you interact with our website or contact our support channels, we may collect the following limited categories of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li>
              <strong className="text-fg">Communication Data:</strong> Information you voluntarily share when messaging us via WhatsApp (such as your phone number, display name, device model, and inquiries) or email ({siteConfig.email.support}).
            </li>
            <li>
              <strong className="text-fg">Technical & Usage Data:</strong> Standard server logs, browser type, referring URLs, and approximate IP geolocation used for basic diagnostic and security monitoring.
            </li>
          </ul>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">2. How We Use Your Information</h2>
          <p>We process collected information strictly for legitimate operational purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-fg-2">
            <li>Responding directly to your plan inquiries and technical support requests.</li>
            <li>Assisting with compatible device configurations and onboarding instructions.</li>
            <li>Maintaining the security and operational integrity of our public web pages.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal contact information to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">3. Third-Party Messaging Services</h2>
          <p>
            Customer communications are initiated via WhatsApp (operated by Meta Platforms, Inc.). When using WhatsApp to communicate with us, your use of the platform is subject to WhatsApp&apos;s own Privacy Policy and Terms of Service.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">4. Cookies and Tracking</h2>
          <p>
            Our website is designed to be lightweight and does not utilize invasive behavioral tracking cookies or sell visitor analytics. Essential session storage or local preferences may be utilized solely for website navigation.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">5. Data Retention & Security</h2>
          <p>
            We retain message histories only for as long as necessary to provide customer support and service continuity. We employ reasonable administrative safeguards to protect your communications against unauthorized access.
          </p>
        </section>

        <section className="space-y-3.5">
          <h2 className="text-xl sm:text-2xl font-bold text-fg">6. Contacting Us About Privacy</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request the deletion of past support inquiries, please contact our support desk at:
          </p>
          <div className="p-6 rounded-2xl bg-surface border border-line text-sm space-y-2 text-fg-2">
            <p><strong className="text-fg">Brand:</strong> {siteConfig.name}</p>
            <p><strong className="text-fg">Support Email:</strong> <a href={`mailto:${siteConfig.email.support}`} className="text-cyan-400 hover:underline">{siteConfig.email.support}</a></p>
            <p><strong className="text-fg">Official WhatsApp:</strong> {siteConfig.whatsApp.display}</p>
            <p><strong className="text-fg">Official Domain:</strong> {siteConfig.domain}</p>
          </div>
        </section>
      </div>
    </>
  );
}
