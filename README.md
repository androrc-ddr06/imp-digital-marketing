# I&P Digital Marketing — Alejandro Rodriguez

The personal-brand and portfolio site for **Alejandro Rodriguez**, founder of
**I&P Digital Marketing**. Built with Next.js 16, TypeScript, and Tailwind CSS v4,
and ready to deploy on Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local   # then add your Formspree ID (see below)
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # fonts, nav, footer, global metadata
│   ├── page.tsx                # Home
│   ├── about/                  # About Alejandro + I&P
│   ├── services/               # Services overview
│   │   └── [slug]/             # One page per service (generated)
│   ├── work/                   # Portfolio + flagship case study
│   ├── contact/                # Two-question contact form
│   ├── icon.svg                # Favicon (compass mark)
│   ├── sitemap.ts / robots.ts  # SEO
│   └── globals.css             # Brand tokens + base styles
├── components/                 # Nav, Footer, Logo, Mark, cards, form, etc.
└── lib/content.ts              # ← ALL site copy, services, clients, stats
public/
├── brand/                      # Logos + compass symbol (from the brand kit)
├── fonts/                      # BDO Grotesk + MFB Oldstyle
└── work/                       # Project cover images (see work/README.md)
```

## Editing content

Almost everything you'd want to change lives in **`src/lib/content.ts`**:
services, the six service pages, client case studies, the websites list, stats,
contact email, and social links. Edit the text there and the pages update.

To swap the placeholder project images for real screenshots, see
[`public/work/README.md`](public/work/README.md).

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). To receive messages:

1. Create a free form at https://formspree.io and set the destination email to
   `andro.rc06@gmail.com`.
2. Copy the form ID from the endpoint `https://formspree.io/f/XXXXXXXX` → `XXXXXXXX`.
3. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=XXXXXXXX
   ```
4. On Vercel, add the same variable under **Project → Settings → Environment Variables**.

Until an ID is set, the form shows a friendly "not connected yet" message instead
of sending.

## Deploy to Vercel

1. Push this repo to GitHub (already set up).
2. Go to https://vercel.com/new and import the repository.
3. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.
5. (Optional) Add your custom domain in **Project → Settings → Domains**.

## Brand

- **Colors:** Forest `#0B2222`, Cream `#EDE9E6`, Ink `#191919`, Sage accent.
- **Fonts:** MFB Oldstyle (display serif) + BDO Grotesk (sans).
- **Mark:** the four-point compass symbol.

All assets are from the official I&P Digital Marketing brand kit.
