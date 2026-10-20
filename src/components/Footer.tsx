"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Terminal, Heart, Clock } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">
                {PERSONAL_INFO.name} — Professional Services
              </span>
              <span className="text-slate-500 text-[11px]">
                Senior Full-Stack & Agentic AI Specialist
              </span>
            </div>
          </div>

          {/* Center: Live Time in Noida, India */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Noida, India (IST):</span>
            <span className="text-cyan-400 font-bold">{time || "14:45 PM"}</span>
          </div>

          {/* Right: Back to top & copyright */}
          <div className="flex items-center gap-4">
            <a
              href="/Anshul_Singh_Resume.pdf"
              download="Anshul_Singh_Resume.pdf"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Download Resume (PDF)
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
