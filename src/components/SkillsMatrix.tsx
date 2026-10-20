"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Search, Code2, Sparkles, Star } from "lucide-react";

export default function SkillsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => {
    if (selectedCategory !== "all" && cat.category !== selectedCategory) {
      return false;
    }
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Stack & AI Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Arsenal & Specializations
            </h2>
            <p className="text-sm text-slate-400">
              Battle-tested tools and frameworks utilized across 5 years of enterprise delivery.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search skill (e.g. LangGraph)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              selectedCategory === "all"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === cat.category
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-[#0c101c] border border-slate-800/80 hover:border-slate-700 transition-colors space-y-4"
            >
              <div>
                <h3 className="text-base font-bold text-white flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-xs font-mono text-cyan-400/80 font-normal">
                    {cat.skills.length} skills
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">{cat.description}</p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 border transition-all ${
                      skill.highlight
                        ? "bg-cyan-950/40 border-cyan-500/40 text-cyan-300 font-medium shadow-sm shadow-cyan-950"
                        : "bg-slate-900/80 border-slate-800 text-slate-300"
                    }`}
                  >
                    {skill.highlight && <Star className="w-3 h-3 text-cyan-400 fill-cyan-400/30" />}
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-slate-500 ml-1">
                      {skill.level === "Expert" ? "●" : "○"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
