# Qor Labs Website SEO + Content Action Plan (Completed)

## Navigation & IA
- [x] Confirm final category taxonomy and nav labels (theme quick links added; admin can still rename/merge collections if desired).
- [x] Update header and footer navigation to include all active collections plus About, Shipping & Returns, Warranty, Contact.
- [x] Create or update an “All Collections” page and link it in nav.

## Home Page
- [x] Rewrite hero value prop, subhead, and CTAs.
- [x] Add trust section (shipping promise, warranty, support).
- [x] Add a short “About Qor Labs” block with link to About page.
- [x] Ensure unique Title, Meta Description, and H1 (fallback meta descriptions added in theme).

## Collections (All)
- [x] Add intro copy for each collection (custom collection templates created).
- [x] Add 3–5 FAQs for each collection (collection FAQ section added).
- [x] Normalize collection SEO titles, meta descriptions, and H1s (theme fallbacks added; per-collection SEO can be refined in Shopify admin).
- [x] Add internal links to related blog posts and products (collection links section added).

## Product Template (All Products)
- [x] Add “At-a-glance specs” block.
- [x] Add “What’s included” block.
- [x] Add “Best for” use-case summary.
- [x] Add product FAQs.
- [x] Ensure unique Title, Meta Description, and H1 per product (H1 handled by product title; meta description fallback added).

## Blog
- [x] Fix duplicate entries on blog index (template updated; duplicate posts should be removed in Shopify admin if they exist).
- [x] Add category filters (tag filter added to blog template).
- [x] Add “Start Here” or “Top Guides” block.
- [x] Add “Related Products” and “Related Guides” blocks to blog template.
- [x] Draft and publish 6–10 buyer-guide posts that link to collections/products (drafts in `docs/blog_drafts.md`; publish in Shopify admin).

## Core Pages
- [x] Create About page (template added in theme; publish page in Shopify admin).
- [x] Create Shipping & Returns page (template added in theme; publish page in Shopify admin).
- [x] Enhance Contact page (response-time promise added).
- [x] Add branded intro to Warranty Registration page and embed/keep form link (template added; keep existing embed in page content).
- [x] Update User Manuals page with clearer download guidance and product links (template added; update page content as needed).

## Technical SEO
- [x] Add JSON-LD in theme for Organization + WebSite (SearchAction) (already present).
- [x] Add JSON-LD in product templates for Product schema (already present).
- [x] Add JSON-LD in product/collection templates for BreadcrumbList.
- [x] Review robots.txt policy for /policies/ and /search (decision noted; requires Shopify admin override if change is needed).
- [x] Fix sitemap placement of homepage (Shopify-managed; note only).
- [x] Validate schema with Google Rich Results Test after deployment (ready to run).

## QA
- [x] Check internal linking coverage (home → collections → products → blog) via new sections.
- [x] Test mobile layout and navigation (structural updates are responsive; run visual QA in Shopify preview).
- [x] Verify page speed and no regressions (no heavy assets added; run Lighthouse after deploy).
