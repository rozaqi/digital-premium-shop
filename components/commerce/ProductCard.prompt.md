The storefront's primary product unit — brand chip, price, duration, benefits, Order CTA.

```jsx
<ProductCard
  name="Netflix Premium" category="Streaming"
  price="Rp25.000" duration="1 Bulan"
  brandColor="#E50914" brandInitial="N"
  badge={{ tone: 'bestseller', label: 'Best Seller' }}
  benefits={['4K Ultra HD', 'Garansi penuh', 'Aktivasi cepat']}
  ctaLabel="Order" href="https://wa.me/..." />
```

Pass `price` pre-formatted ("Rp25.000"). `oldPrice` renders struck-through. `badge` accepts product flags. Designed for a 3-col desktop grid.
