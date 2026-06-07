function Products() {
  const { Container, Button, Badge, Icon, SectionHead } = window;
  const { useState, useEffect, useRef } = React;
  const { products } = window.SHOP_DATA;

  /* ── inject styles once ── */
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const css = `
      @keyframes prodCardReveal {
        0%   { opacity: 0; transform: translate3d(0, 36px, 0) scale(0.97); filter: blur(3px); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes prodBadgePulse {
        0%, 100% { transform: scale(1); }
        50%      { transform: scale(1.06); }
      }
      @keyframes prodShimmer {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes prodCheckPop {
        0%   { opacity: 0; transform: scale(0.5); }
        60%  { transform: scale(1.15); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes prodGlowFloat {
        0%, 100% { opacity: 0.35; transform: translate3d(0, 0, 0) scale(1); }
        50%      { opacity: 0.6;  transform: translate3d(0, -6px, 0) scale(1.08); }
      }
      .dps-prod-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: var(--surface-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: var(--space-6);
        overflow: hidden;
        will-change: transform, box-shadow;
        backface-visibility: hidden;
        transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    border-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        cursor: pointer;
      }
      .dps-prod-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
        background-size: 250% 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }
      .dps-prod-card:hover {
        transform: translateY(-6px) scale(1.01);
        box-shadow: var(--shadow-card-hover);
        border-color: var(--indigo-200);
      }
      .dps-prod-card:hover::before {
        opacity: 1;
        animation: prodShimmer 2s ease-in-out;
      }
      .dps-prod-card .prod-icon-wrap {
        transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .dps-prod-card:hover .prod-icon-wrap {
        transform: scale(1.08);
        box-shadow: 0 4px 18px rgba(0,0,0,0.08);
      }
      .dps-prod-card .prod-cta {
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    box-shadow 0.3s ease;
      }
      .dps-prod-card:hover .prod-cta {
        box-shadow: var(--shadow-primary);
      }
      @media (prefers-reduced-motion: reduce) {
        .dps-prod-card, .dps-prod-card::before, .dps-prod-card .prod-icon-wrap {
          animation: none !important;
          transition: none !important;
        }
      }
    `;
    const s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }, []);

  /* ── mount state for animation trigger ── */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── helper: compute savings percentage ── */
  const getSavings = (price, oldPrice) => {
    if (!oldPrice) return null;
    const parse = (s) => parseInt(s.replace(/[^\d]/g, ''), 10);
    const cur = parse(price);
    const old = parse(oldPrice);
    if (!old || !cur) return null;
    return Math.round(((old - cur) / old) * 100);
  };

  const ProductCard = (p) => {
    const idx = p.idx;
    const savings = getSavings(p.price, p.oldPrice);

    return (
      <div
        className="dps-prod-card"
        data-idx={idx}
        style={{
          opacity: 0,
          animation: mounted
            ? `prodCardReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s both`
            : 'none',
        }}
      >
        {/* top-right badges area */}
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 6, zIndex: 2 }}>
          {savings && (
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#fff',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              borderRadius: 999, padding: '4px 10px',
              animation: 'prodBadgePulse 3s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
            }}>-{savings}%</span>
          )}
          {p.badge && <Badge tone={p.badge.tone}>{p.badge.label}</Badge>}
        </div>

        {/* brand-colored background glow */}
        <div style={{
          position: 'absolute', top: -20, left: -20, width: 120, height: 120, borderRadius: '50%',
          background: `radial-gradient(circle, ${p.brandColor}18, transparent 70%)`,
          animation: 'prodGlowFloat 6s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
          pointerEvents: 'none',
        }} />

        {/* brand icon */}
        <span className="prod-icon-wrap" style={{
          position: 'relative', zIndex: 1,
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: `color-mix(in srgb, ${p.brandColor} 14%, white)`,
          color: p.brandColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 23, marginBottom: 18,
        }}>{p.brandInitial}</span>

        {/* category label */}
        <div style={{
          position: 'relative', zIndex: 1,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-tertiary)',
        }}>{p.category}</div>

        {/* product name */}
        <div style={{
          position: 'relative', zIndex: 1,
          fontSize: 20, fontWeight: 800, letterSpacing: '-0.015em',
          color: 'var(--text-primary)', marginTop: 4,
        }}>{p.name}</div>

        {/* price row */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>mulai dari</span>
          <span style={{
            fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em',
            background: `linear-gradient(90deg, ${p.brandColor}, var(--color-primary))`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>{p.price}</span>
          {p.oldPrice && <span style={{ fontSize: 14, color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>{p.oldPrice}</span>}
        </div>
        <div style={{ position: 'relative', zIndex: 1, fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>/ {p.duration}</div>

        {/* benefits checklist with staggered pop-in */}
        <ul style={{ position: 'relative', zIndex: 1, listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {p.benefits.map((b, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)',
              opacity: 0,
              animation: mounted ? `prodCheckPop 0.4s cubic-bezier(0.16,1,0.3,1) ${idx * 0.08 + 0.2 + i * 0.05}s both` : 'none',
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                background: `color-mix(in srgb, ${p.brandColor} 10%, var(--emerald-50))`,
                color: 'var(--emerald-600)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}><Icon name="check" size={12} color="var(--emerald-600)" strokeWidth={3} /></span>
              <span style={{ fontWeight: 500 }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* spacer */}
        <div style={{ flex: 1, minHeight: 18 }} />

        {/* CTA button */}
        <div className="prod-cta" style={{ position: 'relative', zIndex: 1 }}>
          <Button variant="primary" fullWidth href="#wa" iconLeft={<Icon name="message-circle" size={17} />}>Order via WhatsApp</Button>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <SectionHead align="left" eyebrow="Produk Populer" title="Produk paling dicari minggu ini" subtitle="Akun premium resmi, harga hemat, dan langsung aktif setelah order." />
        <Button variant="ghost" href="#produk" iconRight={<Icon name="arrow-right" size={17} />} style={{ paddingLeft: 0 }}>Lihat semua produk</Button>
      </div>
      <div className="dps-prod-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 44 }}>
        {products.map((p, i) => <ProductCard key={p.name} {...p} idx={i} />)}
      </div>
    </Container>
  );
}
window.Products = Products;
