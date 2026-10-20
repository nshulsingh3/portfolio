"use client";

import React from "react";
import { IMPACT_METRICS } from "@/data/portfolioData";
import { TrendingDown, Users, Clock, Zap, FileSpreadsheet, Rocket } from "lucide-react";

const statIcons: Record<string, React.ReactNode> = {
  "Years Experience": <Clock className="w-4 h-4 text-cyan-400" />,
  "API Traffic Cut": <TrendingDown className="w-4 h-4 text-emerald-400" />,
  "Render Drop": <Zap className="w-4 h-4 text-amber-400" />,
  "Enterprise Users": <Users className="w-4 h-4 text-blue-400" />,
  "Monthly Invoices": <FileSpreadsheet className="w-4 h-4 text-violet-400" />,
  "CI/CD Speedup": <Rocket className="w-4 h-4 text-pink-400" />,
};

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#090d16]/60 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {IMPACT_METRICS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-2 min-h-[1.5rem]">
                  <span className="shrink-0">
                    {statIcons[stat.label] || <Zap className="w-4 h-4 text-cyan-400" />}
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 leading-snug whitespace-normal">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
