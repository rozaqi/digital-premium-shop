import React from 'react';

/**
 * Button — primary action element for Digital Premium Shop.
 * Variants: primary (indigo, default), secondary (outline), ghost,
 * accent (emerald), whatsapp (green). Sizes: sm / md / lg.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  href,
  iconLeft,
  iconRight,
  type = 'button',
  onClick,
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 14, padding: '8px 14px', height: 38, radius: 10, gap: 6 },
    md: { fontSize: 15, padding: '11px 20px', height: 46, radius: 14, gap: 8 },
    lg: { fontSize: 17, padding: '15px 28px', height: 56, radius: 16, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-primary)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
    accent: {
      background: 'var(--color-accent)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    whatsapp: {
      background: '#25D366',
      color: '#0B3D24',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 700,
    },
  };
  const v = variants[variant] || variants.primary;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: v.fontWeight || 600,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    padding: s.padding,
    minHeight: s.height,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-base)',
    WebkitTapHighlightColor: 'transparent',
    ...v,
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    const t = e.currentTarget;
    if (variant === 'primary') t.style.background = 'var(--color-primary-hover)';
    else if (variant === 'secondary') { t.style.background = 'var(--surface-sunken)'; t.style.borderColor = 'var(--border-strong)'; }
    else if (variant === 'ghost') t.style.background = 'var(--color-primary-soft)';
    else if (variant === 'accent') t.style.background = 'var(--color-accent-strong)';
    else if (variant === 'whatsapp') t.style.filter = 'brightness(0.96)';
    t.style.transform = 'translateY(-1px)';
  };
  const hoverOut = (e) => {
    const t = e.currentTarget;
    t.style.background = v.background;
    t.style.filter = 'none';
    t.style.transform = 'translateY(0)';
    if (variant === 'secondary') t.style.borderColor = 'var(--border-strong)';
  };
  const press = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.98)'; };
  const release = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)'; };

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  const handlers = {
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    onMouseDown: press,
    onMouseUp: release,
  };

  if (href && !disabled) {
    return (
      <a href={href} style={base} className={className} onClick={onClick} {...handlers} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} style={base} className={className} disabled={disabled} onClick={onClick} {...handlers} {...rest}>
      {content}
    </button>
  );
}
