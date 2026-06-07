# Digital Premium Shop — Landing Page & Design System

A clean and modern storefront landing page for **Digital Premium Shop**, a premium account reseller platform (selling streaming subscriptions, AI tools, productivity suites, cloud storage, e-learning licenses, and design utilities) targeting the Indonesian market.

This layout and design system are designed to look professional, trustworthy, and user-friendly, allowing visitors to quickly understand the catalog and place orders via WhatsApp within 5 seconds.

---

## 🛠️ Tech Stack

This project is built using a modern frontend stack that runs entirely in the browser without requiring a complex compilation or build step:
- **HTML5 & CSS3**: Vanilla CSS for the core design system tokens (colors, typography, grid spacing, shadows, and subtle micro-animations).
- **React (v18)**: Modulized layout structure built into clean components.
- **Babel Standalone**: Compiles JSX directly in the browser, eliminating the need for bundlers like Webpack or Vite for lightweight local previews.
- **Lucide Icons**: Stroked, minimal line-art icons.
- **Plus Jakarta Sans**: A clean, contemporary font family used for display headings and body copy.

---

## 🚀 How to Run Locally

Because the project loads JSX scripts directly inside the browser using Babel, you will need a local HTTP server to prevent CORS security blocks.

Follow these simple steps:

### 1. Open Terminal / Command Prompt
Open your terminal and navigate to the project directory:
```bash
cd "Digital Premium Shop Design System"
```

### 2. Start a Local HTTP Server
Run any of the following commands to start an instant local server (pick one that matches your environment):

* **Using Node.js (Highly Recommended)**:
  ```bash
  npx http-server --port 3000
  # or
  npx serve -l 3000
  ```

* **Using Python**:
  ```bash
  python -m http.server 3000
  ```

* **Using PHP**:
  ```bash
  php -S localhost:3000
  ```

### 3. Open the Page
Once the server is running, open your web browser and go to:
👉 **[http://localhost:3000/ui_kits/landing/index.html](http://localhost:3000/ui_kits/landing/index.html)**

---

## 📁 Directory Structure
- `ui_kits/landing/` — Full interactive landing page implementation (HTML, mock data, and JSX sections).
- `tokens/` — Core design system tokens (colors, typography, layout spacings, and motion).
- `components/` — Individual design system components.
- `assets/` — SVG logos and project branding assets.
- `styles.css` — Global CSS stylesheet.
