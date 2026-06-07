function Hero() {
  const { Container, Button, Icon, Eyebrow } = window;
  const { useState, useEffect, useRef } = React;

  /* ── keyframe injection (once) ── */
  const stylesInjected = useRef(false);
  useEffect(() => {
    if (stylesInjected.current) return;
    stylesInjected.current = true;
    const css = `
      /* entrance */
      @keyframes heroCardEnter {
        0%   { opacity: 0; transform: translate3d(0, 24px, 0) scale(0.97); filter: blur(3px); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }

      /* pure vertical float relative to the offset parent */
      @keyframes heroFloat {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50%      { transform: translate3d(0, -8px, 0); }
      }

      @keyframes heroChipFloat {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        50%      { transform: translate3d(0, -5px, 0) rotate(1.5deg); }
      }

      @keyframes heroPulseRing {
        0%   { box-shadow: 0 0 0 0 rgba(80,70,229,0.18); }
        50%  { box-shadow: 0 0 0 8px rgba(80,70,229,0); }
        100% { box-shadow: 0 0 0 0 rgba(80,70,229,0); }
      }

      @keyframes heroShimmer {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }

      @keyframes heroBgRotate {
        0%   { transform: rotate(-3deg) scale(1); }
        50%  { transform: rotate(-1.8deg) scale(1.015); }
        100% { transform: rotate(-3deg) scale(1); }
      }

      @keyframes heroGlowPulse {
        0%, 100% { opacity: 0.45; transform: scale(1); }
        50%      { opacity: 0.75; transform: scale(1.06); }
      }

      @keyframes heroBadgeBounce {
        0%, 100% { transform: scale(1); }
        50%      { transform: scale(1.06); }
      }

      /* GPU-accelerated card base */
      .dps-hero-minicard {
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      .dps-hero-glow {
        will-change: opacity, transform;
        backface-visibility: hidden;
      }
      .dps-hero-bg-panel {
        will-change: transform;
        backface-visibility: hidden;
      }
      .dps-hero-chip {
        will-change: transform, opacity;
        backface-visibility: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        .dps-hero-minicard, .dps-hero-chip, .dps-hero-bg-panel, .dps-hero-glow {
          animation: none !important;
        }
      }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }, []);

  /* ── staggered entrance state ── */
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 300); return () => clearTimeout(t); }, []);

  const cards = [
    { initial: 'N', color: '#E50914', cat: 'Streaming', name: 'Netflix Premium', price: 'Rp25.000', offset: '-6px', delay: 0 },
    { initial: 'C', color: '#7D2AE8', cat: 'Design',    name: 'Canva Pro',       price: 'Rp15.000', offset: '18px',  delay: 1 },
    { initial: 'G', color: '#10A37F', cat: 'AI Tools',   name: 'ChatGPT Plus',   price: 'Rp75.000', offset: '-2px',  delay: 2 },
  ];

  const MiniProduct = ({ initial, color, name, cat, price, offset, delay, style: extraStyle }) => {
    const enterDelay = `${delay * 0.22 + 0.15}s`;
    const floatDelay = `${delay * 0.8 + 1.2}s`;
    const floatDur   = `${5.5 + delay * 0.7}s`;

    return (
      /* Outer Container: Handles static offset, entrance path, and opacity */
      <div
        style={{
          transform: `translate3d(${offset}, 0, 0)`,
          opacity: 0,
          animation: visible
            ? `heroCardEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${enterDelay} forwards`
            : 'none',
          willChange: 'transform, opacity',
          ...extraStyle,
        }}
      >
        {/* Inner Container: Handles pure relative floating without overriding offset */}
        <div
          className="dps-hero-minicard"
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 13,
            animation: visible
              ? `heroFloat ${floatDur} cubic-bezier(0.45, 0.05, 0.55, 0.95) ${floatDelay} infinite`
              : 'none',
          }}
        >
          {/* icon circle with subtle pulse */}
          <span style={{
            width: 46, height: 46, borderRadius: 12, flexShrink: 0,
            background: `color-mix(in srgb, ${color} 14%, white)`,
            color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 19,
            animation: visible ? `heroPulseRing 3.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) ${delay * 1.2 + 1.5}s infinite` : 'none',
          }}>
            {initial}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', color: 'var(--text-tertiary)',
            }}>{cat}</div>
            <div style={{
              fontSize: 15, fontWeight: 700, color: 'var(--text-primary)',
            }}>{name}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>mulai dari</div>
            <div style={{
              fontSize: 16, fontWeight: 800,
              background: 'linear-gradient(90deg, var(--color-primary), #7C3AED)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{price}</div>
          </div>
        </div>
      </div>
    );
  };

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

          {/* ───── animated visual ───── */}
          <div className="dps-hero-visual" style={{ position: 'relative', minHeight: 360 }}>

            {/* animated glow orbs behind cards */}
            <div className="dps-hero-glow" style={{
              position: 'absolute', top: '15%', left: '10%', width: 180, height: 180,
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,9,20,0.13), transparent 70%)',
              animation: 'heroGlowPulse 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite', pointerEvents: 'none',
            }} />
            <div className="dps-hero-glow" style={{
              position: 'absolute', bottom: '10%', right: '5%', width: 200, height: 200,
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,163,127,0.10), transparent 70%)',
              animation: 'heroGlowPulse 7s cubic-bezier(0.45, 0.05, 0.55, 0.95) 1.5s infinite', pointerEvents: 'none',
            }} />

            {/* gradient panel with slow breathing */}
            <div className="dps-hero-bg-panel" style={{
              position: 'absolute', inset: '8% 4%',
              background: 'var(--gradient-brand-soft)',
              borderRadius: 28,
              animation: 'heroBgRotate 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
            }} />

            {/* shimmer overlay */}
            <div style={{
              position: 'absolute', inset: '8% 4%', borderRadius: 28, overflow: 'hidden', pointerEvents: 'none',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.14) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'heroShimmer 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) 2.5s infinite',
              }} />
            </div>

            {/* product cards */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, padding: '24px 8px' }}>
              {cards.map((c, i) => (
                <MiniProduct key={c.initial} {...c} style={{ zIndex: i === 1 ? 2 : 1 }} />
              ))}

              {/* floating chip */}
              <div className="dps-hero-chip" style={{
                position: 'absolute', bottom: -10, right: -10,
                zIndex: 10,
                background: 'var(--surface-inverse)', color: '#fff',
                borderRadius: 14, padding: '10px 14px',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex', alignItems: 'center', gap: 9,
                opacity: 0,
                animation: visible
                  ? 'heroCardEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards, heroChipFloat 5s cubic-bezier(0.45, 0.05, 0.55, 0.95) 2s infinite'
                  : 'none',
              }}>
                <span style={{
                  display: 'inline-flex',
                  background: 'var(--emerald-500)', borderRadius: 8, padding: 5,
                  animation: 'heroBadgeBounce 3s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                }}>
                  <Icon name="zap" size={14} color="#fff" fill="#fff" />
                </span>
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
