"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StackCredentials from "@/components/StackCredentials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeViewerModal from "@/components/ResumeViewerModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-[100dvh] bg-slate-50 dark:bg-[#07090e] text-slate-800 dark:text-slate-100 flex flex-col w-full max-w-[100vw] overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Screen 1: Hero Section */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Screen 2: Selected Work (#work, alias #case-studies) */}
      <SelectedWork />

      {/* Screen 3: What I Build (#capabilities, alias #services, #upcoming-demos) */}
      <CapabilitiesSection />

      {/* Screen 4: Stack & Credentials (#credentials, alias #skills) */}
      <StackCredentials />

      {/* Contact & Direct Cal.com Scheduling */}
      <ContactSection />

      {/* Site Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
