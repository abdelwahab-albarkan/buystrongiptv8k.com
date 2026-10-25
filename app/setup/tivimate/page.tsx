import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  ShieldCheck,
  ChevronRight,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Setup Strong 8K IPTV on TiviMate Player (Xtream Codes)",
  description:
    "Step-by-step tutorial on configuring Strong 8K IPTV on TiviMate IPTV Player using Xtream Codes API, setting up EPG TV guides, and optimizing buffer settings.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/setup/tivimate`,
  },
  keywords: [
    "tivimate iptv player",
    "how to setup tivimate strong 8k",
    "tivimate xtream codes setup",
    "tivimate epg guide",
    "strong 8k tivimate",
  ],
};

export default function TiviMateSetupPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Help Center", path: "/faq" },
    { name: "TiviMate Setup Guide", path: "/setup/tivimate" },
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
            <span className="text-cyan-400">TiviMate Setup Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Radio className="w-3.5 h-3.5" /> Player Configuration Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            How to Setup Strong 8K IPTV on TiviMate Player
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 leading-relaxed font-normal">
            TiviMate is widely considered the premier media player for Android TV, NVIDIA Shield, and FireStick. Learn how to configure your playlist via Xtream Codes and optimize EPG TV guide settings.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted font-medium">
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Compatible with Android TV & FireOS
            </span>
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <Layers className="w-4 h-4 text-cyan-400" /> Supports Xtream Codes & M3U
            </span>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <article className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Prerequisites Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-surface to-surface border border-cyan-500/30 space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> What You Will Need
            </h2>
            <p className="text-sm text-fg-2 leading-relaxed">
              To complete this setup, you need the TiviMate application installed on your Android TV or FireStick device, along with the <strong className="text-fg">Server URL, Username, and Password</strong> issued by our support team for your Strong 8K subscription.
            </p>
          </div>

          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-blue-600/30">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Install TiviMate IPTV Player
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              Depending on your device:
            </p>
            <div className="pl-13 space-y-2 text-sm text-fg-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-fg">Android TV / Google TV / NVIDIA Shield:</strong> Open the Google Play Store on your TV, search for <strong className="text-cyan-400">TiviMate IPTV Player</strong>, and click Install.</li>
                <li><strong className="text-fg">Amazon FireStick:</strong> Open Downloader and enter the official TiviMate shortcode (reach out to our WhatsApp support if you need the current verified Downloader code).</li>
              </ul>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-cyan-600/30">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Add Playlist Using Xtream Codes API
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              We strongly recommend the <strong className="text-fg">Xtream Codes login</strong> rather than raw M3U URLs. Xtream Codes enables automatic category sorting, faster guide synchronization, and VOD metadata:
            </p>
            <div className="pl-13 space-y-3 text-sm text-fg-2">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Launch TiviMate and click <strong className="text-fg">Add Playlist</strong>.</li>
                <li>Select <strong className="text-cyan-400">Xtream Codes</strong>.</li>
                <li>Enter the Server URL provided by support (e.g., <code className="text-cyan-300 bg-surface px-2 py-0.5 rounded">http://server-domain:port</code>).</li>
                <li>Enter your unique <strong className="text-fg">Username</strong> and <strong className="text-fg">Password</strong>.</li>
                <li>Ensure <strong className="text-fg">&quot;Include VOD&quot;</strong> is checked if you want on-demand movie and series libraries loaded.</li>
                <li>Click <strong className="text-fg">Next</strong> and wait for playlist channels to synchronize.</li>
              </ol>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-indigo-600/30">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Configure EPG (Electronic Program Guide)
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              Once channels are synchronized, TiviMate will automatically fetch your TV guide. To ensure accurate schedule timezones:
            </p>
            <div className="pl-13 space-y-2 text-sm text-fg-2">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Go to <strong className="text-fg">Settings</strong> &gt; <strong className="text-fg">EPG</strong> &gt; <strong className="text-fg">EPG sources</strong>.</li>
                <li>Verify your Strong 8K guide is active and set to <strong className="text-fg">Update on app start</strong>.</li>
                <li>If the program times do not match your local US timezone (e.g., EST / PST), go to <strong className="text-fg">Time Offset</strong> and adjust by +/- hours until the timeline matches your local clock.</li>
              </ol>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-slate-950 font-extrabold flex items-center justify-center text-lg shadow-lg shadow-amber-600/30">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Optimize Buffer & Playback Settings
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              To eliminate stutter during high-bitrate live sports events and 4K channels:
            </p>
            <div className="pl-13 space-y-2 text-sm text-fg-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-fg">Buffer Size:</strong> Go to Settings &gt; Playback &gt; Buffer Size, and change it from &quot;None&quot; to <strong className="text-cyan-400">&quot;Medium&quot; or &quot;Large&quot;</strong>. This pre-buffers 5-10 seconds of streaming data to cushion against micro-drops in home Wi-Fi.</li>
                <li><strong className="text-fg">Video Decoder:</strong> Set to <strong className="text-fg">&quot;Hardware&quot;</strong> (Hardware acceleration utilizes your TV&apos;s GPU chip for cooler running and smoother 60fps playback).</li>
                <li><strong className="text-fg">Auto Frame Rate (AFR):</strong> Enable AFR if your TV supports matching display refresh rates (50Hz / 60Hz / 24Hz) to eliminate motion judder.</li>
              </ul>
            </div>
          </section>

          {/* Need Assistance CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-surface to-cyan-950/40 border border-cyan-500/30 text-center space-y-4 shadow-xl">
            <h2 className="text-2xl font-bold text-fg">
              Need Your TiviMate Credentials?
            </h2>
            <p className="text-sm text-fg-2 max-w-xl mx-auto">
              Message our support desk on WhatsApp to receive your verified Xtream Codes API server address and account details for fast activation.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                size="lg"
                message="Hello BuyStrongIPTV8K, I would like to get Xtream Codes login credentials for TiviMate."
              >
                Inquire on WhatsApp
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
              <Link href="/setup/smart-tv" className="hover:text-cyan-400 transition-colors">
                Smart TV Guide →
              </Link>
              <Link href="/plans" className="hover:text-cyan-400 transition-colors">
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
