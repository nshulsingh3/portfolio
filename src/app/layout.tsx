import type { Metadata, Viewport } from "next";
import { INLINE_STYLES } from "./inlineStyles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshul Singh | Elite Full-Stack & GenAI Engineer",
  description:
    "Senior Full-Stack & Agentic AI Specialist. 5+ years architecting enterprise Agentic AI workflows, real-time event-driven architectures, and high-performance modern web platforms.",
  keywords: [
    "Anshul Singh",
    "Agentic AI Engineer",
    "Full-Stack Developer",
    "GenAI Architect",
    "LangGraph",
    "Google ADK",
    "React 19",
    "Next.js",
    "WebSockets",
    "TailwindCSS",
    "Core Web Vitals",
  ],
  authors: [{ name: "Anshul Singh", url: "https://github.com/nshulsingh3" }],
  openGraph: {
    title: "Anshul Singh | Elite Full-Stack & GenAI Engineer",
    description:
      "Enterprise Agentic AI workflows, real-time event-driven systems, and high-performance full-stack web architectures.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b11",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <head>
        <style
          id="portfolio-critical-css"
          dangerouslySetInnerHTML={{ __html: INLINE_STYLES }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#e2e8f0] selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
