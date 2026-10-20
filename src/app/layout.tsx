import type { Metadata, Viewport } from "next";
import { INLINE_STYLES } from "./inlineStyles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshul Singh | Senior Full-Stack & Agentic AI Engineer",
  description:
    "Senior Full-Stack & Agentic AI Engineer. 5 years at Accenture building multi-agent systems, real-time WebSocket pipelines and enterprise React apps.",
  keywords: [
    "Anshul Singh",
    "Agentic AI Engineer",
    "Full-Stack Developer",
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
    title: "Anshul Singh | Senior Full-Stack & Agentic AI Engineer",
    description:
      "5 years at Accenture building multi-agent systems, real-time WebSocket pipelines and enterprise React apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Singh | Senior Full-Stack & Agentic AI Engineer",
    description:
      "5 years at Accenture building multi-agent systems, real-time WebSocket pipelines and enterprise React apps.",
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
    <html lang="en" className="dark h-full antialiased scroll-smooth w-full max-w-[100vw] overflow-x-hidden">
      <head>
        <style
          id="portfolio-critical-css"
          dangerouslySetInnerHTML={{ __html: INLINE_STYLES }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#e2e8f0] selection:bg-cyan-500/30 selection:text-cyan-200 w-full max-w-[100vw] overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}
