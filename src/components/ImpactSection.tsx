import React from 'react';
import { Sparkles, ShieldCheck, Zap, Lock, MapPin, DollarSign, Radio } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const trustPoints = [
    {
      icon: Zap,
      metric: 'Response Time',
      value: '<8 min',
      detail: 'Automated ±3m GPS coordinates and telemetry sent directly to police CAD consoles.',
    },
    {
      icon: Radio,
      metric: 'Offline Reliability',
      value: '100% Offline',
      detail: 'Triggers encrypted GSM SMS emergency packets even with zero data balance or Wi-Fi.',
    },
    {
      icon: MapPin,
      metric: 'GPS Precision',
      value: '±3 meters',
      detail: 'Eliminates vague landmarks and misdirected police response in dense urban alleys.',
    },
    {
      icon: Lock,
      metric: 'Data Privacy',
      value: 'Zero Tracking',
      detail: 'No background tracking. Raw audio and movement data never leave your personal device.',
    },
    {
      icon: DollarSign,
      metric: 'Accessibility',
      value: '৳1,500',
      detail: 'Subsidized hardware price with bKash and Nagad installment options for all commuters.',
    },
    {
      icon: ShieldCheck,
      metric: 'Precision',
      value: '<5% False Alarms',
      detail: 'TinyML accurately distinguishes violent struggle from routine jogging or accidental drops.',
    },
  ];

  return (
    <section id="safety-guarantees" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* White ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[350px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="space-y-2 max-w-md">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built on Trust
          </h2>
          <p className="text-sm text-neutral-400">
            Real protection with zero hidden subscriptions or continuous tracking.
          </p>
        </div>

        {/* 6 Customer Trust Cards with White Light Rims */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustPoints.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="white-glow-card rounded-2xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/50 block uppercase tracking-wider">
                      {item.metric}
                    </span>
                    <IconComp className="w-4 h-4 text-white/60" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {item.value}
                  </div>
                </div>
                <p className="text-xs text-neutral-400 font-normal leading-relaxed pt-2 border-t border-white/10">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
