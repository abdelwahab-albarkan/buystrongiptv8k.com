import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  ArrowLeft,
  Tv,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Setup Strong 8K IPTV on Amazon FireStick (Step-by-Step)",
  description:
    "Complete step-by-step setup guide for configuring Strong 8K IPTV on Amazon FireStick 4K, Lite, and Fire TV Cube using Downloader, TiviMate, or IPTV Smarters.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/setup/firestick`,
  },
  keywords: [
    "strong iptv firestick",
    "how to setup strong 8k iptv firestick",
    "downloader code strong 8k",
    "firestick iptv setup guide",
    "buy strong iptv 8k firestick",
  ],
};

export default function FireStickSetupPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Help Center", path: "/faq" },
    { name: "FireStick Setup Guide", path: "/setup/firestick" },
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
            <span className="text-cyan-400">FireStick Setup Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Tv className="w-3.5 h-3.5" /> Hardware Setup Guide
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            How to Setup Strong 8K IPTV on Amazon FireStick
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg-2 leading-relaxed font-normal">
            A comprehensive, step-by-step walkthrough for configuring your Strong 8K streaming subscription on Amazon Fire TV Stick 4K, 4K Max, Lite, and Fire TV Cube devices.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted font-medium">
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tested on FireOS 7 & 8
            </span>
            <span className="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-lg border border-line">
              <Clock className="w-4 h-4 text-cyan-400" /> Setup Time: ~5 Minutes
            </span>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <article className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Prerequisites Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-surface to-surface border border-blue-500/30 space-y-3">
            <h2 className="text-lg font-bold text-fg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> Before You Begin
            </h2>
            <p className="text-sm text-fg-2 leading-relaxed">
              Ensure your Amazon FireStick is connected to a stable high-speed Wi-Fi network (5GHz band recommended for UHD and live sports). You will need active subscription credentials (an M3U URL or Xtream Codes login). If you do not have credentials yet, contact our team on WhatsApp to confirm your plan.
            </p>
          </div>

          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-blue-600/30">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Install the &apos;Downloader&apos; Application
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              The official Downloader tool by AFTVnews allows you to safely install verified media player applications directly onto your FireStick.
            </p>
            <div className="pl-13 space-y-2 text-sm text-fg-2">
              <ol className="list-decimal pl-5 space-y-2">
                <li>From the FireStick home screen, navigate to the <strong className="text-fg">Find</strong> menu and select <strong className="text-fg">Search</strong>.</li>
                <li>Type <strong className="text-cyan-400">Downloader</strong> using the on-screen keyboard.</li>
                <li>Select the orange Downloader icon from the search results and click <strong className="text-fg">Get / Download</strong> to install it.</li>
                <li>Launch Downloader and grant it permission to access media files when prompted.</li>
              </ol>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-cyan-600/30">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Enable Unknown Sources in FireStick Settings
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              To allow Downloader to install your chosen IPTV media player, you must enable third-party app permissions:
            </p>
            <div className="pl-13 space-y-3 text-sm text-fg-2">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Go to <strong className="text-fg">Settings</strong> (gear icon) on the far right of your FireStick navigation bar.</li>
                <li>Select <strong className="text-fg">My Fire TV</strong> &gt; <strong className="text-fg">Developer Options</strong>.</li>
                <li>
                  <em>Note:</em> If Developer Options is hidden, go to <strong className="text-fg">About</strong> and click the device name 7 times rapidly until it says &quot;No need, you are already a developer.&quot;
                </li>
                <li>Click <strong className="text-fg">Install Unknown Apps</strong>, find <strong className="text-fg">Downloader</strong>, and toggle it to <strong className="text-emerald-400">ON</strong>.</li>
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
                Download Your Preferred Player (IPTV Smarters or TiviMate)
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              Open Downloader, click the URL input bar on the Home tab, and enter the download code for your chosen player application:
            </p>
            <div className="pl-13 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-surface border border-line">
                <h3 className="font-bold text-fg text-base mb-1">Option A: IPTV Smarters Pro</h3>
                <p className="text-xs text-muted mb-3">Clean interface with multi-screen and EPG support. Ideal for most households.</p>
                <div className="text-xs text-cyan-300 bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-800/40 font-mono">
                  Enter official Smarters Downloader code or ask support on WhatsApp
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-line">
                <h3 className="font-bold text-fg text-base mb-1">Option B: TiviMate IPTV Player</h3>
                <p className="text-xs text-muted mb-3">Premium modern interface styled like traditional cable TV with rapid channel switching.</p>
                <div className="text-xs text-blue-300 bg-blue-950/60 p-2.5 rounded-lg border border-blue-800/40 font-mono">
                  See our <Link href="/setup/tivimate" className="underline hover:text-fg">TiviMate Setup Guide</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-slate-950 font-extrabold flex items-center justify-center text-lg shadow-lg shadow-amber-600/30">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-fg">
                Login with Your Strong 8K Credentials
              </h2>
            </div>
            <p className="text-sm sm:text-base text-fg-2 pl-13 leading-relaxed">
              Launch your installed player app and select <strong className="text-fg">&quot;Login with Xtream Codes API&quot;</strong> (recommended over raw M3U for faster EPG loading and automatic categorization).
            </p>
            <div className="pl-13 p-5 rounded-xl bg-surface border border-line space-y-2 text-sm font-mono text-fg-2">
              <p><strong className="text-fg font-sans">Any Name:</strong> BuyStrong 8K</p>
              <p><strong className="text-fg font-sans">Username:</strong> (Provided by WhatsApp support)</p>
              <p><strong className="text-fg font-sans">Password:</strong> (Provided by WhatsApp support)</p>
              <p><strong className="text-fg font-sans">Server URL / Portal:</strong> (Provided by WhatsApp support)</p>
            </div>
            <p className="text-xs text-muted pl-13">
              Click <strong className="text-fg">Add User</strong>. The player will download your channel lineups, sports schedules, and movie/series library automatically.
            </p>
          </section>

          {/* Troubleshooting Callout */}
          <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3">
            <h3 className="text-base font-bold text-amber-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> FireStick Buffering & Optimization Tips
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-fg-2">
              <li><strong className="text-fg">Wi-Fi Band:</strong> Connect FireStick to 5GHz Wi-Fi instead of 2.4GHz to reduce wireless interference.</li>
              <li><strong className="text-fg">Clear App Cache:</strong> If playback slows down, go to Settings &gt; Applications &gt; Manage Installed Applications &gt; Clear Cache.</li>
              <li><strong className="text-fg">Restart FireStick:</strong> Hold the Select + Play/Pause buttons together on your remote for 5 seconds to perform a clean reboot.</li>
            </ul>
          </div>

          {/* Need Assistance CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-surface to-cyan-950/40 border border-cyan-500/30 text-center space-y-4 shadow-xl">
            <h2 className="text-2xl font-bold text-fg">
              Need Help With FireStick Activation?
            </h2>
            <p className="text-sm text-fg-2 max-w-xl mx-auto">
              Our support team can send you the exact Downloader short-code and assist you in real time over WhatsApp to verify your playlist is running smoothly.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                size="lg"
                message="Hello BuyStrongIPTV8K, I am setting up my Amazon FireStick and would like assistance with credentials and player setup."
              >
                Get FireStick Support on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Internal Links Navigation */}
          <div className="pt-8 border-t border-line flex flex-wrap justify-between items-center gap-4 text-sm text-muted">
            <Link
              href="/plans"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> View Subscription Plans
            </Link>
            <div className="flex gap-4">
              <Link href="/setup/tivimate" className="hover:text-cyan-400 transition-colors">
                TiviMate Guide →
              </Link>
              <Link href="/setup/smart-tv" className="hover:text-cyan-400 transition-colors">
                Smart TV Guide →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
