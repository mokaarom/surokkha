/**
 * @file SolutionSection.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Architectural breakdown presenting Surokkha's 3-layer offline ecosystem
 * (Physical Sensor Layer, Community Mesh Layer, and Direct National 999 CAD Dispatch).
 */

import React from 'react';

export const SolutionSection: React.FC = () => {
  // Three-layer architectural topology definitions
  const layers = [
    {
      step: '01',
      title: 'Wearable Sensor',
      metric: '৳1,500',
      description: 'TinyML classifies assault struggle locally on device. Zero phone or internet required.',
    },
    {
      step: '02',
      title: 'Community Mesh',
      metric: '500m',
      description: 'Broadcasts encrypted SMS and LoRa distress beacons to verified nearby citizens.',
    },
    {
      step: '03',
      title: 'Direct 999 CAD',
      metric: '<8 Min',
      description: 'Pushes ±3m GPS coordinates directly to national police consoles in under 1.4 seconds.',
    },
  ];

  return (
    <section id="solution" className="w-full starfield-bg py-32 sm:py-40 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* Anchor Targets for Global Navigation */}
      <div id="wearable" className="absolute -top-24" />
      <div id="ai-engine" className="absolute -top-24" />
      <div id="999-dispatch" className="absolute -top-24" />
      <div id="mesh-safety" className="absolute -top-24" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Three offline layers
          </h2>
          <p className="text-sm text-neutral-400">
            From physical struggle to police dispatch.
          </p>
        </div>

        {/* 3-Column Minimal Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {layers.map((layer, idx) => (
            <div
              key={idx}
              className="border-t border-white/15 pt-6 space-y-3 text-left transition-colors duration-200 hover:border-white/40"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-white/40">{layer.step}</span>
                <span className="font-mono text-xs font-semibold text-white">{layer.metric}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {layer.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
