/**
 * @file App.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem for Bangladesh
 * @author Mohammed Muntasir Rahman Joy
 * @version 1.0.0
 * @description Application root container coordinating section layout flow,
 * responsive viewports, and modal dialog state lifecycle.
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { AccessModal } from './components/AccessModal';

export default function App() {
  // Modal dialog presentation state
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Primary Fixed Navigation Bar */}
      <Navbar onOpenModal={() => setAccessModalOpen(true)} />

      {/* Hero Viewport: Atmospheric Video Canvas & Dual-Mode Interaction */}
      <HeroSection
        onOpenModal={() => setAccessModalOpen(true)}
        onOpenSimulator={() => {
          const el = document.getElementById('solution');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Section 01: Ground Reality Manifesto with Progressive Scroll Opacity */}
      <ProblemSection />

      {/* Section 02: Three-Layer Architectural Ecosystem */}
      <SolutionSection />

      {/* Section 03: Performance Differentiation Cyber-Reticle Cards */}
      <DifferentiationSection onOpenModal={() => setAccessModalOpen(true)} />

      {/* Section 04: Safety, Privacy & Operational FAQs */}
      <FAQSection />

      {/* Section 05: Global Footer, Verified Socials & Support Channels */}
      <Footer
        onOpenProposal={() => setProposalModalOpen(true)}
        onOpenModal={() => setAccessModalOpen(true)}
      />

      {/* Comprehensive System Architecture & Technical Whitepaper Dialog */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
      />

      {/* Priority Early Access Waitlist Dialog */}
      <AccessModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
      />
    </div>
  );
}
