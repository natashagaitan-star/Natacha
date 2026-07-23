import type { Metadata } from "next";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { artworks, countWord } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The full gallery of original paintings by Natasha Valentina — divine feminine, celestial and dream-state works, presented museum-style.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Dark landing breath — walking in from the street */}
      <section className="bg-night text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 pt-44 pb-24 md:px-10 md:pt-56 md:pb-32">
          <Reveal>
            <p className="label text-gold">The gallery</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="display mt-6 text-5xl md:text-7xl">
              Walk <span className="display-italic">slowly.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-8 max-w-md leading-relaxed text-ivory/60">
              {countWord(artworks.length)} original works hang here. Titles
              arrive when you pause on a painting — the way a label waits
              beside a frame.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The room itself */}
      <section className="bg-midnight">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="masonry">
            {artworks.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.1} className="mb-8 md:mb-12">
                <ArtworkCard artwork={a} priority={i < 3} />
              </Reveal>
            ))}
          </div>

          <Reveal className="pt-16 text-center">
            <DrawnLine className="mx-auto mb-14 max-w-xs bg-ivory" />
            <p className="display-italic text-2xl text-ivory/70">
              Thank you for walking through.
            </p>
            <p className="label mt-6 text-ivory/40">
              Originals & prices — see{" "}
              <a href="/originals" className="link-draw text-ivory/70">
                available works
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
