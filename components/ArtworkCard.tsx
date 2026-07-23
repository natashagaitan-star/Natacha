import Image from "next/image";
import Link from "next/link";
import { Artwork, formatPrice } from "@/lib/artworks";

/**
 * A single work, framed. Information stays out of the way until asked for —
 * hover (or focus) lifts the caption in, museum-label style.
 */
export function ArtworkCard({
  artwork,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
  showDetails = false,
  priority = false,
}: {
  artwork: Artwork;
  sizes?: string;
  showDetails?: boolean;
  priority?: boolean;
}) {
  const a = artwork;
  return (
    <Link
      href={`/art/${a.slug}`}
      className="group block break-inside-avoid focus-visible:outline-offset-6"
    >
      <figure>
        <div className="frame relative overflow-hidden">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: a.ratio }}
          >
            <Image
              src={a.image}
              alt={a.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
          {/* hover caption */}
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-night/80 to-transparent px-6 pt-14 pb-5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <p className="display text-xl text-ivory">{a.title}</p>
            <p className="display-italic mt-1 text-sm text-ivory/70">
              {a.line}
            </p>
          </figcaption>
        </div>
        {showDetails && (
          <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
            <div>
              <p className="font-display text-lg">{a.title}</p>
              <p className="mt-0.5 text-xs tracking-wide text-ink/55">
                {a.medium} · {a.dimensions}
              </p>
            </div>
            <p className="label whitespace-nowrap text-ink/70">
              {a.status === "sold" ? (
                <span className="text-clay">Sold</span>
              ) : a.price ? (
                formatPrice(a.price)
              ) : (
                "Inquire"
              )}
            </p>
          </div>
        )}
      </figure>
    </Link>
  );
}
