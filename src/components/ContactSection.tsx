"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Scheduling & Contact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Schedule a Consultation
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ready to build high-performance Agentic AI systems, optimize Core Web Vitals, or accelerate
              your product development? Book a dedicated strategy session directly on my calendar.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero Cal.com Booking Card */}
        <ScrollReveal delay={80} distance={24}>
          <div className="rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#0a0f1d] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl shadow-cyan-950/30 relative overflow-hidden mb-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real-Time Calendar Synced</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>30 Minutes</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Architecture & Advisory Call
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    A high-impact 1-on-1 technical discussion to evaluate your requirements, design
                    agentic workflows, audit performance bottlenecks, and outline a concrete execution roadmap.
                  </p>
                </div>

                {/* What We Cover */}
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    What we'll cover in this session:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Technical feasibility & multi-agent architecture (LangGraph / ADK / WebSockets)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Performance audit scope & Core Web Vitals optimization targets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Sprint timeline, milestones, and engagement models</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Action Column */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20">
                  <Calendar className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-sm font-bold text-white block">Pick a Date & Time</span>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Hosted seamlessly via Cal.com
                  </span>
                </div>

                <a
                  href={PERSONAL_INFO.calCom}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 cursor-pointer"
                >
                  <span>Book Call on Cal.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-slate-400 font-mono">
                  Direct calendar invite dispatched immediately upon booking
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Direct Channels Cards (Email, Phone, Socials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Card */}
          <ScrollReveal delay={120} distance={18} className="h-full">
            <div className="p-5 rounded-2xl bg-[#0c101c] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 h-full">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 border border-slate-700 transition-colors cursor-pointer text-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors truncate block mt-0.5"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Phone Card */}
          <ScrollReveal delay={160} distance={18} className="h-full">
            <div className="p-5 rounded-2xl bg-[#0c101c] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 h-full">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 border border-slate-700 transition-colors cursor-pointer text-xs"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors block mt-0.5"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Social Profiles Card */}
          <ScrollReveal delay={200} distance={18} className="h-full">
            <div className="p-5 rounded-2xl bg-[#0c101c] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 h-full">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-violet-950/80 border border-violet-800/40 flex items-center justify-center text-violet-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-slate-300">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-200" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
