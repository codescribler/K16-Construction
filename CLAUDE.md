# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

K16 Construction company website — a Next.js 15 app with TypeScript, Tailwind CSS v4, and App Router. Deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge
- **Validation**: zod
- **Email**: resend
- **Analytics**: Vercel Analytics, Google Analytics

## Project Structure

```
K16 Construction/
├── src/
│   ├── app/          # Next.js App Router pages and layouts
│   ├── components/   # React components
│   └── lib/          # Utility functions
├── public/
│   └── images/       # Optimized construction project images (.webp)
├── next.config.ts
├── tsconfig.json
├── tailwind / postcss configs
├── package.json
└── CLAUDE.md
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run lint       # ESLint
```

## Key Conventions

- All pages are statically generated except API routes (`/api/contact`, `/api/consultation`)
- Images are served from `public/images/` in WebP format
- Components use Tailwind utility classes with `cn()` helper (clsx + tailwind-merge)
