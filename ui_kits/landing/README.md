# Landing Page — UI Kit

A full, interactive recreation of the **Digital Premium Shop** landing page,
assembled section by section from the design system's tokens and component
patterns. This is the canonical "typical view" of the product.

## Run it
Open `index.html`. It links the root `styles.css`, loads React + Babel, then
each section as its own JSX file. Icons use real Lucide path data via a small
inline `Icon` component (`ui.jsx`) — no external icon runtime needed.

## Files
- `index.html` — page shell, responsive `@media` rules, script loading.
- `ui.jsx` — shared primitives (`Icon`, `Container`, `Button`, `Badge`,
  `SectionHead`, `Eyebrow`) attached to `window`.
- `data.js` — all mock content (`window.SHOP_DATA`): products, categories,
  testimonials, FAQs, steps, benefits, nav.
- Section components (each attaches to `window`):
  `Navbar`, `Hero`, `TrustStrip`, `Categories`, `Products`, `Benefits`,
  `HowToOrder`, `Testimonials`, `Faq`, `FinalCta`, `Footer`.
- `App.jsx` — assembles the sections into alternating background bands.

## Sections (matches the PRD page structure §8)
Navbar (sticky, blurs on scroll, mobile hamburger) → Hero (headline + dual CTA +
product mockup) → Trust strip → Categories grid → Featured products (3-col) →
Benefits → How to Order stepper → Testimonials → FAQ accordion → Final CTA →
Footer.

## Interactions
- Navbar turns translucent + blurred after scrolling; hamburger opens a mobile menu.
- Product / category cards lift on hover; buttons darken + press.
- FAQ rows expand/collapse (single-open).
- Fully responsive: 3→2→1 product columns; categories 6→3→2; hero visual hidden
  on mobile.

## Note on composition
For reliable rendering in every preview context, this kit inlines lightweight
copies of the design-system primitives (Button/Badge/ProductCard look) rather
than importing the compiled `_ds_bundle.js`. The canonical components live in
`/components/` and are what production code should import; the visuals here are
kept 1:1 with them.
