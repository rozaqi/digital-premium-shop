import React from 'react';

/**
 * FaqAccordion — list of expandable Q&A rows. Single-open by default;
 * pass `allowMultiple` to keep several open. Items: { question, answer }.
 */
export function FaqAccordion({ items = [], allowMultiple = false, defaultOpen = 0, style }) {
  const [open, setOpen] = React.useState(() => {
    const s = new Set();
    if (defaultOpen != null && defaultOpen >= 0) s.add(defaultOpen);
    return s;
  });

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-sans)', ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{
            background: 'var(--surface-card)',
            border: `1px solid ${isOpen ? 'var(--indigo-200)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)',
            boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
            overflow: 'hidden',
            transition: 'border-color var(--duration-base) var(--ease-out)',
          }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, padding: '18px 20px', background: 'transparent', border: 'none',
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                fontSize: 16, fontWeight: 700, color: 'var(--text-primary)',
              }}
            >
              {it.question}
              <span style={{
                width: 28, height: 28, flexShrink: 0, borderRadius: '50%',
                background: isOpen ? 'var(--color-primary)' : 'var(--slate-100)',
                color: isOpen ? '#fff' : 'var(--slate-500)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'var(--transition-base)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
              }}>
                <i data-lucide="chevron-down" style={{ width: 16, height: 16 }} />
              </span>
            </button>
            <div style={{
              display: 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--duration-slow) var(--ease-out)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0 20px 20px', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {it.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
