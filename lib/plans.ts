/**
 * Centrally managed subscription prices (USD).
 * Each plan has one price per number of accounts (1 to 4 devices watching at the same time).
 * Keep public/offer.html in sync when changing prices here.
 */

export const currency = "$";

/** Account options shown in the selector. 1 account = 1 device watching at a time. */
export const accountOptions = [1, 2, 3, 4] as const;
export type AccountCount = (typeof accountOptions)[number];

export interface Plan {
  id: string;
  /** Short label used on the card title and button, e.g. "3 Months" */
  label: string;
  months: number;
  /** Price by number of accounts: index 0 = 1 account, index 3 = 4 accounts */
  prices: [number, number, number, number];
  /** Checkout link by number of accounts: index 0 = 1 account, index 3 = 4 accounts */
  buyLinks: [string, string, string, string];
  highlighted?: boolean;
}

/** Features shared by every plan; only the number of accounts changes. */
export const planFeatures = [
  "20,000+ channels",
  "Movies & series",
  "Full HD / 4K",
  "24/7 support",
];

export const subscriptionPlans: Plan[] = [
  {
    id: "plan-3-months",
    label: "3 Months",
    months: 3,
    prices: [39.99, 59.99, 79.99, 99.99],
    buyLinks: [
      "https://todedev.com/buy/3-months-1-account",
      "https://todedev.com/buy/3-months-2-accounts",
      "https://todedev.com/buy/3-months-3-accounts",
      "https://todedev.com/buy/3-months-4-accounts",
    ],
  },
  {
    id: "plan-6-months",
    label: "6 Months",
    months: 6,
    prices: [56.99, 84.99, 109.99, 134.99],
    buyLinks: [
      "https://todedev.com/buy/6-months-1-account",
      "https://todedev.com/buy/6-months-2-accounts",
      "https://todedev.com/buy/6-months-3-accounts",
      "https://todedev.com/buy/6-months-4-accounts",
    ],
  },
  {
    id: "plan-12-months",
    label: "12 Months",
    months: 12,
    prices: [79.99, 119.99, 149.99, 179.99],
    buyLinks: [
      "https://todedev.com/buy/12-months-1-account",
      "https://todedev.com/buy/12-months-2-accounts",
      "https://todedev.com/buy/12-months-3-accounts",
      "https://todedev.com/buy/12-months-4-accounts",
    ],
    highlighted: true,
  },
];

export function formatPrice(value: number): string {
  return `${currency}${value.toFixed(2)}`;
}

export function getPrice(plan: Plan, accounts: AccountCount): number {
  return plan.prices[accounts - 1];
}

export function getPerMonth(plan: Plan, accounts: AccountCount): number {
  return getPrice(plan, accounts) / plan.months;
}

/** Percent saved per month compared to the shortest plan with the same number of accounts. */
export function getSavingsPercent(plan: Plan, accounts: AccountCount): number {
  const base = subscriptionPlans.reduce((a, b) => (a.months <= b.months ? a : b));
  if (base.id === plan.id) return 0;
  const saved = 1 - getPerMonth(plan, accounts) / getPerMonth(base, accounts);
  return Math.round(saved * 100);
}

export function accountsLabel(accounts: number): string {
  return `${accounts} Account${accounts > 1 ? "s" : ""}`;
}

/** Lowest monthly price across all plans, used in headlines ("from $X/month"). */
export const lowestPerMonth = Math.min(
  ...subscriptionPlans.map((p) => getPerMonth(p, 1))
);

export function getBuyLink(plan: Plan, accounts: AccountCount): string {
  return plan.buyLinks[accounts - 1];
}
