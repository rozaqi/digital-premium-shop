function HowToOrder() {
  const { Container, Icon, SectionHead, Button } = window;
  const { steps } = window.SHOP_DATA;
  return (
    <Container>
      <SectionHead eyebrow="Cara Order" title="Order cuma 4 langkah" subtitle="Prosesnya simpel — dari pilih produk sampai akun siap dipakai." />
      <div className="dps-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 48 }}>
        {steps.map((s, i) => (
          <div key={s.title} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--gradient-brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-primary)' }}>
                <Icon name={s.icon} size={22} color="#fff" />
              </span>
              {i < steps.length - 1 && (
                <span className="dps-step-line" style={{ flex: 1, height: 2, borderRadius: 2, backgroundImage: 'linear-gradient(to right, var(--indigo-200), var(--border-subtle))' }} />
              )}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 5 }}>Langkah {i + 1}</div>
              <h3 style={{ margin: '0 0 6px', fontSize: 17.5, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
        <Button variant="primary" size="lg" href="#wa" iconLeft={<Icon name="message-circle" size={18} />}>Mulai Order via WhatsApp</Button>
      </div>
    </Container>
  );
}
window.HowToOrder = HowToOrder;
