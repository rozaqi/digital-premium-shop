import React from 'react';

/**
 * TestimonialCard — minimal customer quote card: rating stars, comment,
 * customer name, and the product they bought. Used 3–6 on the landing page.
 */
export function TestimonialCard({ name, product, comment, rating = 5, avatarColor = 'var(--indigo-500)', style }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      {rating > 0 && (
        <div style={{ display: 'flex', gap: 2, color: 'var(--amber-500)' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} data-lucide="star" style={{
              width: 16, height: 16,
              fill: i < rating ? 'var(--amber-500)' : 'none',
              stroke: i < rating ? 'var(--amber-500)' : 'var(--slate-300)',
            }} />
          ))}
        </div>
      )}
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-primary)' }}>
        “{comment}”
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 4 }}>
        <span style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: `color-mix(in srgb, ${avatarColor} 16%, white)`, color: avatarColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 15,
        }}>
          {name ? name[0] : '•'}
        </span>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)' }}>{name}</div>
          <div style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{product}</div>
        </div>
      </div>
    </div>
  );
}
