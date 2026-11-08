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
}

const checkColors = ["text-blue-500", "text-emerald-500", "text-violet-500", "text-amber-500", "text-rose-500"];

export function PricingCard({ plan, accounts }: PricingCardProps) {
  const buyUrl = getBuyLink(plan, accounts);
  const featured = plan.highlighted;
  const price = getPrice(plan, accounts);
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
          ? "border-2 border-blue-500 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.55)] md:-my-4 md:py-10"
          : "border border-line hover:border-line-strong hover:-translate-y-0.5 shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          Best Value
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

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-6xl leading-none text-fg">{formatPrice(price)}</span>
      </div>
      <p className={`mt-2 text-sm font-semibold ${featured ? "text-emerald-600 dark:text-emerald-400" : "text-muted"}`}>
        Only {formatPrice(perMonth)}/month
      </p>

      <ul className="mt-6 space-y-2.5 flex-1">
        {features.map((feature, idx) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-fg-2">
            <Check className={`w-4 h-4 shrink-0 ${checkColors[idx % checkColors.length]}`} strokeWidth={3} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buyUrl}
        aria-label={`Order the ${plan.label} plan with ${accountsLabel(accounts)} `}
        className={`mt-7 w-full inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          featured
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-blue-500/70 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
        }`}
      >
        Order {plan.label}
      </a>
      <p className="mt-3 text-center text-xs text-muted">Pay with PayPal or Mastercard</p>
    </div>
  );
}
