# Technical Specification: Chef Zelal Onurcan Digital Experience
**Project:** Custom High-Performance Portfolio & Booking Platform
**Target Stack:** SvelteKit | Tailwind CSS | Svelte Transitions | Sanity.io (Headless CMS)

## 1. Executive Technical Summary
Unlike the original proposal suggesting WordPress, this plan outlines a **"Headless" architecture**. This approach decouples the frontend (what the user sees) from the backend (content management). 
**Why this stack?**
- **Performance:** Near-instant page loads (critical for mobile users/Instagram traffic).
- **Design Freedom:** "Modern Mosaic" aesthetic requires custom animations (Svelte Transitions) that are difficult/heavy in WordPress.
- **Security:** No database to hack, no plugin vulnerabilities.
- **Scalability:** Ready for high traffic without crashing.

## 2. Tech Stack & Architecture

### 2.1 Frontend (The "Showcase")
- **Framework:** **SvelteKit**. Server-Side Rendering (SSR) for optimal SEO and smaller bundle sizes.
- **Styling:** **Tailwind CSS**. For rapid, consistent, bespoke styling based on the "Emerald/Terracotta" palette.
- **Animations:** **Svelte Transitions & Motion**. Native, lightweight animations to implement the "Quiet Healing" philosophy through smooth, slow-fade transitions.
- **Language:** **TypeScript**. For robust, error-free code.

### 2.2 Backend / Content Management (The "Kitchen")
- **CMS:** **Sanity.io**. 
  - *Why:* It provides a "Studio" for Chef Zelal to easily update menus, upload photos, and write blog posts without touching code. It is far cleaner and simpler than the WordPress dashboard.
- **Database:** Hosted on Sanity's global CDN.

### 2.3 Infrastructure
- **Hosting:** **Vercel**. Optimized via `@sveltejs/adapter-vercel` for edge deployment and serverless functions.
- **Analytics:** Vercel Analytics (Privacy-focused).
- **Forms/Email:** **Resend** or **EmailJS** for the contact/booking forms.

## 3. UX/UI Design Implementation Strategy

### 3.1 Visual Language: "Modern Mosaic"
- **Color System (Tailwind Config):**
  ```javascript
  colors: {
    emerald: { DEFAULT: '#...', light: '#...' }, // Aegean herbs
    terracotta: { DEFAULT: '#...' }, // Anatolian earth
    anthracite: { DEFAULT: '#...' }, // Paris rooftops
    gold: { DEFAULT: '#...' } // Luxury accents
  }
  ```
- **Typography:** 
  - Headings: *Playfair Display* (Google Fonts)
  - Body: *Inter* or *Lato* (Google Fonts)

### 3.2 Key Components
1.  **Hero Section (Home):** 
    - Full-screen video background (optimized WebM format).
    - Overlay: "Anatolian Soul, Parisian Touch".
    - Interaction: Smooth fade-in on load.
2.  **Interactive Menus:**
    - Instead of PDFs, use a CSS Grid layout.
    - Hover effects on dishes to show ingredients/photos.
    - Filter by season (Winter/Spring) using Svelte reactivity.
3.  **Booking Flow:**
    - Step 1: Select Service (Private Chef / Consulting).
    - Step 2: Select Date (Custom Calendar Component).
    - Step 3: Capture Details.
    - Step 4: Payment Deposit (Stripe Integration - Optional Phase 2).

## 4. SEO & Performance Strategy (The "Growth Engine")

### 4.1 Technical SEO
- **Metadata:** Dynamic generation for every page (Title, Description, OG Images for social sharing).
- **i18n (Internationalization):** SvelteKit routing with localized params for `/en`, `/fr`, `/tr`.
- **Schema Markup:** JSON-LD injection for `Person` (Chef) and `Restaurant/Service`.

### 4.2 Core Web Vitals
- Target: 100/100 Lighthouse Score.
- Images: Automatic optimization using `@sveltejs/enhanced-img` (converts to WebP/AVIF).

## 5. Development Roadmap

### Phase 1: The Foundation (Weeks 1-2)
- Setup SvelteKit project & Sanity CMS.
- Implement Design System (Colors, Fonts, Layouts).
- Develop "Coming Soon" landing page with email capture.

### Phase 2: Core Pages & Content (Weeks 3-4)
- **Home:** Hero video, Bio summary, Featured Services.
- **About:** "Quiet Healing" story, Timeline component.
- **Services:** Detailed service cards.
- **CMS Integration:** Connect Sanity so Zelal can input text/photos.

### Phase 3: Polish & Launch (Weeks 5-6)
- **Menus:** Dynamic menu component.
- **Contact:** Working forms with email notification.
- **SEO:** Meta tags, Sitemap.xml, Robots.txt.
- **Testing:** Mobile responsiveness check.
- **Launch:** Deploy to Vercel, connect domain.

## 6. Developer Handoff Notes
- **Repository:** GitHub.
- **Environment Variables:** Store API keys in `.env.local`.
- **Content:** All text/images should be editable via Sanity Studio, do not hardcode content.
