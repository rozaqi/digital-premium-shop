import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** CSS padding value. @default 'var(--space-6)' */
  padding?: string;
  /** CSS border-radius value. @default 'var(--radius-lg)' */
  radius?: string;
  /** Adds hover-lift micro-interaction. @default false */
  interactive?: boolean;
  /** Indigo ring + stronger shadow for highlighted cards. @default false */
  featured?: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

/** Base white surface card: soft hairline border + low shadow, 18px radius. */
export function Card(props: CardProps): React.ReactElement;
