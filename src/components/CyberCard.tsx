/**
 * @file CyberCard.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Reusable futuristic cyber-reticle metric card component featuring
 * an orbiting light particle, metallic gradient typography, 40-degree blurred
 * light beams, and hairline coordinate reticle borders.
 */

import React from 'react';

interface CyberCardProps {
  /** Large primary metric display value */
  value: string;
  /** Sub-label descriptor */
  label: string;
  /** Orbiting particle animation phase offset (e.g., '0s', '-1.5s') */
  delay?: string;
  /** Optional container style overrides */
  className?: string;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  value,
  label,
  delay = '0s',
  className = '',
}) => {
  return (
    <div className={`cyber-card-wrapper ${className}`}>
      {/* Outer Gradient Rim Container */}
      <div className="outer">
        {/* Orbiting Laser Particle */}
        <div className="dot" style={{ animationDelay: delay }} />

        {/* Inner Card Surface */}
        <div className="card">
          {/* 40-Degree Atmospheric Volumetric Light Beam */}
          <div className="ray" />

          {/* Primary High-Contrast Metallic Metric Text */}
          <div className="text">{value}</div>

          {/* Metric Sub-Label */}
          <div className="label">{label}</div>

          {/* Hairline Coordinate Boundary Lines */}
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </div>
  );
};
