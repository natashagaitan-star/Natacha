import type { Metadata } from "next";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { artworks, available } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Original Paintings",
  description:
    "Original paintings by Natasha Valentina, available to acquire. Dimensions, medium, and prices for each one-of-a-kind work.",
};

export default function OriginalsPage() {
  const sold = artworks.filter((a) => a.status === "sold");

  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Original paintings</p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">
          One of each, <span className="display-italic">ever</span>
        </h1>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="mt-8 max-w-lg leading-relaxed text-ink/65">
          Every painting is a single original — no reproductions on canvas, no
          second versions. When a work finds its home, it is gone from here
          and lives its life on someone's wall.
        </p>
      </Reveal>

      <DrawnLine className="mt-14 mb-16" />

      <section aria-labelledby="available-heading">
        <Reveal>
          <h2 id="available-heading" className="label text-ink/50">
            Available · {available.length} works
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.1}>
              <ArtworkCard artwork={a} showDetails priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="sold-heading" className="mt-28">
        <Reveal>
          <h2 id="sold-heading" className="label text-ink/50">
            In collections · {sold.length} works
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {sold.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.1}>
              <ArtworkCard artwork={a} showDetails />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
