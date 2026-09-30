import React from 'react';
import { Sparkles, DollarSign, HandCoins, Building2, Shield, Globe } from 'lucide-react';

interface BusinessSectionProps {
  onOpenModal: () => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({ onOpenModal }) => {
  const streams = [
    {
      num: '01',
      title: 'Freemium App',
      price: '৳30–50/mo',
      desc: 'Free basic SOS; premium routing via carrier billing.',
      icon: DollarSign,
    },
    {
      num: '02',
      title: 'Hardware',
      price: '৳1,500 retail',
      desc: 'Subsidized wearable with bKash micro-financing.',
      icon: HandCoins,
    },
    {
      num: '03',
      title: 'Enterprise',
      price: 'Per-seat SaaS',
      desc: 'Safety compliance for RMG factories & universities.',
      icon: Building2,
    },
    {
      num: '04',
      title: 'Gov 999 SaaS',
      price: 'Annual license',
      desc: 'Dedicated CAD console dashboard for police.',
      icon: Shield,
    },
    {
      num: '05',
      title: 'Grants & Aid',
      price: 'UNDP / World Bank',
      desc: 'Targeted gender safety & disaster climate grants.',
      icon: Globe,
    },
  ];

  return (
    <section id="sustainability" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[10px] text-white/80 font-mono shadow-[0_0_15px_rgba(255,255,255,0.08)]">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Sustainability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            5 Revenue Streams
          </h2>
        </div>

        {/* 5 Revenue Streams in Sleek Compact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {streams.map((s, idx) => (
            <div
              key={idx}
              className="white-glow-card rounded-2xl p-4 space-y-2 flex flex-col justify-between text-xs"
            >
              <div>
                <span className="text-[10px] font-mono text-white/40 block">0{idx + 1}</span>
                <h3 className="text-sm font-bold text-white tracking-tight mt-1">{s.title}</h3>
                <span className="text-[11px] font-mono text-white/70 block mt-0.5">{s.price}</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal font-normal pt-2 border-t border-white/10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Quote Banner */}
        <div className="white-glow-card rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <p className="text-base sm:text-lg font-normal text-white max-w-xl mx-auto leading-relaxed">
            "Predict. Prevent. Protect. Built for Bangladesh. Accessible to everyone."
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-white text-black text-xs sm:text-sm font-medium rounded-full px-6 py-2.5 hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
            >
              Join Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
