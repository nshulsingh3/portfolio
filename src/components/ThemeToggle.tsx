"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`w-8 h-8 rounded-md flex items-center justify-center border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-colors cursor-pointer ${className}`}
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-4 h-4 text-cyan-400" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" />
        )
      ) : (
        <span className="w-4 h-4" />
      )}
    </button>
  );
}
