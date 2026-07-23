import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { ArtworkCard } from "@/components/ArtworkCard";
import { available, prints, formatPrice } from "@/lib/artworks";
import { printHref } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Acquire original paintings and limited-edition archival prints by Natasha Valentina. Worldwide insured shipping on every work.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Shop</p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">
          Take a dream <span className="display-italic">home</span>
        </h1>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="mt-8 max-w-lg leading-relaxed text-ink/65">
          Every painting here is an original — one of one, forever. Each ships
          worldwide, insured and professionally packed, with a signed
          certificate of authenticity. Acquisitions are handled personally, by
          letter.
        </p>
      </Reveal>

      <DrawnLine className="mt-14 mb-16" />

      {/* Originals */}
      <section aria-labelledby="shop-originals">
        <Reveal className="flex items-baseline justify-between gap-6">
          <h2 id="shop-originals" className="display text-3xl md:text-4xl">
            Originals
          </h2>
          <p className="label text-ink/45">{available.length} available</p>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.1}>
              <ArtworkCard artwork={a} showDetails priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prints */}
      {prints.length === 0 && (
        <Reveal className="mt-24 border-t border-ink/12 pt-12">
          <p className="label text-clay">Limited-edition prints</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            Hand-signed archival prints are coming. Join the letter in the
            footer to hear first when editions open.
          </p>
        </Reveal>
      )}
      {prints.length > 0 && (
      <section aria-labelledby="shop-prints" className="mt-28">
        <Reveal className="flex items-baseline justify-between gap-6">
          <h2 id="shop-prints" className="display text-3xl md:text-4xl">
            Limited-edition prints
          </h2>
          <p className="label text-ink/45">Hand-signed · archival giclée</p>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {prints.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.08}>
              <div className="group">
                <Link href={`/art/${a.slug}`} className="frame block overflow-hidden">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: a.ratio }}
                  >
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="mt-4 px-1">
                  <p className="font-display text-lg">{a.title}</p>
                  <p className="mt-1 text-xs text-ink/55">
                    {a.print!.size} · edition of {a.print!.edition}
                  </p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <p className="label text-ink/70">{formatPrice(a.print!.price)}</p>
                    <a href={printHref(a)} className="label link-draw pb-0.5 text-ink/70">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      )}

      {/* The promise */}
      <section className="mt-28 grid gap-10 border-t border-ink/12 pt-14 md:grid-cols-3">
        {[
          [
            "Worldwide shipping",
            "Insured and professionally crated, from the studio to any door on Earth. Originals include a signed certificate of authenticity.",
          ],
          [
            "A personal hand",
            "Every acquisition is handled by Natasha herself — expect a real letter, not a receipt. Gift acquisitions can include a hand-written card.",
          ],
          [
            "Secure & simple",
            "Payment by invoice with secure checkout. Collectors of originals may request a two-part payment plan — just ask.",
          ],
        ].map(([title, body], i) => (
          <Reveal key={title} delay={i * 0.1}>
            <h3 className="label text-clay">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{body}</p>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
