# gastoncisterna.dev

Personal portfolio — [gastoncisterna.dev](https://gastoncisterna.dev)

Built with Next.js 14 (App Router), deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Rendering:** Server Components + selective `'use client'` for interactive elements
- **Styling:** Plain CSS with CSS custom properties for theming
- **Animations:** Intersection Observer–based reveal on scroll
- **Deployment:** Vercel with custom domain

## Structure

```
portfolio/
├── app/
│   ├── layout.jsx        # root layout, fonts, metadata
│   ├── page.jsx          # all page sections (About, Experience, Projects, Research, Writing, Contact)
│   └── globals.css       # design system: tokens, layout, components
├── components/
│   ├── Hero.jsx          # hero section with CTA buttons
│   ├── Nav.jsx           # sticky nav with active-section tracking and dark/light toggle
│   └── Reveal.jsx        # scroll-triggered fade-in wrapper
├── data/
│   └── portfolio.js      # single source of truth for all content
└── public/
    ├── photo.jpg
    └── cv.pdf
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All content lives in `data/portfolio.js`. To update projects, experience, research publications, or writing, edit that file — no other files need to change.

## License

MIT
