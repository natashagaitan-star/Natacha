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
              I paint what the night{" "}
              <span className="display-italic">leaves behind.</span>
            </h1>
          </Reveal>

          <div className="mt-12 max-w-xl space-y-8 leading-relaxed text-ink/75">
            <Reveal>
              <p className="font-display text-xl text-ink/90">
                I was raised by women who read skies. My grandmother planted by
                the moon; my mother could tell you which of her sisters was
                about to call. Nobody in my family found this remarkable, and
                so neither did I — until I picked up a brush and discovered
                that it was the only language those inheritances would answer
                to.
              </p>
            </Reveal>
            <Reveal>
              <p>
                My paintings begin before I am awake. I keep paper by the bed,
                and in the first minutes of morning — before the dream has
                finished leaving — I write down whatever it left: a figure
                holding something luminous, a garden that only opened at
                night, a river that knew where it was going. The studio work
                that follows is slow and physical. Layers, sanded back.
                Glazes thin as breath. A single line of gold laid on in one
                pass, because some things you do not get to correct.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Astrology moves through the work the way weather moves through
                a landscape painter's — not as doctrine but as calendar,
                occasion, and iconography. I paint Saturn returns and first
                quarters the way other painters have always painted feast days
                and harvests: because a life needs its thresholds marked, and
                marking them beautifully is one of the oldest jobs there is.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The feminine in these paintings is not a subject I chose. It
                is the ground the work grows from — the intuition my
                grandmothers trusted without needing it explained, the
                strength of a figure who holds the moon without straining. If
                the women in my paintings look like they know something, it is
                because they do, and because I am still learning it from them.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Every canvas leaves this studio with a story, a signature, and
                a little of whatever the night gave me that season. My hope is
                simple: that one of them stops you the way a true dream does —
                and that living with it feels like being told, gently and
                daily, something you already suspected about yourself.
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
