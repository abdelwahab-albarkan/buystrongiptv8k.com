"use client";

import React, { useState } from "react";
import { Tv } from "lucide-react";
import { accountOptions, subscriptionPlans, type AccountCount } from "@/lib/plans";
import { PricingCard } from "@/components/ui/PricingCard";

interface PricingSectionProps {
  showTitle?: boolean;
}

export function PricingSection({ showTitle = true }: PricingSectionProps) {
  const [accounts, setAccounts] = useState<AccountCount>(1);

  return (
    <section id="plans" className="py-20 sm:py-24 bg-bg border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* Step 1: number of devices */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-fg">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">1</span>
            How many devices will watch at the same time?
          </p>
          <div
            role="radiogroup"
            aria-label="Number of accounts"
            className="mt-4 grid grid-cols-4 gap-2 rounded-2xl border border-line bg-bg-2 p-1.5"
          >
            {accountOptions.map((n) => {
              const active = n === accounts;
              return (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setAccounts(n)}
                  className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-fg-2 hover:bg-surface hover:text-fg"
                  }`}
                >
                  <span className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: n }).map((_, i) => (
                      <Tv key={i} className="h-3.5 w-3.5" strokeWidth={2.5} />
                    ))}
                  </span>
                  <span>
                    {n} <span className="hidden sm:inline">{n > 1 ? "Devices" : "Device"}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted">
            1 account = 1 screen. Pick 2, 3 or 4 to watch on several TVs or phones at once.
          </p>
        </div>

        {/* Step 2: duration */}
        <p className="mb-10 flex items-center justify-center gap-2 text-center text-sm font-bold uppercase tracking-wider text-fg">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">2</span>
          Choose how long
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-5 items-center">
          {subscriptionPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} accounts={accounts} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          All prices in USD.
        </p>
      </div>
    </section>
  );
}
