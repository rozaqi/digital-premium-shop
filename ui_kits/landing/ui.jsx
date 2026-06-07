/* Landing kit — shared primitives. Each attaches to window so other
   babel scripts can use them. Mirrors the DS components visually and
   uses the real design tokens from styles.css. Self-contained (no bundle)
   so the page renders anywhere. */

const ICON_PATHS = {
  'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'headphones': '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'briefcase': '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  'palette': '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  'menu': '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'package-check': '<path d="M16 16h6"/><path d="m16 19 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
};

function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.9, style, fill = 'none' }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill={fill} stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || '' }}
    />
  );
}

function Container({ children, narrow = false, style }) {
  return (
    <div style={{
      width: '100%', maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      marginLeft: 'auto', marginRight: 'auto',
      paddingLeft: 'clamp(20px, 5vw, 32px)', paddingRight: 'clamp(20px, 5vw, 32px)',
      ...style,
    }}>{children}</div>
  );
}

function Eyebrow({ children, style }) {
  return (
    <span style={{
      fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase', color: 'var(--color-primary)', ...style,
    }}>{children}</span>
  );
}

function SectionHead({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 12, alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align, maxWidth: align === 'center' ? 640 : 'none', margin: align === 'center' ? '0 auto' : 0,
    }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, var(--text-h2))', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', lineHeight: 1.15 }}>{title}</h2>
      {subtitle && <p style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 1.55, color: 'var(--text-secondary)', fontWeight: 500 }}>{subtitle}</p>}
    </div>
  );
}

function Button({ children, variant = 'primary', size = 'md', href = '#', iconLeft, iconRight, fullWidth, onClick, style }) {
  const sizes = {
    sm: { fontSize: 14, padding: '8px 14px', minHeight: 38, radius: 10, gap: 6 },
    md: { fontSize: 15, padding: '11px 20px', minHeight: 46, radius: 14, gap: 8 },
    lg: { fontSize: 16.5, padding: '15px 26px', minHeight: 54, radius: 15, gap: 9 },
  };
  const s = sizes[size];
  const variants = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-primary)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)' },
    ghost: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid transparent', boxShadow: 'none' },
    whatsapp: { background: '#25D366', color: '#0B3D24', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    white: { background: '#fff', color: 'var(--color-primary)', border: '1px solid transparent', boxShadow: 'var(--shadow-md)' },
  };
  const v = variants[variant];
  return (
    <a href={href} onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
      fontFamily: 'var(--font-sans)', fontSize: s.fontSize, fontWeight: variant === 'whatsapp' ? 700 : 600,
      letterSpacing: '-0.01em', lineHeight: 1, padding: s.padding, minHeight: s.minHeight,
      width: fullWidth ? '100%' : 'auto', borderRadius: s.radius, textDecoration: 'none', whiteSpace: 'nowrap',
      cursor: 'pointer', transition: 'var(--transition-base)', ...v, ...style,
    }}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';
        else if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sunken)';
        else e.currentTarget.style.filter = 'brightness(0.97)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => { e.currentTarget.style.background = v.background; e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
    >
      {iconLeft}{children}{iconRight}
    </a>
  );
}

function Badge({ children, tone = 'neutral' }) {
  const tones = {
    neutral: { bg: 'var(--slate-100)', fg: 'var(--slate-600)' },
    bestseller: { bg: 'var(--badge-bestseller-bg)', fg: 'var(--badge-bestseller-fg)' },
    popular: { bg: 'var(--badge-popular-bg)', fg: 'var(--badge-popular-fg)' },
    new: { bg: 'var(--badge-new-bg)', fg: 'var(--badge-new-fg)' },
    success: { bg: 'var(--emerald-50)', fg: 'var(--emerald-700)' },
    sale: { bg: 'var(--rose-100)', fg: 'var(--rose-600)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: t.bg, color: t.fg, fontSize: 12, fontWeight: 700, lineHeight: 1, padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap' }}>{children}</span>
  );
}

Object.assign(window, { Icon, Container, Eyebrow, SectionHead, Button, Badge });
