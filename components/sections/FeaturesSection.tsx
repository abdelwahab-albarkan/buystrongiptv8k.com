import React from "react";
import Image from "next/image";
import {
  Tv,
  SlidersHorizontal,
  Wifi,
  ShieldCheck,
  Smartphone,
  Headphones,
  Sparkles,
} from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  badge: string;
}

const features: Feature[] = [
  {
    icon: Tv,
    title: "Broad Device Compatibility",
    description:
      "Engineered to run seamlessly across Smart TVs, Android boxes, iOS devices, FireStick, and computer media players.",
    image: "/images/lucid-origin_Collection_of_premium_streaming_devices_including_Android_TV_box_Fire_TV_style_s-0.jpg",
    badge: "Hardware Support",
  },
  {
    icon: SlidersHorizontal,
    title: "Guided App Onboarding",
    description:
      "Receive straightforward setup instructions to configure your playlist URL, M3U link, or Xtream credentials smoothly.",
    image: "/images/lucid-origin_Step-by-step_IPTV_installation_concept_on_Google_TV_Google_Play_Store_open_on_te-0.jpg",
    badge: "Fast Setup",
  },
  {
    icon: Wifi,
    title: "High-Bitrate Bandwidth Routing",
    description:
      "Optimized for broadband and home Wi-Fi connections to deliver steady, high-definition and 4K playback.",
    image: "/images/lucid-origin_Modern_Wi-Fi_router_with_glowing_speed_lines_reaching_a_large_Smart_TV_high-spee-0.jpg",
    badge: "Optimized Speed",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Encrypted Sessions",
    description:
      "Private server endpoints and encrypted streaming protocols to protect your viewing privacy.",
    image: "/images/lucid-origin_Futuristic_cybersecurity_shield_protecting_online_streaming_glowing_encrypted_da-0.jpg",
    badge: "Data Privacy",
  },
  {
    icon: Smartphone,
    title: "Flexible Cross-Platform Viewing",
    description:
      "Transition easily between living room screens, bedroom TVs, and mobile devices when you are on the move.",
    image: "/images/iptv-samsung-app-store.jpg",
    badge: "Multi-Screen",
  },
  {
    icon: Headphones,
    title: "Personalized WhatsApp Support",
    description:
      "Direct human assistance for playlist validation, renewals, and live troubleshooting via official WhatsApp.",
    image: "/images/lucid-origin_Ultra-realistic_Google_TV_streaming_setup_in_a_modern_luxury_living_room_Chromec-0.jpg",
    badge: "Dedicated Care",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-bg-2 border-b border-line/80 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Built for Quality & Reliability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Designed for an Exceptional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            We focus on genuine hardware compatibility, stable server routing, and attentive personal onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line/90 hover:border-cyan-500/50 shadow-xl shadow-shade/40 hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Thumbnail */}
                  <div className="relative aspect-[16/9] bg-bg overflow-hidden border-b border-line">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-surface/90 border border-fg/10 text-cyan-400 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-fg-2 border border-fg/10">
                        {feature.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-fg mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-fg-2 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
