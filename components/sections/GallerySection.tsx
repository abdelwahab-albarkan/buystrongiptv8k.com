import React from "react";
import Image from "next/image";
import { Film, MonitorPlay } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  tag: string;
  image: string;
  quality: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Panoramic Entertainment & Sports",
    caption:
      "A vast catalog of entertainment, live sports matches, and multi-channel coverage designed for modern home setups.",
    tag: "Cinema & Live Feed",
    image: "/images/panorama-cinema-sports-tele.png",
    quality: "8K Ready",
  },
  {
    id: "gallery-2",
    title: "Widescreen Cinematic Immersion",
    caption:
      "High-bitrate video streams optimized for widescreen HDR10+ televisions, preserving original aspect ratios and audio tracks.",
    tag: "Visual Excellence",
    image: "/images/panorama-cinematographique-streaming.png",
    quality: "HDR10+",
  },
  {
    id: "gallery-3",
    title: "Family Movie Nights & Weekend Binging",
    caption:
      "Smooth, buffer-free playback for family gatherings, weekend series marathons, and documentary discovery.",
    tag: "Living Room",
    image: "/images/soiree-cinema-en-famille.png",
    quality: "Ultra HD",
  },
  {
    id: "gallery-4",
    title: "OLED Living Room Home Theater",
    caption:
      "Deep blacks, vibrant colors, and sharp detail when paired with premier Smart TV displays like LG OLED and Samsung QLED.",
    tag: "Hardware Synergy",
    image: "/images/gpt-image-2_A_premium_LG_OLED_Smart_TV_in_a_modern_luxury_living_room_displaying_a_beautiful-0.jpg",
    quality: "Dolby Audio",
  },
  {
    id: "gallery-5",
    title: "Interactive EPG & Program Guides",
    caption:
      "Browse live program schedules with clear timeline categorization, favorite channel pinning, and fast search.",
    tag: "Intuitive UI",
    image: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
    quality: "Fast Sync",
  },
  {
    id: "gallery-6",
    title: "Universal Media Player Compatibility",
    caption:
      "Seamless support across trusted IPTV applications including TiviMate, IBO Player, IPTV Smarters, and VLC.",
    tag: "Ecosystem",
    image: "/images/gpt-image-2_Collection_of_premium_IPTV_player_interfaces_displayed_on_Google_TV_multiple_str-0.jpg",
    quality: "Cross-Platform",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-bg border-b border-line/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/50 mb-3">
            <Film className="w-3.5 h-3.5" /> Cinematic Entertainment Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Immerse Yourself in High-Definition
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            Preview the vivid, high-resolution viewing environment enabled by our optimized stream configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-b from-surface to-bg-2 border border-line hover:border-cyan-500/50 shadow-xl shadow-shade/50 hover:shadow-cyan-950/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container */}
                <div className="relative aspect-[16/10] bg-bg overflow-hidden border-b border-line/80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 text-cyan-300 border border-cyan-500/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 text-amber-300 border border-amber-400/30 font-mono">
                      {item.quality}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-fg mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-2 leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                  <span className="flex items-center gap-1.5 text-muted">
                    <MonitorPlay className="w-3.5 h-3.5 text-cyan-400" />
                    Optimal for big screens
                  </span>
                  <span className="text-emerald-400 font-medium">Ready</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
