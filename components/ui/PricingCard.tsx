import React from "react";
import { Check } from "lucide-react";
import {
  type AccountCount,
  type Plan,
  accountsLabel,
  formatPrice,
  getBuyLink,
  getPerMonth,
  getPrice,
  getSavingsPercent,
  planFeatures,
} from "@/lib/plans";

interface PricingCardProps {
  plan: Plan;
  accounts: AccountCount;
  onOrder?: (plan: Plan, accounts: AccountCount) => void;
}

const checkColors = ["text-blue-500", "text-emerald-500", "text-violet-500", "text-amber-500", "text-rose-500"];

export function PricingCard({ plan, accounts, onOrder }: PricingCardProps) {
  const buyUrl = getBuyLink(plan, accounts);
  const featured = plan.highlighted;
  const price = getPrice(plan, accounts);
  const originalPrice = plan.prices[0] * accounts;
  const hasConnectionDiscount = accounts > 1;
  const perMonth = getPerMonth(plan, accounts);
  const savings = getSavingsPercent(plan, accounts);
  const features = [
    `${accountsLabel(accounts)} (${accounts} device${accounts > 1 ? "s" : ""} at once)`,
    ...planFeatures,
  ];

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-surface p-6 transition-all duration-200 ${
        featured
          ? "border-2 border-blue-500 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.55)] lg:-my-2 lg:py-8"
          : "border border-line hover:border-line-strong hover:-translate-y-0.5 shadow-sm"
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md ${
            featured
              ? "bg-blue-600 shadow-blue-500/40"
              : "bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-500/40"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-3xl tracking-wide uppercase text-fg">
          {plan.label}
        </h3>
        {savings > 0 && (
          <span className="mt-1 shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            Save {savings}%
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-muted">{accountsLabel(accounts)}</p>

      <div className="mt-4 flex items-baseline gap-2 flex-wrap">
        <span className="font-display text-5xl sm:text-6xl leading-none text-fg">{formatPrice(price)}</span>
        {hasConnectionDiscount && (
          <span className="text-sm font-semibold line-through text-muted">
            {formatPrice(originalPrice)}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
        <p className={`text-sm font-semibold ${featured ? "text-emerald-600 dark:text-emerald-400" : "text-muted"}`}>
          Only {formatPrice(perMonth)}/month
        </p>
        {hasConnectionDiscount && (
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full">
            -20% Off
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {features.map((feature, idx) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-fg-2">
            <Check className={`w-4 h-4 shrink-0 ${checkColors[idx % checkColors.length]}`} strokeWidth={3} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          if (onOrder) {
            onOrder(plan, accounts);
          } else {
            window.location.href = buyUrl;
          }
        }}
        aria-label={`Order the ${plan.label} plan with ${accountsLabel(accounts)}`}
        className={`mt-7 w-full inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[0.98] ${
          featured
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
            : "border-2 border-blue-500/70 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
        }`}
      >
        Order {plan.label}
      </button>
      <p className="mt-3 text-center text-xs text-muted">Pay with PayPal or Mastercard</p>
    </div>
  );
}
