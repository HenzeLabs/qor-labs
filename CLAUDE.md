# CLAUDE.md — Qor Labs Shopify Redesign

> **READ THIS ENTIRE FILE BEFORE EVERY TASK. DO NOT SKIP SECTIONS.**

## 🎯 Project Mission

Total website redesign of **qorlabs.com** (Shopify store: `qor-labs.myshopify.com`) — a laboratory equipment e-commerce brand selling centrifuges, microscopes, slide warmers, differential counters, and pipette pumps.

The design language is inspired by **Rapha (rapha.cc)** — a premium cycling brand known for editorial-quality imagery, cinematic full-bleed hero sections, minimal typography, restrained color palettes, and storytelling-driven product presentation. We are NOT copying Rapha. We are translating their design philosophy into a premium laboratory equipment context.

**The brand positioning**: Qor Labs is the premium, modern, trustworthy source for laboratory essentials. Think "if Rapha sold lab equipment."

---

## 🚫 HARD RULES — NEVER VIOLATE THESE

1. **NEVER hardcode product data.** All products, collections, prices, images, and inventory MUST come from Shopify's GraphQL Admin API or Storefront API dynamically.
2. **NEVER hardcode URLs.** All links to products, collections, and pages must be generated from Shopify data (handle-based routing).
3. **NEVER remove or modify existing Shopify functionality** (cart, checkout, customer accounts) without explicit approval.
4. **NEVER create placeholder/dummy content** that ships to production. Use Shopify data or show nothing.
5. **NEVER install new npm packages or Shopify apps** without asking first.
6. **NEVER modify the checkout flow.** Shopify controls checkout.
7. **ALWAYS use Shopify Liquid objects** (`product.title`, `collection.title`, `product.featured_image`, etc.) — never static strings.
8. **ALWAYS preserve SEO** — existing meta titles, descriptions, and URL handles must not break.
9. **ALWAYS test on mobile first.** Every component must work at 375px width minimum.
10. **ALWAYS commit working code.** Never commit broken templates.

---

## 📍 Project Details

| Detail | Value |
|--------|-------|
| **Repo** | https://github.com/HenzeLabs/qor-labs |
| **Local working dir** | `/Users/laurenadmin/_Projects/qor-labs` |
| **Shopify store** | `qor-labs.myshopify.com` |
| **Dev theme ID** | `176271589540` (connected to `qor-labs/main` branch) |
| **Preview URL** | `https://qorlabs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=176271589540` |
| **API version** | `2026-01` |
| **Admin API credentials** | Stored in `.env.shopify` (NEVER commit this file) |

### Environment File (`.env.shopify`)

This file exists locally and is in `.gitignore`. It contains:
- `SHOPIFY_CLI_THEME_TOKEN` (Admin API access token)
- `SHOPIFY_FLAG_STORE` (store URL)

**NEVER read, print, log, or commit the contents of `.env.shopify`.** If you need to confirm the API works, test with a simple GraphQL query — don't echo the token.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Platform | Shopify (Online Store 2.0) |
| Theme Language | Liquid + JSON templates |
| Styling | Tailwind CSS (compiled, not CDN) |
| Data | Shopify Storefront API (GraphQL) + Liquid objects |
| Admin API | Shopify Admin API (GraphQL) v2026-01 — for data management tasks ONLY |
| Version Control | Git + GitHub (`HenzeLabs/qor-labs`) |
| Dev Tooling | Shopify CLI (v3.x) |
| Deployment | Push to dev theme ID `176271589540` |
| Analytics | GA4 + GTM (do NOT touch existing setup) |

### Shopify CLI Commands

```bash
# Start local dev server (connected to dev theme)
shopify theme dev --store qor-labs.myshopify.com --theme 176271589540

# Push to dev theme
shopify theme push --theme 176271589540 --store qor-labs.myshopify.com

# Pull current dev theme
shopify theme pull --theme 176271589540 --store qor-labs.myshopify.com

# Push as NEW unpublished theme (for testing separately)
shopify theme push --unpublished --store qor-labs.myshopify.com

# Check theme info
shopify theme info
```

### Git Remote

```bash
git remote -v
# origin  https://github.com/HenzeLabs/qor-labs.git (fetch)
# origin  https://github.com/HenzeLabs/qor-labs.git (push)
```

---

## 📁 Shopify Theme File Structure

```
├── assets/              # CSS, JS, images, fonts
│   ├── theme.css        # Compiled Tailwind output
│   └── theme.js         # Main JS bundle
├── config/
│   ├── settings_schema.json   # Theme settings definitions
│   └── settings_data.json     # Theme settings values (DO NOT manually edit)
├── layout/
│   └── theme.liquid           # Master layout wrapper
├── locales/                   # Translation files
├── sections/                  # Reusable page sections
├── snippets/                  # Reusable Liquid partials
├── templates/                 # Page templates (JSON format for OS 2.0)
│   ├── index.json
│   ├── product.json
│   ├── collection.json
│   ├── page.json
│   ├── blog.json
│   ├── article.json
│   ├── cart.json
│   └── customers/
└── tailwind.config.js         # Tailwind configuration
```

### File Naming Conventions

- Sections: `section-[name].liquid` (e.g., `section-hero-editorial.liquid`)
- Snippets: `[name].liquid` (e.g., `product-card.liquid`, `collection-card.liquid`)
- Templates: Standard Shopify JSON templates

---

## 🎨 Design System — "Rapha for Lab Equipment"

### Design Philosophy

Rapha's design succeeds because of:
- **Editorial storytelling** — full-bleed cinematic imagery with minimal text overlay
- **Extreme restraint** — limited color palette, generous whitespace, no visual clutter
- **Typography hierarchy** — uppercase tracking for labels, serif/elegant display for headlines
- **Section rhythm** — alternating full-width heroes with grid-based product sections
- **Confidence in product** — let imagery and quality speak; no desperate sales tactics

Translate this to lab equipment:
- Hero sections showing lab environments, researchers at work, equipment in use
- Clean product photography on neutral backgrounds
- Trust signals woven naturally (warranty, shipping, quality) — not screaming banners
- Educational content (buying guides, application stories) treated with editorial respect

### Typography

```css
/* Primary — Headlines & Display */
--font-display: 'Instrument Serif', Georgia, serif;

/* Secondary — Body, UI, Navigation */
--font-body: 'DM Sans', -apple-system, sans-serif;

/* Accent — Labels, Badges, Overlines */
--font-accent: 'DM Sans', sans-serif; /* uppercase, tracked */
```

**Typography Scale:**
- Overline/Label: 11px, uppercase, tracking 0.15em, font-medium (DM Sans)
- Body Small: 14px, regular
- Body: 16px, regular, line-height 1.65
- Body Large: 18px, regular
- H4: 20px, medium (DM Sans)
- H3: 24px, regular (Instrument Serif)
- H2: 36px, regular (Instrument Serif)
- H1: 48-64px, regular (Instrument Serif)
- Hero Display: 72-96px, light (Instrument Serif)

### Color Palette

```css
:root {
  /* Core */
  --color-black: #0A0A0A;
  --color-white: #FFFFFF;
  --color-off-white: #F7F7F5;
  --color-warm-gray: #E8E6E1;
  
  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B6B6B;
  --color-text-tertiary: #9B9B9B;
  --color-text-inverse: #FFFFFF;
  
  /* Brand Accent (subtle, scientific) */
  --color-accent: #2D5A3D;          /* Deep laboratory green */
  --color-accent-light: #3A7A52;
  --color-accent-hover: #1E4530;
  
  /* UI */
  --color-border: #E0DED9;
  --color-border-dark: #C4C2BD;
  --color-surface: #FAFAF8;
  --color-surface-elevated: #FFFFFF;
  
  /* Feedback */
  --color-success: #2D5A3D;
  --color-error: #C23B22;
  --color-warning: #D4A843;
  --color-info: #3B6FA0;
}
```

### Spacing System

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
--space-5xl: 8rem;     /* 128px */

/* Section padding (Rapha uses generous vertical space) */
--section-padding-mobile: 3rem;     /* 48px */
--section-padding-desktop: 6rem;    /* 96px */
```

### Component Patterns

**Buttons:**
```
Primary:   bg-[#0A0A0A] text-white uppercase tracking-[0.15em] text-[13px] font-medium px-8 py-4 hover:bg-[#333]
Secondary: border border-[#0A0A0A] text-[#0A0A0A] uppercase tracking-[0.15em] text-[13px] font-medium px-8 py-4 hover:bg-[#0A0A0A] hover:text-white
Text Link: text-[#0A0A0A] underline underline-offset-4 text-[13px] uppercase tracking-[0.1em] hover:opacity-70
```

**Product Cards (Rapha-style):**
- Clean white/neutral background
- Product image dominant (2:3 aspect ratio)
- Title below image: DM Sans, 14px, medium
- Price: DM Sans, 14px, regular, text-secondary
- Color swatches as small circles (if applicable)
- Hover: subtle image scale (1.02) with transition
- NO badges, NO "sale" screaming, NO star ratings on cards

**Collection Cards:**
- Full-bleed editorial image (16:9 or 2:3)
- Collection name as uppercase overline
- Brief tagline in serif
- CTA as text link

**Trust Bar:**
- Horizontal strip, off-white background
- 3-4 items: Free Shipping threshold, Warranty, Fast Processing, Expert Support
- Minimal icons, uppercase labels, small text descriptions
- NO emojis, NO exclamation marks

---

## 📄 Page Architecture

### Homepage (`templates/index.json`)

```
1. [HERO — EDITORIAL]       Full-bleed image, minimal text, CTA
2. [TRUST BAR]               Shipping / Warranty / Support strip
3. [FEATURED COLLECTIONS]    2-3 collection cards, editorial grid
4. [PRODUCT SPOTLIGHT]       Featured product with storytelling
5. [CATEGORY GRID]           Shop by category (image + label)
6. [ABOUT / STORY BLOCK]     Brand story editorial section
7. [NEWSLETTER]              Email signup, clean and simple
```

### Collection Page (`templates/collection.json`)

```
1. [COLLECTION HEADER]      Collection title + description + image
2. [FILTER BAR]             Sorting + filters (clean, Rapha-style dropdowns)
3. [PRODUCT GRID]           3-col desktop, 2-col tablet, 1-col mobile
4. [PAGINATION]             Simple prev/next or load more
```

### Product Page (`templates/product.json`)

```
1. [PRODUCT GALLERY]        Left side — image gallery with thumbnails
2. [PRODUCT INFO]           Right side — title, price, description, add-to-cart
3. [PRODUCT DETAILS]        Accordion: specs, shipping, warranty
4. [RELATED PRODUCTS]       "You may also like" product row
5. [RECENTLY VIEWED]        Customer's recently viewed items
```

### About Page (`templates/page.about.json`)

```
1. [HERO — EDITORIAL]       Full-bleed brand image
2. [BRAND STORY]            Editorial content with inline images
3. [VALUES / DIFFERENTIATORS] Grid of brand values
4. [CTA]                     Shop or Contact
```

---

## 🔗 Shopify Liquid Patterns — USE THESE

### Product Data (NEVER hardcode)

```liquid
{{ product.title }}
{{ product.price | money }}
{{ product.compare_at_price | money }}
{{ product.description }}
{{ product.featured_image | image_url: width: 800 }}
{{ product.url }}
{{ product.vendor }}
{{ product.type }}
{% for variant in product.variants %}
  {{ variant.title }} — {{ variant.price | money }}
{% endfor %}
```

### Collection Data

```liquid
{{ collection.title }}
{{ collection.description }}
{{ collection.image | image_url: width: 1200 }}
{{ collection.url }}
{{ collection.products_count }}
{% for product in collection.products %}
  {% render 'product-card', product: product %}
{% endfor %}
```

### Image Handling

```liquid
{%- comment -%} ALWAYS use image_url with srcset for responsive images {%- endcomment -%}

{{ image | image_url: width: 800 }}

<img
  src="{{ image | image_url: width: 800 }}"
  srcset="
    {{ image | image_url: width: 400 }} 400w,
    {{ image | image_url: width: 800 }} 800w,
    {{ image | image_url: width: 1200 }} 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="{{ image.alt | escape }}"
  loading="lazy"
  width="{{ image.width }}"
  height="{{ image.height }}"
>
```

### Section Schema Pattern (OS 2.0)

```liquid
{% schema %}
{
  "name": "Section Name",
  "tag": "section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Default Heading"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "image_picker",
      "id": "image",
      "label": "Background Image"
    }
  ],
  "presets": [
    {
      "name": "Section Name"
    }
  ]
}
{% endschema %}
```

---

## 🛍️ Qor Labs Product Catalog

### Collections (from current Shopify store)

| Collection | Handle | Notes |
|-----------|--------|-------|
| Centrifuges | centrifuges | Core product line |
| Mini Centrifuges | mini-centrifuges | Subset of centrifuges |
| Test Tube Centrifuges | test-tube-centrifuges | Subset of centrifuges |
| Slide & Petri Dish Warmers | slide-and-petri-dish-warmers | |
| Differential Counters | differential-counters | |
| Microscopes | microscopes | |
| Lab Instruments | lab-instruments | Broad catch-all |
| Pipette Pumps | pipette-pumps | |

### Navigation Structure

**Header:**
```
Shop → Mega menu with all collections
About → /pages/about-qor-labs
Support → Dropdown: Shipping & Returns, Warranty, User Manuals, Contact
Blog → /blogs/news
```

**Footer:**
```
Shop: All collections listed
Support: Shipping, Returns, Warranty, Manuals, Contact
Company: About, Blog
Legal: Privacy, Terms
```

---

## 🔄 Workflow & Git Practices

### Branch Strategy

```
main              → Connected to dev theme 176271589540 (preview at qorlabs.com)
feature/[name]    → Individual features branched from main
  feature/hero-section
  feature/product-page
  feature/collection-page
  feature/header-nav
```

**Important:** The `main` branch is connected to the dev/preview theme, NOT the live published theme. This is safe to push to for testing.

### Commit Messages

```
feat: add editorial hero section with dynamic collection data
fix: product card image aspect ratio on mobile
style: update typography scale for h2 elements
refactor: extract product-card snippet from collection template
chore: update Tailwind config with design tokens
```

### Development Workflow

1. Pull latest from `main`
2. Create feature branch (or work on `main` for small changes)
3. Build in local dev with `shopify theme dev --store qor-labs.myshopify.com --theme 176271589540`
4. Test mobile + desktop at local dev URL
5. Commit with descriptive message
6. Push to GitHub: `git push origin main` (or feature branch)
7. Push to Shopify dev theme: `shopify theme push --theme 176271589540`
8. Verify at preview URL: `https://qorlabs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=176271589540`

---

## ✅ Quality Checklist — RUN BEFORE EVERY COMMIT

- [ ] All product data comes from Liquid objects (zero hardcoded strings)
- [ ] Images use `image_url` with srcset and lazy loading
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] Section has proper `{% schema %}` with customizable settings
- [ ] No console errors in browser dev tools
- [ ] Buttons and links have hover states
- [ ] Text is readable (contrast ratio 4.5:1 minimum)
- [ ] Page loads in under 3 seconds on throttled connection
- [ ] No broken Liquid objects (check for "undefined" or empty output)
- [ ] Accessibility: all images have alt text, buttons are focusable

---

## 📋 Phase Plan

See **PROGRESS.md** for detailed phase tracking.

**Phase 1:** Foundation — Layout, theme.liquid, Tailwind, typography, colors
**Phase 2:** Homepage — Hero, trust bar, featured collections, product spotlight
**Phase 3:** Collection Page — Grid, filters, product cards
**Phase 4:** Product Page — Gallery, info, specs, related products
**Phase 5:** Supporting Pages — About, Contact, Blog, Support pages
**Phase 6:** Header & Footer — Navigation, mega menu, mobile menu
**Phase 7:** Polish — Animations, micro-interactions, performance optimization
**Phase 8:** QA & Launch — Cross-browser, mobile, accessibility, SEO audit

---

## ⚠️ Anti-Drift Reminders

Read these if you feel yourself going off track:

1. **You are building a Shopify Liquid theme, not a React app.** No frameworks. Liquid + Tailwind + vanilla JS only.
2. **Every piece of text the customer sees must come from Shopify.** Product titles, prices, descriptions, collection names — ALL from the API/Liquid objects.
3. **The design is Rapha-inspired, not Rapha-copied.** We're selling lab equipment to scientists, educators, and clinics — not cycling jerseys. Translate the aesthetic, don't replicate the content.
4. **Keep it simple.** Rapha succeeds because of restraint. When in doubt, remove something.
5. **Mobile first.** Always. Build mobile, then scale up.
6. **Check PROGRESS.md** before starting work. Know what phase you're in and what's done.
7. **If you're unsure about anything, ASK.** Don't guess and drift.
