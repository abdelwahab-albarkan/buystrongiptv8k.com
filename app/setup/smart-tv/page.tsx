import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
  MonitorPlay,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Setup Strong 8K IPTV on Samsung & LG Smart TVs",
  description:
    "Comprehensive guide for streaming Strong 8K IPTV on Samsung Tizen OS and LG webOS Smart TVs using IBO Player, IPTV Smarters Pro, or Smart STB.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/setup/smart-tv`,
  },
  keywords: [
    "samsung smart tv iptv setup",
    "lg webos iptv setup",
    "ibo player strong 8k",
    "strong iptv smart tv",
    "smart tv iptv guide",
  ],
};

export default function SmartTvSetupPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Help Center", path: "/faq" },
    { name: "Smart TV Setup Guide", path: "/setup/smart-tv" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-b from-bg-2 to-bg border-b border-line/80 py-16 relative overflow-hidden">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-subtle" />
            <Link href="/faq" className="hover:text-cyan-400 transition-colors">
              Help Center
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-subtle" />
            <span className="text-amber-400">Smart TV Setup Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/50 mb-3">
            <MonitorPlay className="w-3.5 h-3.5" /> Smart TV Setup Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            How to Setup Strong 8K IPTV on Samsung &amp; LG Smart TVs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 leading-relaxed font-normal">
            Directly configure high-definition playback on Samsung (Tizen OS) and LG (webOS) televisions without requiring external streaming boxes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted font-medium">
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Samsung Tizen (2016-2026)
            </span>
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> LG webOS (3.0 through latest)
            </span>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <article className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Prerequisites Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-surface to-surface border border-amber-500/30 space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" /> Smart TV Requirements
            </h2>
            <p className="text-sm text-fg-2 leading-relaxed">
              Your Smart TV needs an active internet connection (Ethernet cable or 5GHz Wi-Fi recommended). You will download an IPTV player app directly from the official Samsung Apps Store or LG Content Store.
            </p>
          </div>

          {/* Recommended Players */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-fg">
              Recommended Smart TV Player Apps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-surface border border-line space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Top Recommendation</span>
                <h3 className="font-bold text-fg text-lg">IBO Player</h3>
                <p className="text-xs text-fg-2 leading-relaxed">
                  Fastest loading player on modern Samsung and LG smart TVs. Features sleek menus, fast channel changing, and customizable subtitles.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-line space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Alternative</span>
                <h3 className="font-bold text-fg text-lg">IPTV Smarters Pro</h3>
                <p className="text-xs text-fg-2 leading-relaxed">
                  Available on most LG webOS TVs and select Samsung models. Offers multi-screen, parental control, and EPG support.
                </p>
              </div>
            </div>
          </section>

          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-slate-950 font-extrabold flex items-center justify-center text-lg shadow-lg shadow-amber-600/30">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Install IBO Player from Your TV Store
              </h2>
            </div>
            <div className="pl-13 space-y-3 text-sm text-fg-2">
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong className="text-fg">Samsung TVs:</strong> Press the Home button on your remote, select <strong className="text-fg">Apps</strong> (Samsung Smart Hub), click the Search icon, and type <strong className="text-cyan-400">IBO Player</strong>.</li>
                <li><strong className="text-fg">LG TVs:</strong> Press the Home button, open the <strong className="text-fg">LG Content Store / Apps</strong>, search for <strong className="text-cyan-400">IBO Player</strong>, and click Install.</li>
              </ol>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-blue-600/30">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Locate Your Device MAC Address and Device Key
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              When you launch IBO Player for the first time, an onboarding screen appears showing your unique identifiers:
            </p>
            <div className="pl-13 p-5 rounded-xl bg-surface border border-line space-y-2 text-sm font-mono text-fg-2">
              <p><strong className="text-fg font-sans">Device MAC Address:</strong> e.g., 00:1a:79:xx:xx:xx</p>
              <p><strong className="text-fg font-sans">Device Key:</strong> e.g., 6-digit numeric security code</p>
            </div>
            <p className="text-xs text-muted pl-13">
              Write down or take a picture of this screen with your phone. You will use it to link your Strong 8K playlist.
            </p>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-cyan-600/30">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Link Your Strong 8K Playlist
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              You can link your playlist in two ways:
            </p>
            <div className="pl-13 space-y-3 text-sm text-fg-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-fg">Method A (Fastest):</strong> Send a photo of your MAC Address and Device Key to our support team on WhatsApp. Our technicians will configure your playlist server parameters directly for you.</li>
                <li><strong className="text-fg">Method B (Self-Upload):</strong> Visit the official IBO Player web portal on your phone or laptop, log in using your MAC &amp; Device Key, click &quot;Add Playlist via Xtream Codes&quot;, and paste your credentials.</li>
              </ul>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-emerald-600/30">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Reload Player &amp; Enjoy Your Content
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              Once linked, return to your TV remote and press <strong className="text-fg">Reload / Refresh Playlist</strong>. Your live TV categories, sports channels, and video-on-demand libraries will load immediately.
            </p>
          </section>

          {/* Troubleshooting Callout */}
          <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3">
            <h3 className="text-base font-bold text-amber-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Smart TV Network Tips
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-fg-2">
              <li><strong className="text-fg">Wired Ethernet:</strong> If possible, connect your Smart TV directly to your home router with a Cat6 Ethernet cable for maximum stability during 4K live sports.</li>
              <li><strong className="text-fg">DNS Settings:</strong> If stream loading is sluggish, try setting your Smart TV DNS to Google DNS (<code className="text-cyan-300">8.8.8.8</code> / <code className="text-cyan-300">8.8.4.4</code>) or Cloudflare (<code className="text-cyan-300">1.1.1.1</code>).</li>
            </ul>
          </div>

          {/* Need Assistance CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-surface to-cyan-950/40 border border-cyan-500/30 text-center space-y-4 shadow-xl">
            <h2 className="text-2xl font-bold text-fg">
              Need Help Activating Your Smart TV?
            </h2>
            <p className="text-sm text-fg-2 max-w-xl mx-auto">
              Send your Samsung or LG MAC address to our WhatsApp support desk. We will walk you through the setup in minutes.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                size="lg"
                message="Hello BuyStrongIPTV8K, I am setting up my Smart TV with IBO Player and would like to link my subscription."
              >
                Activate Smart TV on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Internal Links Navigation */}
          <div className="pt-8 border-t border-line flex flex-wrap justify-between items-center gap-4 text-sm text-muted">
            <Link
              href="/setup/firestick"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> FireStick Setup Guide
            </Link>
            <div className="flex gap-4">
              <Link href="/setup/tivimate" className="hover:text-cyan-400 transition-colors">
                TiviMate Guide →
              </Link>
              <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                FAQ Knowledge Base →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
