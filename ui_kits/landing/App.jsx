function App() {
  const Band = ({ children, bg = 'transparent', id, pt = 'var(--section-gap)', pb = 'var(--section-gap)' }) => (
    <section id={id} style={{ background: bg, paddingTop: pt, paddingBottom: pb }}>{children}</section>
  );
  return (
    <div data-screen-label="Landing Page" style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <window.Navbar />
      <window.Hero />
      <div style={{ paddingBottom: 'var(--section-gap-tight)' }}><window.TrustStrip /></div>
      <Band id="kategori" bg="var(--surface-card)"><window.Categories /></Band>
      <Band id="produk" bg="var(--surface-page)" pb="var(--space-12)"><window.Products /></Band>
      <Band id="benefit" bg="var(--surface-card)" pt="var(--space-12)"><window.Benefits /></Band>
      <Band id="cara-order" bg="var(--gradient-brand-soft)"><window.HowToOrder /></Band>
      <Band bg="var(--surface-card)"><window.Testimonials /></Band>
      <Band id="faq" bg="var(--surface-page)"><window.Faq /></Band>
      <Band bg="var(--surface-card)" pb="var(--space-4)"><window.FinalCta /></Band>
      <window.Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
