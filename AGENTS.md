# Meenal Balar's Personal Website

## Project Overview
A personal portfolio website with four main sections: illustrations gallery, projects portfolio, personal blog, and book/article notes. The site reflects two sides of who I am: an artist, writer, and editor with a love for vintage Indian editorial design—the kind of zine you'd find at an old Indian cafe—and a fairly new coder exploring technology.

## Tech Stack
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS v4
- **CMS:** Decap CMS (visual editor at `/admin`)
- **Hosting:** GitHub Pages
- **Books data:** Google Sheets (fetched at build time) - not yet implemented

## Design Direction

### Aesthetic
- Old vintage Indian editorial design
- Literary, sophisticated, curator energy
- Warm and personal with high-contrast moments
- References: vintage Indian print shops, literary zines, editorial typography

### Color Palette
| Role | Color |
|------|-------|
| Background | Warm cream (`#FAF6F1`) |
| Background alt | Deeper cream (`#F0EBE3`) |
| Dark panel | Near black (`#1A1A1A`) |
| Primary text | Dark (`#1A1A1A`) |
| Muted text | Gray (`#555555`) |
| Accent | Vibrant orange (`#E85D30`) |

### Typography
- **Headlines:** Cormorant Garamond (elegant, vintage serif with Indian print-shop energy)
- **Body/UI:** Lato (clean humanist sans - Gill Sans alternative)
- **Labels/Code:** JetBrains Mono (typewriter energy)

### Layout
- Split-screen hero: name on left, dark navigation panel on right
- Numbered navigation (01, 02, 03, 04)
- Full-bleed featured sections
- High contrast between warm cream and dark panels

### Easter Egg: Two Sides of Me
The site has a hidden Easter egg that reflects my dual identity:
- **Default (Editorial Mode):** The vintage Indian editorial aesthetic—warm, literary, artistic
- **Terminal Mode:** A coder's perspective—green text, monospace font, CRT scanlines

Triggered by a bouncing 👾 in the footer:
- Click 👾 to enter terminal mode (the coder in me)
- Click 📰 to return to editorial mode (the artist/writer in me)

## Site Structure

```
/                    → Split-screen hero with side navigation
/illustrations       → Gallery grid with lightbox
/projects            → Portfolio cards
/blog                → Post list
/blog/[slug]         → Individual post
/books               → Reading list from Google Sheets
/admin               → Decap CMS
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
| Books | Update Google Sheet → trigger rebuild |

## Pending Tasks
- [ ] Implement Google Sheets integration for books
- [ ] Add real content (illustrations, projects, blog posts)
- [ ] Custom domain setup

## Important Notes
- Owner is not a coder by trade — keep workflows simple
- Site auto-deploys via GitHub Pages when changes are pushed to main
- Footer is a "colophon" style — name, contact, Easter egg
