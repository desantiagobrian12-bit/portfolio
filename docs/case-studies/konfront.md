# Case Study: Konfront — Healthcare Logistics Platform

## Overview

| | |
|---|---|
| **Company** | Konfront |
| **Role** | Product Designer |
| **Timeline** | Sept 2024 – Aug 2025 |
| **Team** | 2 designers, developers, PMs, product adoption team |
| **Platform** | Desktop web app (distributors) + Mobile webapp (last-mile operators) |

---

## Cover

Use this as the hero / first image for the case study:

![Konfront Healthcare Logistics — Case study cover](/images/case-studies/konfront/case-studie-cover.png)

---

## The Product

A digital platform for managing the delivery of high-cost hemophilia medications across Mexico. Desktop interface for distributors managing batches. Mobile webapp for operators delivering in the field. Over 1,100 patients depending on timely, cold-chain deliveries administered intravenously at home.

---

## The Core Problem

**The entire medication delivery process was on paper — and lives depended on it.**

The client had recently entered the hemophilia market in Mexico, delivering cold-chain medications to 1,100+ patients through public health institutions like IMSS. But operations were still managed with spreadsheets, paper forms, and disjointed communication.

This meant: no delivery traceability (once a package left the warehouse, visibility dropped to zero), inconsistent validation protocols, and fragmented data across teams. Delays weren't just operational headaches — they impacted patients who needed medication on time.

We needed to digitize the entire logistics chain — from batch upload to patient handoff — while meeting healthcare regulatory requirements and being usable by operators in the field.

![Foundational discovery map — workflow and ecosystem mapping](/images/case-studies/konfront/Foundational-discovery-map.png)

---

## Design Decision 1: Two Products, One System — Desktop + Mobile

### The question
How do you design for two completely different users in two completely different contexts, within one unified system?

### Why this problem mattered
Distributors manage delivery batches at a desk — uploading CSVs, assigning operators, monitoring status across dozens of deliveries. Operators handle the actual deliveries in the field — often outdoors, on mobile, sometimes in areas with poor connectivity. Same system, completely different needs.

### The options I considered
- **Option A: One responsive web app** — same product, adapts to screen size
- **Option B: Two separate products with a shared backend** — purpose-built for each context
- **Option C: Desktop-first with a simplified mobile view** — full functionality on desktop, limited mobile

### Why I chose Option B
A responsive approach (Option A) sounds efficient but fails when the use cases are fundamentally different. A distributor needs data tables, bulk actions, and real-time dashboards. An operator needs a step-by-step delivery flow, camera access for evidence capture, and large touch targets for outdoor use. Trying to make one UI serve both would compromise both.

Two purpose-built products sharing one backend meant each experience could be optimized for its context without the other getting in the way.

![Desktop and mobile — distributor dashboard and operator delivery flow](/images/case-studies/konfront/desktop.png)

![Mobile prototype — operator delivery flow](/images/case-studies/konfront/Protoype-mobile.png)

### The trade-off
Two products means more design and development work. More components, more flows, more edge cases. But the alternative — a compromised single product — would've created friction for both user types. In healthcare logistics, friction translates directly to delays, and delays impact patients.

---

## Design Decision 2: Skipping Wireframes — Straight to High-Fidelity

### The question
What's the fastest way to validate the product direction with a client who's never seen their process digitized?

### Why this problem mattered
The client's entire operation was on paper. They had never used a digital tool for this workflow. Showing them wireframes or low-fidelity mockups risked confusion — they needed to *see* the product to believe it was possible and to give meaningful feedback.

### The options I considered
- **Option A: Standard process** — discovery → wireframes → mid-fi → high-fi → testing
- **Option B: POC first, then straight to high-fidelity** — quick generative design POC to validate the concept, then jump to polished Figma prototypes

### Why I chose Option B
We started with a quick proof of concept using a generative design tool to validate the core idea. Once stakeholders could visualize the product in context, we skipped wireframes entirely and moved to high-fidelity prototypes in Figma.

This wasn't reckless — the discovery work (stakeholder interviews, workflow mapping, ecosystem analysis) gave us enough confidence in the flows. What we needed was buy-in and detailed feedback, and high-fidelity designs delivered that faster than wireframes ever could.

![Define and ideate — from discovery to high-fidelity direction](/images/case-studies/konfront/define-ideate.png)

### The trade-off
Skipping wireframes means higher cost of change if you're wrong about the direction. But our discovery map and stakeholder alignment sessions had already validated the flows. The risk of being fundamentally wrong was low. The risk of losing client momentum by showing abstract wireframes was much higher.

### The impact
High-fidelity prototypes built trust quickly with the client and generated richer, more specific feedback. Instead of "I think this flow makes sense," we got "this status label should say X instead of Y" — the kind of feedback that actually improves the product.

---

## Design Decision 3: Designing for Auditability — Every Step Traceable

### The question
How do you make a logistics platform that's not just functional, but fully auditable from batch upload to patient handoff?

### Why this problem mattered
This isn't a food delivery app. These are high-cost medications for hemophilia patients. If a delivery fails, there needs to be a clear record of what happened, when, and why. If a patient didn't receive their medication, someone needs to know exactly where the chain broke. Regulatory requirements demanded full traceability.

### The design approach
Every screen was designed with auditability in mind:
- **Status tracking** showed the full lifecycle of each delivery — not just "delivered" or "not delivered," but every state in between
- **Incident reporting** required operators to capture evidence (photos, notes) when deliveries failed
- **Validation at handoff** ensured the right medication reached the right patient with proper confirmation

I refined the status tracking flows after internal reviews — the initial version didn't handle failed deliveries clearly enough. Adding explicit paths for exceptions (wrong address, patient not home, cold-chain compromised) made the system more honest and more useful.

![Design system — components and patterns for both products](/images/case-studies/konfront/Design-system.png)

![Konfront branding](/images/case-studies/konfront/Branding.png)

### The trade-off
More states and more validation steps means more friction in the delivery flow. Every additional screen an operator has to complete in the field adds time. But in healthcare logistics, skipping validation isn't an option. The design challenge was making each step as fast and frictionless as possible — large touch targets, smart defaults, minimal typing — without removing any essential checkpoint.

---

## The Core Impact

Replaced a fully manual, paper-based medication delivery process with a centralized digital platform serving 1,100+ hemophilia patients across Mexico. Enabled full delivery traceability from batch upload to patient handoff. Something that didn't exist before.

---

## Results (from HealthCareCompany.pdf)

<!-- Paste real-world metrics and outcomes from HealthCareCompany.pdf here. Examples: delivery time reduction, traceability %, operator adoption, patient impact, regulatory compliance, etc. -->

---

## What I Learned

**Regulatory complexity isn't the enemy of good design — it's the context.** Translating a high-risk, paper-based workflow into a digital platform pushed me to focus on real-world usability and transparency. The constraints made the design decisions more meaningful, not less.

**Stakeholder alignment is everything in B2B.** Especially when designing tools that impact not just workflows, but patient outcomes. Every design decision had to be defensible to sales, logistics, marketing, regulatory, and engineering — all at once.

**Show, don't tell.** Going straight to high-fidelity designs built trust faster than any process diagram or wireframe deck could have. In contexts where stakeholders have never seen their process digitized, making it real is the fastest path to alignment.

---

## Assets

All assets live in `public/images/case-studies/konfront/`. Reference in the app with path `/images/case-studies/konfront/<filename>`.

| Asset | Filename | Path | Notes |
|-------|----------|------|-------|
| Hero / cover | `case-studie-cover.png` | `/images/case-studies/konfront/case-studie-cover.png` | Case study cover visual |
| Foundational discovery map | `Foundational-discovery-map.png` | `/images/case-studies/konfront/Foundational-discovery-map.png` | Discovery and workflow mapping |
| Define & ideate | `define-ideate.png` | `/images/case-studies/konfront/define-ideate.png` | Define and ideate phase |
| Design system | `Design-system.png` | `/images/case-studies/konfront/Design-system.png` | Design system |
| Branding | `Branding.png` | `/images/case-studies/konfront/Branding.png` | Konfront branding |
| Desktop prototype | `desktop.png` | `/images/case-studies/konfront/desktop.png` | Distributor dashboard |
| Desktop prototype video | `Prototype-desktop-video.mp4` | `/images/case-studies/konfront/Prototype-desktop-video.mp4` | Video walkthrough of desktop product |
| Mobile prototype | `Protoype-mobile.png` | `/images/case-studies/konfront/Protoype-mobile.png` | Operator delivery flow (filename has typo: Protoype) |
| Additional | `cover.png`, `mobile.png`, `zz.avif` | — | Optional alternates |
