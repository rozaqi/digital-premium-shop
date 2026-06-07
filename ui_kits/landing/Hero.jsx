function Hero() {
  const { Container, Button, Icon, Eyebrow } = window;

  const MiniProduct = ({ initial, color, name, cat, price, style }) => (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)', padding: 16, display: 'flex', alignItems: 'center', gap: 13, ...style,
    }}>
      <span style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: `color-mix(in srgb, ${color} 14%, white)`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 19 }}>{initial}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{cat}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{name}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>mulai dari</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-primary)' }}>{price}</div>
      </div>
    </div>
  );

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* soft brand glow */}
      <div style={{ position: 'absolute', top: -180, right: -120, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,70,229,0.16), rgba(80,70,229,0) 68%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 60, left: -140, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12), rgba(16,185,129,0) 68%)', pointerEvents: 'none' }} />

      <Container style={{ position: 'relative', paddingTop: 'clamp(48px, 7vw, 88px)', paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
        <div className="dps-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'center' }}>
          {/* copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 999, padding: '6px 12px 6px 8px', boxShadow: 'var(--shadow-xs)' }}>
              <span style={{ display: 'inline-flex', background: 'var(--emerald-50)', color: 'var(--emerald-600)', borderRadius: 999, padding: '3px 7px' }}><Icon name="shield-check" size={13} /></span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)' }}>Terpercaya · Bergaransi · Proses cepat</span>
            </span>

            <h1 style={{ margin: 0, fontSize: 'clamp(34px, 5.2vw, 56px)', lineHeight: 1.06, fontWeight: 800, letterSpacing: 'var(--tracking-tighter)', color: 'var(--text-primary)' }}>
              Akun Digital Premium<br />Lebih Hemat, Cepat,<br />dan <span style={{ background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Terpercaya</span>
            </h1>

            <p style={{ margin: 0, fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 480, fontWeight: 500 }}>
              Nikmati akses premium untuk streaming, produktivitas, AI tools, cloud storage, dan belajar dengan proses order yang mudah dan support responsif.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <Button variant="primary" size="lg" href="#produk" iconRight={<Icon name="arrow-right" size={18} />}>Lihat Produk</Button>
              <Button variant="secondary" size="lg" href="#wa" iconLeft={<Icon name="message-circle" size={18} color="#25D366" />}>Chat Admin</Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', color: 'var(--amber-500)' }}>
                  {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={15} color="var(--amber-500)" fill="var(--amber-500)" />)}
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-secondary)' }}>4.9/5 dari 2.000+ pembeli</span>
              </div>
            </div>
          </div>

          {/* visual */}
          <div className="dps-hero-visual" style={{ position: 'relative', minHeight: 360 }}>
            <div style={{ position: 'absolute', inset: '8% 4%', background: 'var(--gradient-brand-soft)', borderRadius: 28, transform: 'rotate(-3deg)' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, padding: '24px 8px' }}>
              <MiniProduct initial="N" color="#E50914" cat="Streaming" name="Netflix Premium" price="Rp25.000" style={{ transform: 'translateX(-6px)' }} />
              <MiniProduct initial="C" color="#7D2AE8" cat="Design" name="Canva Pro" price="Rp15.000" style={{ transform: 'translateX(18px)', zIndex: 2 }} />
              <MiniProduct initial="G" color="#10A37F" cat="AI Tools" name="ChatGPT Plus" price="Rp75.000" style={{ transform: 'translateX(-2px)' }} />
              {/* floating chip */}
              <div style={{ position: 'absolute', bottom: -10, right: -10, background: 'var(--surface-inverse)', color: '#fff', borderRadius: 14, padding: '10px 14px', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ display: 'inline-flex', background: 'var(--emerald-500)', borderRadius: 8, padding: 5 }}><Icon name="zap" size={14} color="#fff" fill="#fff" /></span>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Aktivasi</div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>~ 5 menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
window.Hero = Hero;
