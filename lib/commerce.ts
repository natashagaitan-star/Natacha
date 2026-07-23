import { Artwork, formatPrice } from "./artworks";
import { site } from "./site";

/**
 * Commerce adapter.
 *
 * Today: concierge acquisition by email (standard for original fine art at
 * this price point — collectors expect a conversation, not a cart).
 *
 * To connect Shopify later: create each artwork/print as a product whose
 * handle equals the artwork slug, then have these helpers return
 * `https://{shop}/cart/{variantId}:1` or a Storefront API checkout URL.
 * No UI component needs to change.
 */

export function acquireHref(a: Artwork): string {
  const subject = encodeURIComponent(`Acquiring “${a.title}”`);
  const body = encodeURIComponent(
    `Hello Natasha,\n\nI would love to acquire “${a.title}” (${a.dimensions}, ${formatPrice(a.price)}).\n\nMy shipping city/country: \n\nWarmly,`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function printHref(a: Artwork): string {
  const subject = encodeURIComponent(`Print enquiry — “${a.title}”`);
  const body = encodeURIComponent(
    `Hello Natasha,\n\nI'd like to purchase a limited-edition print of “${a.title}”.\n\nMy shipping city/country: \n\nWarmly,`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
