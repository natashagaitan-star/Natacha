# valentina

Luxury fine-art gallery site for painter "Natasha Valentina". Static Next.js 16 + Tailwind v4 + Framer Motion; dev/start on port 3106.

- All content is data-driven from `lib/` — never hardcode artwork/copy in pages.
- Paintings are real photos in `public/art/`. **Image–title pairings are LOCKED** (confirmed by the artist 2026-07-23) — see the mapping comment atop `lib/artworks.ts`; never reassign images between titles without Mitch explicitly asking.
- Commerce is concierge-by-email via `lib/commerce.ts`; that file is the only place to touch when wiring Shopify.
- Design rules: Fraunces + Albert Sans, easing [0.16,1,0.3,1], slow one-time reveals, `label`/`display`/`frame` utilities from `app/globals.css`. Keep whitespace generous; artwork is always the star.
