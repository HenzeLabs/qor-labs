# RAPHA.CC Source Analysis — Computed Styles

> **Extracted from live site on 2026-02-05 using Playwright getComputedStyle()**
> This is the source of truth for rebuilding Qor Labs sections.

---

## 1. FONT FAMILIES

Rapha uses 4 custom font families:

| Font | Usage | Our Equivalent |
|------|-------|----------------|
| `"Rapha Sans Condensed"` | Headings, buttons, nav labels, section titles | `'DM Sans', sans-serif` |
| `"Rapha Serif Head"` | Hero subheadings, editorial body | `'Instrument Serif', serif` |
| `"Rapha Serif Text"` | Body text, footer links, descriptions | `'DM Sans', sans-serif` |
| `"Rapha Sans Numerals"` | Prices | `'DM Sans', sans-serif` |

**Font weights available:**
- Rapha Sans Condensed: 400, 600, 700
- Rapha Serif Text: 400, 600
- Rapha Serif Head: 400

---

## 2. ANNOUNCEMENT BAR

**Computed styles:**
```css
.announcement-bar {
  height: 40px;
  min-height: 40px;
  padding: 12px;
  background-color: rgb(0, 0, 0);       /* #000000 */
  color: rgb(255, 255, 255);            /* #FFFFFF */
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: uppercase;
  line-height: 14px;
  text-align: center;
  z-index: 6;
}
```

**Qor Labs translation:**
```css
.announcement-bar {
  height: 40px;
  min-height: 40px;
  padding: 12px;
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: uppercase;
  line-height: 14px;
  text-align: center;
}
```

---

## 3. HEADER

**Computed styles:**
```css
header {
  height: 104px;  /* includes announcement bar */
  padding: 0px;
  background-color: transparent;
}

/* Main header row (without announcement) */
.header-main {
  height: 64px;
  display: flex;
  align-items: center;
}
```

### Navigation Links

**Computed styles (desktop nav):**
```css
.nav-link {
  font-family: "Rapha Serif Text", serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;  /* NOT uppercase! */
  color: rgb(0, 0, 0);
  line-height: normal;
  text-decoration: none;
}
```

**Note:** Rapha's main nav uses **serif text, sentence case, 16px** — NOT uppercase sans-serif. This is different from what I assumed earlier.

**Qor Labs translation:**
```css
.header__menu-item {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
  color: #000000;
  text-decoration: none;
}
```

### Logo
```css
.logo img {
  /* Rapha logo is roughly 100-120px wide, 30-40px tall */
  max-height: 32px;
  width: auto;
}
```

---

## 4. TYPOGRAPHY SCALE

### Hero Heading (H1)
```css
h1 {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 64px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  line-height: 62px;
  color: rgb(0, 0, 0);
}
```

### Section Heading (H2)
```css
h2 {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  line-height: 32px;
  color: rgb(0, 0, 0);
}
```

### Category/Card Heading (H3)
```css
h3 {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  line-height: 24px;
}
```

### Body Text (Hero subtitle, descriptions)
```css
.body-text {
  font-family: "Rapha Serif Head", serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 36px;  /* 1.5 ratio */
  color: rgb(0, 0, 0);
}
```

### Small Body Text (Trust bar descriptions, footer)
```css
.body-small {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;  /* 1.75 ratio */
}
```

### Footer Heading
```css
.footer-heading {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}
```

### Footer Link
```css
.footer-link {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  font-weight: 600;
  color: rgb(0, 0, 0);
}
```

---

## 5. BUTTONS

### Primary Button (CTA)
```css
.button-primary {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: uppercase;

  padding: 12px;
  min-height: 40px;
  min-width: 0px;  /* No minimum */

  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: 0px none;
  border-radius: 0px;

  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-primary:hover {
  background-color: #FA3C6E;  /* Rapha pink accent */
}
```

**Qor Labs translation:**
```css
.button-primary {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: uppercase;

  padding: 12px 20px;
  min-height: 40px;

  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 0;

  cursor: pointer;
  text-decoration: none;
}

.button-primary:hover {
  background-color: #2D5A3D;  /* Lab green accent */
}
```

---

## 6. SPACING & LAYOUT

### Container/Main
```css
main {
  max-width: none;  /* Full width */
  padding: 0;
  margin: 0 32px;   /* 32px side margins */
}
```

### Trust Bar Section
```css
.trust-bar {
  display: grid;
  gap: 24px;
  padding: 0;
}

.trust-bar-item {
  display: flex;
  gap: 16px;
}
```

### Product Grid
```css
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
```

### Section Spacing
```css
/* Typical section padding */
section {
  padding: 32px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Section header margin */
.section-header {
  margin-bottom: 24px;  /* mobile */
  margin-bottom: 32px;  /* desktop */
  text-align: center;
}
```

---

## 7. COLORS

### Core Palette
```css
:root {
  /* Primary */
  --rapha-black: #000000;       /* rgb(0, 0, 0) */
  --rapha-white: #FFFFFF;       /* rgb(255, 255, 255) */

  /* Accent */
  --rapha-pink: #FA3C6E;        /* Hover states */

  /* Grays */
  --rapha-gray-light: #F5F5F5;  /* Placeholder backgrounds */
  --rapha-gray-border: rgba(0, 0, 0, 0.1);

  /* Text */
  --rapha-text: #000000;
  --rapha-text-inverse: #FFFFFF;
}
```

### Qor Labs Color Translation
```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-accent: #2D5A3D;       /* Lab green (replaces pink) */
  --color-accent-hover: #1E4530;
  --color-gray-light: #F5F5F5;
  --color-border: rgba(0, 0, 0, 0.1);
}
```

---

## 8. RESPONSIVE BREAKPOINTS

From CSS analysis:
```css
/* Mobile first - default */
/* No media query */

/* Tablet */
@media screen and (min-width: 768px) { }

/* Desktop */
@media screen and (min-width: 992px) { }

/* Large desktop */
@media screen and (min-width: 1200px) { }
```

### Key responsive changes:
- **Mobile (< 768px):**
  - Side margins: 16px
  - Gap in grids: 16px
  - H2: 24px

- **Desktop (≥ 992px):**
  - Side margins: 32px
  - Gap in grids: 32px
  - H2: 32px

---

## 9. TRANSITIONS & ANIMATIONS

```css
/* Standard transition for hover states */
transition: filter 0.5s ease-out;       /* Images */
transition: opacity 0.25s ease-in-out;  /* Icons, buttons */
transition: transform 0.3s ease-out;    /* Slide animations */
transition: background-color 250ms ease-in-out; /* Button backgrounds */
```

### Image Hover Effect
```css
.card-image {
  transition: filter 0.5s ease-out;
}

.card:hover .card-image {
  filter: brightness(0.95);  /* Subtle darken */
}
```

---

## 10. PRODUCT CARD (from collection page)

**Computed styles:**
```css
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ~348px;  /* Flexible based on grid */
}

.product-card-image {
  aspect-ratio: 1 / 1;  /* Square */
  background-color: #F5F5F5;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
}

.product-card-info {
  padding: 0 24px;
  width: 100%;
  text-align: center;
}

.product-card-title {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  line-height: 16px;
  margin: 0 0 12px;
}

.product-card-price {
  font-family: "Rapha Sans Numerals", sans-serif;
  font-size: 14px;
  font-weight: 400;
}
```

---

## 11. CAROUSEL/SLIDER

```css
.carousel-container {
  margin: 0 -16px;  /* Negative margin for edge-to-edge */
  overflow-x: hidden;
}

@media (min-width: 768px) {
  .carousel-container {
    margin: 0 -32px;
  }
}

.carousel-track {
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0 16px;
  overflow-x: scroll;
  scroll-padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.carousel-track::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}

@media (min-width: 768px) {
  .carousel-track {
    gap: 32px;
    padding: 0 32px;
    scroll-padding: 32px;
  }
}

.carousel-slide {
  flex-shrink: 0;
  scroll-snap-align: start;
  width: 100%;  /* Full width mobile */
}

@media (min-width: 768px) {
  .carousel-slide {
    width: calc(((100% - 64px) / 12) * 4);  /* 4/12 columns */
  }
}

/* Navigation arrows */
.carousel-nav {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  user-select: none;
}

.carousel-arrow {
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  transition: opacity 0.25s ease-in-out;
}

.carousel-arrow:disabled {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}
```

---

## 12. TRUST BAR / BENEFITS SECTION

```css
.trust-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.trust-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.trust-item-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.trust-item-title {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0 0 8px;
}

.trust-item-description {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
}
```

---

## 13. FOOTER

```css
footer {
  padding: 32px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.footer-column-heading {
  font-family: "Rapha Sans Condensed", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0 0 24px;
}

.footer-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
}

.footer-column a:hover {
  color: #FA3C6E;  /* Use #2D5A3D for Qor Labs */
}

.footer-copyright {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  color: #000000;
}
```

---

## SUMMARY: Key Differences from Previous Assumptions

| Element | I Assumed | Actual Rapha Value |
|---------|-----------|-------------------|
| Nav links | 12px, 500, uppercase, sans | 16px, 400, normal case, **serif** |
| Announcement bar | 40px, 600, 0.3px spacing | 40px, 600, **normal** spacing |
| Section H2 | varies | 32px, 600, 0.3px spacing, uppercase |
| Body text | 14-16px | 24px serif for hero, 12px for small |
| Buttons | 14px, 8px 20px padding | 14px, **12px** padding |
| Grid gap | 16px/32px | 16px mobile, 32px desktop |

---

## FILES TO UPDATE

Based on this analysis, rebuild these with exact values:

1. `assets/rapha-overrides.css` — Global CSS matching these exact values
2. `sections/header.liquid` — Nav should be 16px serif, not uppercase
3. `sections/section-hero-editorial.liquid` — 64px/700 H1, 24px serif body
4. `sections/section-trust-bar.liquid` — Grid layout, 12px/21px descriptions
5. `sections/section-featured-collections.liquid` — Card styles
6. `sections/section-category-grid.liquid` — 24px H3, proper spacing
7. `snippets/product-card.liquid` — 16px/600 title, square aspect ratio
8. `sections/footer.liquid` — 16px/600 headings, 12px/600 links
