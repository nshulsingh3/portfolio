"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { downloadResumeFile } from "@/utils/downloadResume";
import { ArrowUp, Download } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer data-ui="footer" className="py-8 md:py-10 border-t border-white/10 bg-[#07090e] text-xs text-slate-400 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Name and Copyright */}
        <div className="flex items-center gap-2 text-slate-400 text-center sm:text-left">
          <span className="font-medium text-slate-200">{PERSONAL_INFO.name}</span>
          <span>·</span>
          <span>© {currentYear}</span>
        </div>

        {/* Right: Download Resume & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="/api/download-resume"
            download="Anshul_Singh_Resume.pdf"
            onClick={(e) => downloadResumeFile(e)}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Download resume</span>
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
