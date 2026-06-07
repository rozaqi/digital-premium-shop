function FinalCta() {
  const { Container, Button, Icon } = window;
  return (
    <Container>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--gradient-brand)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.10)' }} />
        <div style={{ position: 'absolute', bottom: -120, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, maxWidth: 620, margin: '0 auto' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 999, padding: '6px 14px', fontSize: 12.5, fontWeight: 600 }}>
            <Icon name="sparkles" size={14} color="#fff" /> Upgrade hari ini
          </span>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: '#fff', lineHeight: 1.1 }}>
            Siap Upgrade ke Akun Premium?
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.86)', fontWeight: 500 }}>
            Pilih produk favoritmu dan nikmati akses premium dengan harga lebih hemat. Proses cepat, bergaransi, dan support siap bantu.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
            <Button variant="whatsapp" size="lg" href="#wa" iconLeft={<Icon name="message-circle" size={18} />}>Order via WhatsApp</Button>
            <Button variant="white" size="lg" href="#produk" iconRight={<Icon name="arrow-right" size={18} />}>Lihat Produk</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
window.FinalCta = FinalCta;
