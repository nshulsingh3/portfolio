"use client";

import React from "react";
import { UPCOMING_DEMOS, UpcomingDemo, PERSONAL_INFO } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Sparkles,
  Clock,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ShieldAlert,
  Lightbulb,
  Check,
  Terminal,
  Calendar,
} from "lucide-react";

interface UpcomingDemosSectionProps {
  onOpenWaitlistForDemo?: (demoTitle: string) => void;
}

const statusColors: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  "Beta Testing": {
    bg: "bg-emerald-950/40",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    border: "border-emerald-800/50",
  },
  "In Development": {
    bg: "bg-cyan-950/40",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
    border: "border-cyan-800/50",
  },
  "Final Polish": {
    bg: "bg-violet-950/40",
    text: "text-violet-300",
    dot: "bg-violet-400",
    border: "border-violet-800/50",
  },
};

export default function UpcomingDemosSection({ onOpenWaitlistForDemo }: UpcomingDemosSectionProps) {
  return (
    <section id="upcoming-demos" className="py-24 relative bg-[#090d16] border-y border-slate-800/80 overflow-x-clip">
      {/* Decorative background grid and lighting with smooth radial & edge fading */}
      <div
        className="absolute inset-0 bg-dot-matrix opacity-35 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 80%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07090e] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090e] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[90vw] max-w-[450px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 animate-spin shrink-0" style={{ animationDuration: "8s" }} />
              <span>Interactive Engineering Lab • Launching Next Few Weeks</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Upcoming Real-Time Demos
              <span className="block text-gradient-cyan text-xl sm:text-2xl font-bold mt-1.5">
                Interactive Production Sandboxes
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed break-words">
              I am currently packaging my enterprise-grade architectures into standalone, live interactive browser
              sandboxes scheduled for rollout over the next 2 to 3 weeks. You can preview the technical
              specifications below and join the priority access list to test them live upon release.
            </p>

            {/* Staging status callout banner */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span className="break-words">Current Status: 4 Live Workflows undergoing stress-testing & UI hardening</span>
              </div>
              <div className="text-slate-400 flex items-center gap-2 shrink-0">
                <span className="text-cyan-400 font-semibold">Target Rollout:</span>
                <span>Next Few Weeks</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimalist Teaser Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_DEMOS.map((demo, index) => {
            const statusConfig = statusColors[demo.status] || statusColors["In Development"];

            return (
              <ScrollReveal key={demo.id} delay={index * 90} distance={20} className="h-full">
                <div
                  className="rounded-2xl bg-[#0c101a] border border-slate-800/90 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 group h-full"
                >
                <div className="space-y-6">
                  {/* Status & Estimated Launch header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} animate-pulse`} />
                      <span>{demo.status}</span>
                    </span>

                    <span className="text-xs font-mono text-cyan-400/90 flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{demo.estimatedLaunch}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                      {demo.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug md:min-h-[3rem] flex items-center">
                      {demo.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {demo.tagline}
                    </p>
                  </div>

                  {/* Problem / Solution Brief */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                      <div className="flex items-center gap-1 text-rose-400 font-semibold uppercase tracking-wider text-[10px]">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-[11px]">
                        {demo.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                      <div className="flex items-center gap-1 text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Engineered Solution</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        {demo.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Architecture Blueprint
                    </span>
                    <ul className="space-y-1.5">
                      {demo.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Stack & Waitlist Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {demo.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={PERSONAL_INFO.calCom}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-950/40 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Demo Walkthrough on Cal.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
        </div>
      </div>
    </section>
  );
}
