import React from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "subtle";
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function WhatsAppButton({
  message,
  size = "md",
  variant = "solid",
  children,
  className = "",
  id,
}: WhatsAppButtonProps) {
  const link = getWhatsAppLink(message);

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]";

  const variantStyles = {
    solid:
      "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-950/60 border border-emerald-400/30 focus-visible:ring-emerald-500",
    outline:
      "border border-emerald-500/60 text-emerald-400 bg-emerald-950/30 hover:bg-emerald-900/40 hover:border-emerald-400 hover:text-emerald-300 focus-visible:ring-emerald-500",
    subtle:
      "bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-800/50 focus-visible:ring-emerald-500",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-4.5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  return (
    <a
      id={id}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us directly on WhatsApp"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-4 h-4 shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.04 8.04 0 0 1-1.24-4.29c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.74 2.38a8.07 8.07 0 0 1 2.39 5.75c0 4.48-3.65 8.15-8.23 8.15zm4.46-6.11c-.24-.12-1.45-.72-1.68-.8-.22-.09-.39-.12-.55.12-.17.25-.64.8-.78.96-.15.17-.3.19-.55.07-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.11-.5.11-.11.24-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.45-.59 1.65-1.17.2-.57.2-1.07.14-1.17-.06-.1-.23-.16-.47-.28z" />
      </svg>
      <span>{children || "Contact via WhatsApp"}</span>
    </a>
  );
}
