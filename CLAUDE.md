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
/sketches            → Gallery grid with lightbox
/projects            → Portfolio cards
/notes               → Post list (essays + book notes)
/notes/[slug]        → Individual post
/shelf               → Reading list (books hardcoded in src/pages/shelf.astro;
                       /books redirects here; Google Sheets integration pending)
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
| Notes/blog posts | Edit `src/content/blog/*.md` (published at `/notes`) |
| Illustrations | Add to `src/content/illustrations/` |
| Projects | Edit `src/content/projects/*.md` |
| Shelf (books) | Edit the `books` array in `src/pages/shelf.astro` |

## Book Notes Workflow

When the owner shares a new book, publish two things:

1. **Shelf entry** — add to the `books` array in `src/pages/shelf.astro`:
   `title`, `author`, `rating` (1–5 stars, rounded from Goodreads if asked),
   `ratingNote` (e.g. `"4.02 on Goodreads"`), `notes` (1–2 sentence blurb),
   `dateRead` (`YYYY-MM-DD`; renders as "May 2026"), optional `referrer`,
   and `reportSlug` linking to the full notes (renders "Read the
   notes →").
2. **Full book notes** (if the owner wrote them) — copy
   `templates/book-notes.md` to `src/content/blog/<book-slug>.md` and
   follow its structure: opening take → Who should read it → Related books
   → How this book changed me → Top quotes → Summary of key concepts. Set
   `tag: "Book Notes"` so the kicker label shows on `/notes` and the post
   page. Keep the `description` to one short sentence.

Editing rules: light copyedit only — fix typos, smooth telegraphic notes
into sentences, bold the lead-in phrase of each takeaway. Keep the owner's
"vs." constructions as written. No em dashes in
prose: use periods, commas, colons, or parentheses instead (quote
attributions like "— Author" are the one exception). Preserve the owner's
voice and cut nothing without asking. Show what was edited so the owner
can review. Owner supplies: title, author, month read, notes text in any
form (rough is fine), and rating — or asks to pull Goodreads.

Prose typography is settled — don't change without asking: article title
52px; section headings 27px bold; subheadings 21px bold; body 18px; list
titles on Shelf and Notes 27px bold (`.prose` and `.list-title` styles in
`src/styles/global.css`; the global `h2` rule is hero-scale and overrides
Tailwind text-size utilities, so list/article headings need these classes).

## Pending Tasks
- [ ] Implement Google Sheets integration for books
- [ ] Add real content (illustrations, projects, blog posts)
- [ ] Custom domain setup

## Important Notes
- Owner is not a coder by trade — keep workflows simple
- Site auto-deploys via GitHub Pages when changes are pushed to main
- Footer is a "colophon" style — name, contact, Easter egg

## Image Editing Rules
- **NEVER overwrite original image files.** When editing an illustration photo (crop, brighten, etc.), write the result to a new file (or edit a copy) and keep the original untouched until the owner approves the result.
- Show the edited version to the owner for approval before replacing anything or committing.
- Gallery uniformity: match paper-white to ~240 brightness (measured via histogram 90th percentile); the site-wide CSS filter in `src/styles/global.css` handles the rest.
