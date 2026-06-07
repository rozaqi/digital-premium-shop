import React from 'react';

/**
 * Badge — small pill label. Tones map to the store's product flags
 * (bestseller / popular / new) plus neutral / success / sale.
 */
export function Badge({ children, tone = 'neutral', size = 'md', icon, className = '', style }) {
  const tones = {
    neutral:    { bg: 'var(--slate-100)',          fg: 'var(--slate-600)' },
    primary:    { bg: 'var(--indigo-100)',         fg: 'var(--indigo-700)' },
    bestseller: { bg: 'var(--badge-bestseller-bg)', fg: 'var(--badge-bestseller-fg)' },
    popular:    { bg: 'var(--badge-popular-bg)',    fg: 'var(--badge-popular-fg)' },
    new:        { bg: 'var(--badge-new-bg)',        fg: 'var(--badge-new-fg)' },
    success:    { bg: 'var(--emerald-50)',          fg: 'var(--emerald-700)' },
    sale:       { bg: 'var(--rose-100)',            fg: 'var(--rose-600)' },
  };
  const t = tones[tone] || tones.neutral;
  const sizes = {
    sm: { fontSize: 11, padding: '3px 8px' },
    md: { fontSize: 12, padding: '4px 10px' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: t.bg,
        color: t.fg,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '0.01em',
        padding: s.padding,
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {icon}
      {children}
    </span>
  );
}
