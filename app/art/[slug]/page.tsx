import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkViewer } from "@/components/ArtworkViewer";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { artworks, artworkBySlug, formatPrice, related } from "@/lib/artworks";
import { collectionBySlug } from "@/lib/collections";
import { acquireHref, printHref } from "@/lib/commerce";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = artworkBySlug(slug);
  if (!a) return {};
  return {
    title: `${a.title} (${a.year})`,
    description: `“${a.title}” — ${a.medium.toLowerCase()}, ${a.dimensions}. ${a.line} An original painting by ${site.name}.`,
    openGraph: { images: [{ url: a.image }] },
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = artworkBySlug(slug);
  if (!a) notFound();
  const c = collectionBySlug(a.collection);
  const rel = related(a);

  const artworkLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: a.title,
    image: `${site.url}${a.image}`,
    description: a.line,
    creator: { "@type": "Person", name: site.name, url: site.url },
    artMedium: a.medium,
    artform: "Painting",
    dateCreated: String(a.year),
    width: a.dimensions.split("×")[0].trim(),
    height: a.dimensions.split("×")[1]?.trim(),
    offers: {
      "@type": "Offer",
      price: a.price,
      priceCurrency: "USD",
      availability:
        a.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
    },
  };

  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-36 pb-28 md:px-10 md:pt-48 md:pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkLd) }}
      />

      <Reveal>
        <nav aria-label="Breadcrumb" className="label text-ink/45">
          <Link href="/originals" className="link-draw">
            Originals
          </Link>
          {c && (
            <>
              {" "}
              /{" "}
              <Link href={`/collections/${c.slug}`} className="link-draw">
                {c.title}
              </Link>
            </>
          )}
        </nav>
      </Reveal>

      <div className="mt-10 grid gap-14 lg:grid-cols-[3fr_2fr] lg:gap-20">
        {/* The work */}
        <Reveal>
          <ArtworkViewer artwork={a} />
        </Reveal>

        {/* The label, museum-style */}
        <div className="lg:pt-6">
          <Reveal>
            <h1 className="display text-4xl md:text-5xl">{a.title}</h1>
            <p className="display-italic mt-3 text-xl text-clay">{a.line}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-4 border-t border-ink/12 pt-8 text-sm">
              {(
                [
                  ["Year", String(a.year)],
                  ["Medium", a.medium],
                  ["Size", `${a.dimensions} · ${a.dimensionsCm}`],
                  ["Edition", "Original — one of one"],
                  [
                    "Status",
                    a.status === "available" ? "Available" : "In a private collection",
                  ],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6">
                  <dt className="label text-ink/45">{k}</dt>
                  <dd className="text-right text-ink/85">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 border-t border-ink/12 pt-8">
              {a.status === "available" ? (
                <>
                  <p className="display text-3xl">{formatPrice(a.price)}</p>
                  <a
                    href={acquireHref(a)}
                    className="label group mt-7 inline-flex items-center gap-4 border border-ink px-9 py-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink hover:text-ivory"
                  >
                    Acquire this work
                    <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                  <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink/50">
                    Acquisitions are handled personally. You'll hear back from
                    Natasha within two days. Worldwide insured shipping,
                    professionally crated, is arranged for every original;
                    framing guidance included.
                  </p>
                </>
              ) : (
                <p className="display-italic text-xl text-ink/60">
                  This painting has found its home.
                </p>
              )}

              {a.print && (
                <div className="mt-8 border-t border-ink/12 pt-7">
                  <p className="label text-ink/45">Limited edition print</p>
                  <p className="mt-3 text-sm text-ink/75">
                    Archival giclée, {a.print.size}, edition of {a.print.edition}
                    , hand-signed — {formatPrice(a.print.price)}
                  </p>
                  <a href={printHref(a)} className="label link-draw mt-4 inline-block pb-1">
                    Enquire about a print
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* The story */}
      <section className="mx-auto mt-28 max-w-2xl md:mt-36">
        <Reveal>
          <p className="label text-center text-clay">The story behind it</p>
        </Reveal>
        <div className="mt-10 space-y-7">
          {a.story.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-display text-lg leading-relaxed text-ink/80 md:text-xl">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related works */}
      <section className="mt-28 md:mt-36">
        <Reveal>
          <p className="label text-clay">Continue walking</p>
        </Reveal>
        <DrawnLine className="mt-8 mb-12" />
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rel.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.1}>
              <ArtworkCard artwork={r} showDetails />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
