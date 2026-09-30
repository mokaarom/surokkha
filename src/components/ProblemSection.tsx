/**
 * @file ProblemSection.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Ground reality manifesto section utilizing progressive word-by-word
 * opacity scroll mechanics to articulate Bangladesh's personal safety crisis with
 * hyper-minimalist typography.
 */

import React, { useEffect, useRef, useState } from 'react';

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Core problem narrative statement
  const manifestoText = 
    "In a real emergency, you cannot reach into a pocket, unlock a phone, or explain your location. Conventional safety apps fail when seconds decide survival. Surokkha operates in complete silence—detecting danger offline, and dispatching national help in under eight minutes.";

  const words = manifestoText.split(' ');

  useEffect(() => {
    let ticking = false;

    // High-performance scroll tracking via requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Initiate illumination at 85% viewport, complete at 25% viewport
            const start = windowHeight * 0.85;
            const end = windowHeight * 0.25;
            
            const rawProgress = (start - rect.top) / (start - end);
            const progress = Math.min(Math.max(rawProgress, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      id="problem"
      ref={containerRef}
      className="w-full starfield-bg py-36 sm:py-48 px-6 md:px-12 border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Volumetric Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Dynamic Typography with Progressive Opacity on Viewport Scroll */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.35] sm:leading-[1.3] text-left select-none">
          {words.map((word, idx) => {
            const wordProgress = idx / words.length;
            const isLit = scrollProgress >= wordProgress;
            const distance = Math.abs(scrollProgress - wordProgress);
            const transitionOpacity = isLit
              ? 1.0
              : Math.max(0.18, 1 - distance * 4);

            return (
              <span
                key={idx}
                className="inline-block mr-[0.28em] transition-all duration-150"
                style={{
                  opacity: transitionOpacity,
                  color: isLit ? '#ffffff' : 'rgba(255, 255, 255, 0.18)',
                  textShadow: isLit ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
