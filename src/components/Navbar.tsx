"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, Menu, X, ArrowUpRight, Download } from "lucide-react";
import { downloadResumeFile } from "@/utils/downloadResume";

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenWaitlist?: () => void;
}

export default function Navbar({ onOpenResume, onOpenWaitlist }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (hash: string) => (!pathname || pathname === "/" ? hash : `/${hash}`);

  const navLinks = [
    { label: "Work", href: getHref("#work") },
    { label: "Capabilities", href: getHref("#capabilities") },
    { label: "Credentials", href: getHref("#credentials") },
    { label: "Contact", href: getHref("#contact") },
  ];

  return (
    <>
      <header
        data-ui="navbar"
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur transition-colors duration-200 ${/* taste-skill-ignore */ ""} ${
          scrolled
            ? "bg-[#07090e]/95 border-b border-white/10"
            : "bg-[#07090e]/80 border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Authoritative Brand Mark (left-aligned with headline) */}
          <a href={getHref("#top")} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Center: Clean Text Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Direct Actions (Secondary outline button + Ghost Resume link) */}
          <div className="flex items-center gap-4">
            <a
              href="/api/download-resume"
              download="Anshul_Singh_Resume.pdf"
              onClick={(e) => downloadResumeFile(e)}
              className="hidden sm:inline-flex items-center text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Download Anshul Singh Resume (PDF)"
            >
              Resume
            </a>

            <a
              href={PERSONAL_INFO.calCom}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-200 bg-[#0c101a] hover:bg-[#111726] border border-white/10 hover:border-slate-600 transition-colors cursor-pointer"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (When Open) */}
        {mobileMenuOpen && (
          <div data-ui="mobile-menu" className="md:hidden border-t border-white/10 bg-[#07090e] px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/api/download-resume"
                download="Anshul_Singh_Resume.pdf"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  downloadResumeFile(e);
                }}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href={PERSONAL_INFO.calCom}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-slate-200 bg-[#0c101a] hover:bg-[#111726] border border-white/10 hover:border-slate-600 transition-colors"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
