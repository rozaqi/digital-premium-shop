function Footer() {
  const { Container, Icon } = window;
  const { nav } = window.SHOP_DATA;
  const linkStyle = { fontSize: 14, color: 'rgba(255,255,255,0.62)', textDecoration: 'none', transition: 'color var(--duration-fast)' };
  const hov = (e) => e.currentTarget.style.color = '#fff';
  const out = (e) => e.currentTarget.style.color = 'rgba(255,255,255,0.62)';
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: '#fff', marginTop: 'var(--section-gap)' }}>
      <Container style={{ paddingTop: 56, paddingBottom: 32 }}>
        <div className="dps-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 36 }}>
          <div>
            <img src="../../assets/logo-white.svg" height="40" alt="Digital Premium Shop" />
            <p style={{ margin: '16px 0 0', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: 300 }}>
              Toko akun digital premium dengan harga hemat, proses cepat, dan support responsif. Streaming, AI tools, productivity, dan banyak lagi.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>Menu</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {nav.map((n) => <a key={n.label} href={n.href} style={linkStyle} onMouseEnter={hov} onMouseLeave={out}>{n.label}</a>)}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>Bantuan</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <a href="#faq" style={linkStyle} onMouseEnter={hov} onMouseLeave={out}>FAQ</a>
              <a href="#cara-order" style={linkStyle} onMouseEnter={hov} onMouseLeave={out}>Cara Order</a>
              <a href="#wa" style={linkStyle} onMouseEnter={hov} onMouseLeave={out}>Garansi</a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>Hubungi kami</div>
            <a href="#wa" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#25D366', color: '#0B3D24', fontWeight: 700, fontSize: 14, padding: '10px 16px', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
              <Icon name="message-circle" size={17} color="#0B3D24" /> Chat via WhatsApp
            </a>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {['instagram', 'send', 'mail'].map((ic) => (
                <a key={ic} href="#" style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  <Icon name={ic} size={18} color="#fff" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>© 2026 Digital Premium Shop. Semua hak dilindungi.</span>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', maxWidth: 520, textAlign: 'right' }}>
            Disclaimer: produk yang dijual adalah layanan pihak ketiga. Garansi berlaku sesuai ketentuan masing-masing produk.
          </span>
        </div>
      </Container>
    </footer>
  );
}
window.Footer = Footer;
