/**
 * @file FAQSection.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Frequently Asked Questions component handling consumer trust vectors,
 * offline operations, zero-surveillance privacy guarantees, and national 999 response SLA.
 */

import React, { useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Active accordion index tracker
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Consumer trust and operational clarification data
  const faqs = [
    {
      question: "Does Surokkha work with zero internet or mobile data?",
      answer:
        "Yes. TinyML runs on-device, dispatching encrypted GPS coordinates via GSM SMS and LoRa mesh when cellular networks fail.",
    },
    {
      question: "How does it detect assault if I cannot press the button?",
      answer:
        "On-device motion algorithms recognize violent struggles, forced dragging, and sudden falls automatically with <5% false alarms.",
    },
    {
      question: "How fast is the 999 police CAD response?",
      answer:
        "Telemetry arrives on police dispatch consoles in under 1.4 seconds with ±3m GPS coordinates, reducing dispatch times to under 8 minutes.",
    },
    {
      question: "Is my location or audio continuously tracked?",
      answer:
        "Never. Surokkha has zero continuous surveillance; raw audio and motion traces never leave your device.",
    },
    {
      question: "How much does it cost and how do I get one?",
      answer:
        "The wearable is subsidized at ৳1,500 with bKash and Nagad micro-financing. The basic emergency SOS service is always free.",
    },
  ];

  return (
    <section id="faqs" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[300px] bg-white/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently asked
          </h2>
          <p className="text-sm text-neutral-400">
            Everything you need to know about Surokkha.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="white-glow-card rounded-2xl transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>

                  {/* Directional Indicator Icon */}
                  <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 shrink-0">
                    {isOpen ? (
                      <ArrowDownRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {/* Collapsible Answer Drawer */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal border-t border-white/5 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
