"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface CapabilityItem {
  title: string;
  description: string;
  tools: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Agentic AI and multi-agent systems",
    description:
      "Autonomous multi-agent workflows, production RAG pipelines, and conversational copilots with state persistence and tool execution.",
    tools: ["Microsoft Agent Framework", "Azure AI Foundry", "LangGraph", "RAG", "Python"],
  },
  {
    title: "Real-time event-driven systems",
    description:
      "Bi-directional WebSocket pipelines, streaming state sync, and live event distribution connecting microservices to reactive frontends.",
    tools: ["WebSockets", "Node.js", "Express", "FastAPI", "Redis"],
  },
  {
    title: "Frontend performance and complex UI",
    description:
      "Reducing API roundtrips and UI re-renders through normalized caching, paired with custom block-based editors and interactive node visualizers.",
    tools: ["React 19", "RTK Query", "BlockNote", "ReactFlow", "TailwindCSS"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-14 md:py-20 w-full">
      {/* Anchor aliases to preserve external links */}
      <span id="services" className="sr-only" />
      <span id="upcoming-demos" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Context, and Subpage Link (sticky on desktop only) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                What I Build
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Three areas I've shipped in production at Accenture.
              </p>

              {/* Text link to full services subpage */}
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-700 dark:text-cyan-400 hover:text-sky-800 dark:hover:text-cyan-300 transition-colors group cursor-pointer"
                >
                  <span>Full service details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Stacked Capability Rows */}
          <div className="lg:col-span-7 space-y-4">
            {CAPABILITIES.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 60}>
                <div
                  data-ui="capability-card"
                  className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1.5 mb-3.5">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
