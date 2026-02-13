Brian De Santiago — Portfolio (Next.js).

## Project structure

| Path | Purpose |
|------|--------|
| **`docs/`** | Documentation and content (not deployed). Case study copy, about, brief, resume, design references. |
| **`docs/case-studies/`** | Case study markdown: `c3-genai.md`, `konfront.md`, `wizeline-learning.md`. Image paths in these files use `/images/case-studies/<project>/...` (served from `public/`). |
| **`docs/inspiration/`** | Local reference images (mood boards, portfolio refs). Not deployed. See `docs/design-references.md` for the list. |
| **`public/images/`** | Deployed assets: `profile.png`, `profile-bw.png`, and `case-studies/<project>/` (all case study images). Reference in app as `/images/...`. |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
