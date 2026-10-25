import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ArrowRight, Tv, ShieldCheck, Zap, Sparkles, Play } from "lucide-react";

const sportsLogos = [
  { name: "UEFA Champions League", src: "/images/UEFA_Champions_League_logo.png", width: 48, height: 48 },
  { name: "Formula 1", src: "/images/Formula_1_Logo_1.png", width: 72, height: 26 },
  { name: "NBA", src: "/images/NBA_Logo.svg.webp", width: 30, height: 48 },
  { name: "Ligue 1", src: "/images/Logo_Ligue_1_2024.svg.webp", width: 44, height: 44 },
  { name: "Roland Garros", src: "/images/Roland-Garros_idhlvZUj6c_0.png", width: 48, height: 48 },
  { name: "Top 14", src: "/images/Top_14.svg.webp", width: 44, height: 44 },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-line/80">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading, Value Proposition & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Cinematic Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-950/40">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Next-Generation 8K Streaming Onboarding</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-fg leading-[0.95]">
              Buy Strong IPTV 8K. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                One Powerful Experience.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-fg-2 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore available Strong 8K subscription options, check device compatibility, and contact our support team for setup assistance and plan information.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <Link
                href="/#plans"
                id="hero-explore-plans-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-950/60 border border-cyan-400/30 transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore Plans</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </Link>

              <WhatsAppButton
                size="lg"
                variant="solid"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto"
              >
                Contact Us on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Value Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-line/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 text-fg-2 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-fg">Multi-Device</span>
                  <span className="block text-[11px] text-muted">TV, Box & Mobile</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-fg-2 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-fg">Direct Guidance</span>
                  <span className="block text-[11px] text-muted">Human WhatsApp</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-fg-2 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-fg">Fast Setup</span>
                  <span className="block text-[11px] text-muted">Guided Onboarding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Cinematic Entertainment Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glowing Border */}
              <div className="relative rounded-3xl bg-gradient-to-b from-surface-2/80 via-surface/90 to-bg p-3 sm:p-4 shadow-2xl shadow-blue-950/50 border border-line-strong/60">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-line">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-cyan-300 bg-bg/80 px-3 py-0.5 rounded-full border border-cyan-500/20">
                    BuyStrong Cinema Engine • 8K Ultra HD
                  </div>
                </div>

                {/* Layered Showcase Image */}
                <div className="relative mt-3 rounded-2xl overflow-hidden aspect-[16/11] bg-bg border border-line-strong/50 group">
                  <Image
                    src="/images/collage-streaming-cinema-sport.png"
                    alt="BuyStrongIPTV8K cinematic movies and sports entertainment experience"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/90 text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      Live Stream Synced
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-black/70 text-amber-300 border border-amber-400/30">
                      HDR10+ • 60 FPS
                    </span>
                  </div>

                  {/* Floating Play Capsule */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-fg bg-bg/85 p-3 rounded-xl border border-fg/10 shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <div>
                        <span className="block font-bold text-fg text-xs sm:text-sm">
                          Ultra HD Stream Player
                        </span>
                        <span className="block text-[11px] text-muted">
                          Cross-platform compatible with Smart TVs & Boxes
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50 shrink-0">
                      8K Ready
                    </span>
                  </div>
                </div>

                {/* Sub-bar */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted px-2">
                  <span className="flex items-center gap-1.5">
                    <Tv className="w-3.5 h-3.5 text-cyan-400" />
                    Compatible with IBO Player, TiviMate, Smarters & VLC
                  </span>
                  <span className="text-emerald-400 font-semibold">Active Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Sports Leagues & Global Competitions Showcase */}
        <div className="mt-16 pt-10 border-t border-line/80">
          <p className="text-xs uppercase font-extrabold tracking-widest text-muted text-center mb-6">
            Supported Major Sporting Competitions & Tournaments
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-85 hover:opacity-100 transition-opacity">
            {sportsLogos.map((sport, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center filter drop-shadow-md brightness-90 hover:brightness-110 transition-all duration-200 transform hover:scale-110"
                title={sport.name}
              >
                <Image
                  src={sport.src}
                  alt={sport.name}
                  width={sport.width}
                  height={sport.height}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
