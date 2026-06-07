import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default 'neutral' */
  tone?: 'neutral' | 'primary' | 'bestseller' | 'popular' | 'new' | 'success' | 'sale';
  /** @default 'md' */
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Small pill label for product flags (Best Seller / Popular / New) and status. */
export function Badge(props: BadgeProps): React.ReactElement;
