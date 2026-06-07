import * as React from 'react';

/**
 * Primary action button — indigo primary, outline secondary, ghost, emerald
 * accent, and a WhatsApp green variant for the store's main CTA.
 * @startingPoint section="Core" subtitle="Buttons & CTAs" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'whatsapp';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor with this href instead of a button. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): React.ReactElement;
