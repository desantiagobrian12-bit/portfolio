# Brian De Santiago — Portfolio

Personal portfolio site (Next.js). Product design case studies, about, and contact.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript

Case study content lives in `docs/case-studies/*.md` and is implemented in TSX pages under `src/app/case-studies/`.

## Project structure

| Path | Purpose |
|------|--------|
| **`src/app/`** | App Router: `page.tsx` (home), `about/`, `case-studies/<slug>/`. |
| **`src/components/`** | `layout/` (Header, Footer), `sections/` (Hero, CaseStudies, CaseStudyLayout, etc.). |
| **`src/lib/`** | Utilities and case study nav config (`case-studies.ts`). |
| **`docs/`** | Documentation and content (not deployed). Case study copy, about, brief, resume, design references. |
| **`docs/case-studies/`** | Case study markdown: `c3-genai.md`, `konfront.md`, `wizeline-learning.md`. Image paths use `/images/case-studies/<project>/...` (served from `public/`). |
| **`docs/inspiration/`** | Optional. Local reference images (mood boards, portfolio refs). Not deployed. See `docs/design-references.md` for the list. |
| **`public/images/`** | Deployed assets: `profile.png`, `profile-bw.png`, and `case-studies/<project>/` for case study images. Reference in app as `/images/...`. |

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Or with yarn, pnpm, or bun:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

On Windows you can double-click **`run-dev.bat`** (runs `npm run dev` in the project folder).

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deploy

The app is set up for deployment on [Vercel](https://vercel.com). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
