export interface Plan {
  id: string;
  name: string;
  /** Short label used on the card title and button, e.g. "1 Month" */
  label: string;
  price: string;
  perMonth: string;
  connections: number;
  displayOrder: number;
  highlighted?: boolean;
}

/** Features shared by every plan; only the connection count changes. */
export const planFeatures = [
  "20,000+ channels",
  "Movies & series",
  "Full HD / 4K",
  "24/7 support",
];

/**
 * Centrally managed subscription plans (prices in GBP).
 * Display order puts the yearly plan in the middle as the featured card.
 */
export const subscriptionPlans: Plan[] = [
  {
    id: "plan-1-month",
    name: "1 Month Plan",
    label: "1 Month",
    price: "£9.99",
    perMonth: "£9.99",
    connections: 1,
    displayOrder: 1,
  },
  {
    id: "plan-3-months",
    name: "3 Months Plan",
    label: "3 Months",
    price: "£19.99",
    perMonth: "£6.66",
    connections: 2,
    displayOrder: 2,
  },
  {
    id: "plan-12-months",
    name: "1 Year Plan",
    label: "1 Year",
    price: "£45",
    perMonth: "£3.75",
    connections: 4,
    displayOrder: 3,
    highlighted: true,
  },
  {
    id: "plan-6-months",
    name: "6 Months Plan",
    label: "6 Months",
    price: "£29.99",
    perMonth: "£5.00",
    connections: 3,
    displayOrder: 4,
  },
];
