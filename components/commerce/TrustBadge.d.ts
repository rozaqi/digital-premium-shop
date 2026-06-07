import * as React from 'react';

export interface TrustBadgeProps {
  /** Lucide icon name. @default 'shield-check' */
  icon?: string;
  label: string;
  /** Optional second line. */
  sublabel?: string;
  tint?: string;
  /** @default 'row' */
  layout?: 'row' | 'col';
  style?: React.CSSProperties;
}

/** One trust signal (icon chip + short label) for the strip under the hero. */
export function TrustBadge(props: TrustBadgeProps): React.ReactElement;
