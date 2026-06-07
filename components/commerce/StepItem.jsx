import React from 'react';

/**
 * StepItem — one numbered step in the "Cara Order" stepper (1–4).
 * Shows a numbered token, title and description. `last` hides the connector.
 */
export function StepItem({ number, title, description, icon, last = false, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--radius-md)',
          background: 'var(--gradient-brand)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, fontWeight: 800, boxShadow: 'var(--shadow-primary)',
        }}>
          {icon ? <i data-lucide={icon} style={{ width: 21, height: 21 }} /> : number}
        </span>
        {!last && (
          <span style={{ flex: 1, height: 2, borderRadius: 2, background: 'var(--border-subtle)',
            backgroundImage: 'linear-gradient(to right, var(--indigo-200), var(--border-subtle))' }} />
        )}
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 4 }}>
          Langkah {number}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</div>
        {description && <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: 6 }}>{description}</div>}
      </div>
    </div>
  );
}
