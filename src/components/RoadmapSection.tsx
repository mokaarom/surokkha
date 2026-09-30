import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);

  const phaseData = [
    {
      id: 1,
      num: '01',
      title: 'Phase 1: Foundation',
      timeline: 'Months 1–6',
      items: [
        'TinyML assault model training',
        'Bangla dialect keyword spotting',
        'Wearable device prototype MVP',
      ],
    },
    {
      id: 2,
      num: '02',
      title: 'Phase 2: Pilot Deployment',
      timeline: 'Months 7–12',
      items: [
        '500-user university campus beta',
        'Direct 999 police CAD test',
        'Calibrated false alarm rate <5%',
      ],
    },
    {
      id: 3,
      num: '03',
      title: 'Phase 3: Public Launch',
      timeline: 'Months 13–18',
      items: [
        'National telecom carrier billing',
        'Domestic mass manufacturing',
        'Nationwide safety campaign',
      ],
    },
    {
      id: 4,
      num: '04',
      title: 'Phase 4: Scale & Expand',
      timeline: 'Months 19–24+',
      items: [
        'Rollout across all 8 divisions',
        'Tower-mounted LoRa mesh relay',
        'Coastal cyclone rescue mode',
      ],
    },
  ];

  const current = phaseData.find((p) => p.id === phase)!;

  return (
    <section id="roadmap" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[11px] text-white/80 font-mono shadow-[0_0_15px_rgba(255,255,255,0.08)]">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Implementation plan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            4-Phase Execution Roadmap
          </h2>
        </div>

        {/* Phase Timeline Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {phaseData.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPhase(p.id as any)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                phase === p.id
                  ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                  : 'bg-neutral-950/80 border-white/10 text-white/60 hover:text-white'
              }`}
            >
              <div className="text-[10px] font-mono opacity-70">
                {p.num} // {p.timeline}
              </div>
              <div className="text-xs font-bold mt-1 truncate">
                {p.title.split(':')[1]}
              </div>
            </button>
          ))}
        </div>

        {/* Phase Details Card */}
        <div className="white-glow-card rounded-3xl p-6 sm:p-7 space-y-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {current.title}
            </h3>
            <span className="text-[11px] font-mono text-white/60">
              {current.timeline}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-2.5 text-xs text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-relaxed font-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
