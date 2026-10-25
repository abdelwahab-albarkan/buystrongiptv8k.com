import { siteConfig } from "./site";
import type { Plan } from "./plans";

/**
 * Generates an official WhatsApp click-to-chat URL with a prefilled, URL-encoded message.
 *
 * @param customMessage Optional custom message. Defaults to siteConfig default inquiry.
 * @returns Fully formatted https://wa.me/... link
 */
export function getWhatsAppLink(customMessage?: string): string {
  const number = siteConfig.whatsApp.cleanNumber;
  const message = customMessage || siteConfig.whatsApp.defaultMessage;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Generates a WhatsApp order link for a plan, prefilled with its name, price and connections
 * so the team knows exactly which plan the client picked.
 */
export function getPlanInquiryLink(plan: Plan): string {
  const message = [
    "Hello BuyStrongIPTV8K, I would like to order this plan:",
    "",
    `Plan: ${plan.label}`,
    `Price: ${plan.price} (${plan.perMonth}/month)`,
    `Connections: ${plan.connections}`,
    "",
    "Please send me the payment details.",
  ].join("\n");
  return getWhatsAppLink(message);
}
