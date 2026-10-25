"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(["faq-devices"]); // first open by default

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="divide-y divide-line/80 border-y border-line/80">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-trigger-${index}`;
        const panelId = `faq-content-${index}`;

        return (
          <div key={item.id} className="py-5">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left py-2 font-bold text-base sm:text-lg text-fg hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group"
              >
                <span className="pr-4">{item.question}</span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen
                      ? "bg-cyan-950 text-cyan-300 border border-cyan-500/40 rotate-180"
                      : "bg-surface-2/80 text-muted group-hover:text-fg"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`pt-3 pb-2 text-fg-2 text-sm sm:text-base leading-relaxed transition-all duration-200 ${
                isOpen ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
