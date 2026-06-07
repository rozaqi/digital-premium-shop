function Navbar() {
  const { Container, Button, Icon } = window;
  const { nav } = window.SHOP_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const root = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 8);
    };
    root.addEventListener('scroll', onScroll);
    onScroll();
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'background var(--duration-base), border-color var(--duration-base)',
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo.svg" height="42" alt="Digital Premium Shop" />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }} className="dps-nav-links">
          {nav.map((n) => (
            <a key={n.label} href={n.href} style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>{n.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="dps-nav-cta">
          <Button variant="primary" size="sm" href="#produk" iconLeft={<Icon name="message-circle" size={16} />}>Order Sekarang</Button>
        </div>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="dps-nav-burger" style={{
          display: 'none', width: 42, height: 42, borderRadius: 12, border: '1px solid var(--border-subtle)',
          background: 'var(--surface-card)', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <Icon name={open ? 'x' : 'menu'} size={20} color="var(--text-primary)" />
        </button>
      </Container>

      {open && (
        <div className="dps-nav-mobile" style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-hairline)', padding: '12px 0 18px' }}>
          <Container style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {nav.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{ padding: '12px 8px', fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', borderRadius: 10 }}>{n.label}</a>
            ))}
            <div style={{ marginTop: 8 }}>
              <Button variant="primary" size="md" fullWidth href="#produk">Order Sekarang</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
window.Navbar = Navbar;
