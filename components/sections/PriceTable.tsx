import React from "react";
import { accountOptions, accountsLabel, formatPrice, subscriptionPlans } from "@/lib/plans";

/** Full price list at a glance: one row per number of accounts, one column per duration. */
export function PriceTable() {
  return (
    <section className="py-16 bg-bg border-b border-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl sm:text-5xl text-fg">All prices at a glance</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-bg-2 text-fg">
              <tr>
                <th scope="col" className="px-3 sm:px-5 py-3 font-bold">Accounts</th>
                {subscriptionPlans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className={`px-3 sm:px-5 py-3 text-right font-bold ${plan.highlighted ? "text-blue-600 dark:text-blue-400" : ""}`}
                  >
                    {plan.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {accountOptions.map((n) => (
                <tr key={n} className="border-t border-line">
                  <th scope="row" className="px-3 sm:px-5 py-3 font-semibold text-fg">
                    {accountsLabel(n)}
                  </th>
                  {subscriptionPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`px-3 sm:px-5 py-3 text-right tabular-nums ${
                        plan.highlighted ? "bg-blue-500/5 font-bold text-fg" : "text-fg-2"
                      }`}
                    >
                      {formatPrice(plan.prices[n - 1])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          1 account = 1 device watching at a time. Prices in USD.
        </p>
      </div>
    </section>
  );
}
