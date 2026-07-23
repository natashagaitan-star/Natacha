import Image from "next/image";
import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { featured, artworks } from "@/lib/artworks";
import { collections } from "@/lib/collections";
import { posts } from "@/lib/journal";
import { book, site } from "@/lib/site";

export default function Home() {
  const hero = artworks.find((a) => a.slug === "a-journey-into-his-mind")!;
  const aboutWork = artworks.find((a) => a.slug === "why-are-you-here")!;
  const latest = posts.slice(0, 2);

  return (
    <>
      {/* ————— Hero: stepping into the dream ————— */}
      <section className="relative flex h-[100svh] items-end overflow-hidden bg-night">
        <div className="absolute inset-0 motion-safe:animate-[drift_28s_ease-in-out_infinite_alternate]">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-night/40"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-[12svh] md:px-10">
          <p
            className="label text-ivory/80 opacity-0 motion-safe:animate-[fade-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards] motion-reduce:opacity-100"
          >
            {site.tagline} · est. {site.founded}
          </p>
          <h1
            className="display mt-6 text-[clamp(3.4rem,11vw,9.5rem)] leading-[0.95] text-ivory opacity-0 motion-safe:animate-[fade-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.55s_forwards] motion-reduce:opacity-100"
          >
            Natasha
            <br />
            <span className="display-italic">Valentina</span>
          </h1>
          <p
            className="mt-8 max-w-md text-base leading-relaxed text-ivory/70 opacity-0 motion-safe:animate-[fade-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] motion-reduce:opacity-100"
          >
            {site.essence}
          </p>
          <div
            className="mt-12 opacity-0 motion-safe:animate-[fade-up_1.2s_cubic-bezier(0.16,1,0.3,1)_1.05s_forwards] motion-reduce:opacity-100"
          >
            <Link
              href="/gallery"
              className="label group inline-flex items-center gap-4 border border-ivory/40 px-9 py-5 text-ivory transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ivory hover:bg-ivory hover:text-night"
            >
              Enter Gallery
              <span aria-hidden className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>

        <p className="label absolute right-6 bottom-8 z-10 hidden rotate-90 origin-bottom-right text-ivory/40 md:block">
          {hero.title}, {hero.year}
        </p>
      </section>

      {/* ————— Invocation ————— */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="label text-clay">A room of her own</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display mt-10 max-w-4xl text-3xl leading-snug md:text-5xl">
            Each painting begins as something that could not be said out loud —{" "}
            <span className="display-italic text-indigo">
              a house, a hand, a heart that insists on being remembered
            </span>{" "}
            — and ends as an original work made slowly, honestly, in layers of
            oil and acrylic.
          </p>
        </Reveal>
      </section>

      {/* ————— Featured works ————— */}
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="label text-clay">Featured works</p>
            <h2 className="display mt-5 text-4xl md:text-6xl">
              The current <span className="display-italic">exhibition</span>
            </h2>
          </div>
          <Link href="/originals" className="label link-draw hidden pb-1 whitespace-nowrap md:block">
            View all originals
          </Link>
        </Reveal>
        <DrawnLine className="mt-10 mb-14" />

        <div className="masonry">
          {featured.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.12} className="mb-8 md:mb-12">
              <ArtworkCard artwork={a} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 md:hidden">
          <Link href="/originals" className="label link-draw pb-1">
            View all originals
          </Link>
        </Reveal>
      </section>

      {/* ————— Collections ————— */}
      <section className="bg-midnight text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="label text-gold">Collections</p>
            <h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">
              One life,{" "}
              <span className="display-italic">four rooms</span>
            </h2>
          </Reveal>
          <ul className="mt-16">
            {collections.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/collections/${c.slug}`}
                  className="group flex flex-col gap-2 border-t border-ivory/12 py-7 transition-colors duration-700 hover:border-ivory/35 md:flex-row md:items-baseline md:justify-between"
                >
                  <span className="display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:text-4xl">
                    {c.title}
                  </span>
                  <span className="max-w-md text-sm text-ivory/50 transition-colors duration-700 group-hover:text-ivory/80">
                    {c.line}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ————— About teaser ————— */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <Reveal>
            <Link href={`/art/${aboutWork.slug}`} className="group block">
              <div className="frame overflow-hidden">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: aboutWork.ratio }}
                >
                  <Image
                    src={aboutWork.image}
                    alt={aboutWork.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 92vw"
                    className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <p className="label mt-4 text-center text-ink/40 transition-colors duration-500 group-hover:text-ink/70">
                {aboutWork.title}, {aboutWork.year}
              </p>
            </Link>
          </Reveal>
          <div>
            <Reveal>
              <p className="label text-clay">The artist</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display mt-6 text-4xl leading-tight md:text-5xl">
                I paint what I can't{" "}
                <span className="display-italic">say out loud.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md leading-relaxed text-ink/70">
                Natasha Valentina paints the inner world in oils and acrylics —
                family and its inheritances, love and its afterlife, hands
                pressed into paint as proof of being here. Every canvas is an
                original, begun in California light and finished wherever the
                feeling insists.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/about" className="label link-draw mt-10 inline-block pb-1">
                Meet Natasha
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— The book ————— */}
      <section className="bg-indigo text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-20">
            <Reveal className="w-40 shrink-0 md:w-48">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${book.title} on Amazon`}
                className="group block"
              >
                <div className="frame overflow-hidden !p-3">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: book.ratio }}
                  >
                    <Image
                      src={book.cover}
                      alt={`Cover of ${book.title} by Natasha Valentina — white type over a dark ocean wave`}
                      fill
                      sizes="192px"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
            <div>
              <Reveal>
                <p className="label text-gold">The book</p>
                <h2 className="display mt-5 text-4xl md:text-5xl">
                  What You Don't <span className="display-italic">Hear</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-ivory/65">
                  {book.line} Natasha's book gathers the unsaid — available now
                  on Amazon.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label group mt-8 inline-flex items-center gap-4 border border-ivory/40 px-8 py-4 text-ivory transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ivory hover:bg-ivory hover:text-indigo"
                >
                  Read on Amazon
                  <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Journal teaser ————— */}
      <section className="bg-sand/45">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="label text-clay">Journal</p>
              <h2 className="display mt-5 text-4xl md:text-5xl">
                Notes from the <span className="display-italic">studio</span>
              </h2>
            </div>
            <Link href="/journal" className="label link-draw hidden pb-1 md:block">
              All entries
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.12}>
                <Link href={`/journal/${p.slug}`} className="group block border-t border-ink/15 pt-7">
                  <p className="label text-ink/45">
                    {p.topic} · {p.date}
                  </p>
                  <h3 className="display mt-4 text-2xl transition-opacity duration-500 group-hover:opacity-60 md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60">
                    {p.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
