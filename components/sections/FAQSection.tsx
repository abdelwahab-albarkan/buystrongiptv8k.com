import React from "react";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Sparkles } from "lucide-react";

export const faqItems: FAQItem[] = [
  {
    id: "faq-devices",
    question: "Which devices are supported by BuyStrongIPTV8K?",
    answer:
      "BuyStrongIPTV8K subscriptions can be configured across a wide variety of devices including modern Smart TVs (Samsung Tizen, LG webOS, Sony Google TV), Android boxes and smartphones, Amazon Fire TV Sticks, Apple iOS and iPadOS devices, Apple TV 4K, MAG set-top boxes, and computer media players (such as VLC, IINA, or IPTV Smarters). Please message support on WhatsApp with your exact device model to verify compatibility before ordering.",
  },
  {
    id: "faq-plans",
    question: "How can I check available subscription plans and pricing?",
    answer:
      "Because customized plans and subscription periods are tailored based on your device setup and connection requirements, our current pricing is shared directly through WhatsApp. Click 'Ask About This Plan' on any plan card or message our team to receive current pricing and promotional arrangements.",
  },
  {
    id: "faq-contact",
    question: "How do I contact customer support?",
    answer: `You can reach our team directly via WhatsApp at ${siteConfig.whatsApp.display} or by emailing ${siteConfig.email.support}. WhatsApp is the fastest method for quick questions, plan discussions, and setup instructions.`,
  },
  {
    id: "faq-activation",
    question: "How does subscription activation work?",
    answer:
      "Once you contact support and finalize your preferred subscription arrangement, our support team will generate your personalized streaming credentials (M3U playlist link or Xtream codes) and provide clear instructions on entering them into your chosen player app.",
  },
  {
    id: "faq-payment",
    question: "Which payment methods are accepted?",
    answer:
      "Available payment arrangements depend on your location and will be discussed directly with our customer support team over WhatsApp before activation. We do not process payments through automated web forms.",
  },
  {
    id: "faq-refund",
    question: "What is the refund policy?",
    answer:
      "Because streaming subscriptions involve immediate provisioning of service access, refund terms depend on the specific arrangement agreed upon during onboarding. We encourage all customers to confirm compatibility and test credentials with support prior to confirming extended plans. Review our Refund Policy page for full details.",
  },
  {
    id: "faq-country",
    question: "Is the service available in my country?",
    answer:
      "The service is generally accessible internationally with a high-speed broadband connection. However, ISP routing and regional network conditions vary. Contact our support team to verify recommended connection speeds and server routing for your location.",
  },
  {
    id: "faq-setup",
    question: "How can I get help with setup?",
    answer:
      "Our support agents will guide you step-by-step through installing and configuring an appropriate media player application on your device. We can share configuration parameters and assist you through WhatsApp until your playback is working.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-bg-2 border-b border-line/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Clear Answers & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-fg-2">
            Get straightforward answers about devices, plans, activation, and support.
          </p>
        </div>

        <div className="bg-gradient-to-b from-surface to-bg-2 p-7 sm:p-10 rounded-3xl border border-line shadow-2xl shadow-shade/60 mb-12">
          <FAQAccordion items={faqItems} />
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted">
            Have a question that isn&apos;t covered here?
          </p>
          <WhatsAppButton
            size="md"
            message="Hello BuyStrongIPTV8K, I have a specific question about your service that wasn't in the FAQ."
          >
            Ask a Question on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
