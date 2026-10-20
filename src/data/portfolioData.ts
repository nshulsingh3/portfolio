export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string;
}

export interface UpcomingDemo {
  id: string;
  title: string;
  status: "In Development" | "Beta Testing" | "Final Polish";
  estimatedLaunch: string;
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  previewType: "agentic" | "websocket" | "rules" | "editor";
}

export interface CaseStudy {
  id: string;
  client: string;
  role: string;
  period: string;
  title: string;
  category: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenges: string[];
  architecture: string[];
  results: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: "Expert" | "Advanced" | "Proficient"; highlight?: boolean }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: "Google" | "Anthropic" | "Microsoft";
  date: string;
  credentialUrl?: string;
  badgeColor: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  impact: string;
}

export const PERSONAL_INFO = {
  name: "Anshul Singh",
  title: "Senior Full-Stack & Agentic AI Engineer",
  subtitle: "Specializing in Agentic AI Workflows, Real-Time Event-Driven Systems & Core Web Vitals Optimization",
  location: "Noida, Uttar Pradesh, India",
  email: "reachouttoanshul@gmail.com",
  github: "https://github.com/nshulsingh3",
  linkedin: "https://linkedin.com/in/anshul-singh03",
  calCom: "https://cal.com/anshul-singh-tqhxbm",
  availabilityStatus: "Available for Q4/Q1 Strategic Engagements & Advisory",
  yearsOfExperience: "5+",
  bio: "Full-stack engineer with 5 years of experience delivering scalable Agentic AI and GenAI-integrated applications, enterprise RAG pipelines, and sub-second real-time event-driven systems. Specializing in taking ambitious AI concepts from prototype to resilient, production-grade enterprise software with measurable performance gains.",
};

export const IMPACT_METRICS = [
  { value: "5+", label: "Years Experience", description: "In full-stack engineering & AI systems" },
  { value: "50%", label: "API Traffic Cut", description: "Via intelligent RTK Query caching architecture" },
  { value: "80%", label: "Render Drop", description: "Unnecessary UI re-render drop via targeted refactoring" },
  { value: "3,000+", label: "Enterprise Users", description: "Supported on custom unified document viewers" },
  { value: "1,000+", label: "Monthly Invoices", description: "Automated via modular BlockNote clause engine" },
  { value: "75%", label: "CI/CD Speedup", description: "Deployment cycle acceleration with Azure Pipelines" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI & GenAI Systems",
    badge: "Enterprise AI",
    tagline: "Autonomous multi-agent workflows, production RAG pipelines, and conversational copilots.",
    description:
      "Autonomous multi-agent workflows and retrieval-augmented generation built with Microsoft Agent Framework, Azure AI Foundry, and LangGraph. Implementations include structured tool calling, state persistence, and Python backend services.",
    deliverables: [
      "Multi-agent task orchestration & tool calling graphs",
      "Low-latency streaming copilot UIs (WebSockets / SSE)",
      "RAG architectures with hybrid vector search",
      "Prompt engineering, evaluation harnesses & guardrails",
    ],
    techStack: ["Microsoft Agent Framework", "Azure AI Foundry", "LangGraph", "RAG", "Python"],
    idealFor: "Founders and enterprise product teams building domain-specific AI copilots, automated assistants, or intelligent multi-step agents.",
  },
  {
    id: "realtime-systems",
    title: "Real-Time Event-Driven Architectures",
    badge: "Sub-Second Latency",
    tagline: "Bi-directional WebSocket pipelines, streaming state sync, and live telemetry feeds.",
    description:
      "Bidirectional WebSocket pipelines connecting distributed microservices to reactive client applications. Includes reconnection state reconciliation and event broadcasting across multiple services with no dropped messages in production.",
    deliverables: [
      "Unified WebSocket broadcast & subscription architecture",
      "Optimistic UI updates & graceful reconnection logic",
      "Real-time moderation feeds & live analytics dashboards",
      "Distributed event bus integration with state reconciliation",
    ],
    techStack: ["WebSockets", "NodeJS", "ExpressJS", "FastAPI", "PostgreSQL", "Redis", "TypeScript"],
    idealFor: "Applications requiring live collaborative editing, real-time telemetry, instant notifications, or live streaming video/audio interaction.",
  },
  {
    id: "performance-optimization",
    title: "Core Web Vitals & Performance Audits",
    badge: "Sub-Second Speed",
    tagline: "Reducing bottlenecks, reducing API roundtrips, and maximizing Lighthouse scores.",
    description:
      "Frontend performance profiling and data layer optimization using Chrome DevTools and Lighthouse. Reduces redundant network requests through normalized RTK Query caching and cuts UI re-renders with React concurrency.",
    deliverables: [
      "Comprehensive Core Web Vitals audit (LCP, INP, CLS)",
      "Data layer migration to RTK Query / TanStack Query with normalized cache",
      "React 18/19 concurrency profiling and memoization refactor",
      "Bundle size slicing, code splitting, and asset compression",
    ],
    techStack: ["React 19", "RTK Query", "Redux Toolkit", "Next.js", "Chrome DevTools", "Lighthouse"],
    idealFor: "Scale-ups with complex SaaS dashboards experiencing lag, excessive API costs, or deteriorating Google search rankings.",
  },
  {
    id: "custom-tools-design-systems",
    title: "Modular Design Systems & Rich Editors",
    badge: "Frontend Craft",
    tagline: "Custom block-based text editors, visual node graphs, and bespoke media players.",
    description:
      "Custom UI engineering for complex workflows, including block-based document editors, node visualizers, and frame-accurate video players. Built with BlockNote, ReactFlow, and accessible component architectures tailored to enterprise operations.",
    deliverables: [
      "Custom block-based WYSIWYG editors with clause injection",
      "Interactive node-based workflow visualizers (ReactFlow + Framer)",
      "Accessible multi-theme design systems (TailwindCSS, Shadcn, MUI)",
      "Video and media players with frame-accurate seek controls",
    ],
    techStack: ["BlockNote", "ReactFlow", "Framer Motion", "TailwindCSS", "Shadcn/ui", "Material-UI"],
    idealFor: "Companies needing specialized internal tools, workflow orchestrators, or signature consumer-facing interaction design.",
  },
  {
    id: "modernization-advisory",
    title: "Stack Modernization & CI/CD Advisory",
    badge: "Scale & Reliability",
    tagline: "Upgrading legacy React apps, accelerating deployments, and establishing dev standards.",
    description:
      "Framework upgrades and deployment pipeline automation for legacy codebases. Upgraded enterprise applications from React 16 to 18 while establishing automated CI/CD pipelines with Azure DevOps and GitHub Actions.",
    deliverables: [
      "React 16/17 to 18/19 step-by-step migration plans",
      "Automated CI/CD pipeline configuration (Azure DevOps / GitHub Actions)",
      "TypeScript strict mode conversion & code quality gating",
      "Architectural documentation and engineering team mentorship",
    ],
    techStack: ["Azure DevOps", "GitHub Actions", "Docker", "TypeScript", "ESLint", "Jest"],
    idealFor: "Engineering leadership looking to de-risk technical debt, speed up developer velocity, and modernize their production stack.",
  },
];

export const UPCOMING_DEMOS: UpcomingDemo[] = [
  {
    id: "demo-agentic-studio",
    title: "Agentic Workflow Studio & Thought Inspector",
    status: "Beta Testing",
    estimatedLaunch: "Rollout in 2 weeks",
    badge: "LangGraph + ReactFlow",
    tagline: "Visual real-time trace of autonomous multi-agent reasoning, tool execution, and state handoffs.",
    problem:
      "AI agents operate as black boxes, making it notoriously difficult for enterprise users and developers to inspect intermediate thoughts, failed tool calls, or circular reasoning.",
    solution:
      "An interactive node-based visual canvas powered by ReactFlow and Framer Motion that renders live agent state graphs, step-by-step chain of thought, and live streaming output with rewind/inspect capabilities.",
    architectureHighlights: [
      "Dynamic node state updates streaming via WebSocket connection",
      "Interactive time-travel replay of tool execution payloads",
      "Supports LangGraph, Google ADK, and CrewAI state serialization",
      "Low-overhead canvas rendering with virtualized node viewport",
    ],
    techStack: ["ReactFlow", "Framer Motion", "TypeScript", "LangGraph", "FastAPI", "WebSockets"],
    previewType: "agentic",
  },
  {
    id: "demo-websocket-telemetry",
    title: "Sub-Second Event & Telemetry Streamer",
    status: "In Development",
    estimatedLaunch: "Rollout in 3 weeks",
    badge: "Event-Driven WebSocket",
    tagline: "Live stress-testable telemetry engine streaming 10,000+ real-time events across distributed services.",
    problem:
      "Enterprise notification and telemetry architectures often degrade under spike traffic, causing desynchronization between backends and user dashboards.",
    solution:
      "A simulated multi-service WebSocket architecture dashboard allowing visitors to trigger live simulated service events, toggle network throttling, and monitor message delivery latencies in real time.",
    architectureHighlights: [
      "Sub-20ms message delivery simulation with heartbeat keep-alives",
      "Automatic failover and optimistic client-side state reconciliation",
      "Unified event protocol adopted across multi-service backends",
      "Interactive latency jitter and throughput benchmark displays",
    ],
    techStack: ["NodeJS", "WebSockets", "RTK Query", "TailwindCSS", "Next.js"],
    previewType: "websocket",
  },
  {
    id: "demo-jsonlogic-engine",
    title: "Zero-Code AI Moderation Rules Engine",
    status: "Final Polish",
    estimatedLaunch: "Rollout in 1-2 weeks",
    badge: "JSONLogic + Dynamic AST",
    tagline: "Interactive visual predicate builder generating serializable rules for automated content moderation.",
    problem:
      "Content moderation and business logic teams are traditionally bottlenecked waiting for software engineers to hardcode rules in backend codebases.",
    solution:
      "An intuitive visual query builder that lets non-technical operators define composite boolean rules (AND/OR, thresholds, regex, metadata flags) compiled to clean, portable JSONLogic ASTs.",
    architectureHighlights: [
      "Instant real-time AST evaluation against sample JSON payloads",
      "Zero-latency client-side validation with dynamic condition nesting",
      "Exportable rule definitions ready for microservice ingestion",
      "Pre-loaded with 50+ enterprise moderation scenarios",
    ],
    techStack: ["JSONLogic", "React", "TypeScript", "TailwindCSS", "Zod"],
    previewType: "rules",
  },
  {
    id: "demo-blocknote-clause",
    title: "Smart Clause Studio & Document Editor",
    status: "In Development",
    estimatedLaunch: "Rollout in 3 weeks",
    badge: "BlockNote + Custom Schema",
    tagline: "Extensible block editor with automated contract clause insertion and multi-format document preview.",
    problem:
      "Manual contract drafting and invoice validation are prone to compliance errors and inconsistent formatting across distributed enterprise teams.",
    solution:
      "A customized BlockNote editor featuring slash commands for smart clause insertion, real-time syntax checking, and unified multi-format preview (PDF, DOCX, and images).",
    architectureHighlights: [
      "Custom block extensions for variable-driven legal clauses",
      "High-speed client-side rendering for 1,000+ page documents",
      "Unified multi-format rendering pipeline",
      "Export ready for enterprise ERP and accounting APIs",
    ],
    techStack: ["BlockNote", "ProseMirror", "TypeScript", "TailwindCSS", "PDF.js"],
    previewType: "editor",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-copilot-assistant",
    client: "Enterprise AI Initiative (Accenture)",
    role: "Senior Analyst | Lead Frontend & Agentic Systems",
    period: "Sept 2025 - Present",
    title: "Enterprise Copilot AI Assistant & Visual Workflow Orchestration",
    category: "Agentic AI / Frontend Architecture",
    metrics: [
      { label: "Target Users", value: "3,000+" },
      { label: "Monthly Invoices", value: "1,000+" },
      { label: "Streaming Latency", value: "<150ms" },
    ],
    overview:
      "Engineered a Copilot-style AI assistant and interactive agent orchestration viewer for enterprise operations, enabling teams to automate document handling and visually debug complex multi-step AI workflows.",
    challenges: [
      "Maintaining state synchronization across long-running multi-agent reasoning steps without UI freezes.",
      "Providing intuitive visibility into complex AI workflows for non-technical enterprise stakeholders.",
      "Ensuring consistent document editing and custom clause injection without breaking document schemas.",
    ],
    architecture: [
      "Engineered frontend streaming architecture using TypeScript, TailwindCSS, and shadcn/ui over low-latency WebSockets.",
      "Constructed a ReactFlow + Framer Motion animation viewer to visualize dynamic agentic workflows and tool invocations.",
      "Extended BlockNote editor with custom clause insertion, automating invoice handling for 1,000+ monthly documents.",
      "Delivered a unified document viewer supporting DOCX, PDF, and high-resolution images built for 3,000+ target users.",
    ],
    results: [
      "Achieved sub-150ms initial token streaming response times for enterprise copilot sessions.",
      "Reduced drafting errors on 1,000+ monthly invoices through standardized clause templates.",
      "Adopted across multiple internal departments as the reference architecture.",
    ],
    techStack: ["TypeScript", "TailwindCSS", "shadcn/ui", "WebSockets", "ReactFlow", "Framer Motion", "BlockNote", "Kiro"],
  },
  {
    id: "case-realtime-moderation",
    client: "Global Content Moderation Platform (Accenture)",
    role: "Analyst | Full-Stack & Real-Time Lead",
    period: "Sept 2022 - Aug 2025",
    title: "Multi-Service WebSocket Pipeline & AI Moderation Suite",
    category: "Real-Time Systems / Performance",
    metrics: [
      { label: "API Traffic Cut", value: "50%" },
      { label: "Moderator Team", value: "500+" },
      { label: "Videos Streamlined", value: "10,000+" },
      { label: "Microservices Synced", value: "5+" },
    ],
    overview:
      "Architected a unified real-time event pipeline and content moderation suite, allowing 500+ moderators to review tens of thousands of video assets with custom seek controls and dynamic AI moderation rule codification.",
    challenges: [
      "Siloed notifications across 5+ backend microservices resulting in polling overhead and stale user states.",
      "Content moderators struggling with generic media players lacking precision frame-accurate seeking and event hooks.",
      "Hardcoded moderation logic requiring full software deployment cycles for simple threshold updates.",
    ],
    architecture: [
      "Pioneered a unified WebSocket notification system across 5+ services, implementing bidirectional event streaming.",
      "Migrated global data fetching layer to RTK Query with normalized caching, cutting API traffic by 50% and boosting Core Web Vitals.",
      "Built a custom video player with advanced seek controls and external event handlers for 500+ moderators reviewing 10,000+ videos.",
      "Implemented a JSONLogic-powered query builder enabling non-engineers to create 50+ reusable AI moderation rules.",
    ],
    results: [
      "Slashed redundant server polling by 50%, saving infrastructure costs and drastically reducing database query pressure.",
      "Accelerated video review throughput by over 35% with specialized keyboard-driven seek controls.",
      "Rolled out responsive light/dark theming with Material-UI adopted across 5+ client enterprise accounts.",
    ],
    techStack: ["React", "TypeScript", "WebSockets", "RTK Query", "Redux Toolkit", "Material-UI", "JSONLogic"],
  },
  {
    id: "case-react-modernization",
    client: "Core Platform Modernization (Accenture)",
    role: "Associate | Frontend & DevOps Specialist",
    period: "Aug 2021 - Aug 2022",
    title: "Enterprise React 18 Migration & Deployment Pipeline Optimization",
    category: "Architecture & DevOps",
    metrics: [
      { label: "UI re-renders cut", value: "80%" },
      { label: "Deploy Time Cut", value: "75%" },
      { label: "Records Handled", value: "2,000+" },
    ],
    overview:
      "Led technical execution for migrating core enterprise applications from React 16 to React 18, reducing render bottlenecks and streamlining cross-team CI/CD pipelines.",
    challenges: [
      "Legacy React 16 codebase with deep prop drilling, cascading re-renders, and sluggish data table filtering.",
      "Fragmented pagination and tag filtering logic causing severe UI freezes when loading 2,000+ records.",
      "Unreliable, slow deployment cycles creating friction between development, QA, and production releases.",
    ],
    architecture: [
      "Orchestrated phased migration from React 16 to React 18, introducing concurrent features and automatic batching.",
      "Unified tag filtering and pagination logic, drastically reducing dashboard load times across heavy dataset views.",
      "Refactored component dependency trees and state stores, eliminating 80% of unnecessary UI re-renders.",
      "Streamlined Azure Pipelines CI/CD workflows and led cross-team debugging sessions, cutting deployment times by 75%.",
    ],
    results: [
      "Delivered silky-smooth 60fps scrolling and instant filtering across 2,000+ item enterprise dashboards.",
      "Reduced CI/CD build and deploy turnaround from 40+ minutes down to under 10 minutes.",
      "Awarded Sparkling Star Award for strong frontend expertise and high-quality, scalable solutions.",
    ],
    techStack: ["React 18", "JavaScript", "TypeScript", "Azure DevOps", "Azure Pipelines", "Performance Profiling"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Agentic AI & GenAI Systems",
    description: "Production workflows, agent orchestration, and LLM application frameworks",
    skills: [
      { name: "Agentic AI Workflows", level: "Expert", highlight: true },
      { name: "LangGraph", level: "Expert", highlight: true },
      { name: "Google ADK", level: "Expert", highlight: true },
      { name: "RAG Pipelines", level: "Expert", highlight: true },
      { name: "Microsoft Agent Framework", level: "Advanced" },
      { name: "CrewAI", level: "Advanced" },
      { name: "Prompt Architecture & Guardrails", level: "Expert" },
      { name: "Streaming UI & Chat Protocols", level: "Expert", highlight: true },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Modern reactive interfaces, state management, and custom UI components",
    skills: [
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "ReactJS (16 - 19)", level: "Expert", highlight: true },
      { name: "Next.js (App Router)", level: "Expert", highlight: true },
      { name: "Redux Toolkit & RTK Query", level: "Expert", highlight: true },
      { name: "TailwindCSS & CSS Architecture", level: "Expert", highlight: true },
      { name: "shadcn/ui & Radix Primitives", level: "Expert" },
      { name: "Material-UI (MUI)", level: "Expert" },
      { name: "BlockNote Custom Extensions", level: "Expert" },
      { name: "ReactFlow & Node Canvas", level: "Expert", highlight: true },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Core Web Vitals Optimization", level: "Expert", highlight: true },
    ],
  },
  {
    category: "Backend & Event Architectures",
    description: "Scalable server systems, real-time messaging, and database persistence",
    skills: [
      { name: "NodeJS & ExpressJS", level: "Expert", highlight: true },
      { name: "FastAPI & Python", level: "Expert", highlight: true },
      { name: "WebSocket Architecture", level: "Expert", highlight: true },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
      { name: "JSONLogic & AST Rules Engines", level: "Expert" },
      { name: "REST API & OpenAPI Design", level: "Expert" },
    ],
  },
  {
    category: "DevOps, Cloud & Developer Tools",
    description: "Cloud infrastructure, automated pipelines, and modern AI-assisted engineering",
    skills: [
      { name: "Azure DevOps & Azure Pipelines", level: "Expert", highlight: true },
      { name: "Google Cloud Platform (GCP)", level: "Advanced" },
      { name: "Git & GitHub Workflows", level: "Expert" },
      { name: "CI/CD Pipeline Automation", level: "Expert", highlight: true },
      { name: "Kiro & Cursor", level: "Expert" },
      { name: "GitHub Copilot", level: "Expert" },
      { name: "Postman & API Testing", level: "Expert" },
      { name: "Design Systems & Tokenization", level: "Expert" },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "gcp-genai",
    title: "Google Generative AI Leader",
    issuer: "Google",
    date: "Certified",
    badgeColor: "cyan",
    description: "Enterprise foundation models, multimodal prompting, Gemini API architectures, and responsible AI implementation.",
  },
  {
    id: "gcp-digital",
    title: "Google Cloud Digital Leader",
    issuer: "Google",
    date: "Certified",
    badgeColor: "sky",
    description: "Core cloud infrastructure, data transformation, scalable cloud-native architectures, and security compliance.",
  },
  {
    id: "anthropic-claude",
    title: "Claude Certified Architect - Foundations",
    issuer: "Anthropic",
    date: "Certified",
    badgeColor: "amber",
    description: "Architecting enterprise Claude models, long-context retrieval, prompt evaluation, and safe AI tooling.",
  },
  {
    id: "ms-copilot",
    title: "GitHub Copilot Certified",
    issuer: "Microsoft",
    date: "Certified",
    badgeColor: "teal",
    description: "AI-assisted developer velocity, pairing workflows, automated test generation, and secure code crafting.",
  },
  {
    id: "ms-az900",
    title: "AZ-900 Azure Fundamentals",
    issuer: "Microsoft",
    date: "Certified",
    badgeColor: "sky",
    description: "Azure cloud computing concepts, security, governance, compute services, and enterprise architecture.",
  },
  {
    id: "ms-pl900",
    title: "PL-900 Power Apps Fundamentals",
    issuer: "Microsoft",
    date: "Certified",
    badgeColor: "emerald",
    description: "Business automation, low-code integration frameworks, and enterprise data modeling.",
  },
];

export const AWARDS: Award[] = [
  {
    id: "growth-catalyst-2025",
    title: "Growth Catalyst ACE Award",
    issuer: "Accenture",
    date: "Jun 2025",
    summary: "Recognized for driving measurable client impact by delivering innovative AI-led solutions.",
    impact: "Pioneered production GenAI integrations that opened high-value growth initiatives and new enterprise capabilities.",
  },
  {
    id: "extra-mile-2025",
    title: "Extra Mile ACE Award",
    issuer: "Accenture",
    date: "Mar 2025",
    summary: "Awarded for consistently demonstrating agility, technical resilience, and rapid delivery.",
    impact: "Successfully prioritized complex feature rollouts under aggressive deadlines in high-pressure delivery environments.",
  },
  {
    id: "sparkling-star-2023",
    title: "Sparkling Star Award",
    issuer: "Accenture",
    date: "Dec 2023",
    summary: "Honored for strong frontend expertise, solving complex technical challenges, and delivering high-quality React solutions.",
    impact: "Championed performance refactoring and stable React 18 architecture adopted across enterprise client dashboards.",
  },
];

export const ENGAGEMENT_PROCESS = [
  {
    step: "Discovery",
    title: "Architecture & Needs Audit",
    timeframe: "Days 1 - 3",
    description:
      "Deep-dive review into your existing tech stack, AI model requirements, latency bottlenecks, and business objectives. We map out data flows, agent graphs, and target SLAs.",
  },
  {
    step: "Prototype",
    title: "Sprint Architecture Blueprint",
    timeframe: "Week 1",
    description:
      "Deliver a concrete system architecture document, interface wireframes, and a working prototype proving core technical viability (e.g., streaming Copilot or WebSocket pipeline).",
  },
  {
    step: "Implementation",
    title: "Production Engineering Build",
    timeframe: "Weeks 2 - 4",
    description:
      "Implementation of production-grade code, full TypeScript type safety, automated tests, responsive UI, and low-latency API/agent integrations.",
  },
  {
    step: "Delivery",
    title: "Hardening, Benchmarking & Handoff",
    timeframe: "Week 4+",
    description:
      "Rigorous Core Web Vitals profiling, CI/CD pipeline verification, documentation, and live knowledge-transfer sessions for your internal engineering team.",
  },
];
