import * as React from 'react';

/**
 * Storefront product card: brand chip, category, flag badge, "mulai dari"
 * price, duration, benefit checklist, and an Order CTA.
 * @startingPoint section="Commerce" subtitle="Featured product card" viewport="380x440"
 */
export interface ProductCardProps {
  name: string;
  category: string;
  /** Pre-formatted price, e.g. "Rp25.000". */
  price: string;
  /** Label before the price. @default 'mulai dari' */
  priceNote?: string;
  /** Optional struck-through original price. */
  oldPrice?: string;
  /** Duration label, e.g. "1 Bulan". */
  duration?: string;
  /** Short benefit strings (3–4 max). */
  benefits?: string[];
  badge?: ProductBadge;
  /** CSS color for the brand chip. */
  brandColor?: string;
  /** Letter(s) shown in the brand chip placeholder. */
  brandInitial?: string;
  /** @default 'Order' */
  ctaLabel?: string;
  onOrder?: (e: React.MouseEvent) => void;
  href?: string;
  style?: React.CSSProperties;
}

export interface ProductBadge {
  tone: 'bestseller' | 'popular' | 'new' | 'sale';
  label: string;
}

export function ProductCard(props: ProductCardProps): React.ReactElement;
