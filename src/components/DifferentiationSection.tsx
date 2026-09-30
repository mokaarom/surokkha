/**
 * @file DifferentiationSection.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Competitive advantage section showcasing Surokkha's 4 core quantifiable
 * safety metrics via custom cyber-reticle cards with orbiting particle animations.
 */

import React from 'react';
import { CyberCard } from './CyberCard';

interface DifferentiationSectionProps {
  /** Callback to trigger early access waitlist modal */
  onOpenModal?: () => void;
}

export const DifferentiationSection: React.FC<DifferentiationSectionProps> = ({ onOpenModal }) => {
  // Quantifiable performance and structural differentiators
  const cards = [
    {
      value: '<8m',
      label: '999 CAD Dispatch',
      delay: '0s',
    },
    {
      value: '100%',
      label: 'Offline Operation',
      delay: '-1.5s',
    },
    {
      value: '<5%',
      label: 'False Alarm Rate',
      delay: '-3s',
    },
    {
      value: '৳1,500',
      label: 'Wearable Price',
      delay: '-4.5s',
    },
  ];

  return (
    <section id="differentiation" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* Centered Volumetric Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10 text-center">
        {/* Section Header */}
        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Surokkha wins
          </h2>
          <p className="text-sm text-neutral-400">
            Purpose-built for Bangladesh reality.
          </p>
        </div>

        {/* 2x2 Responsive Cyber-Reticle Metric Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center max-w-2xl mx-auto">
          {cards.map((card, idx) => (
            <CyberCard
              key={idx}
              value={card.value}
              label={card.label}
              delay={card.delay}
            />
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onOpenModal}
            className="bg-white text-black text-xs sm:text-sm font-medium rounded-full px-7 py-2.5 hover:bg-neutral-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
          >
            Get Protected
          </button>
        </div>
      </div>
    </section>
  );
};
