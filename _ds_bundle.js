/* @ds-bundle: {"format":3,"namespace":"DigitalPremiumShopDesignSystem_f48416","components":[{"name":"CategoryCard","sourcePath":"components/commerce/CategoryCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"StepItem","sourcePath":"components/commerce/StepItem.jsx"},{"name":"TestimonialCard","sourcePath":"components/commerce/TestimonialCard.jsx"},{"name":"TrustBadge","sourcePath":"components/commerce/TrustBadge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FaqAccordion","sourcePath":"components/feedback/FaqAccordion.jsx"}],"sourceHashes":{"components/commerce/CategoryCard.jsx":"a2f168bda360","components/commerce/ProductCard.jsx":"6c010f47f745","components/commerce/StepItem.jsx":"9900bb35cd69","components/commerce/TestimonialCard.jsx":"076d93a7e4b7","components/commerce/TrustBadge.jsx":"9e5dedb3c4ed","components/core/Badge.jsx":"f5bbe3ea50d4","components/core/Button.jsx":"e614c58a1454","components/core/Card.jsx":"c9ece17bd81f","components/feedback/FaqAccordion.jsx":"bbc8f089f79a","ui_kits/landing/App.jsx":"0319cd3f6ddc","ui_kits/landing/Benefits.jsx":"7039ff16cfae","ui_kits/landing/Categories.jsx":"7f1e81fae1fb","ui_kits/landing/Faq.jsx":"363fa824158b","ui_kits/landing/FinalCta.jsx":"2c30ce501d55","ui_kits/landing/Footer.jsx":"664c16879566","ui_kits/landing/Hero.jsx":"b07645a0bb26","ui_kits/landing/HowToOrder.jsx":"ea78a9e1fe1c","ui_kits/landing/Navbar.jsx":"b08e990a573d","ui_kits/landing/Products.jsx":"72ad601767a4","ui_kits/landing/Testimonials.jsx":"2e59e1eddea8","ui_kits/landing/TrustStrip.jsx":"3049990e3aff","ui_kits/landing/data.js":"733bdeac2893","ui_kits/landing/ui.jsx":"e91a44536480"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DigitalPremiumShopDesignSystem_f48416 = window.DigitalPremiumShopDesignSystem_f48416 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryCard.jsx
try { (() => {
/**
 * CategoryCard — clickable category tile (Streaming, AI Tools, etc.).
 * Icon chip + label + optional count. Hover lifts and tints the chip.
 * `icon` is a Lucide icon name rendered via <i data-lucide>.
 */
function CategoryCard({
  label,
  icon = 'layers',
  count,
  tint = 'var(--indigo-500)',
  href,
  onClick,
  style
}) {
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      textDecoration: 'none',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: '16px 18px',
      fontFamily: 'var(--font-sans)',
      transition: 'var(--transition-base)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--indigo-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${tint} 12%, white)`,
      color: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-tertiary)'
    }
  }, count, " produk")));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/StepItem.jsx
try { (() => {
/**
 * StepItem — one numbered step in the "Cara Order" stepper (1–4).
 * Shows a numbered token, title and description. `last` hides the connector.
 */
function StepItem({
  number,
  title,
  description,
  icon,
  last = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 800,
      boxShadow: 'var(--shadow-primary)'
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 21,
      height: 21
    }
  }) : number), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      borderRadius: 2,
      background: 'var(--border-subtle)',
      backgroundImage: 'linear-gradient(to right, var(--indigo-200), var(--border-subtle))'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      marginBottom: 4
    }
  }, "Langkah ", number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, description)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TestimonialCard.jsx
try { (() => {
/**
 * TestimonialCard — minimal customer quote card: rating stars, comment,
 * customer name, and the product they bought. Used 3–6 on the landing page.
 */
function TestimonialCard({
  name,
  product,
  comment,
  rating = 5,
  avatarColor = 'var(--indigo-500)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rating > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--amber-500)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 16,
      height: 16,
      fill: i < rating ? 'var(--amber-500)' : 'none',
      stroke: i < rating ? 'var(--amber-500)' : 'var(--slate-300)'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-primary)'
    }
  }, "\u201C", comment, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      flexShrink: 0,
      background: `color-mix(in srgb, ${avatarColor} 16%, white)`,
      color: avatarColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 15
    }
  }, name ? name[0] : '•'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, product))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TrustBadge.jsx
try { (() => {
/**
 * TrustBadge — a single trust signal (icon + short label) for the strip
 * under the hero. Minimal: line icon in a soft chip + one line of text.
 * `icon` is a Lucide icon name.
 */
function TrustBadge({
  icon = 'shield-check',
  label,
  sublabel,
  tint = 'var(--indigo-600)',
  layout = 'row',
  style
}) {
  const isCol = layout === 'col';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isCol ? 'column' : 'row',
      alignItems: isCol ? 'flex-start' : 'center',
      gap: isCol ? 10 : 12,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${tint} 12%, white)`,
      color: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 21,
      height: 21
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small pill label. Tones map to the store's product flags
 * (bestseller / popular / new) plus neutral / success / sale.
 */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  icon,
  className = '',
  style
}) {
  const tones = {
    neutral: {
      bg: 'var(--slate-100)',
      fg: 'var(--slate-600)'
    },
    primary: {
      bg: 'var(--indigo-100)',
      fg: 'var(--indigo-700)'
    },
    bestseller: {
      bg: 'var(--badge-bestseller-bg)',
      fg: 'var(--badge-bestseller-fg)'
    },
    popular: {
      bg: 'var(--badge-popular-bg)',
      fg: 'var(--badge-popular-fg)'
    },
    new: {
      bg: 'var(--badge-new-bg)',
      fg: 'var(--badge-new-fg)'
    },
    success: {
      bg: 'var(--emerald-50)',
      fg: 'var(--emerald-700)'
    },
    sale: {
      bg: 'var(--rose-100)',
      fg: 'var(--rose-600)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const sizes = {
    sm: {
      fontSize: 11,
      padding: '3px 8px'
    },
    md: {
      fontSize: 12,
      padding: '4px 10px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
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
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element for Digital Premium Shop.
 * Variants: primary (indigo, default), secondary (outline), ghost,
 * accent (emerald), whatsapp (green). Sizes: sm / md / lg.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  href,
  iconLeft,
  iconRight,
  type = 'button',
  onClick,
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 14px',
      height: 38,
      radius: 10,
      gap: 6
    },
    md: {
      fontSize: 15,
      padding: '11px 20px',
      height: 46,
      radius: 14,
      gap: 8
    },
    lg: {
      fontSize: 17,
      padding: '15px 28px',
      height: 56,
      radius: 16,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-primary)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    accent: {
      background: 'var(--color-accent)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    whatsapp: {
      background: '#25D366',
      color: '#0B3D24',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 700
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: v.fontWeight || 600,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    padding: s.padding,
    minHeight: s.height,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-base)',
    WebkitTapHighlightColor: 'transparent',
    ...v,
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const t = e.currentTarget;
    if (variant === 'primary') t.style.background = 'var(--color-primary-hover)';else if (variant === 'secondary') {
      t.style.background = 'var(--surface-sunken)';
      t.style.borderColor = 'var(--border-strong)';
    } else if (variant === 'ghost') t.style.background = 'var(--color-primary-soft)';else if (variant === 'accent') t.style.background = 'var(--color-accent-strong)';else if (variant === 'whatsapp') t.style.filter = 'brightness(0.96)';
    t.style.transform = 'translateY(-1px)';
  };
  const hoverOut = e => {
    const t = e.currentTarget;
    t.style.background = v.background;
    t.style.filter = 'none';
    t.style.transform = 'translateY(0)';
    if (variant === 'secondary') t.style.borderColor = 'var(--border-strong)';
  };
  const press = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
  };
  const release = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  const handlers = {
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    onMouseDown: press,
    onMouseUp: release
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      className: className,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    className: className,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * ProductCard — the storefront's primary product unit. Shows brand mark,
 * category, flag badge, "mulai dari" price, duration, a short benefit list,
 * and an Order CTA. Hover lifts the card.
 */
function ProductCard({
  name,
  category,
  price,
  // string already formatted, e.g. "Rp25.000"
  priceNote = 'mulai dari',
  oldPrice,
  // optional struck-through price
  duration,
  // e.g. "1 Bulan"
  benefits = [],
  // array of short strings
  badge,
  // { tone, label }
  brandColor = 'var(--indigo-500)',
  brandInitial,
  // letter(s) for the placeholder brand chip
  ctaLabel = 'Order',
  onOrder,
  href,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      transition: 'var(--transition-base)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
      e.currentTarget.style.borderColor = 'var(--indigo-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone
  }, badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${brandColor} 14%, white)`,
      color: brandColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 20,
      marginBottom: 16
    }
  }, brandInitial || (name ? name[0] : '•')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-0.015em',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, priceNote), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--color-primary)'
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-tertiary)',
      textDecoration: 'line-through'
    }
  }, oldPrice)), duration && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "/ ", duration), benefits.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--emerald-50)',
      color: 'var(--emerald-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    href: href,
    onClick: onOrder
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base white surface with soft border + shadow. The building
 * block for product, category, testimonial and feature panels.
 * `interactive` adds the hover-lift micro-interaction.
 */
function Card({
  children,
  padding = 'var(--space-6)',
  radius = 'var(--radius-lg)',
  interactive = false,
  featured = false,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  const base = {
    background: 'var(--surface-card)',
    border: featured ? '1.5px solid var(--indigo-200)' : '1px solid var(--border-subtle)',
    borderRadius: radius,
    boxShadow: featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    padding,
    transition: 'var(--transition-base)',
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
      e.currentTarget.style.borderColor = 'var(--indigo-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = featured ? 'var(--shadow-md)' : 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = featured ? 'var(--indigo-200)' : 'var(--border-subtle)';
    }
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FaqAccordion.jsx
try { (() => {
/**
 * FaqAccordion — list of expandable Q&A rows. Single-open by default;
 * pass `allowMultiple` to keep several open. Items: { question, answer }.
 */
function FaqAccordion({
  items = [],
  allowMultiple = false,
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(() => {
    const s = new Set();
    if (defaultOpen != null && defaultOpen >= 0) s.add(defaultOpen);
    return s;
  });
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: `1px solid ${isOpen ? 'var(--indigo-200)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
        overflow: 'hidden',
        transition: 'border-color var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--text-primary)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        flexShrink: 0,
        borderRadius: '50%',
        background: isOpen ? 'var(--color-primary)' : 'var(--slate-100)',
        color: isOpen ? '#fff' : 'var(--slate-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--transition-base)',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-down",
      style: {
        width: 16,
        height: 16
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 20px',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
      }
    }, it.answer))));
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
function App() {
  const Band = ({
    children,
    bg = 'transparent',
    id,
    pt = 'var(--section-gap)',
    pb = 'var(--section-gap)'
  }) => /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingTop: pt,
      paddingBottom: pb
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Landing Page",
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(window.Navbar, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--section-gap-tight)'
    }
  }, /*#__PURE__*/React.createElement(window.TrustStrip, null)), /*#__PURE__*/React.createElement(Band, {
    id: "kategori",
    bg: "var(--surface-card)"
  }, /*#__PURE__*/React.createElement(window.Categories, null)), /*#__PURE__*/React.createElement(Band, {
    id: "produk",
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement(window.Products, null)), /*#__PURE__*/React.createElement(Band, {
    id: "benefit",
    bg: "var(--surface-card)"
  }, /*#__PURE__*/React.createElement(window.Benefits, null)), /*#__PURE__*/React.createElement(Band, {
    id: "cara-order",
    bg: "var(--gradient-brand-soft)"
  }, /*#__PURE__*/React.createElement(window.HowToOrder, null)), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-card)"
  }, /*#__PURE__*/React.createElement(window.Testimonials, null)), /*#__PURE__*/React.createElement(Band, {
    id: "faq",
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement(window.Faq, null)), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-card)",
    pb: "var(--space-4)"
  }, /*#__PURE__*/React.createElement(window.FinalCta, null)), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Benefits.jsx
try { (() => {
function Benefits() {
  const {
    Container,
    Icon,
    SectionHead
  } = window;
  const {
    benefits
  } = window.SHOP_DATA;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Kenapa kami",
    title: "Alasan ribuan pelanggan memilih kami",
    subtitle: "Kami fokus pada hal yang paling penting buat kamu: hemat, cepat, dan bisa dipercaya."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dps-benefit-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 44
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-brand-soft)',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 22,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontSize: 17.5,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, b.desc)))));
}
window.Benefits = Benefits;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Benefits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Categories.jsx
try { (() => {
function Categories() {
  const {
    Container,
    Icon,
    SectionHead
  } = window;
  const {
    categories
  } = window.SHOP_DATA;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Kategori",
    title: "Jelajahi berdasarkan kategori",
    subtitle: "Temukan layanan premium favoritmu dari pilihan kategori yang lengkap."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dps-cat-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 16,
      marginTop: 40
    }
  }, categories.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.label,
    href: "#produk",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      textAlign: 'center',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: '22px 14px',
      transition: 'var(--transition-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--indigo-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${c.tint} 12%, white)`,
      color: c.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 25,
    color: c.tint
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, c.count, " produk")))));
}
window.Categories = Categories;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Categories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Faq.jsx
try { (() => {
function Faq() {
  const {
    Container,
    Icon,
    SectionHead
  } = window;
  const {
    faqs
  } = window.SHOP_DATA;
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering ditanya",
    subtitle: "Belum nemu jawabannya? Chat admin kami via WhatsApp."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 40
    }
  }, faqs.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: `1px solid ${isOpen ? 'var(--indigo-200)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
        overflow: 'hidden',
        transition: 'border-color var(--duration-base)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--text-primary)'
      }
    }, f.question, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        flexShrink: 0,
        borderRadius: '50%',
        background: isOpen ? 'var(--color-primary)' : 'var(--slate-100)',
        color: isOpen ? '#fff' : 'var(--slate-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--transition-base)',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 16,
      color: isOpen ? '#fff' : 'var(--slate-500)'
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 20px 20px',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
      }
    }, f.answer))));
  })));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FinalCta.jsx
try { (() => {
function FinalCta() {
  const {
    Container,
    Button,
    Icon
  } = window;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-brand)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      right: -60,
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -120,
      left: -40,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      maxWidth: 620,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      borderRadius: 999,
      padding: '6px 14px',
      fontSize: 12.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    color: "#fff"
  }), " Upgrade hari ini"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(28px, 4.5vw, 44px)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff',
      lineHeight: 1.1
    }
  }, "Siap Upgrade ke Akun Premium?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(16px, 2vw, 18px)',
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.86)',
      fontWeight: 500
    }
  }, "Pilih produk favoritmu dan nikmati akses premium dengan harga lebih hemat. Proses cepat, bergaransi, dan support siap bantu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    href: "#wa",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "Order via WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "lg",
    href: "#produk",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Lihat Produk")))));
}
window.FinalCta = FinalCta;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FinalCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
function Footer() {
  const {
    Container,
    Icon
  } = window;
  const {
    nav
  } = window.SHOP_DATA;
  const linkStyle = {
    fontSize: 14,
    color: 'rgba(255,255,255,0.62)',
    textDecoration: 'none',
    transition: 'color var(--duration-fast)'
  };
  const hov = e => e.currentTarget.style.color = '#fff';
  const out = e => e.currentTarget.style.color = 'rgba(255,255,255,0.62)';
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      marginTop: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 56,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dps-footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    height: "30",
    alt: "Digital Premium Shop"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.6)',
      maxWidth: 300
    }
  }, "Toko akun digital premium dengan harga hemat, proses cepat, dan support responsif. Streaming, AI tools, productivity, dan banyak lagi.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 14
    }
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: linkStyle,
    onMouseEnter: hov,
    onMouseLeave: out
  }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 14
    }
  }, "Bantuan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    style: linkStyle,
    onMouseEnter: hov,
    onMouseLeave: out
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "#cara-order",
    style: linkStyle,
    onMouseEnter: hov,
    onMouseLeave: out
  }, "Cara Order"), /*#__PURE__*/React.createElement("a", {
    href: "#wa",
    style: linkStyle,
    onMouseEnter: hov,
    onMouseLeave: out
  }, "Garansi"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 14
    }
  }, "Hubungi kami"), /*#__PURE__*/React.createElement("a", {
    href: "#wa",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      background: '#25D366',
      color: '#0B3D24',
      fontWeight: 700,
      fontSize: 14,
      padding: '10px 16px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 17,
    color: "#0B3D24"
  }), " Chat via WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, ['instagram', 'send', 'mail'].map(ic => /*#__PURE__*/React.createElement("a", {
    key: ic,
    href: "#",
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "#fff"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.10)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 Digital Premium Shop. Semua hak dilindungi."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.4)',
      maxWidth: 520,
      textAlign: 'right'
    }
  }, "Disclaimer: produk yang dijual adalah layanan pihak ketiga. Garansi berlaku sesuai ketentuan masing-masing produk."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero() {
  const {
    Container,
    Button,
    Icon,
    Eyebrow
  } = window;
  const MiniProduct = ({
    initial,
    color,
    name,
    cat,
    price,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      flexShrink: 0,
      background: `color-mix(in srgb, ${color} 14%, white)`,
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 19
    }
  }, initial), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--text-tertiary)'
    }
  }, "mulai dari"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--color-primary)'
    }
  }, price)));
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -180,
      right: -120,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(80,70,229,0.16), rgba(80,70,229,0) 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: -140,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(16,185,129,0.12), rgba(16,185,129,0) 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'clamp(48px, 7vw, 88px)',
      paddingBottom: 'clamp(48px, 7vw, 88px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dps-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(36px, 5vw, 64px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 999,
      padding: '6px 12px 6px 8px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      background: 'var(--emerald-50)',
      color: 'var(--emerald-600)',
      borderRadius: 999,
      padding: '3px 7px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "Terpercaya \xB7 Bergaransi \xB7 Proses cepat")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(34px, 5.2vw, 56px)',
      lineHeight: 1.06,
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tighter)',
      color: 'var(--text-primary)'
    }
  }, "Akun Digital Premium", /*#__PURE__*/React.createElement("br", null), "Lebih Hemat, Cepat,", /*#__PURE__*/React.createElement("br", null), "dan ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "Terpercaya")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(16px, 2vw, 18px)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 480,
      fontWeight: 500
    }
  }, "Nikmati akses premium untuk streaming, produktivitas, AI tools, cloud storage, dan belajar dengan proses order yang mudah dan support responsif."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#produk",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Lihat Produk"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#wa",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18,
      color: "#25D366"
    })
  }, "Chat Admin")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: 'var(--amber-500)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 15,
    color: "var(--amber-500)",
    fill: "var(--amber-500)"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "4.9/5 dari 2.000+ pembeli")))), /*#__PURE__*/React.createElement("div", {
    className: "dps-hero-visual",
    style: {
      position: 'relative',
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '8% 4%',
      background: 'var(--gradient-brand-soft)',
      borderRadius: 28,
      transform: 'rotate(-3deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '24px 8px'
    }
  }, /*#__PURE__*/React.createElement(MiniProduct, {
    initial: "N",
    color: "#E50914",
    cat: "Streaming",
    name: "Netflix Premium",
    price: "Rp25.000",
    style: {
      transform: 'translateX(-6px)'
    }
  }), /*#__PURE__*/React.createElement(MiniProduct, {
    initial: "C",
    color: "#7D2AE8",
    cat: "Design",
    name: "Canva Pro",
    price: "Rp15.000",
    style: {
      transform: 'translateX(18px)',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement(MiniProduct, {
    initial: "G",
    color: "#10A37F",
    cat: "AI Tools",
    name: "ChatGPT Plus",
    price: "Rp75.000",
    style: {
      transform: 'translateX(-2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -10,
      right: -10,
      background: 'var(--surface-inverse)',
      color: '#fff',
      borderRadius: 14,
      padding: '10px 14px',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      background: 'var(--emerald-500)',
      borderRadius: 8,
      padding: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14,
    color: "#fff",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Aktivasi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "~ 5 menit"))))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/HowToOrder.jsx
try { (() => {
function HowToOrder() {
  const {
    Container,
    Icon,
    SectionHead,
    Button
  } = window;
  const {
    steps
  } = window.SHOP_DATA;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Cara Order",
    title: "Order cuma 4 langkah",
    subtitle: "Prosesnya simpel \u2014 dari pilih produk sampai akun siap dipakai."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dps-step-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22,
      marginTop: 48
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "#fff"
  })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "dps-step-line",
    style: {
      flex: 1,
      height: 2,
      borderRadius: 2,
      backgroundImage: 'linear-gradient(to right, var(--indigo-200), var(--border-subtle))'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      marginBottom: 5
    }
  }, "Langkah ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontSize: 17.5,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#wa",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "Mulai Order via WhatsApp")));
}
window.HowToOrder = HowToOrder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/HowToOrder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Navbar.jsx
try { (() => {
function Navbar() {
  const {
    Container,
    Button,
    Icon
  } = window;
  const {
    nav
  } = window.SHOP_DATA;
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
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'background var(--duration-base), border-color var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 70
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    height: "30",
    alt: "Digital Premium Shop"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    },
    className: "dps-nav-links"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    },
    className: "dps-nav-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#produk",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Order Sekarang")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(!open),
    className: "dps-nav-burger",
    style: {
      display: 'none',
      width: 42,
      height: 42,
      borderRadius: 12,
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 20,
    color: "var(--text-primary)"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "dps-nav-mobile",
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hairline)',
      padding: '12px 0 18px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    onClick: () => setOpen(false),
    style: {
      padding: '12px 8px',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      borderRadius: 10
    }
  }, n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    fullWidth: true,
    href: "#produk"
  }, "Order Sekarang")))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Products.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Products() {
  const {
    Container,
    Button,
    Badge,
    Icon,
    SectionHead
  } = window;
  const {
    products
  } = window.SHOP_DATA;
  const ProductCard = p => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      transition: 'var(--transition-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
      e.currentTarget.style.borderColor = 'var(--indigo-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge.tone
  }, p.badge.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${p.brandColor} 14%, white)`,
      color: p.brandColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 21,
      marginBottom: 16
    }
  }, p.brandInitial), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, p.category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-0.015em',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "mulai dari"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--color-primary)'
    }
  }, p.price), p.oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-tertiary)',
      textDecoration: 'line-through'
    }
  }, p.oldPrice)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "/ ", p.duration), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, p.benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--emerald-50)',
      color: 'var(--emerald-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    color: "var(--emerald-600)",
    strokeWidth: 3
  })), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    href: "#wa",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17
    })
  }, "Order"));
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "left",
    eyebrow: "Produk Populer",
    title: "Produk paling dicari minggu ini",
    subtitle: "Akun premium resmi, harga hemat, dan langsung aktif setelah order."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#produk",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    }),
    style: {
      paddingLeft: 0
    }
  }, "Lihat semua produk")), /*#__PURE__*/React.createElement("div", {
    className: "dps-prod-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      marginTop: 40
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p)))));
}
window.Products = Products;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Testimonials.jsx
try { (() => {
function Testimonials() {
  const {
    Container,
    Icon,
    SectionHead
  } = window;
  const {
    testimonials
  } = window.SHOP_DATA;
  const list = testimonials.slice(0, 6);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Testimoni",
    title: "Apa kata pelanggan kami",
    subtitle: "Ribuan pembeli sudah merasakan hemat dan cepatnya order di sini."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dps-testi-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      marginTop: 44
    }
  }, list.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 16,
    color: i < t.rating ? 'var(--amber-500)' : 'var(--slate-300)',
    fill: i < t.rating ? 'var(--amber-500)' : 'none'
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-primary)'
    }
  }, "\u201C", t.comment, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      flexShrink: 0,
      background: `color-mix(in srgb, ${t.color} 16%, white)`,
      color: t.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 15
    }
  }, t.name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, t.product)))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/TrustStrip.jsx
try { (() => {
function TrustStrip() {
  const {
    Container,
    Icon
  } = window;
  const items = [{
    icon: 'zap',
    label: 'Proses cepat',
    tint: 'var(--indigo-600)'
  }, {
    icon: 'headphones',
    label: 'Support responsif',
    tint: 'var(--indigo-600)'
  }, {
    icon: 'shield-check',
    label: 'Garansi produk',
    tint: 'var(--emerald-600)'
  }, {
    icon: 'wallet',
    label: 'Harga hemat',
    tint: 'var(--amber-600)'
  }, {
    icon: 'layers',
    label: 'Banyak pilihan layanan',
    tint: 'var(--indigo-600)'
  }];
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'clamp(18px, 3vw, 26px) clamp(20px, 3vw, 32px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dps-trust-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: `color-mix(in srgb, ${it.tint} 12%, white)`,
      color: it.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 21,
    color: it.tint
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1.25
    }
  }, it.label))))));
}
window.TrustStrip = TrustStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/data.js
try { (() => {
/* Landing kit — mock store data. Edit freely; structure mirrors what a
   real product feed would provide. */
window.SHOP_DATA = {
  whatsapp: '#wa',
  categories: [{
    label: 'Streaming',
    icon: 'play',
    count: 12,
    tint: '#5046E5'
  }, {
    label: 'AI Tools',
    icon: 'sparkles',
    count: 8,
    tint: '#10B981'
  }, {
    label: 'Productivity',
    icon: 'briefcase',
    count: 9,
    tint: '#F59E0B'
  }, {
    label: 'Cloud Storage',
    icon: 'cloud',
    count: 5,
    tint: '#0EA5E9'
  }, {
    label: 'Learning',
    icon: 'graduation-cap',
    count: 7,
    tint: '#8B5CF6'
  }, {
    label: 'Design Tools',
    icon: 'palette',
    count: 6,
    tint: '#EC4899'
  }],
  products: [{
    name: 'Netflix Premium',
    category: 'Streaming',
    price: 'Rp25.000',
    oldPrice: 'Rp54.000',
    duration: '1 Bulan',
    brandColor: '#E50914',
    brandInitial: 'N',
    badge: {
      tone: 'bestseller',
      label: 'Best Seller'
    },
    benefits: ['4K Ultra HD', 'Garansi penuh', 'Aktivasi cepat']
  }, {
    name: 'Spotify Premium',
    category: 'Streaming',
    price: 'Rp18.000',
    oldPrice: 'Rp54.900',
    duration: '1 Bulan',
    brandColor: '#1DB954',
    brandInitial: 'S',
    badge: {
      tone: 'popular',
      label: 'Popular'
    },
    benefits: ['Tanpa iklan', 'Offline mode', 'Garansi penuh']
  }, {
    name: 'ChatGPT Plus',
    category: 'AI Tools',
    price: 'Rp75.000',
    duration: '1 Bulan',
    brandColor: '#10A37F',
    brandInitial: 'G',
    badge: {
      tone: 'new',
      label: 'New'
    },
    benefits: ['GPT-4o akses', 'Prioritas server', 'Garansi penuh']
  }, {
    name: 'Canva Pro',
    category: 'Design Tools',
    price: 'Rp15.000',
    oldPrice: 'Rp75.000',
    duration: '1 Bulan',
    brandColor: '#7D2AE8',
    brandInitial: 'C',
    badge: {
      tone: 'bestseller',
      label: 'Best Seller'
    },
    benefits: ['100M+ aset premium', 'Background remover', 'Brand kit']
  }, {
    name: 'YouTube Premium',
    category: 'Streaming',
    price: 'Rp20.000',
    duration: '1 Bulan',
    brandColor: '#FF0000',
    brandInitial: 'Y',
    badge: {
      tone: 'popular',
      label: 'Popular'
    },
    benefits: ['Tanpa iklan', 'Background play', 'YouTube Music']
  }, {
    name: 'Google One',
    category: 'Cloud Storage',
    price: 'Rp22.000',
    duration: '1 Bulan',
    brandColor: '#1A73E8',
    brandInitial: 'G',
    badge: null,
    benefits: ['100 GB storage', 'Backup otomatis', 'Garansi penuh']
  }],
  benefits: [{
    icon: 'wallet',
    title: 'Harga lebih hemat',
    desc: 'Akun premium resmi dengan harga jauh di bawah harga normal.'
  }, {
    icon: 'zap',
    title: 'Aktivasi cepat',
    desc: 'Pesanan diproses cepat — akun siap dipakai dalam hitungan menit.'
  }, {
    icon: 'headphones',
    title: 'Support after-sales',
    desc: 'Ada kendala? Admin kami responsif dan siap bantu setiap hari.'
  }, {
    icon: 'layers',
    title: 'Pilihan produk lengkap',
    desc: 'Dari streaming, AI tools, sampai cloud storage — semua ada.'
  }, {
    icon: 'shield-check',
    title: 'Garansi produk',
    desc: 'Semua akun bergaransi sesuai ketentuan masing-masing produk.'
  }, {
    icon: 'check-circle',
    title: 'Cocok untuk semua',
    desc: 'Untuk kebutuhan personal, belajar, hiburan, maupun kerja.'
  }],
  steps: [{
    icon: 'package-check',
    title: 'Pilih produk',
    desc: 'Cari akun premium yang kamu butuhkan dari katalog.'
  }, {
    icon: 'message-circle',
    title: 'Chat admin',
    desc: 'Klik order atau langsung chat admin via WhatsApp.'
  }, {
    icon: 'credit-card',
    title: 'Lakukan pembayaran',
    desc: 'Bayar lewat transfer, e-wallet, atau QRIS.'
  }, {
    icon: 'send',
    title: 'Akun dikirim',
    desc: 'Akun langsung dikirim dan siap kamu gunakan.'
  }],
  testimonials: [{
    name: 'Rizky Alfian',
    product: 'Netflix Premium',
    rating: 5,
    color: '#5046E5',
    comment: 'Prosesnya cepat banget, akun langsung aktif kurang dari 10 menit. Adminnya ramah juga. Recommended!'
  }, {
    name: 'Putri Maharani',
    product: 'Canva Pro',
    rating: 5,
    color: '#EC4899',
    comment: 'Harga jauh lebih hemat dibanding langganan resmi dan fiturnya lengkap. Bakal langganan lagi di sini.'
  }, {
    name: 'Bagus Pratama',
    product: 'ChatGPT Plus',
    rating: 5,
    color: '#10B981',
    comment: 'Sempat ragu, tapi ternyata aman dan bergaransi. Support-nya fast response kalau ada pertanyaan.'
  }, {
    name: 'Dewi Lestari',
    product: 'Spotify Premium',
    rating: 5,
    color: '#F59E0B',
    comment: 'Murah, cepat, dan akun stabil. Sudah beberapa kali order dan selalu lancar. Mantap!'
  }, {
    name: 'Fajar Nugroho',
    product: 'YouTube Premium',
    rating: 4,
    color: '#0EA5E9',
    comment: 'Pelayanan oke dan harga bersaing. Aktivasi sedikit nunggu tapi tetap sesuai janji.'
  }, {
    name: 'Sinta Wijaya',
    product: 'Google One',
    rating: 5,
    color: '#8B5CF6',
    comment: 'Storage langsung nambah, transaksi gampang lewat WhatsApp. Adminnya sopan dan jelas.'
  }],
  faqs: [{
    question: 'Apakah akun bergaransi?',
    answer: 'Ya. Semua akun bergaransi sesuai ketentuan masing-masing produk. Jika ada kendala dalam masa garansi, kami bantu ganti atau perbaiki tanpa ribet.'
  }, {
    question: 'Berapa lama proses aktivasi?',
    answer: 'Rata-rata 5–15 menit setelah pembayaran dikonfirmasi. Untuk beberapa produk, akun bisa dikirim instan.'
  }, {
    question: 'Apakah bisa request produk lain?',
    answer: 'Bisa. Chat admin via WhatsApp dan sebutkan produk yang kamu butuhkan — kami cek ketersediaannya untuk kamu.'
  }, {
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima transfer bank, e-wallet (DANA, OVO, GoPay), dan QRIS. Pilih yang paling nyaman buat kamu.'
  }, {
    question: 'Bagaimana jika akun bermasalah?',
    answer: 'Langsung hubungi admin dengan menyertakan bukti order. Selama masih dalam masa garansi, akan kami bantu selesaikan secepatnya.'
  }],
  nav: [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Produk',
    href: '#produk'
  }, {
    label: 'Benefit',
    href: '#benefit'
  }, {
    label: 'Cara Order',
    href: '#cara-order'
  }, {
    label: 'FAQ',
    href: '#faq'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/data.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/ui.jsx
try { (() => {
/* Landing kit — shared primitives. Each attaches to window so other
   babel scripts can use them. Mirrors the DS components visually and
   uses the real design tokens from styles.css. Self-contained (no bundle)
   so the page renders anywhere. */

const ICON_PATHS = {
  'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'headphones': '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'briefcase': '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  'palette': '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  'menu': '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'package-check': '<path d="M16 16h6"/><path d="m16 19 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.9,
  style,
  fill = 'none'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICON_PATHS[name] || ''
    }
  });
}
function Container({
  children,
  narrow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 'clamp(20px, 5vw, 32px)',
      paddingRight: 'clamp(20px, 5vw, 32px)',
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 640 : 'none',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(26px, 4vw, var(--text-h2))',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      lineHeight: 1.15
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, subtitle));
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href = '#',
  iconLeft,
  iconRight,
  fullWidth,
  onClick,
  style
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 14px',
      minHeight: 38,
      radius: 10,
      gap: 6
    },
    md: {
      fontSize: 15,
      padding: '11px 20px',
      minHeight: 46,
      radius: 14,
      gap: 8
    },
    lg: {
      fontSize: 16.5,
      padding: '15px 26px',
      minHeight: 54,
      radius: 15,
      gap: 9
    }
  };
  const s = sizes[size];
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-primary)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    whatsapp: {
      background: '#25D366',
      color: '#0B3D24',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    white: {
      background: '#fff',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: variant === 'whatsapp' ? 700 : 600,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      padding: s.padding,
      minHeight: s.minHeight,
      width: fullWidth ? '100%' : 'auto',
      borderRadius: s.radius,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';else if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sunken)';else e.currentTarget.style.filter = 'brightness(0.97)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  }, iconLeft, children, iconRight);
}
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      bg: 'var(--slate-100)',
      fg: 'var(--slate-600)'
    },
    bestseller: {
      bg: 'var(--badge-bestseller-bg)',
      fg: 'var(--badge-bestseller-fg)'
    },
    popular: {
      bg: 'var(--badge-popular-bg)',
      fg: 'var(--badge-popular-fg)'
    },
    new: {
      bg: 'var(--badge-new-bg)',
      fg: 'var(--badge-new-fg)'
    },
    success: {
      bg: 'var(--emerald-50)',
      fg: 'var(--emerald-700)'
    },
    sale: {
      bg: 'var(--rose-100)',
      fg: 'var(--rose-600)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: t.bg,
      color: t.fg,
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      padding: '4px 10px',
      borderRadius: 999,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(window, {
  Icon,
  Container,
  Eyebrow,
  SectionHead,
  Button,
  Badge
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

})();
