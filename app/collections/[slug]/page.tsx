import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { collections, collectionBySlug } from "@/lib/collections";
import { byCollection } from "@/lib/artworks";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = collectionBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Collection`,
    description: `${c.line} Original paintings from the ${c.title} collection by Natasha Valentina.`,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = collectionBySlug(slug);
  if (!c) notFound();
  const works = byCollection(c.slug);

  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Collection</p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="display mt-6 text-5xl md:text-7xl">{c.title}</h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="display-italic mt-5 text-2xl text-clay">{c.line}</p>
      </Reveal>
      <Reveal delay={0.28}>
        <p className="mt-8 max-w-xl leading-relaxed text-ink/65">{c.note}</p>
      </Reveal>

      <DrawnLine className="mt-14 mb-16" />

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
        {works.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 2) * 0.12}>
            <ArtworkCard
              artwork={a}
              showDetails
              priority={i < 2}
              sizes="(min-width: 640px) 45vw, 92vw"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
