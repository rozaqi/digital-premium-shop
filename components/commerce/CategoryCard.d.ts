import * as React from 'react';

export interface CategoryCardProps {
  label: string;
  /** Lucide icon name. @default 'layers' */
  icon?: string;
  /** Optional product count shown under the label. */
  count?: number;
  /** CSS color for the icon chip. */
  tint?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Clickable category tile: icon chip + label (+ count). Lucide icon via name. */
export function CategoryCard(props: CategoryCardProps): React.ReactElement;
