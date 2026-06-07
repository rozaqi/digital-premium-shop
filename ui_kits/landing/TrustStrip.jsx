function TrustStrip() {
  const { Container, Icon } = window;
  const items = [
    { icon: 'zap', label: 'Proses cepat', tint: 'var(--indigo-600)' },
    { icon: 'headphones', label: 'Support responsif', tint: 'var(--indigo-600)' },
    { icon: 'shield-check', label: 'Garansi produk', tint: 'var(--emerald-600)' },
    { icon: 'wallet', label: 'Harga hemat', tint: 'var(--amber-600)' },
    { icon: 'layers', label: 'Banyak pilihan layanan', tint: 'var(--indigo-600)' },
  ];
  return (
    <Container>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(18px, 3vw, 26px) clamp(20px, 3vw, 32px)' }}>
        <div className="dps-trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {items.map((it) => (
            <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 'var(--radius-md)', background: `color-mix(in srgb, ${it.tint} 12%, white)`, color: it.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={it.icon} size={21} color={it.tint} />
              </span>
              <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
window.TrustStrip = TrustStrip;
