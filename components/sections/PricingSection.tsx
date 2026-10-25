import React from "react";
import { subscriptionPlans } from "@/lib/plans";
import { PricingCard } from "@/components/ui/PricingCard";

interface PricingSectionProps {
  showTitle?: boolean;
}

export function PricingSection({ showTitle = true }: PricingSectionProps) {
  const sortedPlans = [...subscriptionPlans].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <section id="plans" className="py-20 sm:py-24 bg-bg border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Pricing
            </span>
            <h2 className="mt-3 text-5xl sm:text-6xl text-fg">
              Pick your plan. Press play.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted">
              Same features on every plan. Stay longer, pay less.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-center">
          {sortedPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
