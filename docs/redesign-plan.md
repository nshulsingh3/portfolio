# Portfolio Redesign Plan: Technical Architecture & Execution Blueprint

**Project:** Personal Portfolio for Anshul Singh  
**Role:** Senior Full-Stack & Agentic AI Engineer (5 Years at Accenture)  
**Target Audience:** Hiring managers, tech leads, and engineering recruiters skimming in ~60 seconds  
**Target Length:** ~5 desktop screens (~4,800–5,000 vertical px)  
**Tone:** Calm, technical, confident. Proof over adjectives. No hype vocabulary.  
**Design System:** Dark obsidian only (`#07090e` ground, `#0c101a` tone-step, `#111726` elevation), single accent color (`#38bdf8` Cyan), single radius system (`12px` / `rounded-xl` for cards, `6px` / `rounded-md` for buttons/chips).

---

## 1. Hard Rules & Constraints

1. **Strict Content Truth:** No new claims. Content derived exclusively from verified facts in `portfolioData.ts` and existing component code.
2. **Case Study Isolation:** Each case study uses only its own historical project content from Accenture. Zero leakage of demo details (e.g., BlockNote clause drafting stays in Case 1; JSONLogic stays in Case 2; React 18 / Azure stays in Case 3).
3. **Factual Role Descriptors:** Roles formatted strictly as factual titles: `Senior Analyst | Accenture`, `Analyst | Accenture`, `Associate | Accenture`. All em-dashes replaced with ` | `.
4. **Positioning & Slogans:** Never use "Senior Systems Engineer" or "Elite". Primary headline: *"Senior Full-Stack & Agentic AI Engineer"*. Metadata and OG tags stripped of "Elite".
5. **Latency Single-Source:** Remove the fabricated "84 ms" figure. The sole latency benchmark is the verified case study metric: `<150ms streaming token latency`.
6. **Preserve Untouched:** 
   - `src/components/ResumeViewerModal.tsx` remains completely untouched.
   - Route `/api/download-resume` remains unchanged.
   - Cal.com link `https://cal.com/anshul-singh-tqhxbm` remains unchanged.
   - Contact coordinates (email, phone, location, LinkedIn, GitHub) preserved verbatim.

---

## 2. Page Structure & Height Budget (~5 Desktop Screens)

```
[Screen 1] ~900px  (1.0 screen)  ─── Hero (#top): Title, Subtext, CTAs, 4-Point Typographic Proof Strip
[Screen 2] ~1300px (1.4 screens) ─── Selected Work (#work, alias #case-studies): 3 Accenture Case Summaries
[Screen 3] ~900px  (1.0 screen)  ─── What I Build (#capabilities, alias #services, #upcoming-demos): 3 Pillars + /demos link
[Screen 4] ~950px  (1.0 screen)  ─── Stack & Credentials (#credentials, alias #skills): Grouped Stack + 4 Certs + 3 ACE Awards + Degree
[Screen 5] ~750px  (0.8 screens) ─── Direct Scheduling & Contact (#contact): 1 Cal.com Card + Coordinates + Clean Footer
────────────────────────────────────────────────────────────────────────────────────────────────
TOTAL:     ~4,800px (~5.2 screens) ─── Skimmable in under 60 seconds
```

### Screen 1: Hero Section (`#top`)
- **Headline (Display, 2 lines max):**
  ```
  Senior Full-Stack &
  Agentic AI Engineer.
  ```
- **Subtext (Exact copy, no metrics, no "proven track record"):**
  *"5 years at Accenture building multi-agent systems, real-time WebSocket pipelines and enterprise React apps."*
- **Primary CTAs:**
  - `[Download CV]` (triggers `/api/download-resume` download)
  - `[Book a Call]` (direct link to Cal.com)
- **Proof Strip (4 Verified Figures, typographic layout — metrics appear ONLY here, nowhere else in the hero):**
  1. **50%** API traffic cut (RTK Query cache normalization)
  2. **80%** Re-render drop (React 18 concurrency migration)
  3. **3,000+** Enterprise users supported (Unified document tooling)
  4. **3x** Accenture ACE award honoree (AI innovation & delivery)
- **Eliminated:** Fake telemetry card, stoplight dots, fake `$ agent.trace` terminal, trust badge row.

### Screen 2: Selected Work (`#work`, with alias `#case-studies`)
- 3 high-density production case study summary cards linking out to `/work/[slug]`:
  1. **Enterprise Copilot AI & Visual Orchestration** (`/work/enterprise-copilot`)
     - Role: *Senior Analyst | Accenture*
     - Verified Metrics: `3,000+ Users` · `1,000+ Monthly Invoices` · `<150ms Latency`
     - One-sentence summary + primary stack tags (`TypeScript`, `WebSockets`, `ReactFlow`, `BlockNote`) + `Read case study →` link.
  2. **Multi-Service WebSocket Pipeline & Content Moderation Suite** (`/work/realtime-moderation`)
     - Role: *Analyst | Accenture*
     - Verified Metrics: `50% API Traffic Cut` · `500+ Moderators` · `10,000+ Videos Streamlined`
     - One-sentence summary + primary stack tags (`React`, `WebSockets`, `RTK Query`, `JSONLogic`) + `Read case study →` link.
  3. **Enterprise React 18 Migration & Deployment Automation** (`/work/react-modernization`)
     - Role: *Associate | Accenture*
     - Verified Metrics: `80% Re-render Drop` · `75% Deployment Speedup` · `2,000+ Records`
     - One-sentence summary + primary stack tags (`React 18`, `TypeScript`, `Azure Pipelines`) + `Read case study →` link.

### Screen 3: What I Build (`#capabilities`, with alias `#services`, `#upcoming-demos`)
- 3 clean, authoritative architectural pillars (no deliverable bullet lists, no inquiry forms, no consulting tiers):
  1. **Agentic AI & Multi-Agent Orchestration:** Autonomous workflows, tool-calling graphs, state persistence, and streaming conversational copilot interfaces using LangGraph and Google ADK.
  2. **Real-Time Event-Driven Architectures:** Low-latency bidirectional WebSocket pipelines, cross-service event broadcasting, optimistic client updates, and reconnection reconciliation.
  3. **Core Web Vitals & Frontend Modernization:** Enterprise data caching architectures (RTK Query), React 18/19 concurrency refactoring, and custom rich-editor/canvas tooling (BlockNote, ReactFlow).
- Footer text link: *"Demos in progress →"* linking directly to `/demos`.

### Screen 4: Stack & Credentials (`#credentials`, with alias `#skills`)
- **Grouped Stack (Typographic lists, no search inputs, no dots, no stars):**
  - *AI & Agents:* LangGraph, Google ADK, CrewAI, RAG Pipelines, Prompt Guardrails, Streaming Chat Protocols.
  - *Frontend Architecture:* TypeScript, React (16–19), Next.js, Redux Toolkit, RTK Query, TailwindCSS, shadcn/ui.
  - *Backend & Real-Time:* Node.js, Express, FastAPI, Python, WebSockets, PostgreSQL, Supabase, Redis.
  - *DevOps & Tooling:* Azure DevOps, Azure Pipelines, Git, GitHub Copilot, Docker, CI/CD Automation.
- **Verified Credentials & Accolades (Compact 2-column layout):**
  - **4 Industry Certifications:**
    1. Google Generative AI Leader
    2. Google Cloud Digital Leader
    3. Claude Certified Architect - Foundations (Anthropic)
    4. GitHub Copilot Certified (Microsoft)
  - **3 Accenture ACE Awards:**
    1. Growth Catalyst ACE Award | Accenture (Jun 2025)
    2. Extra Mile ACE Award | Accenture (Mar 2025)
    3. Sparkling Star Award | Accenture (Dec 2023)
  - **Education (Single concise line):**
    *B.Tech in Computer Science & Engineering, Galgotias University (2017 – 2021)*

### Screen 5: Direct Scheduling & Contact (`#contact`)
- **Single Cal.com Booking Card:** Clean, flat surface for scheduling 30-minute technical discussions via `https://cal.com/anshul-singh-tqhxbm`.
- **Direct Communication Coordinates:**
  - Email: `reachouttoanshul@gmail.com` (with copy action)
  - Phone / WhatsApp: `+91 8630448790` (with copy action)
  - Profiles: LinkedIn (`linkedin.com/in/anshul-singh03`), GitHub (`github.com/nshulsingh3`), Location (`Noida, Uttar Pradesh, India`).
- **Footer:** Minimal flat bar with Resume Download (`/api/download-resume`), copyright (`© {year} Anshul Singh`), back-to-top button. Clock ticker completely removed.

---

## 3. Dedicated Subpages Architecture

1. **`/services/page.tsx`**:
   - Houses the complete 5-card service catalog from `portfolioData.ts` (Agentic AI, Real-time Systems, Performance, Custom Tools, Modernization).
   - Preserves all deliverables and tech stacks for visitors desiring deep service breakdown.
2. **`/demos/page.tsx`**:
   - Houses the 4 interactive sandbox preview specifications (Contract Workbench, Agentic Copilot, Telemetry Streamer, JSONLogic Engine).
   - Stripped of speculative "in 2-3 weeks" launch dates, status dots, and duplicate booking buttons. Focused on architecture blueprints and problem/solution explanations.
3. **`/work/[slug]/page.tsx`** (Dynamic Route):
   - Comprehensive deep-dive case study pages for:
     - `/work/enterprise-copilot`
     - `/work/realtime-moderation`
     - `/work/react-modernization`
   - Fully renders executive summary, technical challenges, architectural implementation details, quantified business impact, and full tech stacks.
   - Includes static params generator (`generateStaticParams`) for instant static prerendering.

---

## 4. File-by-File Impact Matrix

### Files to Modify:
1. `src/data/portfolioData.ts`:
   - Update `PERSONAL_INFO.title` to `"Senior Full-Stack & Agentic AI Engineer"` (remove "Elite").
   - Replace em-dashes in case studies and career roles with factual ` | ` notation.
   - Add URL slugs to `CASE_STUDIES` (`enterprise-copilot`, `realtime-moderation`, `react-modernization`).
2. `src/app/layout.tsx`:
   - Update metadata title and description: remove "Elite", set clean title `Anshul Singh | Senior Full-Stack & Agentic AI Engineer`.
3. `src/app/page.tsx`:
   - Re-wire page to use the streamlined 5-section sequence (`Navbar`, `Hero`, `SelectedWork`, `Capabilities`, `StackCredentials`, `ContactSection`, `Footer`).
   - Remove standalone `StatsBar`, `UpcomingDemosSection`, `ServicesSection`, `SkillsMatrix`, and `EngagementProcess` from homepage.
4. `src/components/Navbar.tsx`:
   - Update desktop nav links to: `Work` (`#work`), `Capabilities` (`#capabilities`), `Credentials` (`#credentials`), `Contact` (`#contact`).
   - Keep actions `[Resume]` and `[Book a Call]`.
5. `src/components/Hero.tsx`:
   - Remove fake telemetry card, terminal snippet, stoplights, and trust badges.
   - Implement the 4-point typographic proof row directly below the CTA buttons.
6. `src/components/ContactSection.tsx`:
   - Remove pulsing green status dot and agenda fluff; make clean, compact Cal.com + direct contact block.
7. `src/components/Footer.tsx`:
   - Remove local time clock ticker and middle-dot strings.

### Files to Create:
1. `src/components/SelectedWorkSection.tsx`: Compact 3-card homepage showcase for `#work` (with alias `#case-studies`).
2. `src/components/CapabilitiesSection.tsx`: 3-pillar architectural capabilities overview for `#capabilities` (with aliases `#services`, `#upcoming-demos`) + `/demos` text link.
3. `src/components/StackCredentialsSection.tsx`: Grouped technical stack + 4 certs + 3 ACE awards + education for `#credentials` (with alias `#skills`).
4. `src/app/work/[slug]/page.tsx`: Dynamic deep-dive case study page with `generateStaticParams`.
5. `src/app/demos/page.tsx`: Subpage presenting the 4 demo architecture cards.
6. `src/app/services/page.tsx`: Subpage presenting the 5 full service packages.

### Files to Delete / Retire from Homepage:
1. `src/components/EngagementProcess.tsx`: Deleted from homepage (content not needed for senior engineer profile).
2. `src/components/StatsBar.tsx`: Retired from homepage (metrics merged into Hero proof strip).

---

## 5. Taste Skill Consistency & Rule Conflict Analysis

Every detail of this plan was evaluated against `.agents/skills/design-taste-frontend/references/`:

| Rule / Principle | Potential Risk in User Brief | Resolution in Plan |
|---|---|---|
| **No Equal-Card Rows** (`tells.md` §1) | User brief asks for a "Proof row of 4: 50% API traffic cut, 80% re-render drop, 3,000+ enterprise users, 3x ACE awards" in Hero. If built as 4 boxed cards, it triggers the equal-card tell. | Rendered as a **borderless, typographic metrics strip** (large numbers with clean labels below) directly under the CTA buttons, not boxed bento cards. |
| **No Fake Dashboards/Terminals** (`tells.md` §2) | Previous hero had simulated terminal `$ agent.trace` and stoplight dots. | Completely eradicated. Hero is 100% typographic and content-led. |
| **No Status Dots** (`tells.md` §2) | Demos and Cal.com had green/cyan status dots. | Completely eliminated from all components and subpages. |
| **No Locale/Time Micro-Meta** (`tells.md` §4) | Footer had live ticking IST clock. | Completely removed from footer. |
| **No Em-Dashes** (`tells.md` §4) | Previous case studies used em-dashes (`—`). | Replaced throughout with factual pipe ` | ` or comma `,`. |
| **No Hype Words** (`copy.md` §6) | Previous metadata used "Elite". | Replaced with *"Senior Full-Stack & Agentic AI Engineer"*. |
| **Single Accent & Radius** (`tells.md` §5) | Previous build had mixed radii (4px, 8px, 12px, 16px, 24px) and mixed colors (amber, emerald, violet, cyan). | Enforced strictly: **Accent:** `#38bdf8` (Cyan); **Card Radius:** `12px` (`rounded-xl`); **Element Radius:** `6px` (`rounded-md`). |
| **Subpage Static Rendering** (Next.js 16) | `/work/[slug]` needs static export support. | Implemented with `generateStaticParams()` to ensure 100% clean static builds. |
