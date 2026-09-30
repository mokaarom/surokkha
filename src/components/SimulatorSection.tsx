import React, { useState } from 'react';
import { Sparkles, Activity, Mic, ShieldAlert, Navigation } from 'lucide-react';

export const SimulatorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'motion' | 'voice' | 'packet' | 'route'>('motion');
  const [motionPattern, setMotionPattern] = useState<'struggle' | 'fall' | 'walk'>('struggle');
  const [voiceTest, setVoiceTest] = useState<string | null>(null);
  const [dispatched, setDispatched] = useState<boolean>(false);

  return (
    <section id="simulator" className="w-full starfield-bg py-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* White ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[10px] text-white/80 font-mono shadow-[0_0_15px_rgba(255,255,255,0.08)]">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Interactive Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Live Telemetry
          </h2>
          <p className="text-sm text-neutral-400">
            Test on-device motion classification and direct 999 CAD dispatch.
          </p>
        </div>

        {/* Tab Switcher with White Light Styling */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto text-xs font-mono">
          {[
            { id: 'motion', label: '01 / Motion' },
            { id: 'voice', label: '02 / Voice' },
            { id: 'packet', label: '03 / 999 CAD' },
            { id: 'route', label: '04 / Routing' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap text-xs ${
                activeTab === tab.id
                  ? 'bg-white text-black font-medium shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                  : 'text-neutral-400 hover:text-white bg-white/5 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Motion Simulator */}
        {activeTab === 'motion' && (
          <div className="white-glow-card rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-b border-white/10 pb-3">
              <span className="text-white/60">SELECT MOTION:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'struggle', label: 'Struggle & Dragging' },
                  { id: 'fall', label: 'Slip & Fall' },
                  { id: 'walk', label: 'Normal Walk' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMotionPattern(item.id as any)}
                    className={`px-3 py-1 rounded-xl border transition-colors cursor-pointer text-xs ${
                      motionPattern === item.id
                        ? 'bg-white text-black border-white font-medium'
                        : 'border-white/10 text-white/60 hover:text-white bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Oscilloscope Waveform Display */}
            <div className="space-y-3 font-mono">
              <div className="flex justify-between text-[10px] text-white/40">
                <span>ON-DEVICE ACCELEROMETER STREAM</span>
                <span>VECTOR (G-FORCE)</span>
              </div>

              <div className="h-28 w-full bg-black/90 rounded-2xl border border-white/10 flex items-center justify-between px-5 gap-1 shadow-inner">
                {[...Array(32)].map((_, i) => {
                  let height = '20%';
                  let color = 'bg-white/30';
                  if (motionPattern === 'struggle') {
                    height = `${Math.min(95, Math.max(15, Math.sin(i * 1.6) * 45 + 50 + (i % 2 === 0 ? 25 : -20)))}%`;
                    color = 'bg-white';
                  } else if (motionPattern === 'fall') {
                    height = i === 15 || i === 16 ? '95%' : i > 16 ? '8%' : '25%';
                    color = 'bg-white/80';
                  } else {
                    height = `${Math.sin(i * 0.4) * 18 + 30}%`;
                    color = 'bg-white/40';
                  }
                  return (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${color}`}
                      style={{ height }}
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-2xl bg-black border border-white/10">
                  <span className="text-[9px] text-white/40 block">CLASSIFICATION</span>
                  <span className="text-white font-medium mt-0.5 block truncate">
                    {motionPattern === 'struggle'
                      ? 'Assault Detected'
                      : motionPattern === 'fall'
                      ? 'Trip & Fall'
                      : 'Normal Gait'}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-black border border-white/10">
                  <span className="text-[9px] text-white/40 block">CONFIDENCE</span>
                  <span className="text-white font-bold mt-0.5 block">
                    {motionPattern === 'struggle' ? '97.4%' : motionPattern === 'fall' ? '91.8%' : '99.2%'}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-black border border-white/10">
                  <span className="text-[9px] text-white/40 block">DISPATCH ACTION</span>
                  <span className="text-white font-medium mt-0.5 block truncate">
                    {motionPattern === 'struggle'
                      ? 'AUTO 999 CAD'
                      : motionPattern === 'fall'
                      ? 'FALL ALERT'
                      : 'STANDBY'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Voice Spotting Simulator */}
        {activeTab === 'voice' && (
          <div className="white-glow-card rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-white/50 block">TEST VOICE TRIGGER:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  { phrase: '"বাঁচাও!" (Bachao!)', lang: 'Bangla', conf: 99.1 },
                  { phrase: '"আমারে বাঁচান"', lang: 'Dialect', conf: 96.4 },
                  { phrase: '"Help! Help!"', lang: 'English', conf: 98.2 },
                  { phrase: 'Bus Traffic Noise', lang: 'Noise Rejection', conf: 12.3 },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setVoiceTest(item.phrase)}
                    className="p-3.5 rounded-2xl bg-black border border-white/10 hover:border-white/30 text-left transition-all cursor-pointer text-xs"
                  >
                    <div className="text-white font-bold text-sm truncate">{item.phrase}</div>
                    <div className="text-[10px] text-white/50 font-mono mt-0.5">{item.lang}</div>
                  </button>
                ))}
              </div>
            </div>

            {voiceTest && (
              <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs space-y-1">
                <div className="text-white font-bold">Tested Phrase: {voiceTest}</div>
                <div className="text-white/60 text-[11px]">
                  {voiceTest.includes('Traffic') ? 'Noise rejected (below trigger threshold)' : 'Verified keyword • Triggered in 142ms'}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: 999 Structured Packet */}
        {activeTab === 'packet' && (
          <div className="white-glow-card rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
              <span className="text-white/60">STRUCTURED 999 PAYLOAD:</span>
              <button
                type="button"
                onClick={() => setDispatched(true)}
                className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                {dispatched ? 'Dispatched (1.4s)' : 'Simulate 999 Push'}
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-[11px] text-white/80 overflow-x-auto leading-relaxed">
{`{
  "event_id": "SRK-BD-2026-9921",
  "incident_type": "ASSAULT_CONFIRMED",
  "tinyml_confidence": 0.974,
  "location": { "lat": 23.7509, "lng": 90.3705, "accuracy_m": 2.8, "area": "Dhanmondi, Dhaka" },
  "channel": "GSM_SMS_OFFLINE_LINK",
  "silsila_mesh_nodes_near": 4
}`}
            </pre>
          </div>
        )}

        {/* Tab 4: Safe Route vs Alley Risk */}
        {activeTab === 'route' && (
          <div className="white-glow-card rounded-3xl p-6 sm:p-7 space-y-5">
            <span className="text-xs font-mono text-white/60 block">DHANMONDI CORRIDOR TEST:</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono text-white/40 block uppercase">Unlit Alley</span>
                <div className="text-xl font-bold text-white">850m • 11 min</div>
                <div className="text-xs font-mono text-white/60">Risk Score: 84/100 (High Risk)</div>
                <p className="text-xs text-neutral-400 font-normal">
                  Zero street lights, isolated corridor.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black border border-white/20 space-y-1.5">
                <span className="text-[10px] font-mono text-white/40 block uppercase">Surokkha Safe Route</span>
                <div className="text-xl font-bold text-white">1.1km • 14 min (+3m)</div>
                <div className="text-xs font-mono text-white">Risk Score: 14/100 (Safe)</div>
                <p className="text-xs text-neutral-400 font-normal">
                  Continuous LED lighting, high pedestrian density.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
