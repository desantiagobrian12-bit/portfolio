# Case Study: Konfront — Healthcare Logistics Platform

> **Base template.** This doc defines the structure, order, and tone for case studies. Use it as the source when implementing or duplicating a case study in the app. Content is presented in flow layout: hero → The Product → The Core Problem → How I thought through it → The Core Impact (with metrics). Tone: first person, direct, professional but approachable. No emojis. One em dash per paragraph max.

---

## 1. Overview (meta)

| Field | Value |
|-------|--------|
| **Company** | Konfront |
| **Role** | Product Designer |
| **Timeline** | 2025 |
| **Team** | 2 designers, developers, PMs, product adoption team |
| **Platform** | Desktop web app (distributors), Mobile web app (last-mile operators) |
| **Tags** | Healthcare, B2B, Logistics |

---

## 2. Hero

**Cover image:** Sets the scene. Use a single strong visual (e.g. delivery flow, desktop + mobile).

- **Image path:** `/images/case-studies/konfront/cover-delivery.png`
- **Alt:** Konfront healthcare logistics platform: mobile and desktop interfaces

**Title:** Healthcare Logistics Platform

**Subtitle (hook):** One line that grabs attention and states the stakes.

> 1,100 patients depend on medication delivered to their door. When I joined, every delivery was tracked on paper.

**Project details (shown in hero):**

- **Role:** Product Designer  
- **Duration:** 2025  
- **Team:** 2 Designers, Dev team, PM, Product adoption  
- **My contribution:** UX/UI Design, UX Research, Visual system  

---

## 3. The Product

Short paragraph. What the product is, who it’s for, and why it matters. No jargon.

At Konfront I led the design of a digital platform for managing hemophilia medication deliveries across Mexico. High-cost, cold-chain drugs that patients self-administer at home, delivered through the country’s largest public healthcare system. The pharmaceutical client had recently entered this market; operations still ran on spreadsheets, phone calls, and paper forms. I designed a desktop interface for coordinators managing delivery batches and a mobile web app for operators in the field.

---

## 4. The Core Problem

**Headline:** One sentence. The main pain.

The existing medication delivery process was manual, slow, and error-prone.

**Description:** What’s broken and why it matters. Keep it concrete.

Once a package left the warehouse, nobody knew where it was. The delivery chain, from prescription upload to patient handoff, was entirely manual. Each clinic documented differently. Operators memorized steps and called coordinators when things went wrong. No traceability, no standardization, and no digital record of whether a patient actually received their medication. For time-critical, temperature-sensitive drugs, that gap was a patient safety risk.

---

## 5. How I thought through it (narrative sections)

Section title in the app: **How I thought through it.** Each subsection is a clear step in your process. Use headings, short paragraphs, and one or more images (or video) per step. Optionally add sub-steps (e.g. Branding, Design system) with their own images and captions.

### 5.1 What the field actually looked like

Before designing anything I needed to understand how deliveries actually worked, not how they were documented. We ran stakeholder interviews with logistics, sales, regulatory, and call center teams, then mapped the real operational workflow end to end.

What we found was messier than expected. Each clinic handled documentation differently. Operators relied on memory and phone calls to get through deliveries. Once a package left the warehouse, the coordination team had no way to track it.

**Image:** Foundational discovery map  
Path: `/images/case-studies/konfront/Foundational-discovery-map.png`

Four patterns defined the problem:

- **No standardization.** Each clinic managed documentation differently, making oversight nearly impossible.
- **Heavy reliance on manual processes.** Paper forms, spreadsheets, and verbal handoffs. Every step was a potential point of failure.
- **Zero traceability.** No real-time visibility into delivery status after dispatch. Once a package left the warehouse, it was invisible.
- **High cognitive load for operators.** Drivers memorized each delivery step and relied on phone calls for clarification instead of following a system.

### 5.2 Designing for two different realities

The discovery work made one thing clear: we were designing for two different users in two different contexts.

The route coordinator works from a desk. They manage delivery batches, assign operators, and monitor status across dozens of deliveries at once. They need data density, bulk actions, and a dashboard they can scan at a glance.

The last-mile operator works outdoors. Often in poor connectivity, making deliveries one at a time. They need a step-by-step flow, large touch targets, and camera access to capture evidence.

A single responsive app would have compromised both. We built two purpose-built products sharing one backend: desktop for coordinators, mobile web for operators.

**Media:**

- **Video:** Desktop prototype walkthrough — `/images/case-studies/konfront/Prototype-desktop-video.mp4`
- **Image:** Mobile + desktop — `/images/case-studies/konfront/mobile-desktop-prototype.png` (or mobile only: `Protoype-mobile.png`)

**Sub-step: Creating a congruent design system**

We defined a single visual language for both products: base and brand colors, grayscale, and Inter for typography. Design tokens map consistently from Figma into the app so delivery cards and buttons look and behave the same on desktop and mobile. The component library covers buttons in multiple states, calendar inputs, dropdowns with validation states, and shared patterns for forms and tables.

**Images (grid with captions):**

| Caption | Path |
|--------|------|
| Brand colors, base colors, grayscale and typeface | `Branding.png` |
| Tokens for color, padding, and borders | `Tokens.png` |
| Color variables in Figma for consistent theming | `Color variables in figma.png` |
| Components, spacing, icons and other documentation | `Design system.png` |

### 5.3 Building trust by making it real

The client had never used a digital tool for this workflow. Their entire operation was on paper. Showing wireframes or abstract mockups risked confusion. They needed to see the product to believe it was possible.

We started with a quick proof of concept using v0 to validate the core idea and get early stakeholder alignment. Once the team could visualize the product in context, we skipped wireframes and went straight to high-fidelity prototypes in Figma.

Discovery had already validated the flows. What we needed was buy-in and specific feedback. Polished prototypes delivered that faster than wireframes. Instead of “I think this flow makes sense,” we got “this status label should say X instead of Y.” That’s the kind of feedback that moves the product forward.

**Image (optional):** Define and ideate — `define-ideate.png`

### 5.4 What testing changed

We ran usability sessions with 5 last-mile operators, about 25 minutes each. Goal: validate the mobile experience before development and catch friction we couldn’t see from a desk.

Three things came back clearly:

- **Language wasn’t landing.** Operators found some instructions confusing. We rewrote all in-app copy using simpler, field-friendly terms they actually use.
- **Patients kept asking questions operators couldn’t answer:** dosage, storage, side effects. We added an FAQ screen with suggested responses so operators could help confidently without calling the nurse line.
- **Incident reporting felt incomplete.** When something went wrong on a delivery, operators had no way to add context. We added a comments field and a direct-call-to-nurse option for situations that needed clinical support.

These weren’t cosmetic changes. They were the difference between a tool that technically works and one people actually trust in the field.

---

## 6. The Core Impact

**Headline:** One sentence. The outcome.

A fully manual, paper-based process replaced with end-to-end digital traceability.

**Description:** Who benefits and how. Keep it concrete.

1,100+ hemophilia patients across Mexico now receive medication through a documented, visible, and accountable workflow. From batch upload to patient handoff, every step is tracked. That visibility didn’t exist before.

**Impact metrics (show as cards with icon + value + description):**

| Value | Category | Description |
|-------|----------|--------------|
| 90% | Digital Adoption | of deliveries now managed digitally through the platform |
| 70% less | Efficiency | time spent assigning routes compared to the previous manual process |
| 30 min | Onboarding | average onboarding time for new operators, most with limited tech experience |
| 6 | Quality Assurance | critical usability issues caught and resolved before a single line of code was written |
| 25+ | Design System | UI components built, documented, and shared across both products |

*These aren’t projections. They came from real usage after launch.*

---

## 7. Key decisions (optional for doc / future UI)

Use this section in the doc to capture rationale. The app can show it as cards (What I did / Why / Trade-off) or omit it for a shorter flow.

### Decision 1: Two products, one system

- **What I did:** Built a desktop app for coordinators and a mobile web app for operators. Two separate products sharing one backend.
- **Why:** A coordinator managing 50 deliveries at a desk and a driver delivering one package in the rain have nothing in common except the data. One responsive product would have compromised both experiences.
- **Trade-off:** Double the design and dev surface. In healthcare logistics, a compromised experience means friction, friction means delays, and delays affect patients.

### Decision 2: Straight to high-fidelity

- **What I did:** Quick POC to validate the concept, then directly to polished Figma prototypes. No wireframes in between.
- **Why:** The client had never seen their process digitized. Abstract mockups would have stalled alignment. They needed to see the real thing to give meaningful feedback.
- **Trade-off:** Higher cost of change if the direction was wrong. Discovery had already validated the flows. The risk of losing client momentum with wireframes was greater than the risk of being off.

### Decision 3: Every step traceable

- **What I did:** Designed every screen for auditability: full lifecycle status tracking, evidence-based incident reporting, and identity validation at patient handoff.
- **Why:** These are high-cost hemophilia medications. If a delivery fails, there has to be a clear record of what happened, when, and why. Regulatory requirements demanded full traceability.
- **Trade-off:** More validation steps mean more friction per delivery. We made each step as fast as possible with large touch targets, smart defaults, and minimal typing, without removing any essential checkpoint.

### Decision 4: What I chose not to build

- **What I did:** Deliberately excluded offline mode, GPS tracking, and admin/nurse dashboards from the MVP.
- **Why:** Scoping is a design decision. Offline wasn’t essential for routes with stable signal. GPS raised privacy concerns. Admin dashboards were premature. We needed to standardize the core delivery workflow before expanding to other roles.
- **Trade-off:** Saying no to features stakeholders wanted. A focused MVP that works beats a bloated one that doesn’t. These are on the roadmap, not abandoned.

---

## 8. Assets

All assets live in `public/images/case-studies/konfront/`. In the app, reference with path `/images/case-studies/konfront/<filename>`.

| Purpose | Filename | Notes |
|---------|----------|--------|
| Hero / cover | `cover-delivery.png` | Case study hero visual |
| Discovery map | `Foundational-discovery-map.png` | End-to-end workflow mapping |
| Define & ideate | `define-ideate.png` | Define and ideate phase (optional) |
| Design system | `Design system.png` | Components, spacing, icons |
| Branding | `Branding.png` | Color palette and typography |
| Tokens | `Tokens.png` | Tokens in mobile UI |
| Color variables | `Color variables in figma.png` | Figma variables |
| Desktop + mobile | `mobile-desktop-prototype.png` | Side-by-side or combined |
| Desktop prototype video | `Prototype-desktop-video.mp4` | Video walkthrough |
| Mobile prototype | `Protoype-mobile.png` | Operator flow (filename typo: Protoype) |

---

## Checklist for new case studies (from this base)

- [ ] Overview table: Company, Role, Timeline, Team, Platform, Tags
- [ ] Hero: cover image, title, subtitle (hook), project details
- [ ] The Product: one paragraph, no jargon
- [ ] The Core Problem: headline + short description
- [ ] How I thought through it: 3–5 narrative sections, each with title, copy, and image(s) or video; sub-steps and captions where needed
- [ ] The Core Impact: headline + description + metrics table (value, category, description)
- [ ] Optional: Key decisions (What I did / Why / Trade-off)
- [ ] Assets table with paths and notes
- [ ] Tone: first person, direct, one em dash per paragraph max, no emojis
