# PROGRESS.md — Qor Labs Redesign Phase Tracker

> **Claude: READ THIS before starting ANY work. Update status after completing each task.**

## Current Phase: 2 — Homepage
## Last Updated: 2026-02-05
## Last Working Branch: main
## Dev Theme ID: 176271589540
## Preview: https://qorlabs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=176271589540

---

## Phase 1: Foundation ✅ COMPLETE

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

### Deliverable
A clean, styled blank page that loads with correct fonts, colors, and base layout. No content sections yet — just the foundation.

**Status:** Foundation complete. Google Fonts (Instrument Serif + DM Sans) loading. Tailwind CSS compilation working. CSS custom properties defined. Theme pushed to dev theme 176271589540.

---

## Phase 2: Homepage 🔄 IN PROGRESS

### Sections to Build
- [x] `section-hero-editorial.liquid` — Full-bleed hero with dynamic content
- [x] `section-trust-bar.liquid` — Shipping/warranty/support strip
- [x] `section-featured-collections.liquid` — Editorial collection grid
- [x] `section-product-spotlight.liquid` — Featured product storytelling block
- [x] `section-category-grid.liquid` — Shop by category
- [x] `section-brand-story.liquid` — About/story editorial block
- [x] `section-newsletter.liquid` — Email signup

### Templates
- [ ] `templates/index.json` — Wire up all homepage sections in correct order

### Deliverable
Complete homepage with all sections pulling live Shopify data. No hardcoded content.

---

## Phase 3: Collection Page ⬜ NOT STARTED

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
| 2026-02-05 | **STOPPED MID-TASK:** All 7 homepage sections created. Next step: wire up `templates/index.json` with section order, then test/push | User requested stop. Sections exist in /sections/ but index.json still references Dawn defaults |

