Minimal customer testimonial card — use 3–6 on the landing page.

```jsx
<TestimonialCard
  name="Rizky A." product="Netflix Premium" rating={5}
  comment="Prosesnya cepat banget, akun langsung aktif. Recommended!" />
```

Stars use Lucide `star` (filled amber) — call `lucide.createIcons()` after render. `rating={0}` hides stars.
