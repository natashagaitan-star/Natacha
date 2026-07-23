import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { artworkBySlug } from "@/lib/artworks";
import { book } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Natasha Valentina paints the inner world — family, love, memory, and the marks we leave behind. Her story, her process, and her book, What You Don't Hear.",
};

export default function AboutPage() {
  const portraitWork = artworkBySlug("only-human")!;
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Link href={`/art/${portraitWork.slug}`} className="group block">
            <div className="frame overflow-hidden">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: portraitWork.ratio }}
              >
                <Image
                  src={portraitWork.image}
                  alt={portraitWork.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <p className="label mt-5 text-center text-ink/40 transition-colors duration-500 group-hover:text-ink/70">
              {portraitWork.title}, {portraitWork.year} — her hands, in the paint
            </p>
          </Link>
        </Reveal>

        <div>
          <Reveal>
            <p className="label text-clay">About the artist</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-6 text-5xl leading-tight md:text-6xl">
              I paint what I can't{" "}
              <span className="display-italic">say out loud.</span>
            </h1>
          </Reveal>

          <div className="mt-12 max-w-xl space-y-8 leading-relaxed text-ink/75">
            <Reveal>
              <p className="font-display text-xl text-ink/90">
                Some feelings are too large for sentences. Family, grief,
                first love, the question of why any of us are here at all —
                when I try to speak them they come out smaller than they are.
                So I stopped trying to say them and started painting them,
                and I have never once run out of things to say.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The work began in Laguna Beach, California, in oils, with the
                Pacific light doing what Pacific light does. The early
                canvases took on the hardest subjects first — a father's two
                worlds, a mother's inherited pain, the afternoon a heartbreak
                finally became just a painting on my wall. I did not plan
                that order. Honesty has its own sequence, and the brush
                follows it.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I paint intuitively, and I leave the evidence in. Hands
                pressed straight into the paint. Words that surface when a
                feeling is too direct for symbolism. Homes, hearts, suns,
                pathways — the same symbols returning like a language,
                because that is what they are. If a mark arrives with the
                right temperature, it stays, whether or not it is polite.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The feminine in this work is not a subject I chose; it is the
                ground the work grows from. Intuition trusted without
                explanation. The strength it takes to look directly at what a
                family hands down and decide, in paint, what to keep and what
                to release. If these canvases look like they know something,
                it is because they were made in the moments I finally did.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Every painting leaves the studio with a story, a signature,
                and a little of the season that made it. My hope is simple:
                that one of them stops you mid-step — and that living with it
                feels like being told, gently and daily, something you
                already suspected about yourself.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <DrawnLine className="mt-14 mb-10 max-w-md" />
            <p className="display-italic text-2xl text-clay">
              — Natasha Valentina
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <Link href="/gallery" className="label link-draw pb-1">
                Enter the gallery
              </Link>
              <Link href="/contact" className="label link-draw pb-1">
                Write to Natasha
              </Link>
            </div>
          </Reveal>

          {/* ————— The book ————— */}
          <Reveal>
            <div className="mt-20 border-t border-ink/12 pt-14">
              <p className="label text-clay">The book</p>
              <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:items-start">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-44 shrink-0"
                  aria-label={`${book.title} on Amazon`}
                >
                  <div className="frame overflow-hidden !p-3">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: book.ratio }}
                    >
                      <Image
                        src={book.cover}
                        alt={`Cover of ${book.title} by ${book.author} — white type over a dark ocean wave`}
                        fill
                        sizes="176px"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </a>
                <div>
                  <h2 className="display text-3xl md:text-4xl">
                    What You Don't{" "}
                    <span className="display-italic">Hear</span>
                  </h2>
                  <p className="display-italic mt-3 text-lg text-clay">
                    {book.line}
                  </p>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">
                    Before the canvases, and beneath them, there have always
                    been words. Natasha's book gathers what goes unsaid — the
                    inner weather her paintings speak in colour, written down.
                    Available on Amazon.
                  </p>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label group mt-7 inline-flex items-center gap-4 border border-ink px-8 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink hover:text-ivory"
                  >
                    Read on Amazon
                    <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
