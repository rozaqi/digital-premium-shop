import * as React from 'react';

/**
 * Expandable FAQ accordion (single-open by default). Chevron rotates; row
 * animates open. Uses Lucide chevron-down.
 * @startingPoint section="Feedback" subtitle="FAQ accordion" viewport="760x420"
 */
export interface FaqAccordionProps {
  items: FaqItem[];
  /** Allow several rows open at once. @default false (single-open) */
  allowMultiple?: boolean;
  /** Index open on mount; pass -1 for all closed. @default 0 */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export function FaqAccordion(props: FaqAccordionProps): React.ReactElement;
