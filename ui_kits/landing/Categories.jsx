function Categories() {
  const { Container, Icon, SectionHead } = window;
  const { categories } = window.SHOP_DATA;
  return (
    <Container>
      <SectionHead eyebrow="Kategori" title="Jelajahi berdasarkan kategori" subtitle="Temukan layanan premium favoritmu dari pilihan kategori yang lengkap." />
      <div className="dps-cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, marginTop: 40 }}>
        {categories.map((c) => (
          <a key={c.label} href="#produk" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center', textDecoration: 'none',
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xs)', padding: '22px 14px', transition: 'var(--transition-base)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--indigo-200)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
            <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `color-mix(in srgb, ${c.tint} 12%, white)`, color: c.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={c.icon} size={25} color={c.tint} />
            </span>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)' }}>{c.label}</span>
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{c.count} produk</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
window.Categories = Categories;
