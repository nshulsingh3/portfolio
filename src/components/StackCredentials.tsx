"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const STACK_GROUPS = [
  {
    category: "AI & Agents",
    tools: ["Microsoft Agent Framework", "Azure AI Foundry", "LangGraph", "RAG", "Python"],
  },
  {
    category: "Frontend Architecture",
    tools: ["TypeScript", "React 19", "Next.js", "Redux Toolkit", "TailwindCSS"],
  },
  {
    category: "Backend & Real-Time",
    tools: ["Node.js", "Express", "FastAPI", "Python", "WebSockets"],
  },
  {
    category: "Cloud & DevOps",
    tools: ["Azure DevOps", "Azure Pipelines", "Git", "GitHub Copilot", "Docker"],
  },
];

const CERTIFICATIONS = [
  { name: "Google Generative AI Leader", issuer: "Google Cloud" },
  { name: "Google Cloud Digital Leader", issuer: "Google Cloud" },
  { name: "Claude Certified Architect - Foundations", issuer: "Anthropic" },
  { name: "GitHub Copilot Certified", issuer: "GitHub" },
];

const AWARDS = [
  { name: "Growth Catalyst ACE Award", date: "Jun 2025" },
  { name: "Extra Mile ACE Award", date: "Mar 2025" },
  { name: "Sparkling Star Award", date: "Dec 2023" },
];

export default function StackCredentials() {
  return (
    <section id="credentials" className="relative py-14 md:py-20 w-full">
      {/* Anchor alias to preserve external links */}
      <span id="skills" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Stack (4 groups, plain text lists, max 5 each) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Stack
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Production tools and technologies used across enterprise deployments.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {STACK_GROUPS.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {group.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {group.tools.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Credentials & Awards & Education */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delay={60}>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Credentials
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Industry certifications, Accenture delivery awards, and education.
                </p>
              </div>

              <div className="space-y-5 pt-4">
                {/* 4 Industry Certifications */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Certifications
                  </h3>
                  <div className="space-y-1.5">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm"
                      >
                        <span className="font-medium text-slate-800 dark:text-slate-200">{cert.name}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs shrink-0">{cert.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 Accenture Awards */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Accenture Awards
                  </h3>
                  <div className="space-y-1.5">
                    {AWARDS.map((award) => (
                      <div
                        key={award.name}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm"
                      >
                        <span className="font-medium text-slate-800 dark:text-slate-200">{award.name}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs shrink-0">{award.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education (One Line) */}
                <div className="space-y-1 pt-1">
                  <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Education
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">B.Tech in Computer Science & Engineering</span> · Galgotias University (2017 - 2021)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
