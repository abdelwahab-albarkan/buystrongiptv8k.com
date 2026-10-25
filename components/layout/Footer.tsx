import React from "react";
import { CurrentYear } from "@/components/ui/CurrentYear";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  const whatsAppUrl = getWhatsAppLink();

  return (
    <footer className="bg-bg-2 border-t border-line/80 text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-16">
          {/* Brand Col */}
          <div className="space-y-5 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl w-fit"
              aria-label={`${siteConfig.name} - Home`}
            >
              <Image
                src="/images/logo-transparent.png"
                alt={siteConfig.name}
                width={900}
                height={325}
                sizes="160px"
                className="h-14 w-auto"
              />
            </Link>

            <p className="text-sm text-muted leading-relaxed font-normal">
              Explore available streaming subscription options, check compatible devices, and contact our team directly on WhatsApp to select the right setup for your screen.
            </p>

            <div className="flex items-center gap-2 text-xs text-subtle">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Streaming Guidance & Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-fg mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Setup Guides */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-fg mb-5">
              Setup Guides
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.setupLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-fg mb-5">
              Policies
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-fg mb-5">
              Support Desk
            </h4>
            <p className="text-xs text-muted mb-3 font-normal">
              Direct live communication for setup and assistance:
            </p>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-fg-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {siteConfig.whatsApp.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email.support}`}
                  className="inline-flex items-center gap-2.5 text-fg-2 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Email: {siteConfig.email.support}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Launch Notice & Copyright */}
        <div className="pt-8 border-t border-line/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-subtle text-center md:text-left">
          <p>
            &copy; <CurrentYear /> {siteConfig.name}. All rights reserved. Official production domain:{" "}
            <span className="font-semibold text-fg-2">{siteConfig.domain}</span>.
          </p>
          <p className="max-w-md text-subtle">
            Disclaimer: Subscription details, app compatibility, and network routing must be verified with support before purchase. Third-party brand names and logos belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
