import * as React from 'react';

export interface TestimonialCardProps {
  name: string;
  /** Product the customer bought, e.g. "Spotify Premium". */
  product: string;
  comment: string;
  /** 0–5; 0 hides the stars. @default 5 */
  rating?: number;
  avatarColor?: string;
  style?: React.CSSProperties;
}

/** Minimal customer testimonial card: stars, quote, name + product. */
export function TestimonialCard(props: TestimonialCardProps): React.ReactElement;
