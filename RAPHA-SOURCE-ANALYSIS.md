# RAPHA.CC Source Analysis

> **Source of Truth** for rebuilding Qor Labs sections with Rapha's exact CSS values.
> Extracted from https://www.rapha.cc/us/en on 2026-02-05

---

## 1. TYPOGRAPHY SYSTEM

### Font Families
```css
/* Display Headlines */
font-family: "Rapha Serif Head", serif;
/* Our equivalent: 'Instrument Serif', Georgia, serif */

/* Body Text */
font-family: "Rapha Serif Text", serif;
font-size: 12px;
line-height: 21px;
font-weight: 400;
/* Our equivalent: 'Instrument Serif' for body serif text */

/* UI / Buttons / Labels */
font-family: 'Rapha Sans Condensed', sans-serif;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.3px;
/* Our equivalent: 'DM Sans', sans-serif */
```

### Typography Scale (Extracted)

| Element | Font | Size (mobile) | Size (desktop) | Weight | Line-height | Letter-spacing | Transform |
|---------|------|---------------|----------------|--------|-------------|----------------|-----------|
| Section Heading | Rapha Sans Condensed | 24px | 32px | 600 | 24px/32px | 0.3px | uppercase |
| Button Text | Rapha Sans Condensed | 14px | 14px | 600 | 14px | 0.3px | uppercase |
| Body Small | Rapha Serif Text | 12px | 12px | 400 | 21px | normal | none |
| Link Underline | Rapha Serif Text | 12px | 12px | 600 | 21px | normal | none |
| Nav Labels | Rapha Sans Condensed | 16px | 16px | 600 | 16px | 0.3px | uppercase |

---

## 2. COLOR PALETTE

### Core Colors
```css
/* Primary */
--black: #000000;
--white: #FFFFFF;

/* Accent */
--rapha-pink: #FA3C6E;  /* Used for hover states */

/* Grays */
--disabled: #949494;
--border-light: (use rgba or subtle gray)

/* For Qor Labs - translate to: */
--color-black: #0A0A0A;
--color-white: #FFFFFF;
--color-accent: #2D5A3D;  /* Lab green instead of pink */
--color-hover: #1E4530;   /* Darker green for hover */
```

### Overlay Gradients
```css
/* No heavy gradients on hero - Rapha uses minimal or no overlay */
/* If overlay needed, very subtle: */
background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%);
```

---

## 3. BUTTONS

### Primary Button (Filled)
```css
.button-primary {
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Typography */
  font-family: 'Rapha Sans Condensed', sans-serif;  /* Use: 'DM Sans' */
  font-size: 14px;
  font-weight: 600;  /* Use: 500 */
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  white-space: normal;

  /* Sizing */
  padding: 8px 20px;
  min-height: 44px;
  min-width: 120px;

  /* Colors */
  color: #FFFFFF;
  background-color: #000000;

  /* Animation */
  transition: background-color 250ms ease-in-out,
              border-color 250ms ease-in-out,
              color 250ms ease-in-out;
}

.button-primary:hover {
  background-color: #FA3C6E;  /* Use: accent color */
  border-color: #FA3C6E;
  color: #FFFFFF;
}
```

### Secondary Button (Outline)
```css
.button-secondary {
  /* Same base styles as primary */
  color: #000000;
  background-color: transparent;
  border: 1px solid #000000;
}

.button-secondary:hover {
  border-color: #FA3C6E;  /* Use: accent color */
  color: #FA3C6E;
  background-color: transparent;
}
```

### Text Link
```css
.text-link {
  font-family: "Rapha Serif Text", serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: underline;
  color: #000000;
  cursor: pointer;
}

.text-link:hover {
  color: #FA3C6E;  /* Use: accent color */
}
```

---

## 4. HEADER

### Structure
```html
<header>
  <!-- Announcement bar - 40px height -->
  <div class="announcement-bar">...</div>

  <!-- Main header - 64px mobile -->
  <div class="header-main">
    <button class="hamburger">...</button>  <!-- Mobile only -->
    <a class="logo">...</a>                 <!-- Center -->
    <nav class="desktop-nav">...</nav>      <!-- Desktop only -->
    <div class="header-icons">...</div>     <!-- Search, Account, Cart -->
  </div>
</header>
```

### CSS Values
```css
/* Announcement Bar */
.announcement-bar {
  background-color: #000000;
  min-height: 40px;
  padding: 12px;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  z-index: 6;
}

/* Main Header */
.header-main {
  display: flex;
  align-items: center;
  height: 64px;
  position: relative;
  z-index: 5;
}

/* Mobile Hamburger */
.hamburger-box {
  width: 17px;
  height: 17px;
}

.hamburger-inner {
  width: 17px;
  height: 2px;
  background-color: #000000;
  border-radius: 0;
}

/* Desktop Nav - hidden on mobile */
@media (min-width: 992px) {
  .desktop-nav { display: flex; }
  .hamburger { display: none; }
}
```

---

## 5. IMAGE CONTAINERS

### Aspect Ratios Used
```css
/* Square - Product cards, thumbnails */
.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Landscape - Hero, editorial */
.aspect-landscape {
  aspect-ratio: 16 / 9;
}

/* Portrait - Collection cards, features */
.aspect-portrait {
  aspect-ratio: 2 / 3;
}

/* Common image styles */
.image-container {
  container-type: inline-size;
  display: block;
  height: auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  transform: translate3d(0, 0, 0);  /* GPU acceleration */
  backface-visibility: hidden;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
}
```

---

## 6. HERO SECTION

### Structure
```html
<section class="hero">
  <div class="hero-media">
    <picture>
      <source media="(min-width: 768px)" srcset="desktop-16x9.jpg">
      <img src="mobile-1x1.jpg" alt="">
    </picture>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">...</h1>
    <p class="hero-subtitle">...</p>
    <div class="hero-buttons">
      <a class="button-primary">Shop Now</a>
      <a class="button-secondary">Learn More</a>
    </div>
  </div>
</section>
```

### CSS Values
```css
.hero {
  position: relative;
  width: 100%;
  /* Height determined by image aspect ratio */
}

.hero-media {
  width: 100%;
}

.hero-media img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Content positioning - Rapha often uses BELOW image, not overlay */
.hero-content {
  padding: 32px 16px;
  text-align: center;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 40px 32px;
  }
}

.hero-title {
  font-family: 'Rapha Sans Condensed', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin: 0 0 16px;
}

@media (min-width: 992px) {
  .hero-title {
    font-size: 32px;
    line-height: 32px;
  }
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
```

---

## 7. PRODUCT CARDS

### Structure
```html
<article class="product-card">
  <a class="product-card-link">
    <div class="product-card-image">
      <img src="..." alt="">
    </div>
    <div class="product-card-info">
      <h3 class="product-card-title">Product Name</h3>
      <p class="product-card-price">$150.00</p>
      <div class="product-card-colors">...</div>
    </div>
  </a>
</article>
```

### CSS Values
```css
.product-card {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.product-card-image {
  aspect-ratio: 1 / 1;
  background-color: #F5F5F5;  /* Light gray placeholder */
  position: relative;
  width: 100%;
  margin-bottom: 24px;
}

.product-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.5s ease-out;
}

.product-card-link:hover .product-card-image img {
  filter: brightness(0.95);  /* Subtle darken on hover */
}

.product-card-info {
  padding: 0 24px;
  width: 100%;
  text-align: center;
}

.product-card-title {
  font-family: 'Rapha Sans Condensed', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin: 0 0 12px;
}

/* Color swatches */
.product-card-colors {
  display: inline-flex;
  gap: 8px;
  margin-top: 12px;
}

.product-card-colors li {
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
```

---

## 8. CAROUSEL / SLIDER

### CSS Values
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
  width: 100%;  /* Mobile: full width */
}

@media (min-width: 768px) {
  .carousel-slide {
    width: calc(((100% - 32px) / 6) * 4);  /* Desktop: ~66% */
  }
}

/* Navigation arrows */
.carousel-nav {
  display: flex;
  gap: 24px;
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

## 9. SPACING SYSTEM

### Extracted Values
```css
/* Margins & Padding */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 16px;
--space-xl: 24px;
--space-2xl: 32px;
--space-3xl: 40px;
--space-4xl: 64px;

/* Common patterns */
padding: 8px 20px;      /* Button padding */
padding: 0 16px;        /* Mobile container */
padding: 0 32px;        /* Desktop container */
gap: 16px;              /* Mobile grid gap */
gap: 32px;              /* Desktop grid gap */
margin-bottom: 24px;    /* Section spacing */
margin-bottom: 32px;    /* Heading to content */
```

---

## 10. BREAKPOINTS

```css
/* Mobile first */
/* Default: < 768px */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 992px) {
  /* Desktop */
}

@media (min-width: 1200px) {
  /* Large desktop */
}
```

---

## 11. ANIMATIONS

### Transitions
```css
/* Standard UI transitions */
transition: opacity 0.25s ease-in-out;
transition: color 0.15s ease-out;
transition: background-color 0.25s ease-in-out;
transition: transform 0.3s ease-out;
transition: filter 0.5s ease-out;

/* Button transitions */
transition: background-color 250ms ease-in-out,
            border-color 250ms ease-in-out,
            color 250ms ease-in-out;
```

### Hover Effects
```css
/* Image hover - subtle brightness */
.card:hover img {
  filter: brightness(0.95);
}

/* Link hover - color change */
.link:hover {
  color: #FA3C6E;  /* Accent color */
}

/* Button hover - background/border change */
.button:hover {
  background-color: var(--accent);
  border-color: var(--accent);
}
```

---

## 12. FOOTER

### Structure
```html
<footer>
  <div class="footer-grid">
    <div class="footer-column">
      <h4>Shop</h4>
      <ul>...</ul>
    </div>
    <div class="footer-column">
      <h4>Support</h4>
      <ul>...</ul>
    </div>
    <!-- etc -->
  </div>
  <div class="footer-bottom">
    <p class="copyright">...</p>
    <div class="social-icons">...</div>
    <div class="payment-icons">...</div>
  </div>
</footer>
```

### CSS Values
```css
.footer {
  border-top: 1px solid #E0E0E0;
  padding: 32px 0;
}

.footer-column h4 {
  font-family: 'Rapha Sans Condensed', sans-serif;
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
  line-height: 21px;
  color: #000000;
  text-decoration: none;
}

.footer-column a:hover {
  color: #FA3C6E;
}
```

---

## TRANSLATION GUIDE: Rapha → Qor Labs

| Rapha | Qor Labs |
|-------|----------|
| 'Rapha Sans Condensed' | 'DM Sans', sans-serif |
| 'Rapha Serif Head' | 'Instrument Serif', Georgia, serif |
| 'Rapha Serif Text' | 'DM Sans' or 'Instrument Serif' |
| #FA3C6E (pink accent) | #2D5A3D (lab green) |
| font-weight: 600 | font-weight: 500 |
| Cycling imagery | Lab/science imagery |
| "RCC Club" features | "Warranty" / "Support" features |

---

## FILES TO UPDATE

Based on this analysis, rebuild these sections:

1. `sections/section-hero-editorial.liquid` - Match hero structure
2. `sections/section-featured-collections.liquid` - Match card styles
3. `sections/section-category-grid.liquid` - Match grid layout
4. `sections/section-product-spotlight.liquid` - Match split layout
5. `assets/rapha-overrides.css` - Global styles to match Rapha
6. `sections/announcement-bar.liquid` - Match bar styling

