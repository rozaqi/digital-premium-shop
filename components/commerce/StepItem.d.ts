import * as React from 'react';

export interface StepItemProps {
  number: number;
  title: string;
  description?: string;
  /** Optional Lucide icon shown instead of the number. */
  icon?: string;
  /** Hide the trailing connector line (use on the last step). */
  last?: boolean;
  style?: React.CSSProperties;
}

/** One numbered step in the "Cara Order" 1–4 stepper. */
export function StepItem(props: StepItemProps): React.ReactElement;
