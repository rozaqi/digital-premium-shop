function Products() {
  const { Container, Button, Badge, Icon, SectionHead } = window;
  const { products } = window.SHOP_DATA;

  const ProductCard = (p) => (
    <div style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)', padding: 'var(--space-6)', transition: 'var(--transition-base)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'; e.currentTarget.style.borderColor = 'var(--indigo-200)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
      {p.badge && <div style={{ position: 'absolute', top: 18, right: 18 }}><Badge tone={p.badge.tone}>{p.badge.label}</Badge></div>}
      <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `color-mix(in srgb, ${p.brandColor} 14%, white)`, color: p.brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 21, marginBottom: 16 }}>{p.brandInitial}</span>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{p.category}</div>
      <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.015em', color: 'var(--text-primary)', marginTop: 4 }}>{p.name}</div>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>mulai dari</span>
        <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>{p.price}</span>
        {p.oldPrice && <span style={{ fontSize: 14, color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>{p.oldPrice}</span>}
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>/ {p.duration}</div>
      <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {p.benefits.map((b, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: 'var(--text-secondary)' }}>
            <span style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, background: 'var(--emerald-50)', color: 'var(--emerald-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={11} color="var(--emerald-600)" strokeWidth={3} /></span>
            {b}
          </li>
        ))}
      </ul>
      <div style={{ flex: 1, minHeight: 16 }} />
      <Button variant="primary" fullWidth href="#wa" iconLeft={<Icon name="message-circle" size={17} />}>Order</Button>
    </div>
  );

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <SectionHead align="left" eyebrow="Produk Populer" title="Produk paling dicari minggu ini" subtitle="Akun premium resmi, harga hemat, dan langsung aktif setelah order." />
        <Button variant="ghost" href="#produk" iconRight={<Icon name="arrow-right" size={17} />} style={{ paddingLeft: 0 }}>Lihat semua produk</Button>
      </div>
      <div className="dps-prod-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }}>
        {products.map((p) => <ProductCard key={p.name} {...p} />)}
      </div>
    </Container>
  );
}
window.Products = Products;
