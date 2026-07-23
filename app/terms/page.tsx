import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of sale and use for original works and prints.",
};

const sections: [string, string][] = [
  [
    "Originals",
    "Each original painting is a unique work, sold with a signed certificate of authenticity. Ownership of the physical work transfers on full payment; copyright and reproduction rights remain with the artist, as is standard for fine art.",
  ],
  [
    "Prints",
    "Limited-edition prints are archival giclée reproductions, hand-signed and numbered. Editions are strictly limited to the stated number; once an edition closes it is never reprinted.",
  ],
  [
    "Payment & shipping",
    "Payment is by secure invoice. Works ship worldwide, insured and professionally packed; originals are crated. Shipping costs and any import duties are quoted before you commit. Time from acquisition to dispatch is typically two weeks for originals.",
  ],
  [
    "Returns",
    "If a work arrives damaged, photograph the packaging and contact the studio within 48 hours for a full resolution. Original paintings may be returned within 14 days of delivery in original condition; return shipping and insurance are the collector's responsibility.",
  ],
  [
    "The website",
    "All images, text, and artwork on this site are © the artist and may not be reproduced without written permission. Enjoying them, linking to them, and telling your friends are all warmly permitted.",
  ],
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-28 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Terms</p>
        <h1 className="display mt-6 text-5xl md:text-6xl">
          Fair, and in <span className="display-italic">plain language</span>
        </h1>
        <p className="mt-6 text-sm text-ink/50">
          Effective July 2026 · {site.name}
        </p>
      </Reveal>
      <div className="mt-14 space-y-12">
        {sections.map(([h, body]) => (
          <Reveal key={h}>
            <h2 className="label text-ink/50">{h}</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
