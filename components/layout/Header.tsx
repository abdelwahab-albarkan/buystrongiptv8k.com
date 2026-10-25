"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-line shadow-[0_8px_30px_-12px] shadow-shade"
          : "bg-bg/80 backdrop-blur-md border-b border-line/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand logo (transparent PNG) */}
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`${siteConfig.name} - Home`}
          >
            <Image
              src="/images/logo-transparent.png"
              alt={siteConfig.name}
              width={900}
              height={325}
              priority
              sizes="180px"
              className="h-12 sm:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation: Only Home, Plans, FAQ, Contact with refined typography */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/80 border border-line backdrop-blur-md shadow-inner"
          >
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide uppercase text-fg-2 hover:text-fg hover:bg-fg/10 px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <WhatsAppButton size="sm" variant="solid" id="header-whatsapp-btn">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="sm:hidden" />
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2.5 rounded-xl text-fg-2 hover:text-fg bg-surface/80 border border-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[72px] z-50 bg-bg/95 backdrop-blur-2xl md:hidden animate-in fade-in duration-200 border-t border-line flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-line/80">
              <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Navigation Menu
              </span>
              <span className="text-xs text-subtle font-mono">BuyStrongIPTV8K</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-base font-bold tracking-wide text-fg hover:text-cyan-400 hover:bg-surface/80 border border-transparent hover:border-line transition-all uppercase text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-line/80 flex flex-col gap-3">
            <WhatsAppButton
              size="md"
              variant="solid"
              className="w-full justify-center"
            >
              Inquire on WhatsApp
            </WhatsAppButton>
            <p className="text-xs text-center text-muted">
              Direct live customer support • {siteConfig.whatsApp.display}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
