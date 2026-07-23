import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { posts, postBySlug } from "@/lib/journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-2xl px-6 pt-40 pb-28 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">
          {p.topic} · <time dateTime={p.iso}>{p.date}</time>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="display mt-6 text-4xl leading-tight md:text-6xl">
          {p.title}
        </h1>
      </Reveal>

      <div className="mt-14 space-y-8">
        {p.body.map((para, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="font-display text-lg leading-relaxed text-ink/80 md:text-xl">
              {para}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <DrawnLine className="mt-16 mb-12" />
        <p className="label text-ink/45">Keep reading</p>
        <ul className="mt-6 space-y-5">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/journal/${o.slug}`}
                className="display link-draw text-2xl transition-opacity duration-500 hover:opacity-60"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}
