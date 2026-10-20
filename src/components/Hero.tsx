"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Download,
  Calendar,
} from "lucide-react";

interface HeroProps {
  onOpenWaitlist?: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenWaitlist, onOpenResume }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial glow accents & smooth edge fade */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[280px] h-[280px] bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090e] to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Headlines */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-sm text-xs text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-cyan-300 font-medium">Enterprise Agentic AI & Full-Stack</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Senior Systems Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting Enterprise{" "}
              <span className="text-gradient-cyan block sm:inline">
                Agentic AI & High-Performance
              </span>{" "}
              Full-Stack Applications.
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              5 years of production engineering at Accenture delivering scalable multi-agent systems,
              real-time WebSocket event streams, and sub-second React platforms. Proven record cutting
              API traffic by 50%, eliminating 80% of unnecessary UI re-renders, and automating workflows
              for thousands of enterprise users.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.calCom}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#upcoming-demos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Upcoming Demos</span>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                  New
                </span>
              </a>

              <a
                href="/Anshul_Singh_Resume.pdf"
                download="Anshul_Singh_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Google & Anthropic Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>3x Accenture ACE Honoree</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-violet-400" />
                <span>3,000+ Enterprise Users</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & System Status Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow border ring */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-violet-500/40 blur-sm opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-[#0b0f19] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-5">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">system.telemetry.active</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    HEALTHY 99.9%
                  </span>
                </div>

                {/* Telemetry Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Stream Latency</span>
                    </div>
                    <div className="text-lg font-bold text-white">84 ms</div>
                    <div className="text-[10px] text-emerald-400">WebSocket SSE Sub-second</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Cpu className="w-3.5 h-3.5 text-violet-400" />
                      <span>Agent Engine</span>
                    </div>
                    <div className="text-lg font-bold text-white">LangGraph</div>
                    <div className="text-[10px] text-cyan-400">+ Google ADK / Kiro</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>API Traffic Cut</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-400">-50%</div>
                    <div className="text-[10px] text-slate-400">RTK Query Normalized</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      <span>Re-render Drop</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-400">-80%</div>
                    <div className="text-[10px] text-slate-400">React 18 Concurrency</div>
                  </div>
                </div>

                {/* Simulated Terminal Trace snippet */}
                <div className="rounded-xl bg-black/60 p-3.5 border border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-400">
                  <div className="text-cyan-400 flex items-center justify-between">
                    <span>$ agent.trace --watch</span>
                    <span className="text-[10px] text-slate-500">LIVE</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-emerald-400">✓</span> [LangGraph] Node: "PlannerAgent" completed in 42ms
                  </div>
                  <div className="text-slate-300">
                    <span className="text-emerald-400">✓</span> [WebSocket] Dispatched 5+ service events (0 drops)
                  </div>
                  <div className="text-cyan-300">
                    <span className="text-blue-400">ℹ</span> [BlockNote] Custom clause inserted into contract schema
                  </div>
                  <div className="text-slate-500">
                    Ready for real-time customer demos (slated Q4 deployment)
                  </div>
                </div>

                {/* Waitlist Callout Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-800/40 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Real-Time Demos In Progress</span>
                    <span className="text-slate-400 text-[11px]">Interactive sandboxes launching in 2-3 weeks</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.calCom}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Book Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
