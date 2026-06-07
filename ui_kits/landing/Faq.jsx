function Faq() {
  const { Container, Icon, SectionHead } = window;
  const { faqs } = window.SHOP_DATA;
  const [open, setOpen] = React.useState(0);
  return (
    <Container narrow>
      <SectionHead eyebrow="FAQ" title="Pertanyaan yang sering ditanya" subtitle="Belum nemu jawabannya? Chat admin kami via WhatsApp." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 40 }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              background: 'var(--surface-card)', border: `1px solid ${isOpen ? 'var(--indigo-200)' : 'var(--border-subtle)'}`,
              borderRadius: 'var(--radius-md)', boxShadow: isOpen ? 'var(--shadow-sm)' : 'none', overflow: 'hidden',
              transition: 'border-color var(--duration-base)',
            }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                padding: '18px 20px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                font: 'inherit', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)',
              }}>
                {f.question}
                <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--slate-100)', color: isOpen ? '#fff' : 'var(--slate-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-base)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <Icon name="chevron-down" size={16} color={isOpen ? '#fff' : 'var(--slate-500)'} />
                </span>
              </button>
              <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows var(--duration-slow) var(--ease-out)' }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ margin: 0, padding: '0 20px 20px', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{f.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
window.Faq = Faq;
