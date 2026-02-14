# Specification

## Summary
**Goal:** Create a cohesive, modern multi-page AMS Digital marketing site (English) centered on client success stories, with services and other content adapted from the provided AMS Digital URLs.

**Planned changes:**
- Add client-side routed pages for: /, /about, /portfolio, /blogs, /contact, /customer-reviews, /cookie-policy, /privacy-policy, /amsdigital-profile, /services, plus one route per provided service detail URL (e.g., /services/logo-and-branding-design through /services/pay-per-click).
- Implement consistent global header/footer navigation (desktop + mobile) linking to Home, About, Services, Portfolio, Blogs, Customer Reviews, Contact, and legal pages.
- Refocus Home page messaging and CTAs to prioritize client outcomes and success stories, with primary paths to Portfolio/Case Studies and Contact/Consultation.
- Build a Portfolio/Case Studies page driven by adapted content from the portfolio source, including a case study list/grid and a detail view with problem/approach/outcome and supporting visuals.
- Build a Services landing page listing all services and individual service detail pages including overview, deliverables, process, outcomes, and a Contact CTA.
- Create full-content pages (not placeholders) for About, Blogs, Contact (with contact form UI), Customer Reviews (multiple testimonials), and AMS Digital Profile using adapted English copy from the provided URLs.
- Add dedicated /privacy-policy and /cookie-policy pages and ensure footer links navigate to these routes.
- Centralize adapted content (case studies, services, blog posts, reviews) into maintainable typed data modules and render pages from that data.
- Apply a distinct, consistent visual theme for a modern digital agency across all pages, avoiding a blue/purple-dominant palette.
- Add required generated images as static assets under frontend/public/assets/generated and use them on the Home and Portfolio pages (hero visual and case study thumbnails).

**User-visible outcome:** Visitors can navigate a fully multi-page AMS Digital site with consistent navigation, browse case studies and service details, read blogs/reviews/policies, and submit a contact form—while the site’s primary narrative emphasizes client outcomes and success.
