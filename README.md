# Chef Zelal Onurcan - Digital Experience

This is a custom-built SvelteKit application designed for Chef Zelal Onurcan.

## 🚀 Getting Started

### 1. Install Dependencies
The "red warnings" you see in the code are likely because the project dependencies haven't been installed yet. Run this command in your terminal:

```bash
npm install
```

After installation, run this command to generate the necessary SvelteKit types (this fixes the `$lib` and `$app` import errors):

```bash
npx svelte-kit sync
```

### 2. Sanity.io Setup (The CMS)
To make the dynamic content work (Menu, Journal), you need to connect to Sanity.

1.  **Create Account:** Go to [sanity.io](https://www.sanity.io) and create a free account.
2.  **Create Project:** Create a new project from their dashboard.
3.  **Get Project ID:** Copy your `Project ID` from the dashboard.
4.  **Update Code:** Open `src/lib/sanity.ts` and replace `'YOUR_PROJECT_ID'` with your actual ID.
5.  **CORS Settings:** In Sanity dashboard, go to **API > CORS Origins** and add:
    *   `http://localhost:5173` (for development)
    *   `https://your-vercel-domain.com` (for production)
    *   Allow credentials: `true`

### 3. Run Development Server
To see the website in your browser:

```bash
npm run dev
```

Open `http://localhost:5173` to view the site.

## 📂 Project Structure

*   `src/routes`: The pages of the website (Home, About, Menu, etc.).
*   `src/lib/components`: Reusable UI blocks (Navbar, Hero, MenuCard).
*   `src/lib/sanity.ts`: Connection settings for the CMS.
*   `sanity/schemas`: Definitions for the content types (Dish, Post, etc.).

## 🎨 Design System
*   **Colors:** Sage, Emerald, Terracotta (defined in `tailwind.config.js`).
*   **Fonts:** Playfair Display (Serif) & Inter (Sans).
