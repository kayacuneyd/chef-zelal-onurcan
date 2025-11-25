# Design Specification: Chef Zelal Onurcan
**Project:** Digital Brand Identity & UI/UX Design
**Concept:** "Quiet Healing" (Sessiz İyileşme) meets "Modern Mosaic"

## 1. Design Philosophy & Visual Identity

### 1.1 Core Concept: "The Bridge"
The design must visually represent the synthesis of two worlds:
*   **Istanbul (Roots):** Warmth, texture, spice, history, the "Kasaba" heritage.
*   **Paris (Present):** Sophistication, minimalism, "Griffon" vintage & "Republic" modernism.

### 1.2 Emotional Tone: "Quiet Healing"
Based on Chef Zelal's philosophy, the site should not feel "busy" or "loud".
*   **Keywords:** Serene, Therapeutic, Artisanal, Slow Living, Elegant.
*   **Avoid:** High-contrast jarring colors, cluttered layouts, aggressive "Buy Now" buttons.
*   **Embrace:** Negative space (white space), soft shadows, slow-motion visuals.

---

## 2. Color System (Tailwind CSS Palette)

We will use a palette that balances nature (healing) with urban sophistication.

### Primary (Nature & Healing)
*   **`bg-sage-50` (#F4F7F5):** Main background color. Not stark white, but a soft, paper-like off-white.
*   **`text-emerald-900` (#064E3B):** Deep green for primary text/headings. Softer than black.
*   **`accent-sage-500` (#8DA399):** Secondary buttons, dividers, subtle backgrounds.

### Secondary (Anatolian Earth)
*   **`terracotta-600` (#E07A5F):** Used sparingly for "Call to Action" buttons (Book Now) and highlights. Represents the warmth of the hearth/oven.

### Tertiary (Parisian Urban)
*   **`anthracite-800` (#374151):** For body text.
*   **`gunmetal-900` (#111827):** For footer backgrounds and strong contrast sections.

### Accents (Luxury)
*   **`brass-400` (#D4AF37):** Thin borders, iconography, and active states. Adds a touch of "Haute Couture".

---

## 3. Typography System

### 3.1 Headings: *Playfair Display* (or *Ogg*)
*   **Style:** Serif, High Contrast.
*   **Usage:** H1, H2, Hero Slogans.
*   **Vibe:** Editorial, classic, authoritative yet feminine.
*   **Example:** *"Anatolian Soul, Parisian Touch"*

### 3.2 Body: *Inter* (or *Lato*)
*   **Style:** Sans-Serif, Geometric/Humanist.
*   **Usage:** Paragraphs, Menu descriptions, UI elements.
*   **Vibe:** Clean, legible, modern.

### 3.3 Accent: *Pinyon Script* (Optional)
*   **Usage:** Signatures ("Chef Zelal"), short quotes, or "Chef's Note" annotations.

---

## 4. UI Components & Layout Strategy

### 4.1 The "Cinematic" Hero Section
*   **Visual:** Full-screen background video loop.
    *   *Content:* Slow-motion close-ups of hands kneading dough, dusting sumac, plating a dish. No faces initially, focus on the *craft*.
*   **Overlay:** Minimal text with a "Glassmorphism" effect (blur background) for readability.

### 4.2 The "Interactive" Menu Cards
*   **Problem:** PDF menus are hard to read on mobile.
*   **Solution:** CSS Grid "Masonry" Layout.
*   **Interaction:**
    *   *Default State:* Elegant typography showing Dish Name & Price.
    *   *Hover/Tap State:* The card expands or flips to reveal a high-res photo and the story of the ingredients (e.g., "Pomegranates sourced from...").

### 4.3 The "Timeline" Journey (About Page)
*   A vertical line connecting:
    1.  **1996:** Kasaba Steakhouse (Black & White photo).
    2.  **2019:** Bilgi University Graduation.
    3.  **202X:** Nando De Colo Experience.
    4.  **Present:** Griffon & Republic of Coffee.
*   **Scroll Interaction:** As the user scrolls down, the line fills up with the `Terracotta` color.

### 4.4 Booking Interface
*   **Style:** Clean, step-by-step wizard (Typeform style).
*   **Feel:** Conversational, not bureaucratic.
    *   *Instead of:* "Select Date"
    *   *Use:* "When should we set the table?"

---

## 5. Motion & Micro-Interactions (Svelte Transitions)

*   **Page Transitions:** Soft fade-in (`fly` with `y: 10px`) when navigating between pages. No hard cuts.
*   **Image Loading:** Blur-up effect (Low-res placeholder -> High-res image).
*   **Scroll Parallax:** Background images move slightly slower than foreground text to create depth.
*   **Hover Effects:** Buttons do not just change color; they have a subtle `scale(1.05)` and `box-shadow` lift.

---

## 6. Imagery Guidelines

*   **Lighting:** Natural light only. "Golden Hour" vibes.
*   **Composition:** Macro shots of textures (spices, crusts, fabrics).
*   **Subject:** Focus on the *process* and the *hands* as much as the final dish.
*   **Color Grading:** Desaturated slightly, with warm highlights (matching the Terracotta/Sage palette).
