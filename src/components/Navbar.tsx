/**
 * @file Navbar.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Floating navigation controller with frosted glass backdrop blur,
 * dynamic brand anchor, smooth-scrolling section routing, and call-to-action trigger.
 */

import React from 'react';
import { getAssetUrl } from '../utils/assets';

interface NavbarProps {
  /** Callback to trigger early access waitlist modal */
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-6 md:px-10 pt-6 flex items-center justify-between gap-4 pointer-events-none">
      {/* Brand Identity Pill */}
      <div className="pointer-events-auto flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3 border border-white/10 shadow-lg">
        <img
          src={getAssetUrl('logo-white.png')}
          alt="Surokkha Logo"
          className="h-5 w-5 object-contain"
          onError={(e) => {
            e.currentTarget.src = getAssetUrl('logo-black.png');
            e.currentTarget.classList.add('invert');
          }}
        />
        <a href="#" className="text-white text-sm font-medium tracking-tight">
          surokkha.ai
        </a>
      </div>

      {/* Primary Section Navigation Hub */}
      <div className="hidden md:flex pointer-events-auto items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2 border border-white/10 shadow-lg">
        <a
          href="#problem"
          className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full hover:bg-white/5"
        >
          problem
        </a>
        <a
          href="#solution"
          className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full hover:bg-white/5"
        >
          how it works
        </a>
        <a
          href="#differentiation"
          className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full hover:bg-white/5"
        >
          why surokkha
        </a>
        <a
          href="#faqs"
          className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full hover:bg-white/5"
        >
          faqs
        </a>
      </div>

      {/* Primary Action Button: Early Access Registration */}
      <button
        type="button"
        onClick={onOpenModal}
        className="pointer-events-auto bg-white text-black text-sm font-medium rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
      >
        get protected
      </button>
    </nav>
  );
};
