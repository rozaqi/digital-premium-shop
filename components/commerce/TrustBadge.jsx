import React from 'react';

/**
 * TrustBadge — a single trust signal (icon + short label) for the strip
 * under the hero. Minimal: line icon in a soft chip + one line of text.
 * `icon` is a Lucide icon name.
 */
export function TrustBadge({ icon = 'shield-check', label, sublabel, tint = 'var(--indigo-600)', layout = 'row', style }) {
  const isCol = layout === 'col';
  return (
    <div style={{
      display: 'flex', flexDirection: isCol ? 'column' : 'row',
      alignItems: isCol ? 'flex-start' : 'center', gap: isCol ? 10 : 12,
      fontFamily: 'var(--font-sans)', ...style,
    }}>
      <span style={{
        width: 42, height: 42, flexShrink: 0, borderRadius: 'var(--radius-md)',
        background: `color-mix(in srgb, ${tint} 12%, white)`, color: tint,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <i data-lucide={icon} style={{ width: 21, height: 21 }} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)' }}>{label}</span>
        {sublabel && <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{sublabel}</span>}
      </span>
    </div>
  );
}
