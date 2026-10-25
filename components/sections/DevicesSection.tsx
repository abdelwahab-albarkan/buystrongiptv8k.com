import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface DeviceCategory {
  title: string;
  description: string;
  image: string;
  supportedApps: string;
  setupGuideUrl?: string;
  setupGuideLabel?: string;
}

const devices: DeviceCategory[] = [
  {
    title: "Samsung Smart TVs",
    description: "Samsung Tizen OS smart TVs (2016 through latest Neo QLED & OLED).",
    image: "/images/device-samsung.jpg",
    supportedApps: "IBO Player, Smart STB, IPTV Smarters Pro, Nanomid",
    setupGuideUrl: "/setup/smart-tv",
    setupGuideLabel: "Smart TV Guide",
  },
  {
    title: "LG Smart TVs (webOS)",
    description: "LG webOS smart displays, OLED evo, QNED, and 4K Ultra HD screens.",
    image: "/images/device-lg.jpg",
    supportedApps: "IBO Player, IPTV Smarters, Smart STB, Room IPTV",
    setupGuideUrl: "/setup/smart-tv",
    setupGuideLabel: "Smart TV Guide",
  },
  {
    title: "Amazon Fire TV & FireStick",
    description: "Amazon Fire TV Stick 4K Max, Lite, and Fire TV Cube streaming hardware.",
    image: "/images/device-firestick.jpg",
    supportedApps: "Downloader sideload, TiviMate, IPTV Smarters Pro",
    setupGuideUrl: "/setup/firestick",
    setupGuideLabel: "FireStick Guide",
  },
  {
    title: "Android TV & Media Boxes",
    description: "NVIDIA Shield TV Pro, Xiaomi Mi Box S, Google TV, and Android boxes.",
    image: "/images/device-android-tv.jpg",
    supportedApps: "TiviMate Premium, XCIPTV, IPTV Smarters Pro",
    setupGuideUrl: "/setup/tivimate",
    setupGuideLabel: "TiviMate Guide",
  },
  {
    title: "Apple iPhone & iPad",
    description: "iOS and iPadOS devices running iOS 14.0 or newer.",
    image: "/images/device-iphone-ipad.png",
    supportedApps: "IPTVX, Smarters Player Lite, GSE Smart IPTV",
  },
  {
    title: "Windows Computers",
    description: "Desktop computers and laptops running Windows 10 or Windows 11.",
    image: "/images/device-windows.jpg",
    supportedApps: "VLC Media Player, IPTV Smarters Pro Desktop, MyIPTV",
  },
  {
    title: "Apple Mac & MacBook",
    description: "macOS hardware powered by Apple Silicon (M1/M2/M3) or Intel processors.",
    image: "/images/device-mac.png",
    supportedApps: "VLC for Mac, IPTV Smarters Desktop, IINA Player",
  },
  {
    title: "Apple TV 4K",
    description: "Apple TV HD and Apple TV 4K set-top boxes powered by tvOS.",
    image: "/images/device-apple-tv.png",
    supportedApps: "iPlayTV, IPTVX, GSE Smart IPTV, Smarters Player",
  },
  {
    title: "MAG & Formuler Boxes",
    description: "Infomir MAG set-top hardware and Formuler Z11 / GTV media streamers.",
    image: "/images/device-mag.png",
    supportedApps: "Stalker Portal, MyTVOnline 2 / 3, MAC Address setup",
  },
];

export function DevicesSection() {
  return (
    <section id="devices" className="py-24 bg-bg-2 border-b border-line/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Broad Device Compatibility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Supported Device Categories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            Enjoy broad hardware support across all standard TVs, streaming dongles, smartphones, tablets, and desktop workstations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-cyan-500/50 shadow-xl shadow-shade/40 hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Device Picture Container */}
                <div className="relative aspect-[16/10] bg-bg overflow-hidden border-b border-line">
                  <Image
                    src={device.image}
                    alt={`${device.title} streaming compatibility`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-50" />

                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white shadow-md">
                      <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-fg mb-2 group-hover:text-cyan-300 transition-colors">
                    {device.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-fg-2 mb-4 leading-relaxed font-normal">
                    {device.description}
                  </p>
                </div>
              </div>

              {/* Supported apps footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-line flex flex-col gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                      Recommended Players
                    </span>
                    <span className="text-xs text-cyan-300/90 font-medium line-clamp-1">
                      {device.supportedApps}
                    </span>
                  </div>
                  {device.setupGuideUrl && (
                    <Link
                      href={device.setupGuideUrl}
                      className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group/link w-fit"
                    >
                      <span>Read {device.setupGuideLabel}</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility Advisory Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-surface to-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-fg text-base sm:text-lg">
                Not sure if your specific TV model or preferred player is supported?
              </h4>
              <p className="text-xs sm:text-sm text-fg-2 mt-1 max-w-xl">
                Send your exact TV brand or streaming device model to our team on WhatsApp. We will confirm playback compatibility and guide you to the right player app before you select a plan.
              </p>
            </div>
          </div>

          <WhatsAppButton
            size="md"
            message="Hello BuyStrongIPTV8K, I would like to verify compatibility for my device model before choosing a plan."
            className="shrink-0"
          >
            Check My Device on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
