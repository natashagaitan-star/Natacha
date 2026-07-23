import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, DrawnLine } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Natasha Valentina paints the divine feminine, the night sky, and the dream between them. Her story, her process, and the symbolism behind the work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="frame">
            <div className="relative w-full" style={{ aspectRatio: 9 / 11 }}>
              <Image
                src="/portrait.svg"
                alt="Natasha Valentina at her easel in the studio at dusk, brush raised toward a canvas of indigo and ochre"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="label mt-5 text-center text-ink/40">
            The studio, blue hour
          </p>
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
        </div>
      </div>
    </div>
  );
}
