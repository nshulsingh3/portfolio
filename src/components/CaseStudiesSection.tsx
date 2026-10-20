"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function CaseStudiesSection() {
  const [expandedId, setExpandedId] = useState<string>(CASE_STUDIES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="case-studies" className="py-24 relative bg-[#07090e] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Enterprise Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight break-words">
              Featured Engineering Case Studies
            </h2>
            <p className="text-base text-slate-400 leading-relaxed break-words">
              Real production challenges solved at enterprise scale at Accenture, powering mission-critical
              operations, reducing infrastructure overhead, and delivering delightful, sub-second experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Accordion / Cards List */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study, index) => {
            const isExpanded = expandedId === study.id;

            return (
              <ScrollReveal key={study.id} delay={index * 100} distance={24}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-[#0c101c] border-cyan-500/40 shadow-2xl shadow-cyan-950/30"
                      : "bg-[#090d16] border-slate-800 hover:border-slate-700"
                  }`}
                >
                {/* Main Card Header Bar (Clickable) */}
                <div
                  onClick={() => toggleExpand(study.id)}
                  className="p-5 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6"
                >
                  <div className="space-y-2.5 flex-1 min-w-0 pr-0 lg:pr-4">
                    {/* Top Meta Row with Mobile Toggle Chevron */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                          Case Study 0{index + 1}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 break-words">{study.client}</span>
                        <span className="text-slate-500 hidden sm:inline">•</span>
                        <span className="text-slate-400 hidden sm:inline">{study.period}</span>
                      </div>

                      {/* Mobile-only toggle button pinned at top-right (never gets pushed off-screen) */}
                      <div className="lg:hidden w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight hover:text-cyan-300 transition-colors leading-snug break-words">
                      {study.title}
                    </h3>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs sm:text-sm text-cyan-400/90 font-medium font-mono break-words">
                        {study.role}
                      </p>
                      <span className="text-xs font-mono text-slate-500 sm:hidden">{study.period}</span>
                    </div>
                  </div>

                  {/* Right side: Key Metric Pills (Responsive Grid on Mobile, Flex on Desktop) & Desktop Toggle */}
                  <div className="flex items-center gap-3 lg:gap-4 shrink-0 w-full lg:w-auto pt-2 lg:pt-0 border-t border-slate-800/60 lg:border-t-0">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center gap-2 w-full lg:w-auto">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-2.5 sm:px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex-1 lg:flex-initial lg:min-w-[80px]"
                        >
                          <div className="text-sm font-bold text-white tracking-tight">{metric.value}</div>
                          <div className="text-[10px] font-mono text-slate-400 truncate max-w-[110px] mx-auto">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop toggle button */}
                    <div className="hidden lg:flex w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 items-center justify-center text-slate-300 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-8 sm:pb-8 border-t border-slate-800/80 pt-6 space-y-6 animate-in fade-in duration-200">
                    {/* Executive Overview */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 leading-relaxed break-words">
                      <span className="font-semibold text-white block mb-1">Executive Summary:</span>
                      {study.overview}
                    </div>

                    {/* Challenges vs Architecture Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Technical Challenges */}
                      <div className="p-4 sm:p-5 rounded-xl bg-rose-950/10 border border-rose-900/20 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                          <Zap className="w-4 h-4 shrink-0" />
                          <span>Technical Bottlenecks</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {study.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 break-words">
                              <span className="text-rose-400 font-bold shrink-0">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Engineering Architecture */}
                      <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/10 border border-cyan-900/30 space-y-3">
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                          <Cpu className="w-4 h-4 shrink-0" />
                          <span>Engineering Implementation</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {study.architecture.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 break-words">
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Quantified Results */}
                    <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 shrink-0" />
                        <span>Quantified Business Impact & Results</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {study.results.map((res, i) => (
                          <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 break-words">
                            {res}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 mr-2">Core Stack:</span>
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
        </div>
      </div>
    </section>
  );
}
