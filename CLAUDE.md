# Meenal Balar's Personal Website

## Project Overview
A personal portfolio website with four main sections: illustrations gallery, projects portfolio, personal blog, and book/article notes. The site should feel handmade, warm, and personal—drawing from South Asian artistic traditions and vintage zine aesthetics.

## Tech Stack
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (visual editor at `/admin`)
- **Hosting:** Netlify (with Netlify Identity for CMS auth)
- **Books data:** Google Sheets (fetched at build time)

## Design Direction

### Aesthetic
- Zine meets South Asian artistic tradition
- Handmade, warm, personal, intimate
- References: Nabiu Studio, Keya Vadgama, PAGE BREAK NYC, The Juggernaut, Rupy C. Tut

### Color Palette
| Role | Color |
|------|-------|
| Base | Hemp paper cream/ivory (`#F5F0E6`) |
| Primary text | Deep indigo (`#1E3A5F`) |
| Accent 1 | Ochre/muted gold (`#C9A227`) |
| Accent 2 | Tea-stained amber (`#D4A574`) |

### Typography
- Body/UI: JetBrains Mono (typewriter energy)
- Headings: Display font with personality (TBD)

### Handmade Touches
- Stitched/sewn line borders
- Hand-drawn dividers
- Slightly tilted/scattered element placement
- Paper grain texture backgrounds
- Soft, imperfect edges on images

## Site Structure

```
/                    → Cover page (name + TOC navigation)
/illustrations       → Gallery grid with lightbox
/projects            → Portfolio cards
/blog                → Post list
/blog/[slug]         → Individual post
/books               → Reading list from Google Sheets
/admin               → Decap CMS (requires Netlify Identity login)
```

## Content Collections

### Blog Posts (`src/content/blog/`)
- title, date, description, body, featured image

### Illustrations (`src/content/illustrations/`)
- image, title, description (optional), date

### Projects (`src/content/projects/`)
- title, description, images[], links[], date

## Key Commands

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Content Workflow

| Content | How to Update |
|---------|---------------|
| Blog posts | Decap CMS at `/admin` or edit `src/content/blog/*.md` |
| Illustrations | Decap CMS or add to `src/content/illustrations/` |
| Projects | Decap CMS or edit `src/content/projects/*.md` |
| Books | Update Google Sheet → trigger Netlify rebuild |

## Important Notes
- Owner is not a coder — keep workflows simple
- Decap CMS provides visual editing (no Markdown knowledge needed)
- Site auto-deploys when changes are pushed to GitHub
- Footer is a "colophon" style — name, contact, one-liner (no separate About page)
