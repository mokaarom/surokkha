/**
 * @file HeroSection.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Hero viewport providing an immersive entrance experience with
 * responsive dual-layout rendering (desktop cinematic canvas vs. ergonomic mobile stack)
 * and interactive haptic SOS telemetry simulation.
 */

import React from 'react';

interface HeroSectionProps {
  onOpenModal: () => void;
  onOpenSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal, onOpenSimulator }) => {

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Video (Shared across views) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mkv"
      >
        <source src="/bg.mkv" type="video/mp4" />
      </video>

      {/* Subtle Dark Vignette & Bottom Fade */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

      {/* ========================================================================= */}
      {/* 1. ENTIRELY DIFFERENT MOBILE HERO LAYOUT (Visible only on mobile: md:hidden) */}
      {/* Purpose-built vertical stack, ergonomic layout, minimal tactile telemetry */}
      {/* ========================================================================= */}
      <div className="relative z-10 md:hidden min-h-[100dvh] px-5 pt-28 pb-10 flex flex-col justify-between">
        {/* Staggered Vertical Typography Stack */}
        <div className="space-y-2 pt-2">
          <h1 className="hero-title text-[15vw] font-medium text-white tracking-tight lowercase select-none">
            predict.
          </h1>
          <h1 className="hero-title text-[15vw] font-medium text-white/90 tracking-tight lowercase select-none -mt-2">
            prevent.
          </h1>
          <h1 className="hero-title text-[15vw] font-medium text-white/80 tracking-tight lowercase select-none -mt-2">
            protect.
          </h1>

          {/* Manifesto Description */}
          <p className="text-sm leading-relaxed text-white/80 max-w-[280px] pt-1">
            offline-first, ai-powered emergency response for bangladesh. silent protection when you cannot reach your phone.
          </p>
        </div>



        {/* Bottom: 3 Key Metrics in Clean Divider Strip */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 border-y border-white/10 py-3 text-center">
            <div>
              <span className="text-xl font-medium tracking-tight text-white block">&lt;8m</span>
              <span className="text-[10px] font-mono text-white/50 block mt-0.5">999 dispatch</span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-xl font-medium tracking-tight text-white block">100%</span>
              <span className="text-[10px] font-mono text-white/50 block mt-0.5">offline ready</span>
            </div>
            <div>
              <span className="text-xl font-medium tracking-tight text-white block">&lt;5%</span>
              <span className="text-[10px] font-mono text-white/50 block mt-0.5">false alarm</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full bg-white text-black text-xs font-normal rounded-full py-3 hover:bg-neutral-200 transition-colors text-center cursor-pointer"
            >
              get protected
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC DESKTOP HERO LAYOUT (Visible only on desktop: hidden md:block) */}
      {/* Preserves original aesthetic: staggered coordinate typography, angled lines */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative h-screen w-full">
        <div className="relative h-full w-full">
          {/* Giant Staggered Headline Words */}
          <h1 className="hero-title absolute text-white font-medium text-[9vw] left-10 top-[18%] select-none">
            predict
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[9vw] right-10 top-[38%] select-none">
            prevent
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[9vw] left-[28%] top-[58%] select-none">
            protect
          </h1>

          {/* Description Paragraph */}
          <p className="absolute left-10 top-[46%] max-w-[260px] text-[15px] leading-snug text-white/90">
            offline-first, ai-powered emergency response for bangladesh. silent protection when you cannot reach your phone.
          </p>

          {/* Stat Block — Top-Right */}
          <div className="absolute right-24 top-[14%]">
            <div className="flex items-center gap-3 justify-end">
              <span className="h-px w-24 bg-white/40 rotate-[20deg]" />
              <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                &lt;8m
              </span>
            </div>
            <p className="text-xs lg:text-sm text-white/70 mt-1 text-right font-mono">
              999 dispatch target
            </p>
          </div>

          {/* Stat Block — Bottom-Left */}
          <div className="absolute left-20 bottom-24">
            <div className="flex items-center gap-3">
              <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                100%
              </span>
              <span className="h-px w-24 bg-white/40 rotate-[-20deg]" />
            </div>
            <p className="text-xs lg:text-sm text-white/70 mt-1 font-mono">
              offline &amp; zero-data ready
            </p>
          </div>

          {/* Stat Block — Bottom-Right */}
          <div className="absolute right-20 bottom-20">
            <div className="flex items-center gap-3 justify-end">
              <span className="h-px w-24 bg-white/40 rotate-[-20deg]" />
              <span className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                &lt;5%
              </span>
            </div>
            <p className="text-xs lg:text-sm text-white/70 mt-1 text-right font-mono">
              tinyml false alarm rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
