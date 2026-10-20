"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { downloadResumeFile } from "@/utils/downloadResume";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight, Download, Copy, Check } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-14 md:py-20 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Context, and Direct Actions */}
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get in touch
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                Open to engineering roles and conversations about agentic AI and real-time systems.
              </p>

              {/* CTAs: Filled "Book a call" + Outline "Download CV" */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={PERSONAL_INFO.calCom}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Book a call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/api/download-resume"
                  download="Anshul_Singh_Resume.pdf"
                  onClick={(e) => downloadResumeFile(e)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-slate-200 bg-[#0c101a] hover:bg-[#111726] border border-white/10 hover:border-slate-600 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download CV</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Plain Contact Rows */}
          <div className="lg:col-span-6 space-y-3">
            <ScrollReveal delay={60}>
              <div data-ui="contact-list" className="p-5 sm:p-6 rounded-xl bg-[#0c101a] border border-white/10 space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Email</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-medium text-slate-200 hover:text-white transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">LinkedIn</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-200 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>anshul-singh03</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">GitHub</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-200 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>nshulsingh3</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Location</span>
                  <span className="font-medium text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
