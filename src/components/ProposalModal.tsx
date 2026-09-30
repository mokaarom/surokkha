/**
 * @file ProposalModal.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Technical whitepaper and system architecture proposal viewer dialog
 * providing comprehensive 8-page documentation on TinyML assault models, LoRa mesh topology,
 * and 999 CAD integration.
 */

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [page, setPage] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const totalPages = 8;

  const handleCopy = () => {
    const el = document.getElementById('full-proposal-text');
    if (el) {
      navigator.clipboard?.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-neutral-950 border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-white/50">surokkha.ai whitepaper</span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-mono text-white/90">technical overview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-white/70 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px] font-mono">{copied ? 'copied' : 'copy text'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-white/70 hover:text-white cursor-pointer"
              aria-label="close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Page Selector Strip */}
        <div className="px-5 py-2.5 bg-neutral-900/60 border-b border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  page === p ? 'bg-white text-black font-medium' : 'text-white/50 hover:text-white'
                }`}
              >
                p{p}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white/50 shrink-0">
            <span>page {page} of {totalPages}</span>
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="p-1 rounded text-white disabled:opacity-20 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="p-1 rounded text-white disabled:opacity-20 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div
          id="full-proposal-text"
          className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed"
        >
          {page === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 1 of 8</div>
              <h2 className="text-xl font-normal text-white">chosen segment: digital safety, security &amp; privacy</h2>
              <h3 className="text-base text-white/90">idea title: surokkha ai, an intelligent, offline-first emergency safety ecosystem for bangladesh</h3>
              
              <div className="pt-2 space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">problem statement</h4>
                <p>bangladesh faces a critical and escalating personal safety crisis that existing technologies fundamentally fail to address in its unique infrastructure context.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">the ground reality</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                  <li>according to ain o salish kendra (ask), over 1,200 women were subjected to documented violence in 2023 alone, with thousands more going unreported. mugging, street harassment, acid attacks, child abduction, and gender-based violence in public transport and poorly lit urban and rural corridors remain rampant.</li>
                  <li>the national 999 emergency helpline, while a significant step forward, suffers from slow dispatch times, manual call handling, language barriers, and zero automated location or incident context leading to delayed or misdirected responses.</li>
                  <li>bangladesh's infrastructure reality includes intermittent connectivity in rural areas, network congestion during protests and natural disasters, and a multilingual population where english-only interfaces exclude millions.</li>
                </ul>
              </div>
            </div>
          )}

          {page === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 2 of 8</div>
              <h3 className="text-lg font-normal text-white">why existing technologies fail in bangladesh</h3>
              <div className="space-y-2 text-xs text-neutral-300">
                <p>• <strong>smartphone sos:</strong> requires the phone to be accessible, charged, and in hand. during an assault, the victim's phone is often snatched, locked, or out of reach. relies on active data and gps fails in rural areas or during network congestion.</p>
                <p>• <strong>safety apps:</strong> require active smartphone interaction and continuous internet. high false-alarm rates. no ai-based contextual awareness. no integration with bangladesh's 999 system.</p>
                <p>• <strong>wearable panic buttons:</strong> single-function sends a blind alert with zero incident context. no proactive risk prediction. dependent on bluetooth tethering to a smartphone.</p>
                <p>• <strong>smartwatch fall/sos detection:</strong> prohibitively expensive for the average bangladeshi citizen (৳30,000–50,000+). fall detection does not equal assault detection. no bangla language support. no local crime-data awareness.</p>
                <p>• <strong>crime mapping platforms:</strong> entirely reactive, based on filed reports. no real-time personal integration. no reliable, granular crime data exists for bangladesh.</p>
                <p>• <strong>999 government system:</strong> manual, voice-call-only. no automated gps push. no incident-type classification. overloaded during peak hours and natural disasters.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 space-y-1">
                <span className="text-xs font-mono text-white font-medium block">the core gap:</span>
                <p className="text-xs text-neutral-300">there is no affordable, intelligent, offline-capable, and proactive emergency safety system designed for bangladesh's unique infrastructure constraints intermittent connectivity, dense urban areas, remote rural zones, and a multilingual population and its specific threat landscape.</p>
              </div>

              <div className="pt-2 space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">proposed solution — layer 1: surokkha wearable</h4>
                <p>• low-cost wristband or pendant (target: ৳1,500–2,500) with embedded accelerometer, gyroscope, microphone, gps.</p>
                <p>• on-device tinyml engine (tensorflow lite micro) identifying struggle patterns, falls, forced dragging, sprinting-under-duress locally with zero internet.</p>
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 3 of 8</div>
              <h3 className="text-lg font-normal text-white">proposed solution: layers 1, 2 &amp; 3</h3>
              
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-white/80">layer 1 (cont.): physical sos &amp; lora mesh</h4>
                <p>• physical sos button (double-press) for manual activation.</p>
                <p>• offline sos via sms fallback: triggers sms with gps to contacts &amp; 999 via built-in gsm module.</p>
                <p>• future-ready lora mesh capability for rural areas with zero cellular coverage.</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <h4 className="font-mono text-xs text-white/80">layer 2: surokkha ai mobile app</h4>
                <p>• <strong>multilingual voice activation:</strong> edge keyword spotting for "bachao!", "help", and "amare bachan" in bangla, english, and dialects (chittagonian, sylheti) with noise cancellation.</p>
                <p>• <strong>ai risk prediction engine:</strong> spatiotemporal personal risk score (0–100) combining time, gps, dmp crime records, weather, lighting, and cell crowd density.</p>
                <p>• <strong>crime-risk heat map and safe route navigation:</strong> suggests well-lit, higher-traffic alternate paths.</p>
                <p>• <strong>unusual movement detection:</strong> 30s check-in prompt upon unusual stationary delay in risk zone or vehicle speed displacement.</p>
                <p>• <strong>community safety mesh ("silsila"):</strong> 500m radius proximity alerts for opt-in citizens.</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <h4 className="font-mono text-xs text-white/80">layer 3: ai backend &amp; government integration</h4>
                <p>• <strong>direct 999 api:</strong> automated push of ±3m gps, tinyml incident classification, victim profile, 10s consent audio, and trajectory.</p>
              </div>
            </div>
          )}

          {page === 4 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 4 of 8</div>
              <h3 className="text-lg font-normal text-white">layer 3 (cont.) &amp; competitive differentiation</h3>
              
              <div className="space-y-1.5 text-xs">
                <p>• <strong>federated learning for privacy:</strong> raw movement &amp; incident data never leaves device; only encrypted model updates are shared.</p>
                <p>• <strong>disaster mode:</strong> switches to mass-emergency mode during cyclones, floods, collapses coordinating with fire service and civil defence.</p>
              </div>

              <div className="pt-3 space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">competitive differentiation table</h4>
                <div className="border border-white/10 rounded-xl overflow-hidden font-mono text-[11px]">
                  <table className="w-full text-left">
                    <thead className="bg-neutral-900 border-b border-white/10 text-white/60">
                      <tr>
                        <th className="p-2">feature</th>
                        <th className="p-2">previous solutions</th>
                        <th className="p-2 text-white">surokkha ai</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr><td className="p-2">works without internet</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, sms &amp; lora fallback</td></tr>
                      <tr><td className="p-2">detects assault automatically</td><td className="p-2 text-white/40">no (only falls)</td><td className="p-2">yes, tinyml struggle detection</td></tr>
                      <tr><td className="p-2">predicts risk before incident</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, real-time risk scoring</td></tr>
                      <tr><td className="p-2">speaks bangla</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, multilingual edge nlp</td></tr>
                      <tr><td className="p-2">integrates with 999</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, direct api push</td></tr>
                      <tr><td className="p-2">affordable for bd citizens</td><td className="p-2 text-white/40">no (৳30k+)</td><td className="p-2">yes, target ৳1,500–2,500</td></tr>
                      <tr><td className="p-2">privacy-preserving ai</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, federated learning</td></tr>
                      <tr><td className="p-2">community mesh response</td><td className="p-2 text-white/40">no</td><td className="p-2">yes, silsila network</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {page === 5 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 5 of 8</div>
              <h3 className="text-lg font-normal text-white">implementation plan</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
                  <span className="font-mono text-white font-medium">phase 1: foundation</span>
                  <p className="text-neutral-400">ai model development (sisfall, ur fall, mobiact + mozilla common voice bangla); spatiotemporal risk engine prototype; 999 partnership mou with police ict division; wearable device mvp.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
                  <span className="font-mono text-white font-medium">phase 2: pilot</span>
                  <p className="text-neutral-400">closed beta (500 users) at dhaka university, buet, jahangirnagar university; live 999 data push integration testing; federated model refinement (false alarm below 5%); silsila mesh testing.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
                  <span className="font-mono text-white font-medium">phase 3: public launch</span>
                  <p className="text-neutral-400">telecom partnership integration (vas bundling); wearable manufacturing with local partners (walton, symphony); "nirapod bangladesh" campaign with student ambassadors, naripokkho, brac.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/5 space-y-1">
                  <span className="font-mono text-white font-medium">phase 4: scale and expand</span>
                  <p className="text-neutral-400">national rollout (chittagong, sylhet, rajshahi, khulna); rural lora mesh on telecom towers; rmg factory worker safety programs &amp; schools; coastal disaster module in cox's bazar, barishal, satkhira.</p>
                </div>
              </div>
            </div>
          )}

          {page === 6 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 6 of 8</div>
              <h3 className="text-lg font-normal text-white">impact and outcomes</h3>
              
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase text-white/70">quantitative impact</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">response reduction: 25–45m to &lt;8m</div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">users protected: 2 million+ active</div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">incidents prevented: 15,000+</div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">false alarm rate: below 5%</div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">999 call efficiency: 60% reduction in misdirected calls</div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">rural coverage: 500+ unions via lora</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-neutral-400">
                <span className="font-mono text-xs uppercase text-white/70 block">qualitative impact</span>
                <p>• <strong>women's mobility &amp; empowerment:</strong> confidence to travel, study, work after dark directly contributing to sdg 5 (gender equality) and sdg 11 (safe cities).</p>
                <p>• <strong>trust in public safety:</strong> strengthening 999 with ai telemetry restores citizen trust.</p>
                <p>• <strong>digital inclusion:</strong> offline-first, multilingual, ৳1,500 cost ensures low-income inclusion.</p>
                <p>• <strong>data sovereignty:</strong> federated learning protects personal data sovereignty.</p>
              </div>
            </div>
          )}

          {page === 7 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 7 of 8</div>
              <h3 className="text-lg font-normal text-white">scalability and sustainability: business model</h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-neutral-300">
                <li><strong>freemium app model:</strong> basic sos free; premium features (safe route, family tracking, disaster mode) at ৳30–50/month via mobile billing.</li>
                <li><strong>wearable sales:</strong> ৳1,500–2,500 subsidized through mfs device financing (bkash, nagad).</li>
                <li><strong>b2b enterprise safety:</strong> licensing to rmg factories, corporate offices, ride-sharing (pathao, uber), universities.</li>
                <li><strong>government contract:</strong> saas licensing to bangladesh police and fire service for 999 dashboard.</li>
                <li><strong>ngo / development partner funding:</strong> grants from undp, un women, world bank for gbv prevention.</li>
              </ol>

              <div className="pt-2 space-y-1.5 text-xs">
                <span className="font-mono text-xs uppercase text-white/70 block">scalability path</span>
                <p>• built on bangladesh's national 4g/lte network and 180m+ mobile subscriber base.</p>
                <p>• modular cloud-native edge ai and off-the-shelf components avoid supply chain bottlenecks.</p>
                <p>• adaptable for regional south and southeast asian markets (india, nepal, myanmar).</p>
              </div>
            </div>
          )}

          {page === 8 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/50">page 8 of 8</div>
              <h3 className="text-lg font-normal text-white">long-term sustainability &amp; conclusion</h3>
              <div className="space-y-2 text-xs text-neutral-300">
                <p>• <strong>self-improving ai:</strong> federated learning gets smarter with every user, creating an unassailable data moat.</p>
                <p>• <strong>regulatory alignment:</strong> complies with digital security act and personal data protection act.</p>
                <p>• <strong>community ownership:</strong> silsila mesh creates organic network effects driving retention.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 text-center space-y-2 mt-4">
                <p className="text-sm font-normal text-white lowercase">
                  "surokkha ai does not just respond to emergencies, it predicts, prevents, and protects. built for bangladesh. powered by ai. accessible to everyone."
                </p>
                <span className="text-[11px] font-mono text-white/50 block">page 8 of 8 • end of submission</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-black/60 text-xs font-mono">
          <span className="text-white/40">page {page} of {totalPages}</span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-white/70 hover:text-white disabled:opacity-20 cursor-pointer"
            >
              previous
            </button>
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-1.5 rounded-full bg-white text-black font-medium disabled:opacity-20 cursor-pointer"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
