"use client";

import React from "react";
import { ENGAGEMENT_PROCESS } from "@/data/portfolioData";
import { Workflow, CheckCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function EngagementProcess() {
  return (
    <section id="process" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Delivery Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Work Together
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              A battle-tested 4-step framework designed to eliminate guesswork, align engineering
              benchmarks with business goals, and deliver production results with maximum velocity.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_PROCESS.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 110} distance={20} className="h-full">
              <div
                className="p-6 rounded-2xl bg-[#0c101c] border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-cyan-400 group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Transparent SLA milestone</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
