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

## Cover

Use this as the hero / first image for the case study:

![C3 Generative AI — Home and ask interface](/images/case-studies/c3-genai/cover-home.png)

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

## Key Features — Gen AI Experience

This section breaks down the main Gen AI capabilities and how they show up in the product. C3 didn’t follow a formal process like design thinking; the work was driven by design decisions on each feature. Below is how those features work and why they matter.

### Reasoning

Users need to trust AI answers when business decisions depend on them. We exposed *how* the AI reached its conclusion in a way that didn’t clutter the main answer: a collapsible reasoning section so users could verify in context when they cared, and skip it when they didn’t.

![Reasoning — collapsible panel showing how the AI reached its conclusion](/images/case-studies/c3-genai/reasoning.png)

---

### Call tools, skills, files and metadata

The AI can invoke tools, use skills, and pull from files and metadata so answers are grounded in the organization’s data. The UI makes it clear when the model is using these — e.g. which sources were reviewed, which skills ran — so power users can see what’s in scope and non-technical users get confident, contextual answers.

![Call tools, skills, files and metadata — contextual menu and source references](/images/case-studies/c3-genai/call-tools-skills-files-metadata.png)

---

### Data tables and charts in answers

When the answer includes structured data or trends, we render them inline: tables and charts live inside the conversation instead of on a separate screen. That keeps the flow natural and lets users scan numbers and visuals in the same place they read the summary.

![Data table and charts — AI response with embedded table and chart](/images/case-studies/c3-genai/data-table-and-charts.png)

---

### Filters — scoping files and metadata

Before asking a question, users can scope *what* the AI uses: which files, which metadata (e.g. author, doc type, date). Filtering happens up front so the answer is based on the right context instead of the AI guessing or asking follow-ups.

![Filters — how users scope files and metadata before asking](/images/case-studies/c3-genai/Filters.png)

---

### Popover in context (dashboard, canvas, RTE)

Similar to Notion’s command palette, we use a contextual popover so users can run actions without leaving the screen. It appears in multiple surfaces: on dashboards for quick analysis, on canvas views for chart/data actions, and inside the rich-text editor for quick edits (summarize, formalize, use variables). One interaction pattern, consistent across contexts.

**Popover in dashboard**

![Popover in dashboard — quick actions from dashboard context](/images/case-studies/c3-genai/popover-dashboard.png)

**Popover in canvas**

![Popover in canvas — actions from a canvas view](/images/case-studies/c3-genai/popover-canvas.png)

**Popover in rich text editor (canvas)**

![Popover in rich text editor — quick actions in the document](/images/case-studies/c3-genai/popover-rte.png)

---

## Design Decisions (breakdown)

C3 Gen AI didn’t follow a linear design-thinking process; the work was iterative and feature-driven. Below is a concise breakdown of the main design decisions: what we did, why, and the trade-offs.

### 1. Conversational UI with embedded rich content

**What we did**  
Answers that range from short text to large tables and charts are shown inside the same conversational thread — no split pane or separate “results” page.

**Why**  
Users already expect a chat-like flow (ChatGPT, Copilot). Keeping that mental model and embedding rich content inline reduced learning curve and made enterprise data feel part of the conversation instead of a separate tool.

**Trade-off**  
Large tables or charts inside a bubble can feel tight or break the rhythm. We had to design clear transitions and sizing so rich content felt native to the thread rather than crammed in.

---

### 2. Collapsible reasoning — trust without clutter

**What we did**  
By default the answer is shown clean; a “Reasoned” (or similar) section is collapsible so users can expand to see sources and logic when they want to verify.

**Why**  
Most of the time users want the answer fast. Always showing reasoning added noise and slowed people down. A separate “audit” page felt disconnected. Collapsible reasoning kept the default view simple while giving data scientists and skeptical users one-click access to how the AI got there.

**Trade-off**  
If reasoning is hidden by default, some users may over-trust and never expand. We accepted that risk: research showed that users who care about verification do expand it, and forcing reasoning on everyone led to clutter that was ignored anyway (worse for trust).

---

### 3. Pre-query filters — scoping before asking

**What we did**  
Structured filters (dataset, time range, business unit, files, metadata) are available *before* the user sends the question, so the AI runs with a clear, unambiguous scope.

**Why**  
Enterprise questions are often scoped: “Q3”, “LATAM”, “this dataset”. Parsing that only from natural language is error-prone. Letting users set filters first removed ambiguity and produced more accurate, relevant answers.

**Trade-off**  
Filters add a step before asking, which is more friction than “just type”. In enterprise, wrong answers cost more than an extra click; users preferred knowing exactly what data was in scope.

---

## The Core Impact

**Reduced average task steps by ~40% for non-technical users** — by redesigning engineer-led features into intuitive, scalable UX. Design patterns I contributed were adopted across 3+ products within the C3 AI Suite.

---

## What I Learned

**Designing for AI means designing for uncertainty.** The model might give a perfect answer or a vague one, and the interface needs to handle both. Trust, transparency, and graceful degradation aren’t nice-to-haves — they’re the foundation.

**Enterprise complexity is a feature, not a bug.** The constraints — stakeholder alignment, regulatory requirements, multiple user types, existing systems — are what make the design decisions interesting. Learning to move effectively within those constraints while still pushing for better UX was the biggest growth area for me.

**Speed over perfection.** The pace at C3 AI pushed me to make decisions quickly, validate through feedback, and iterate. Some features started as rough engineer-built versions. My job was to make them intuitive and scalable without slowing down the team.

---

## Assets

All assets live in `public/images/case-studies/c3-genai/`. Reference in the app with path `/images/case-studies/c3-genai/<filename>`.

| Filename | Use in case study |
|----------|--------------------|
| `cover-home.png` | Hero / first image (already in folder) |
| `reasoning.png` | Reasoning — collapsible panel |
| `call-tools-skills-files-metadata.png` | Call tools, skills, files and metadata |
| `data-table-and-charts.png` | When the answer has charts and tables |
| `Filters.png` | How users filter files and metadata |
| `popover-dashboard.png` | Popover in dashboard |
| `popover-canvas.png` | Popover in canvas |
| `popover-rte.png` | Popover in rich text editor |

> **Note:** All visuals are abstracted and anonymized recreations due to confidentiality.

---

## Applying this to the portfolio

- **Cover:** The case study page already uses `cover-home.png` as the hero; no change needed.
- **Features section:** When you add a "Key features" block to the case study page, use the image paths above. You may need to extend `CaseStudyLayout` or the case study page data to support a features list with images (reasoning, call tools, data tables/charts, filters, popovers).
- **Design decisions:** The MD uses a short **What we did / Why / Trade-off** format instead of "options considered" + three cards. When you sync the portfolio page, you can either keep the existing three-decision structure and only change the copy to match this breakdown, or add a layout variant that renders this simpler format without the options list.
