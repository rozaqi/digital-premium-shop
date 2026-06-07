Expandable FAQ accordion — keeps the page tidy. Single-open by default.

```jsx
<FaqAccordion items={[
  { question: 'Apakah akun bergaransi?', answer: 'Ya, semua akun bergaransi sesuai ketentuan produk.' },
  { question: 'Berapa lama proses aktivasi?', answer: 'Rata-rata 5–15 menit setelah pembayaran.' },
]} />
```

`allowMultiple` keeps several rows open. `defaultOpen={-1}` starts all closed. Chevron uses Lucide — call `lucide.createIcons()`. Best at ~760px wide.
