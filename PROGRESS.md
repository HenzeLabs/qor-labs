# PROGRESS.md — Qor Labs Redesign Phase Tracker

> **Claude: READ THIS before starting ANY work. Update status after completing each task.**

## Current Phase: 3 — Collection Page
## Last Updated: 2026-02-05
## Last Working Branch: main
## Dev Theme ID: 176271589540
## Preview: https://qorlabs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=176271589540

---

## Phase 1: Foundation ✅ COMPLETE (with corrections)

### Setup
- [x] Examine current theme structure (`ls` all directories, understand what exists)
- [x] Ensure `.env.shopify` exists and is in `.gitignore`
- [x] Set up Tailwind CSS compilation pipeline
- [x] Create `tailwind.config.js` with design tokens from DESIGN-SYSTEM.md
- [x] Create base CSS with custom properties (colors, typography, spacing)
- [x] Import Google Fonts: Instrument Serif + DM Sans

### Layout Foundation
- [x] Rebuild `layout/theme.liquid` with semantic HTML structure
- [x] Set up `<head>` with proper meta, fonts, CSS loading
- [x] Create base responsive container system
- [x] Set up CSS reset / normalize

### Rapha-Style CSS Overrides (Added 2026-02-05)
- [x] `rapha-overrides.css` — Comprehensive CSS to transform Dawn into Rapha aesthetic
- [x] Announcement bar: 11px uppercase tracked text, thin padding, black bg
- [x] Header: shrunk logo (90-110px), uppercase tracked nav (13px), hidden country selector, hidden dropdown carets
- [x] Global typography: proper font-family cascade for headings/body
- [x] Buttons: uppercase, tracked, no border-radius

### Hero Section Redesign (2026-02-05) — CORRECTED
- [x] **FINAL DESIGN**: Text OVERLAID on hero image, positioned bottom-left
- [x] Hero is now: full-bleed image with dark gradient overlay for text legibility
- [x] White text (Instrument Serif for headline) positioned absolute bottom-left
- [x] Single CTA button, clean minimal layout

### Deliverable
A clean, styled blank page that loads with correct fonts, colors, and base layout. No content sections yet — just the foundation.

**Status:** Foundation complete. Google Fonts loading. Tailwind working. CSS overrides applied via `rapha-overrides.css` to make Dawn theme match Rapha aesthetic. Verified at both 375px and 1440px breakpoints.

---

## Phase 2: Homepage ✅ COMPLETE (with corrections)

### Sections to Build
- [x] `section-hero-editorial.liquid` — Full-bleed hero with dynamic content
- [x] `section-trust-bar.liquid` — Shipping/warranty/support strip
- [x] `section-featured-collections.liquid` — Editorial collection grid
- [x] `section-product-spotlight.liquid` — Featured product storytelling block
- [x] `section-category-grid.liquid` — Shop by category
- [x] `section-brand-story.liquid` — About/story editorial block
- [x] `section-newsletter.liquid` — Email signup

### Templates
- [x] `templates/index.json` — Wire up all homepage sections in correct order

### Design Corrections Applied (2026-02-05)
Initial build had design drift — looked like generic Shopify, not Rapha. Fixed via CSS overrides:
- Header: logo too big (180px→90px), country selector visible, nav not uppercase/tracked
- Announcement bar: too bold, not subtle thin strip
- Hero: typography wasn't using Instrument Serif, gradient too heavy
- Secondary nav bar: was showing collection quicklinks (now hidden)

### Deliverable
Complete homepage with all sections pulling live Shopify data. No hardcoded content.

**Status:** All 7 homepage sections built, wired, and now properly styled with Rapha aesthetic. Verified visually at 375px mobile and 1440px desktop.

---

## Phase 3: Collection Page 🔄 UP NEXT

### Components
- [ ] `section-collection-header.liquid` — Collection title, description, image
- [ ] `section-collection-grid.liquid` — Filterable product grid
- [ ] `snippets/product-card.liquid` — Rapha-style product card component
- [ ] Filter/sort UI (Rapha-style clean dropdowns)
- [ ] Pagination component

### Templates
- [ ] `templates/collection.json`

### Deliverable
Collection page displaying products dynamically with sort/filter. Product cards match design system.

---

## Phase 4: Product Page ⬜ NOT STARTED

### Components
- [ ] `section-product-gallery.liquid` — Image gallery with thumbnails
- [ ] `section-product-info.liquid` — Title, price, variant selector, add-to-cart
- [ ] `section-product-details.liquid` — Accordion (specs, shipping, warranty)
- [ ] `section-related-products.liquid` — "You may also like" row
- [ ] `snippets/product-variant-selector.liquid` — Variant picker
- [ ] `snippets/quantity-selector.liquid` — +/- quantity input
- [ ] Add to cart AJAX functionality (vanilla JS)

### Templates
- [ ] `templates/product.json`

### Deliverable
Fully functional product page with gallery, variant selection, and add-to-cart.

---

## Phase 5: Supporting Pages ⬜ NOT STARTED

- [ ] `templates/page.about.json` — About Qor Labs
- [ ] `templates/page.contact.json` — Contact form
- [ ] `templates/page.json` — Generic page template
- [ ] `templates/blog.json` — Blog listing
- [ ] `templates/article.json` — Blog article
- [ ] `templates/cart.json` — Cart page
- [ ] Support pages: Shipping, Warranty, Manuals

### Deliverable
All supporting pages styled and functional.

---

## Phase 6: Header & Footer ⬜ NOT STARTED

- [ ] `sections/header.liquid` — Sticky header with mega menu
- [ ] `snippets/mega-menu.liquid` — Collection-based mega menu
- [ ] `snippets/mobile-menu.liquid` — Slide-out mobile navigation
- [ ] `snippets/cart-drawer.liquid` — Slide-out cart (AJAX)
- [ ] `sections/footer.liquid` — Full footer with nav, newsletter, legal
- [ ] Search functionality (predictive search)

### Deliverable
Complete navigation system, mobile menu, cart drawer, and footer.

---

## Phase 7: Polish ⬜ NOT STARTED

- [ ] Page load animations (subtle fade-in on scroll)
- [ ] Hover states on all interactive elements
- [ ] Smooth scroll behaviors
- [ ] Image loading states (blur-up or skeleton)
- [ ] 404 page styling
- [ ] Empty states (empty cart, no search results, empty collection)
- [ ] Announcement bar (optional, for promos)

### Deliverable
Polished, production-quality interactions and edge cases handled.

---

## Phase 8: QA & Launch ⬜ NOT STARTED

- [ ] Cross-browser testing: Chrome, Safari, Firefox, Edge
- [ ] Mobile testing: iOS Safari, Android Chrome
- [ ] Accessibility audit (WAVE tool or axe DevTools)
- [ ] SEO audit: meta tags, structured data, canonical URLs
- [ ] Performance audit: Lighthouse score 90+ on all pages
- [ ] GA4 + GTM verification (events still firing correctly)
- [ ] Final review with stakeholder
- [ ] Push to published theme
- [ ] Smoke test on live site

### Deliverable
Live site, fully functional, zero regressions.

---

## Notes & Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-02-05 | Keep Dawn's base.css alongside new theme.css | Gradual migration avoids breaking existing functionality while we build new Rapha-inspired sections |
| 2026-02-05 | Use Google Fonts instead of Shopify font picker | Design system specifies exact fonts (Instrument Serif + DM Sans) that aren't in Shopify's font library |
| 2026-02-05 | Completed Phase 2 Homepage | All 7 Rapha-style sections wired into index.json, pushed to dev theme, verified rendering at preview URL |
| 2026-02-05 | Created rapha-overrides.css | Design had drifted to "generic Shopify" feel. CSS override file applies Rapha aesthetics (tiny logo, uppercase tracked nav, subtle announcement bar, serif headlines) without modifying Dawn's base files |
| 2026-02-05 | Hide secondary collection nav via CSS | Collections should be in mega menu, not as toolbar. Used CSS `display:none` on `.header-collections` |
| 2026-02-05 | Redesigned hero to Rapha pattern | **Critical insight**: Rapha's hero has NO text overlay on image — text appears in a separate white section BELOW the image. This is the key to their editorial magazine feel. Changed `section-hero-editorial.liquid` to match. |
| 2026-02-05 | Hide dropdown carets on nav | Added CSS to hide `.icon-caret` SVGs in header for cleaner Rapha look |
| 2026-02-05 | **Homepage Visual QA Fixes (6 items)** | Fixed: (1) Hero text now overlaid on image bottom-left, not below; (2) Headline uses Instrument Serif mixed case; (3) Featured collections use clean text placeholders, not SVG; (4) Product spotlight uses text placeholder, not SVG; (5) Category grid uses 16:9 aspect ratio with text placeholders; (6) Announcement bar forced to #0A0A0A via CSS variable overrides |
| 2026-02-05 | **Reverse-engineered rapha.cc** | Created RAPHA-SOURCE-ANALYSIS.md with exact CSS values extracted from rapha.cc source. Rebuilt rapha-overrides.css with pixel-exact values: 64px header, 40px announcement bar, 14px/600/0.3px nav, 44px min-height buttons, 250ms transitions |
| 2026-02-05 | **Hero rebuilt with Rapha values** | Updated hero section: 14px/600/0.3px button, 8px 20px padding, 44px min-height, lighter overlay (0.3 max), 250ms transitions, 32px/16px mobile padding, 40px/32px desktop padding |
| 2026-02-06 | **RAPHA-SOURCE-ANALYSIS.md created** | Extracted actual computed styles from live rapha.cc using Playwright getComputedStyle(). Major discovery: Rapha nav is 16px/400/serif/normal-case (NOT 12px/500/sans/uppercase as assumed). Analysis file committed. **STOPPED HERE** — awaiting approval before rebuilding 8 files with correct values: rapha-overrides.css, header.liquid, section-hero-editorial.liquid, section-trust-bar.liquid, section-featured-collections.liquid, section-category-grid.liquid, product-card.liquid, footer.liquid |

