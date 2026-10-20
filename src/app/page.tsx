"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import UpcomingDemosSection from "@/components/UpcomingDemosSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import CertificationsAwards from "@/components/CertificationsAwards";
import EngagementProcess from "@/components/EngagementProcess";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeViewerModal from "@/components/ResumeViewerModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>(
    undefined
  );

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    // Smooth scroll to contact section
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col w-full max-w-[100vw] overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Quantitative Impact Statistics */}
      <StatsBar />

      {/* Core Professional Services */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Upcoming Real-time Demos Minimalist Cards */}
      <UpcomingDemosSection />

      {/* Enterprise Case Studies & Track Record */}
      <CaseStudiesSection />

      {/* Skills Matrix & Arsenal */}
      <SkillsMatrix />

      {/* Certifications & Awards */}
      <CertificationsAwards />

      {/* Engagement Process (How We Work) */}
      <EngagementProcess />

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
