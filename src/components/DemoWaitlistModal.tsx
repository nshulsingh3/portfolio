"use client";

import React, { useState, useEffect } from "react";
import { UPCOMING_DEMOS } from "@/data/portfolioData";
import { X, Sparkles, CheckCircle2, Ticket, Mail, Building, User, Clock } from "lucide-react";
import confetti from "canvas-confetti";

interface DemoWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDemoTitle?: string;
}

export default function DemoWaitlistModal({
  isOpen,
  onClose,
  defaultDemoTitle,
}: DemoWaitlistModalProps) {
  const [selectedDemo, setSelectedDemo] = useState<string>(
    defaultDemoTitle || UPCOMING_DEMOS[0].title
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (defaultDemoTitle) {
      setSelectedDemo(defaultDemoTitle);
    }
  }, [defaultDemoTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Generate simulated pass ID
    const generatedPass = `ALPHA-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedPass);
    setIsSubmitted(true);

    // Save to localStorage
    try {
      const waitlist = JSON.parse(localStorage.getItem("demo_waitlist") || "[]");
      waitlist.push({
        id: generatedPass,
        name,
        email,
        organization,
        demo: selectedDemo,
        notes,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("demo_waitlist", JSON.stringify(waitlist));
    } catch {
      // safe fallback
    }

    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#34d399"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0c101c] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Demo Sandbox Access</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request Early Access
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live browser sandboxes are finishing testing and will be deployed in the next 2-3 weeks.
                Join the early access list to receive an invite token and run live workloads on release day.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Demo Selection */}
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Select Demo Environment
                </label>
                <select
                  value={selectedDemo}
                  onChange={(e) => setSelectedDemo(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 focus:outline-none focus:border-cyan-400"
                >
                  {UPCOMING_DEMOS.map((d) => (
                    <option key={d.id} value={d.title}>
                      {d.title} ({d.estimatedLaunch})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* Company / Role */}
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Company / Project Name (Optional)
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp / Stealth AI Startup"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Specific requirements or questions */}
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Specific technical requirements or workload questions? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell me what you'd like to test (e.g. LangGraph tool calling latency, WebSocket stress testing...)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-950/40 cursor-pointer mt-2"
              >
                Reserve Priority Demo Access
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Zero spam. You will strictly receive an invitation link when the demo sandbox is live.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">You're On The Priority List!</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Thank you, <span className="text-white font-semibold">{name || "Engineer"}</span>.
                Your early access pass for <span className="text-cyan-300 font-semibold">{selectedDemo}</span> has been confirmed.
              </p>
            </div>

            {/* Simulated VIP Ticket Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-left font-mono space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <Ticket className="w-4 h-4" />
                  <span>ACCESS PASS</span>
                </span>
                <span className="text-emerald-400 font-bold">{ticketId}</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <div>Environment: {selectedDemo}</div>
                <div>Status: Queued for Day 1 Dispatch</div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target Deployment: Next 2-3 Weeks</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
