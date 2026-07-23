# Natasha Valentina — Original Fine Art

Luxury single-artist gallery site. Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion. Fully static — no backend, no env vars.

## Run

```bash
npm install
npm run dev    # http://localhost:3106
npm run build && npm run start
```

Port 3106 (3000 is occupied on this machine; 3105 is atelier).

## Where everything lives

| What | File |
|---|---|
| Artist name, email, socials, domain | `lib/site.ts` |
| Artworks (price, status, story, image) | `lib/artworks.ts` |
| Collections + curatorial notes | `lib/collections.ts` |
| Journal posts | `lib/journal.ts` |
| Purchase links (Shopify adapter point) | `lib/commerce.ts` |
| Palette / type tokens | `app/globals.css` (`@theme`) |

## Before real launch

1. **Real artwork photos** — replace the placeholder SVGs in `public/art/` and update `image` + `ratio` in `lib/artworks.ts`. Same for `public/portrait.svg`.
2. **Domain + email** — `lib/site.ts` currently uses `natashavalentina.art` placeholders.
3. **Newsletter** — `components/NewsletterForm.tsx` shows a client-side confirmation only; wire Resend/Buttondown/Shopify Email.
4. **Contact** — `components/ContactForm.tsx` composes a mailto; swap for an API route + Resend if server delivery is wanted.
5. **Checkout** — purchases are concierge-by-email (normal for originals at this price point). To add Shopify: create products with handles = artwork slugs and point `lib/commerce.ts` at checkout URLs; no UI changes needed.

## Design language

Fraunces (display serif) + Albert Sans (labels/body). Warm cream gallery ground, midnight/night cosmic sections, clay/gold accents. Easing `[0.16,1,0.3,1]` everywhere; reveals are one-time, slow, and respect `prefers-reduced-motion`. All 36 routes prerender statically; JSON-LD (`Person`, `VisualArtwork` + `Offer`) on relevant pages; sitemap + robots generated.
