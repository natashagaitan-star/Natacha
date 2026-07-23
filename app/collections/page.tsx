import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/lib/collections";
import { byCollection } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "The six bodies of work by Natasha Valentina — Celestial, Divine Feminine, Dream State, Sacred Nature, Cosmic Garden, and Moon Rituals.",
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Collections</p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">
          Six rooms in <span className="display-italic">one house</span>
        </h1>
      </Reveal>

      <div className="mt-20 space-y-24 md:space-y-32">
        {collections.map((c, i) => {
          const works = byCollection(c.slug);
          const cover = works[0];
          const even = i % 2 === 0;
          return (
            <Reveal key={c.slug}>
              <Link
                href={`/collections/${c.slug}`}
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-20 ${even ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                {cover && (
                  <div className="frame overflow-hidden">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: cover.ratio }}
                    >
                      <Image
                        src={cover.image}
                        alt={cover.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 92vw"
                        className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <p className="label text-ink/45">
                    {String(i + 1).padStart(2, "0")} · {works.length} works
                  </p>
                  <h2 className="display mt-5 text-4xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-6xl">
                    {c.title}
                  </h2>
                  <p className="display-italic mt-4 text-xl text-clay">
                    {c.line}
                  </p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60">
                    {c.note}
                  </p>
                  <span className="label link-draw mt-8 inline-block pb-1">
                    Enter the room
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
