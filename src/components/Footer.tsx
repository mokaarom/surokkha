/**
 * @file Footer.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Global footer coordinating communication channels, product ecosystem
 * deep links, verified social media presences, and system whitepaper modal triggers.
 */

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, PhoneCall, ShieldCheck, FileText } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface FooterProps {
  /** Callback to display comprehensive system whitepaper modal */
  onOpenProposal: () => void;
  /** Callback to trigger early access waitlist modal */
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal, onOpenModal }) => {
  // Verified official social media routing profiles
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'X / Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
  ];

  return (
    <footer className="w-full starfield-bg pt-20 pb-12 px-6 md:px-12 text-neutral-400 text-xs border-t border-white/10 relative overflow-hidden">
      {/* Background Volumetric Diffuse Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Direct Inquiries & Contact Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Let’s talk
          </h2>

          <a
            href="mailto:contact@surokkha.ai"
            className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white hover:text-white/80 transition-colors tracking-tight underline decoration-white/40 underline-offset-8"
          >
            contact@surokkha.ai
          </a>
        </div>

        {/* Structural Horizontal Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Multi-Column Ecosystem Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity & Status Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <img src={getAssetUrl('logo-white.png')} alt="Surokkha Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                Surokkha.AI
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-normal">
              An intelligent, offline-first personal safety ecosystem designed specifically for Bangladesh.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>National 999 CAD Ready</span>
            </div>
          </div>

          {/* Product Ecosystem Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Ecosystem
            </span>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href="#wearable" className="hover:text-white transition-colors block">
                  Wearable Device (৳1,500)
                </a>
              </li>
              <li>
                <a href="#ai-engine" className="hover:text-white transition-colors block">
                  AI App &amp; Safe Routes
                </a>
              </li>
              <li>
                <a href="#999-dispatch" className="hover:text-white transition-colors block">
                  Direct 999 CAD Dispatch
                </a>
              </li>
              <li>
                <a href="#mesh-safety" className="hover:text-white transition-colors block">
                  Silsila Community Mesh
                </a>
              </li>
              <li>
                <a href="#differentiation" className="hover:text-white transition-colors block">
                  Why Surokkha
                </a>
              </li>
            </ul>
          </div>

          {/* Safety & Documentation Resources Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Safety &amp; Resources
            </span>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href="#solution" className="hover:text-white transition-colors block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-white transition-colors block">
                  Ground Reality &amp; Data
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors block">
                  Safety FAQs
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenProposal}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3 h-3 text-white/60" />
                  <span>Technical Whitepaper</span>
                </button>
              </li>
              <li>
                <a
                  href="tel:999"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3 text-white" />
                  <span>National Helpline 999</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Early Access Onboarding & Inquiries Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Get Started
            </span>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="text-white hover:underline transition-all cursor-pointer font-medium text-left"
                >
                  Join Early Access
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@surokkha.ai"
                  className="hover:text-white transition-colors block"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@surokkha.ai?subject=Partnership%20Inquiry"
                  className="hover:text-white transition-colors block"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <span className="text-white/40 block text-[11px] pt-1">
                  Offline-First • Zero Cloud Surveillance
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footer Baseline & Copyright Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          {/* Verified Official Social Media Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <IconComp className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

          {/* Copyright & Architecture Credential */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[11px] text-neutral-400">
            <span>© 2026 Surokkha.AI. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Privacy-First Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
