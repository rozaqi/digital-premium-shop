import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';

/**
 * ProductCard — the storefront's primary product unit. Shows brand mark,
 * category, flag badge, "mulai dari" price, duration, a short benefit list,
 * and an Order CTA. Hover lifts the card.
 */
export function ProductCard({
  name,
  category,
  price,            // string already formatted, e.g. "Rp25.000"
  priceNote = 'mulai dari',
  oldPrice,         // optional struck-through price
  duration,         // e.g. "1 Bulan"
  benefits = [],    // array of short strings
  badge,            // { tone, label }
  brandColor = 'var(--indigo-500)',
  brandInitial,     // letter(s) for the placeholder brand chip
  ctaLabel = 'Order',
  onOrder,
  href,
  style,
}) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-6)',
        transition: 'var(--transition-base)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
        e.currentTarget.style.borderColor = 'var(--indigo-200)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      {badge && (
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <Badge tone={badge.tone}>{badge.label}</Badge>
        </div>
      )}

      {/* Brand chip */}
      <div
        style={{
          width: 52, height: 52, borderRadius: 'var(--radius-md)',
          background: `color-mix(in srgb, ${brandColor} 14%, white)`,
          color: brandColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 20, marginBottom: 16,
        }}
      >
        {brandInitial || (name ? name[0] : '•')}
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
        {category}
      </div>
      <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.015em', color: 'var(--text-primary)', marginTop: 4 }}>
        {name}
      </div>

      {/* Price */}
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{priceNote}</span>
        <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>{price}</span>
        {oldPrice && (
          <span style={{ fontSize: 14, color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>{oldPrice}</span>
        )}
      </div>
      {duration && (
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>/ {duration}</div>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {benefits.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                background: 'var(--emerald-50)', color: 'var(--emerald-600)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800,
              }}>✓</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 20 }}>
        <Button variant="primary" fullWidth href={href} onClick={onOrder}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
