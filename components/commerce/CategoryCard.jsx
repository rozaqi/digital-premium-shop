import React from 'react';

/**
 * CategoryCard — clickable category tile (Streaming, AI Tools, etc.).
 * Icon chip + label + optional count. Hover lifts and tints the chip.
 * `icon` is a Lucide icon name rendered via <i data-lucide>.
 */
export function CategoryCard({ label, icon = 'layers', count, tint = 'var(--indigo-500)', href, onClick, style }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, width: '100%',
        textAlign: 'left', textDecoration: 'none', cursor: 'pointer',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xs)',
        padding: '16px 18px',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition-base)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--indigo-200)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      <span style={{
        width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--radius-md)',
        background: `color-mix(in srgb, ${tint} 12%, white)`, color: tint,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <i data-lucide={icon} style={{ width: 22, height: 22 }} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{label}</span>
        {count != null && <span style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>{count} produk</span>}
      </span>
    </Tag>
  );
}
