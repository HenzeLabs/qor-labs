# DESIGN-SYSTEM.md — Qor Labs Visual Language

> Rapha-inspired design system translated for premium laboratory equipment.

---

## Rapha Design Principles → Qor Labs Translation

| Rapha Does | Qor Labs Equivalent |
|-----------|---------------------|
| Full-bleed cycling photography | Full-bleed lab environment / equipment photography |
| Storytelling about rides & gear | Storytelling about applications, precision, and reliability |
| Minimal text on heroes | Minimal text on heroes — let equipment imagery speak |
| Uppercase tracked labels | Same — used for collection names, CTAs, overlines |
| Serif headlines | Same — Instrument Serif for display text |
| Neutral palette with rare accent | Same — warm neutrals with deep green accent |
| Editorial "guide" content | Buying guides, application guides, "how to choose" content |
| Rapha Cycling Club membership | N/A (skip for now) |
| Product reviews inline | Product reviews below fold, clean layout |
| Color swatch selectors | N/A (lab equipment is not color-variant) |
| Size selectors | Model/variant selectors where applicable |

---

## Layout Grid

```
Desktop (1440px+):   12-column grid, 80px max gutters, 1280px max content width
Laptop (1024-1439):  12-column grid, 40px gutters
Tablet (768-1023):   8-column grid, 24px gutters
Mobile (375-767):    4-column grid, 16px gutters

Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Wide Container: max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8
Full Bleed: w-full (no container, edge-to-edge)
```

---

## Section Patterns (Inspired by Rapha Homepage)

### 1. Editorial Hero
- **Full viewport width, 70-85vh height**
- Single background image, `object-cover`, `object-center`
- Dark overlay gradient (bottom 40%) for text legibility
- Text positioned bottom-left on desktop, centered on mobile
- Overline: collection name, uppercase, tracked
- Headline: Instrument Serif, 48-72px, white
- CTA: Primary button OR text link with arrow
- Image source: Shopify section setting (`image_picker`)

### 2. Trust Bar
- Off-white background (`--color-surface`)
- Horizontal layout: 4 items evenly spaced
- Each item: small icon (24px SVG) + bold label + description
- Mobile: 2x2 grid or horizontal scroll
- Content examples:
  - "Free Shipping" / "On orders over $X"
  - "2-Year Warranty" / "On all instruments"
  - "Ships in 24hrs" / "Most items in stock"
  - "Expert Support" / "Lab specialists on call"

### 3. Featured Collections (Rapha "Shop by Category" pattern)
- Section title: uppercase overline + serif headline
- Grid: 2 or 3 columns on desktop
- Each card: 2:3 aspect ratio image, collection title below
- Title: uppercase, tracked, small
- Hover: subtle image scale + opacity shift
- Links to collection pages dynamically

### 4. Product Spotlight
- Split layout: image left (60%), content right (40%)
- Or: full-bleed image with content overlay
- Highlights one featured product or collection
- Pulls from Shopify featured collection or manual product pick
- Serif headline, body description, CTA button

### 5. Category Grid (Alternative to Featured Collections)
- 2-column or 3-column grid
- Each cell: square or 4:3 image with category name overlay
- Overlay: semi-transparent dark, white text
- Uppercase tracked category labels
- Links to collection handles

### 6. Brand Story Block
- Split: editorial image + text content
- Or: centered text with generous padding
- Serif headline, sans-serif body
- Optional CTA to About page

### 7. Newsletter Signup
- Clean, minimal
- Off-white or dark background
- Headline + brief description + email input + button
- Single row on desktop, stacked on mobile

---

## Product Card Anatomy

```
┌─────────────────────────┐
│                         │
│                         │
│      Product Image      │  ← 2:3 aspect ratio
│      (from Shopify)     │  ← hover: scale(1.02), 0.4s ease
│                         │
│                         │
├─────────────────────────┤
│  Product Title           │  ← DM Sans, 14px, font-medium, text-primary
│  $XXX.XX                 │  ← DM Sans, 14px, font-normal, text-secondary
└─────────────────────────┘

NO: badges, sale tags, star ratings, "quick add" buttons on card face
YES: clean, confident, let the product image sell
```

---

## Product Page Layout

```
┌──────────────────────────────────────────────────┐
│  ┌─────────────────────┐  ┌────────────────────┐ │
│  │                     │  │  OVERLINE           │ │
│  │                     │  │  Product Title      │ │
│  │   Main Product      │  │  $Price             │ │
│  │   Image             │  │                     │ │
│  │                     │  │  Description...     │ │
│  │                     │  │                     │ │
│  │                     │  │  [Variant Selector] │ │
│  │                     │  │  [Qty] [ADD TO CART]│ │
│  ├─────────────────────┤  │                     │ │
│  │ thumb │ thumb │ thumb│  │  ▸ Specifications   │ │
│  └─────────────────────┘  │  ▸ Shipping Info    │ │
│                           │  ▸ Warranty          │ │
│                           └────────────────────┘ │
├──────────────────────────────────────────────────┤
│  YOU MAY ALSO LIKE                                │
│  [card] [card] [card] [card]                      │
└──────────────────────────────────────────────────┘

Desktop: 55/45 split (image / info)
Mobile: Stacked — images on top, info below
```

---

## Animation & Interaction Guidelines

```css
/* Standard transition */
transition: all 0.3s ease;

/* Image hover (product cards, collection cards) */
transform: scale(1.02);
transition: transform 0.4s ease;

/* Fade in on scroll (sections) */
opacity: 0 → 1;
transform: translateY(20px) → translateY(0);
transition: opacity 0.6s ease, transform 0.6s ease;

/* Button hover */
background-color transition: 0.2s ease;

/* NO: bounce, shake, excessive parallax, scroll-jacking */
/* YES: subtle, purposeful, confidence-building */
```

---

## Image Guidelines

| Context | Aspect Ratio | Min Width | Format |
|---------|-------------|-----------|--------|
| Hero | 16:9 or full viewport | 1920px | WebP/JPEG |
| Collection Card | 2:3 or 16:9 | 800px | WebP/JPEG |
| Product Card | 2:3 | 600px | WebP/JPEG |
| Product Gallery | 1:1 or 4:5 | 1000px | WebP/JPEG |
| Thumbnail | 1:1 | 200px | WebP/JPEG |

**Always use Shopify's `image_url` filter with srcset. Never hotlink external images.**

---

## Responsive Breakpoints (Tailwind defaults)

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Design for **375px first**, then scale up.
