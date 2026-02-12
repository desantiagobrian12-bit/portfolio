# Case Study: C3 AI — GenAI Enterprise Experience

## Overview

| | |
|---|---|
| **Company** | C3 AI |
| **Role** | Associate Product Designer |
| **Timeline** | Aug 2025 – Feb 2026 |
| **Team** | Collaborative — PMs, engineers, design support |
| **Platform** | Enterprise web application (part of the C3 AI Suite) |
| **Confidentiality** | All visuals are abstracted recreations |

---

## The Product

C3 AI GenAI was an enterprise-grade generative AI product — think ChatGPT, but grounded in an organization's internal documents, data, and business context. Users could query the system in natural language to analyze information, generate reports, draft content, create workflows, and support decision-making.

It served a mix of technical and non-technical users — from business analysts to data scientists to executives.

---

## The Core Problem

**Making a complex, data-heavy AI experience feel simple — for everyone.**

Enterprise AI isn't like consumer AI. When a business analyst asks a question, the answer might be a paragraph, a data table with 50 rows, a chart, or all three. When an executive asks, they want a summary they can trust. When a data scientist asks, they want to see the reasoning.

The interface had to handle all of this — different response types, different user expectations, different levels of trust — without feeling overwhelming. And some of these features already existed as engineer-built versions that were functional but not intuitive.

---

## Design Decision 1: Conversational UI with Embedded Rich Content

### The question
How should the AI display answers that range from simple text to complex data tables and charts?

### The options I considered
- **Option A: Chat-bubble format with rich content inline** — keep the familiar conversational pattern (like ChatGPT) but embed tables, charts, and images directly within the thread
- **Option B: Split-pane layout** — conversation on the left, data/results on the right (like some analytics tools)
- **Option C: Card-based responses** — each AI response as a standalone card with its own layout

### Why I chose Option A
The conversational pattern was already the mental model users had from ChatGPT and Copilot. Fighting that familiarity would create unnecessary friction. The real challenge wasn't the layout — it was making rich data feel natural inside a chat thread.

### The trade-off
Chat-bubble UI works great for text. But when you embed a 50-row data grid inside a chat bubble, it can feel cramped or break the conversational rhythm. I had to design careful transitions between text responses and rich content — making tables and charts feel like a natural part of the conversation rather than a foreign element jammed into a chat window.

### The impact
Non-technical users could interact with the AI the way they'd interact with ChatGPT — no learning curve. But they'd get enterprise-grade responses with real data, not just text.

---

## Design Decision 2: Collapsible Reasoning — Trust Without Clutter

### The question
How do you build trust in AI answers when business decisions depend on them?

### Why this problem mattered
In consumer AI, if ChatGPT gives you a wrong answer about a recipe, nothing happens. In enterprise AI, if the system gives a wrong answer about revenue forecasts or supply chain data, real money is at stake. Users — especially executives and analysts — needed to trust the AI's answers. And the only way to build that trust is transparency: showing how the AI reached its conclusion.

### The options I considered
- **Option A: Always show reasoning** — display sources and logic alongside every answer
- **Option B: Collapsible reasoning panel** — clean answer by default, expandable section for users who want to verify
- **Option C: Separate "audit" view** — reasoning lives on a different page/tab

### Why I chose Option B
Option A created noise. Most of the time, users just want the answer. Forcing them to see reasoning every time would slow them down and clutter the interface. Option C was too disconnected — users needed to verify in context, not navigate away.

The collapsible panel gave users the clean, fast experience by default, with the depth available one click away. It respected both the business analyst who just wants the number and the data scientist who wants to see every source.

### The trade-off
Hiding reasoning by default means some users might never check it — potentially over-trusting the AI. But our research showed that the users who cared about reasoning would always expand it, and forcing it on everyone else would just create clutter that people learned to ignore (which is worse for trust than hiding it).

---

## Design Decision 3: Pre-Query Filters — Scoping Before Asking

### The question
How should users tell the AI what context to use before they ask their question?

### Why this problem mattered
Unlike consumer ChatGPT where you just type a question, enterprise users often need to scope their query — "show me revenue data, but only for Q3, only for the LATAM region, only from this dataset." Without proper scoping, the AI would either guess (unreliable) or ask clarifying questions (slow).

### The options I considered
- **Option A: Let the AI figure it out from natural language** — users type everything in the prompt, the AI parses context
- **Option B: Structured filters before the prompt** — users select dataset, time range, business unit, then ask their question
- **Option C: Hybrid** — basic natural language with optional filter chips

### Why I chose Option B
Option A sounds elegant but fails in practice. Enterprise data is structured — there are specific datasets, specific time ranges, specific business units. Relying on natural language parsing introduces ambiguity ("Q3" of which year? Which revenue dataset?). Structured filters eliminate ambiguity before the query even runs, leading to more accurate and relevant responses.

### The trade-off
Structured filters add a step before asking. It's more friction than just typing. But in enterprise contexts, that friction prevents wrong answers — and wrong answers cost much more time than an extra click. Users preferred the confidence of knowing exactly what data the AI was pulling from.

---

## The Core Impact

**Reduced average task steps by ~40% for non-technical users** — by redesigning engineer-led features into intuitive, scalable UX. Design patterns I contributed were adopted across 3+ products within the C3 AI Suite.

<!-- Brian: add anything else you remember — client demos feedback, internal recognition, etc. -->

---

## What I Learned

**Designing for AI means designing for uncertainty.** The model might give a perfect answer or a vague one, and the interface needs to handle both. Trust, transparency, and graceful degradation aren't nice-to-haves — they're the foundation.

**Enterprise complexity is a feature, not a bug.** The constraints — stakeholder alignment, regulatory requirements, multiple user types, existing systems — are what make the design decisions interesting. Learning to move effectively within those constraints while still pushing for better UX was the biggest growth area for me.

**Speed over perfection.** The pace at C3 AI pushed me to make decisions quickly, validate through feedback, and iterate. Some features started as rough engineer-built versions. My job was to make them intuitive and scalable without slowing down the team.

---

## Assets

| Asset | Status | Notes |
|-------|--------|-------|
| Hero image / cover | To create | Abstracted GenAI concept visual |
| Conversational thread with rich data | To create | Chat UI with embedded table/chart |
| Reasoning panel (collapsed vs expanded) | To create | Trust transparency pattern |
| Pre-query filter interface | To create | Scoping UI before prompt |
| Before vs. after (engineer-built → redesigned) | To create | Showing the transformation |

> **Note:** All visuals will be abstracted and anonymized recreations due to confidentiality.
