function Benefits() {
  const { Container, Icon, SectionHead } = window;
  const { useState, useEffect, useRef } = React;
  const { benefits } = window.SHOP_DATA;

  /* ── CSS Injection (once) ── */
  const stylesInjected = useRef(false);
  useEffect(() => {
    if (stylesInjected.current) return;
    stylesInjected.current = true;
    const css = `
      @keyframes benefitCardReveal {
        0%   { opacity: 0; transform: translate3d(0, 24px, 0) scale(0.97); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes iconPulse {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50%      { transform: scale(1.08) rotate(3deg); }
      }
      .dps-benefit-card {
        background: var(--surface-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xs);
        padding: var(--space-6);
        position: relative;
        overflow: hidden;
        will-change: transform, box-shadow, border-color;
        backface-visibility: hidden;
        transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    box-shadow 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    border-color 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      /* Soft colored background glow on hover */
      .dps-benefit-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 10% 10%, rgba(80, 70, 229, 0.03), transparent 60%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
      .dps-benefit-card:hover {
        transform: translateY(-6px) scale(1.01);
        box-shadow: var(--shadow-md), 0 10px 24px rgba(80, 70, 229, 0.04);
        border-color: var(--indigo-200);
      }
      .dps-benefit-card:hover::after {
        opacity: 1;
      }
      .dps-benefit-card .benefit-icon-box {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        background: var(--gradient-brand-soft);
        color: var(--color-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
        position: relative;
        z-index: 2;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    background 0.4s ease,
                    box-shadow 0.4s ease;
      }
      .dps-benefit-card:hover .benefit-icon-box {
        transform: scale(1.1) rotate(5deg);
        background: var(--color-primary);
        color: #ffffff;
        box-shadow: 0 4px 14px rgba(80, 70, 229, 0.25);
      }
      /* Transition for the icon color inside the container */
      .dps-benefit-card .benefit-icon-box svg {
        transition: stroke 0.4s ease;
      }
      .dps-benefit-card:hover .benefit-icon-box svg {
        stroke: #ffffff;
      }
      .dps-benefit-title {
        margin: 0 0 8px;
        font-size: 17.5px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: var(--text-primary);
        position: relative;
        z-index: 2;
        transition: color 0.3s ease;
      }
      .dps-benefit-card:hover .dps-benefit-title {
        color: var(--color-primary);
      }
      .dps-benefit-desc {
        margin: 0;
        font-size: 14.5px;
        line-height: 1.55;
        color: var(--text-secondary);
        position: relative;
        z-index: 2;
      }
      @media (prefers-reduced-motion: reduce) {
        .dps-benefit-card, .dps-benefit-card .benefit-icon-box {
          animation: none !important;
          transition: none !important;
        }
      }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }, []);

  /* ── mount trigger state ── */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container>
      <SectionHead eyebrow="Kenapa kami" title="Alasan ribuan pelanggan memilih kami" subtitle="Kami fokus pada hal yang paling penting buat kamu: hemat, cepat, dan bisa dipercaya." />
      <div className="dps-benefit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 44 }}>
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="dps-benefit-card"
            style={{
              opacity: 0,
              animation: mounted
                ? `benefitCardReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both`
                : 'none',
            }}
          >
            <span className="benefit-icon-box">
              <Icon name={b.icon} size={22} color="var(--color-primary)" />
            </span>
            <h3 className="dps-benefit-title">{b.title}</h3>
            <p className="dps-benefit-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
window.Benefits = Benefits;
