import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES, PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Anshul Singh",
  description:
    "Architecture, implementation and advisory across five areas I've shipped in production.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 dark:bg-[#07090e] text-slate-800 dark:text-slate-100 flex flex-col w-full max-w-[100vw] overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors">
      <Navbar />

      <div className="pt-28 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-sky-700 dark:text-cyan-400" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Page Header */}
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering & Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Architecture, implementation and advisory across five areas I've shipped in production.
            </p>
          </header>

          {/* 5 Service Rows */}
          <div className="space-y-6">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                data-ui="service-row"
                className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-5"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Key Deliverables
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-700 dark:bg-cyan-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Primary Tools & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* One "Book a call" CTA at the bottom */}
          <section
            data-ui="services-cta"
            className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Ready to scope your engineering requirements?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Schedule a 30-minute introductory conversation to discuss technical fit, milestones, and deliverables.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={PERSONAL_INFO.calCom}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white dark:text-slate-950 bg-sky-700 hover:bg-sky-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
