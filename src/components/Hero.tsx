"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { downloadResumeFile } from "@/utils/downloadResume";
import { Download, Calendar, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
  onOpenWaitlist?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="relative pt-28 pb-14 md:pt-36 md:pb-20 w-full overflow-x-clip">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Main Headline (2-line display title, rendered directly for optimal LCP) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] sm:leading-[1.08] break-words">
            Senior Full-Stack &<br />
            Agentic AI Engineer.
          </h1>

          {/* Subtext (Factual, calm, exactly as specified) */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            5 years at Accenture building multi-agent systems, real-time WebSocket pipelines and enterprise React apps.
          </p>

          {/* Primary Actions (Flat buttons, single radius scale: rounded-md, stack full-width on mobile) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="/api/download-resume"
              download="Anshul_Singh_Resume.pdf"
              onClick={(e) => downloadResumeFile(e)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white dark:text-slate-950 bg-sky-700 hover:bg-sky-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <a
              href={PERSONAL_INFO.calCom}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0c101a] hover:bg-slate-100 dark:hover:bg-[#111726] border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-slate-600 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-700 dark:text-cyan-400" />
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </a>
          </div>

          {/* Proof Strip of 4 (Metrics appear ONLY here in the Hero) */}
          <div data-ui="proof" className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 mt-6 border-t border-slate-200 dark:border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">50%</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">API traffic cut</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">&lt;150ms</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Streaming latency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">75%</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Faster deploys</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">3x</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Accenture awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
