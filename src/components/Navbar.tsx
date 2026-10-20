"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, FileText, Menu, X, ArrowUpRight, Sparkles, Download } from "lucide-react";
import { downloadResumeFile } from "@/utils/downloadResume";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenWaitlist?: () => void;
}

export default function Navbar({ onOpenResume, onOpenWaitlist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focused 4 core links to eliminate clumsiness and visual noise on desktop
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Upcoming Demos", href: "#upcoming-demos", badge: "Soon" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Arsenal", href: "#skills" },
  ];

  return (
    <>
      {/* Top Viewport Progressive Fade & Blur Layer (fades out scrolling data under the header) */}
      <div
        className="fixed top-0 left-0 right-0 h-28 pointer-events-none z-40 transition-all duration-300"
        style={{
          background: "linear-gradient(to bottom, #07090e 0%, rgba(7, 9, 14, 0.9) 45%, rgba(7, 9, 14, 0.4) 75%, transparent 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      <header className="fixed top-3.5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 ${
            scrolled
              ? "bg-[#090d16]/98 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl shadow-black"
              : "bg-[#0b101c]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80"
          }`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "9999px",
          }}
        >
        {/* Left: Minimalist Brand Identity */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-sm shadow-cyan-500/20">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          </div>
          <span className="font-bold text-white text-xs sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Center: Streamlined Desktop Nav Links (Clean 4 items) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right: Availability Badge & Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Compact Availability Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>

          {/* Quick Resume Download Link */}
          <a
            href="/api/download-resume"
            download="Anshul_Singh_Resume.pdf"
            onClick={(e) => downloadResumeFile(e)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all cursor-pointer shadow-sm"
            title="Download Anshul Singh Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-sm shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700/80"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (When Open) */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 rounded-2xl bg-[#090d16]/98 backdrop-blur-2xl border border-cyan-500/30 p-4 space-y-3 shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Sprints & Advisory</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
            >
              Credentials & Awards
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
            >
              Delivery Process
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/api/download-resume"
              download="Anshul_Singh_Resume.pdf"
              onClick={(e) => {
                setMobileMenuOpen(false);
                downloadResumeFile(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
