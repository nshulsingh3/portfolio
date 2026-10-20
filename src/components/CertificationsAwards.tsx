"use client";

import React from "react";
import { CERTIFICATIONS, AWARDS } from "@/data/portfolioData";
import { Award, ShieldCheck, GraduationCap, CheckCircle2, Trophy, Star } from "lucide-react";

export default function CertificationsAwards() {
  return (
    <section id="credentials" className="py-24 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & Accolades
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Formally certified across Google Cloud, Anthropic Claude, and Microsoft ecosystems,
            complemented by multiple enterprise ACE awards for high-impact AI innovation.
          </p>
        </div>

        {/* Top Grid: Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#0c101c] border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Split: Awards & Recognition + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Awards Column */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Accenture ACE Awards & Recognitions</span>
            </h3>

            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div
                  key={award.id}
                  className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-950 border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {award.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                      {award.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {award.summary}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    Impact: {award.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Education</span>
            </h3>

            <div className="p-6 rounded-2xl bg-[#0c101c] border border-slate-800/90 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 block mb-1">
                  Aug 2017 – Aug 2021
                </span>
                <h4 className="text-lg font-bold text-white">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-sm text-slate-300 font-medium">
                  Computer Science and Engineering
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Galgotias University, Greater Noida, Uttar Pradesh
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-mono text-cyan-300">Foundation:</p>
                <p>Data Structures, Algorithms, Distributed Systems, Database Management, Software Engineering Principles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
