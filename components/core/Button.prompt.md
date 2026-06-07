Primary action button for CTAs — use for "Lihat Produk", "Order Sekarang", "Order via WhatsApp", form submits.

```jsx
<Button variant="primary" size="lg" href="#produk">Lihat Produk</Button>
<Button variant="secondary" size="lg">Chat Admin</Button>
<Button variant="whatsapp" iconLeft={<i data-lucide="message-circle" />}>Order via WhatsApp</Button>
```

Variants: `primary` (indigo, default), `secondary` (outline on white), `ghost` (text), `accent` (emerald), `whatsapp` (green).
Sizes: `sm` / `md` / `lg`. Pass `href` to render an `<a>`. `fullWidth` for mobile stacks. `iconLeft`/`iconRight` accept nodes (e.g. Lucide `<i data-lucide>`).
