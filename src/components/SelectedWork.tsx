"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface CaseStudySummary {
  slug: string;
  title: string;
  role: string;
  dates: string;
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
}

const SELECTED_CASES: CaseStudySummary[] = [
  {
    slug: "enterprise-copilot",
    title: "Enterprise Copilot AI Assistant & Visual Workflow Orchestration",
    role: "Senior Analyst | Accenture",
    dates: "Sept 2025 - Present",
    summary:
      "Engineered a Copilot-style AI assistant and interactive agent orchestration viewer for enterprise operations, enabling teams to automate document workflows and visually inspect multi-step agent reasoning.",
    metrics: [
      { value: "3,000+", label: "Target Users" },
      { value: "1,000+", label: "Monthly invoices" },
    ],
    stack: ["TypeScript", "WebSockets", "ReactFlow", "BlockNote", "TailwindCSS"],
  },
  {
    slug: "realtime-moderation",
    title: "Multi-Service WebSocket Pipeline & AI Moderation Suite",
    role: "Analyst | Accenture",
    dates: "Sept 2022 - Aug 2025",
    summary:
      "Architected a unified real-time event pipeline and moderation suite connecting 5+ microservices, enabling content moderators to review video assets with real-time updates.",
    metrics: [
      { value: "500+", label: "Moderators" },
      { value: "10,000+", label: "Videos streamlined" },
    ],
    stack: ["React", "WebSockets", "RTK Query", "JSONLogic", "TypeScript"],
  },
  {
    slug: "react-modernization",
    title: "Enterprise React 18 Migration & Deployment Pipeline Optimization",
    role: "Associate | Accenture",
    dates: "Aug 2021 - Aug 2022",
    summary:
      "Led migration of core enterprise apps from React 16 to React 18 with concurrent rendering, reducing render bottlenecks and streamlining Azure CI/CD pipelines.",
    metrics: [
      { value: "80%", label: "UI re-renders cut" },
      { value: "2,000+", label: "Records handled" },
    ],
    stack: ["React 18", "TypeScript", "Azure DevOps", "Azure Pipelines", "Performance Profiling"],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-14 md:py-20 w-full">
      {/* Anchor alias to preserve external links */}
      <span id="case-studies" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Production multi-agent systems, real-time event streaming pipelines, and frontend architecture at Accenture.
            </p>
          </div>
        </ScrollReveal>

        {/* Stacked cards with horizontal metrics row (fits ~1 desktop screen) */}
        <div className="space-y-4">
          {SELECTED_CASES.map((item, index) => (
            <ScrollReveal key={item.slug} delay={index * 60}>
              <article
                data-ui="case-card"
                className="group p-5 sm:p-6 rounded-xl bg-[#0c101a] border border-white/10 hover:border-slate-700 transition-colors"
              >
                {/* Meta line: Role · Dates */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>{item.role}</span>
                  <span className="text-slate-600">·</span>
                  <span>{item.dates}</span>
                </div>

                {/* Title: Pure white by default, accent on hover/focus */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 group-focus-within:text-cyan-400 transition-colors mt-2 mb-2">
                  <Link href={`/work/${item.slug}`} className="text-white hover:text-cyan-400 focus:text-cyan-400 transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-4">
                  {item.summary}
                </p>

                {/* Horizontal row below summary: Exactly 2 metrics + Stack + Link */}
                <div data-ui="card-metrics" className="pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-8">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-wrap gap-1.5">
                      {item.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-300 bg-slate-900/80 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5 cursor-pointer shrink-0"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
