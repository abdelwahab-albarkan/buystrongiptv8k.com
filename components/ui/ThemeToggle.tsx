"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  // Both icons render; CSS shows the right one so server and client markup match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-surface text-fg-2 hover:text-fg hover:border-line-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      <Moon className="w-[18px] h-[18px] dark:hidden" aria-hidden="true" />
      <Sun className="w-[18px] h-[18px] hidden dark:block" aria-hidden="true" />
    </button>
  );
}
