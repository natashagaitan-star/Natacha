import Link from "next/link";
import { book, footerNav, nav, site } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-night text-ivory">
      {/* The letter */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 md:px-10 md:pt-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <div>
            <p className="label text-gold">The letter</p>
            <h2 className="display mt-6 max-w-md text-4xl md:text-5xl">
              Quiet mail, on new
              <span className="display-italic"> moons only.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              New paintings before anyone else sees them, studio notes, and
              first word on collections. Nothing more often than the moon
              itself.
            </p>
          </div>
          <div className="flex items-end">
            <NewsletterForm dark />
          </div>
        </div>
      </div>

      <div className="hairline mx-6 md:mx-10" />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="display text-2xl">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
              {site.essence}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="label text-ivory/40">Visit</p>
            <ul className="mt-5 space-y-3">
              {[...nav, ...footerNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw text-sm text-ivory/75 transition-opacity duration-500 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="label text-ivory/40">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.instagram} rel="noopener noreferrer" target="_blank" className="link-draw text-sm text-ivory/75 hover:text-ivory">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.pinterest} rel="noopener noreferrer" target="_blank" className="link-draw text-sm text-ivory/75 hover:text-ivory">
                  Pinterest
                </a>
              </li>
              <li>
                <a href={book.url} rel="noopener noreferrer" target="_blank" className="link-draw text-sm text-ivory/75 hover:text-ivory">
                  The book — {book.title}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-draw text-sm text-ivory/75 hover:text-ivory">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-xs text-ivory/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All artworks are original
            and protected.
          </p>
          <p className="display-italic text-sm text-ivory/40">
            Painted by hand, one feeling at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
