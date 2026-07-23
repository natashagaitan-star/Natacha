import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Studio notes from Natasha Valentina — process, symbolism, upcoming collections, and life between paintings.",
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Journal</p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">
          Written between <span className="display-italic">paintings</span>
        </h1>
      </Reveal>

      <DrawnLine className="mt-14 mb-4" />

      <ul>
        {posts.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 0.06}>
            <Link
              href={`/journal/${p.slug}`}
              className="group grid gap-3 border-b border-ink/12 py-10 transition-colors duration-700 hover:border-ink/30 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <p className="label pt-2 text-ink/45">
                {p.topic}
                <time dateTime={p.iso} className="mt-2 block">
                  {p.date}
                </time>
              </p>
              <div>
                <h2 className="display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/60">
                  {p.excerpt}
                </p>
                <span className="label link-draw mt-6 inline-block pb-1 text-ink/60">
                  Read the entry
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
