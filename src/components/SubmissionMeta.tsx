import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

interface SubmissionMetaProps {
  onOpenProposal: () => void;
}

export const SubmissionMeta: React.FC<SubmissionMetaProps> = ({ onOpenProposal }) => {
  return (
    <section className="w-full bg-black border-y border-white/10 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-white/50 lowercase">
            <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-white/10 text-white/80">
              surokkha.ai
            </span>
            <span>•</span>
            <span className="text-white/60">segment: digital safety, security &amp; privacy</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight lowercase">
            surokkha ai: an intelligent, offline-first emergency safety ecosystem for bangladesh
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            combining a ৳1,500 tinyml wearable, edge dialect voice activation, and automated direct 999 police CAD dispatch.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenProposal}
            className="flex items-center gap-1.5 text-xs text-white bg-neutral-900 hover:bg-neutral-800 border border-white/15 rounded-full px-5 py-2.5 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-white/70" />
            <span>view 8-page proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
          </button>
        </div>
      </div>
    </section>
  );
};
