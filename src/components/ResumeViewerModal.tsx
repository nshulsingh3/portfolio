"use client";

import React, { useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { X, Printer, Download, ExternalLink } from "lucide-react";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl bg-[#0c101c] border border-slate-700 shadow-2xl flex flex-col text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">Curriculum Vitae</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
              Anshul Singh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Anshul_Singh_Resume.pdf"
              download="Anshul_Singh_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-sm shadow-cyan-500/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content (Clean Resume Document) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 print:p-0 print:text-black">
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
              ANSHUL SINGH
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 font-mono">
              <span>Noida, UP</span>
              <span>•</span>
              <a href="tel:8630448790" className="hover:underline">8630448790</a>
              <span>•</span>
              <a href="mailto:reachouttoanshul@gmail.com" className="hover:underline">reachouttoanshul@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/anshul-singh03" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/anshul-singh03
              </a>
              <span>•</span>
              <a href="https://github.com/nshulsingh3" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/nshulsingh3
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Full-stack developer with 5 years of experience building scalable Agentic AI and GenAI-integrated applications,
              including RAG pipelines and real-time event-driven systems. Proven record in performance optimization (Core
              Web Vitals), reducing infrastructure costs, optimizing API performance, and delivering user-facing features
              adopted by thousands of enterprise users. Recognized with awards for innovation and consistent delivery.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <div>
                <span className="font-bold">Frontend: </span>
                Javascript, Typescript, ReactJS, Redux Toolkit, RTK Query, MaterialUI, TailwindCSS, Shadcn
              </div>
              <div>
                <span className="font-bold">Backend: </span>
                NodeJs, ExpressJS, FastAPI, Python, NextJS, Postman, PostgreSQL, MongoDB, Supabase
              </div>
              <div>
                <span className="font-bold">AI: </span>
                Agentic AI Workflows, LangGraph, Google ADK, RAG Pipeline, Microsoft Agent Framework, CrewAI
              </div>
              <div>
                <span className="font-bold">Tools: </span>
                Kiro, Cursor, Git, Azure DevOps, GitHub Copilot, VS Code, ChatGPT, Claude, Gemini
              </div>
              <div>
                <span className="font-bold">Practices: </span>
                CI/CD, Performance Optimization, Design Systems, Agile Methodologies
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Work Experience
            </h2>

            {/* Senior Analyst */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-bold text-slate-950">Senior Analyst</span>
                  <span className="text-xs text-slate-700"> | Accenture</span>
                </div>
                <div className="text-xs font-mono text-slate-600">
                  Sept 2025 – Present | Noida, Uttar Pradesh
                </div>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                <li>
                  Engineered a Copilot-style AI assistant (frontend heavy) using TypeScript, TailwindCSS, and shadcn/ui with WebSocket streaming, conversational state, and scalable GenAI/agentic workflows.
                </li>
                <li>
                  Facilitated teams to assess complex AI workflows by building a ReactFlow + Framer–based animation viewer and leveraging Kiro for orchestrating agentic workflows.
                </li>
                <li>
                  Automated invoice handling for 1,000+ documents per month by extending BlockNote with custom clause insertion, contributing to a scalable design system as part of a modular design system architecture.
                </li>
                <li>
                  Improved cross-project consistency and efficiency for 3,000+ users by delivering a unified document viewer supporting images, DOCX, and PDFs.
                </li>
              </ul>
            </div>

            {/* Analyst */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-bold text-slate-950">Analyst</span>
                  <span className="text-xs text-slate-700"> | Accenture</span>
                </div>
                <div className="text-xs font-mono text-slate-600">
                  Sept 2022 – Aug 2025 | Noida, Uttar Pradesh
                </div>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                <li>
                  Pioneered real-time visibility for AI processing pipelines by introducing a unified WebSocket notification system across 5+ services, implementing WebSocket architecture and enabling real-time event-driven systems.
                </li>
                <li>
                  Enhanced brand identity by rolling out responsive light/dark theming with Material-UI, adopted by 5+ clients.
                </li>
                <li>
                  Reduced API traffic by 50% migrating data fetching to RTK Query, improving performance optimization and Core Web Vitals metrics.
                </li>
                <li>
                  Empowered 500+ content moderators with a custom video player featuring advanced seek controls and external event handlers, streamlining review of 10,000+ videos.
                </li>
                <li>
                  Enabled creation of 50+ reusable AI moderation rules via a JSONLogic-powered query builder, giving teams a flexible way to codify moderation logic without developer intervention.
                </li>
              </ul>
            </div>

            {/* Associate */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-bold text-slate-950">Associate</span>
                  <span className="text-xs text-slate-700"> | Accenture</span>
                </div>
                <div className="text-xs font-mono text-slate-600">
                  Aug 2021 – Aug 2022 | Gurugram, Haryana
                </div>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                <li>
                  Optimized application performance and stack stability by migrating core projects from React 16 to React 18.
                </li>
                <li>
                  Cut dashboard load times for 2,000+ records by unifying tag filtering and pagination logic.
                </li>
                <li>
                  Limited unnecessary UI re-renders by 80% through targeted refactoring, delivering smoother user experiences.
                </li>
                <li>
                  Accelerated deployments by 75% by leading cross-team debugging sessions and streamlining CI/CD pipelines (Azure Pipelines).
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <span className="font-bold text-slate-950">Galgotias University</span>
                <span className="text-slate-700"> — Bachelor of Technology in Computer Science</span>
              </div>
              <span className="font-mono text-slate-600">Aug 2017 – Aug 2021 | Greater Noida, UP</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Certifications
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div><span className="font-bold">Google:</span> Google Cloud Digital Leader, Google Generative AI Leader</div>
              <div><span className="font-bold">Microsoft:</span> AZ-900 Azure Fundamentals, PL-900 Power Apps Fundamentals, GitHub Copilot</div>
              <div><span className="font-bold">Anthropic:</span> Claude Certified Architect - Foundations</div>
            </div>
          </div>

          {/* Awards and Recognition */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1">
              Awards and Recognition
            </h2>
            <div className="text-xs text-slate-700 space-y-1.5">
              <div>
                <span className="font-bold text-slate-900">Growth Catalyst ACE Award (Jun 2025):</span> Recognized for driving measurable client impact by delivering innovative AI-led solutions and contributing to high-value growth initiatives across projects.
              </div>
              <div>
                <span className="font-bold text-slate-900">Extra Mile ACE Award (Mar 2025):</span> Awarded for consistently demonstrating agility and resilience, effectively prioritizing tasks, and ensuring timely delivery in fast-paced, high-pressure environments.
              </div>
              <div>
                <span className="font-bold text-slate-900">Sparkling Star Award (Dec 2023):</span> Honored for strong frontend expertise, solving complex technical challenges, and delivering high-quality, scalable solutions in React-based applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
