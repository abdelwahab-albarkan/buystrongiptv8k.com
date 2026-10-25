import React from "react";
import { Check } from "lucide-react";
import { Plan, planFeatures } from "@/lib/plans";
import { getPlanInquiryLink } from "@/lib/whatsapp";

interface PricingCardProps {
  plan: Plan;
}

const checkColors = ["text-blue-500", "text-emerald-500", "text-violet-500", "text-amber-500", "text-rose-500"];

export function PricingCard({ plan }: PricingCardProps) {
  const whatsAppUrl = getPlanInquiryLink(plan);
  const featured = plan.highlighted;
  const features = [
    `${plan.connections} Connection${plan.connections > 1 ? "s" : ""}`,
    ...planFeatures,
  ];

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-surface p-6 transition-all duration-200 ${
        featured
          ? "border-2 border-blue-500 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.55)] lg:-my-4 lg:py-10"
          : "border border-line hover:border-line-strong hover:-translate-y-0.5 shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl tracking-wide uppercase text-fg">
        {plan.label}
      </h3>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-5xl leading-none text-fg">{plan.price}</span>
      </div>
      <p className={`mt-2 text-sm font-medium ${featured ? "text-emerald-600 dark:text-emerald-400" : "text-muted"}`}>
        {featured ? `Best value — ${plan.perMonth}/month` : `${plan.perMonth}/month`}
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
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get the ${plan.label} plan via WhatsApp`}
        className={`mt-7 w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          featured
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-blue-500/70 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
        }`}
      >
        Get {plan.label}
      </a>
      <p className="mt-3 text-center text-xs text-muted">Pay with PayPal or Mastercard</p>
    </div>
  );
}
