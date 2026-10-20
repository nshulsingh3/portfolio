"use client";

import React, { useState } from "react";
import { SERVICES, ServiceItem } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Cpu,
  Radio,
  Gauge,
  Boxes,
  GitMerge,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  "agentic-ai": <Cpu className="w-6 h-6 text-cyan-400" />,
  "realtime-systems": <Radio className="w-6 h-6 text-emerald-400" />,
  "performance-optimization": <Gauge className="w-6 h-6 text-amber-400" />,
  "custom-tools-design-systems": <Boxes className="w-6 h-6 text-violet-400" />,
  "modernization-advisory": <GitMerge className="w-6 h-6 text-pink-400" />,
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-24 relative bg-[#07090e]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Professional Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Engineering & Advisory Services
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              From greenfield Agentic AI systems to deep performance refactoring and real-time streaming
              infrastructure. Built with the rigor of enterprise engineering and the velocity of modern product teams.
            </p>

            {/* Quick Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                All Services (5)
              </button>
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === s.id
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                      : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white"
                  }`}
                >
                  {s.title.split("&")[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80} distance={20} className="h-full">
              <div
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/30 hover:-translate-y-1 h-full"
              >
                {/* Top Row: Icon & Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight lg:min-h-[3rem] flex items-center">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 leading-snug">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Row: Tech Stack & CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Inquire Action Button */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 group-hover:text-white bg-slate-800/60 group-hover:bg-cyan-500/20 border border-slate-700/60 group-hover:border-cyan-500/40 transition-all cursor-pointer"
                  >
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
