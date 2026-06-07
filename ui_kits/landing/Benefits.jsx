function Benefits() {
  const { Container, Icon, SectionHead } = window;
  const { benefits } = window.SHOP_DATA;
  return (
    <Container>
      <SectionHead eyebrow="Kenapa kami" title="Alasan ribuan pelanggan memilih kami" subtitle="Kami fokus pada hal yang paling penting buat kamu: hemat, cepat, dan bisa dipercaya." />
      <div className="dps-benefit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 44 }}>
        {benefits.map((b) => (
          <div key={b.title} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', padding: 'var(--space-6)' }}>
            <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--gradient-brand-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Icon name={b.icon} size={22} color="var(--color-primary)" />
            </span>
            <h3 style={{ margin: '0 0 6px', fontSize: 17.5, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{b.title}</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
window.Benefits = Benefits;
