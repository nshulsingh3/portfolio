import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASE_STUDIES, CaseStudy, PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "lucide-react";

interface CaseRouteItem {
  slug: string;
  id: string;
  cleanRole: string;
  cleanPeriod: string;
  study: CaseStudy;
}

const CASE_ROUTES: CaseRouteItem[] = [
  {
    slug: "enterprise-copilot",
    id: "case-copilot-assistant",
    cleanRole: "Senior Analyst | Accenture",
    cleanPeriod: "Sept 2025 - Present",
    study: CASE_STUDIES[0],
  },
  {
    slug: "realtime-moderation",
    id: "case-realtime-moderation",
    cleanRole: "Analyst | Accenture",
    cleanPeriod: "Sept 2022 - Aug 2025",
    study: CASE_STUDIES[1],
  },
  {
    slug: "react-modernization",
    id: "case-react-modernization",
    cleanRole: "Associate | Accenture",
    cleanPeriod: "Aug 2021 - Aug 2022",
    study: CASE_STUDIES[2],
  },
];

function getCaseBySlug(slug: string): { current: CaseRouteItem; prev?: CaseRouteItem; next?: CaseRouteItem } | null {
  const index = CASE_ROUTES.findIndex((item) => item.slug === slug || item.id === slug);
  if (index === -1) return null;

  return {
    current: CASE_ROUTES[index],
    prev: index > 0 ? CASE_ROUTES[index - 1] : undefined,
    next: index < CASE_ROUTES.length - 1 ? CASE_ROUTES[index + 1] : undefined,
  };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  CASE_ROUTES.forEach((item) => {
    params.push({ slug: item.slug });
    params.push({ slug: item.id });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getCaseBySlug(slug);
  if (!result) return { title: "Case Study | Anshul Singh" };

  return {
    title: `${result.current.study.title} | Anshul Singh`,
    description: result.current.study.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getCaseBySlug(slug);

  if (!result) {
    notFound();
  }

  const { current, prev, next } = result;
  const { study, cleanRole, cleanPeriod } = current;

  return (
    <main className="min-h-[100dvh] bg-[#07090e] text-slate-100 flex flex-col w-full max-w-[100vw] overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <article className="pt-28 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Header Block */}
          <header className="space-y-4">
            {/* Breadcrumb: Senior Analyst | Accenture · Sept 2025 - Present */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>{cleanRole}</span>
              <span className="text-slate-600">·</span>
              <span>{cleanPeriod}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl pt-2">
              {study.overview}
            </p>
          </header>

          {/* Key Metrics Strip */}
          <section data-ui="metrics" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-xl bg-[#0c101a] border border-white/10"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Challenges */}
          <section className="space-y-4 pt-4 border-t border-white/10" data-ui="section">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Challenges
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {study.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What I built */}
          <section className="space-y-4 pt-4 border-t border-white/10" data-ui="section">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What I built
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {study.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section className="space-y-4 pt-4 border-t border-white/10" data-ui="section">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Impact
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {study.results.map((resultItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{resultItem}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="space-y-4 pt-4 border-t border-white/10" data-ui="section">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-200 bg-[#0c101a] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Compact Closing Row */}
          <section data-ui="closing-cta" className="p-6 rounded-xl bg-[#0c101a] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">
                Looking for an engineer with production multi-agent and real-time experience?
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Open to conversations about engineering roles.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/api/download-resume"
                download="Anshul_Singh_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
              <a
                href={PERSONAL_INFO.calCom}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-slate-200 bg-[#0c101a] hover:bg-[#111726] border border-white/10 hover:border-slate-600 transition-colors cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </section>

          {/* Prev / Next Pagination */}
          <nav className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4" data-ui="pagination">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="flex flex-col items-start p-4 rounded-xl bg-[#0c101a] border border-white/10 hover:border-slate-700 transition-colors group flex-1"
              >
                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-cyan-400">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Case</span>
                </span>
                <span className="text-sm font-semibold text-white tracking-tight mt-1 line-clamp-1">
                  {prev.study.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="flex flex-col items-end p-4 rounded-xl bg-[#0c101a] border border-white/10 hover:border-slate-700 transition-colors group flex-1 text-right"
              >
                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-cyan-400">
                  <span>Next Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-semibold text-white tracking-tight mt-1 line-clamp-1">
                  {next.study.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  );
}
