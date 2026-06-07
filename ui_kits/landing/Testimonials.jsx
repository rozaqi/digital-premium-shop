function Testimonials() {
  const { Container, Icon, SectionHead } = window;
  const { testimonials } = window.SHOP_DATA;
  const list = testimonials.slice(0, 6);
  return (
    <Container>
      <SectionHead eyebrow="Testimoni" title="Apa kata pelanggan kami" subtitle="Ribuan pembeli sudah merasakan hemat dan cepatnya order di sini." />
      <div className="dps-testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 44 }}>
        {list.map((t) => (
          <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'var(--space-6)' }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[0,1,2,3,4].map(i => (
                <Icon key={i} name="star" size={16}
                  color={i < t.rating ? 'var(--amber-500)' : 'var(--slate-300)'}
                  fill={i < t.rating ? 'var(--amber-500)' : 'none'} />
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-primary)' }}>“{t.comment}”</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 4 }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, background: `color-mix(in srgb, ${t.color} 16%, white)`, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15 }}>{t.name[0]}</span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{t.product}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
window.Testimonials = Testimonials;
