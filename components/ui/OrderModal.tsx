"use client";

import React, { useState, useEffect } from "react";
import { X, Lock, CheckCircle2, Tv, User, Phone, Mail, Sparkles, Loader2 } from "lucide-react";
import { type Plan, type AccountCount, accountsLabel, formatPrice, getPrice } from "@/lib/plans";

interface OrderModalProps {
  plan: Plan | null;
  accounts: AccountCount;
  isOpen: boolean;
  onClose: () => void;
}

const deviceOptions = [
  "Smart TV (Samsung, LG, Sony)",
  "Amazon FireStick / Fire TV",
  "Android TV / Google TV / Android Box",
  "Apple TV",
  "Smartphone / Tablet (iPhone, Android)",
  "PC / Laptop (Windows, Mac)",
  "MAG Box / Formuler",
  "Other Device",
];

export function OrderModal({ plan, accounts, isOpen, onClose }: OrderModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState(deviceOptions[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setError("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const price = getPrice(plan, accounts);
  const buyUrl = plan.buyLinks[accounts - 1];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone or WhatsApp number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Send data to server API route (saves locally in data/orders.json and emails)
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          device,
          planId: plan.id,
          planLabel: plan.label,
          accounts,
          price,
          buyUrl,
        }),
      });

      // 2. Direct client-side backup dispatch to ensure email delivery
      try {
        await fetch("https://formsubmit.co/ajax/support@streamb4.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `🛒 New IPTV Order: ${fullName.trim()} - ${plan.label} ($${price})`,
            _template: "table",
            _captcha: "false",
            "Customer Name": fullName.trim(),
            "Phone / WhatsApp": phone.trim(),
            "Email Address": email.trim() || "Not provided",
            "Streaming Device": device || "Not specified",
            "Selected Plan": plan.label,
            "Connections": `${accounts} Connection${Number(accounts) > 1 ? "s" : ""}`,
            "Total Price": `$${price} USD`,
            "Checkout Link": buyUrl,
          }),
        });
      } catch (browserErr) {
        console.warn("Direct FormSubmit backup warning:", browserErr);
      }
    } catch (err) {
      console.warn("Order capture network warning:", err);
    } finally {
      // 3. Seamlessly redirect to payment page
      window.location.href = buyUrl;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-surface border border-line p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg-2 border border-line flex items-center justify-center text-muted hover:text-fg hover:bg-bg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Almost there
          </div>
          <h2 id="order-modal-title" className="text-2xl sm:text-3xl font-extrabold text-fg tracking-tight">
            Order Your Plan
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            Enter your contact details so our support team can provision and send your IPTV login immediately after payment.
          </p>
        </div>

        {/* Selected Plan Summary Card */}
        <div className="mb-6 rounded-2xl bg-bg-2 border border-line/80 p-4 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-fg text-base">{plan.label}</span>
              {plan.badge && (
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-600 text-white">
                  {plan.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-muted mt-0.5">
              {accountsLabel(accounts)} · Instant Activation
            </p>
          </div>
          <div className="text-right">
            <span className="font-display text-3xl leading-none text-fg block">
              {formatPrice(price)}
            </span>
            <span className="text-[11px] text-muted">One-time payment</span>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-fg mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Smith"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-line text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-fg mb-1.5">
              WhatsApp / Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 234 567 8900"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-line text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
            <p className="mt-1 text-[11px] text-muted">
              Your playlist credentials and server access will be delivered to this number.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-fg mb-1.5">
              Email Address (Optional)
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. yourname@gmail.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-line text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
          </div>

          {/* Device Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-fg mb-1.5">
              Streaming Device (Optional)
            </label>
            <div className="relative">
              <Tv className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <select
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-line text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none"
              >
                {deviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-950/40 transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Redirecting to Payment...</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Continue to Payment ({formatPrice(price)})</span>
              </>
            )}
          </button>

          {/* Security Guarantee */}
          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-muted">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Encrypted checkout via PayPal or Mastercard</span>
          </div>
        </form>
      </div>
    </div>
  );
}
