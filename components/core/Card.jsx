import React from 'react';

/**
 * Card — base white surface with soft border + shadow. The building
 * block for product, category, testimonial and feature panels.
 * `interactive` adds the hover-lift micro-interaction.
 */
export function Card({
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
    ...style,
  };
  const handlers = interactive
    ? {
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
          e.currentTarget.style.borderColor = 'var(--indigo-200)';
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = featured ? 'var(--shadow-md)' : 'var(--shadow-sm)';
          e.currentTarget.style.borderColor = featured ? 'var(--indigo-200)' : 'var(--border-subtle)';
        },
      }
    : {};
  return (
    <Tag className={className} style={base} {...handlers} {...rest}>
      {children}
    </Tag>
  );
}
