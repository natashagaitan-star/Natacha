import type { Metadata } from "next";
import { Reveal, DrawnLine } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Natasha Valentina about a painting, a commission, or an exhibition. Every letter is read personally.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="label text-clay">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-6 text-5xl leading-tight md:text-6xl">
              Write her a{" "}
              <span className="display-italic">real letter.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md leading-relaxed text-ink/65">
              About a painting you can't stop thinking about, a commission, an
              exhibition, or the dream you had last Tuesday. Natasha answers
              everything herself, usually within two days, always in complete
              sentences.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <DrawnLine className="mt-12 mb-10 max-w-sm" />
            <p className="label text-ink/45">Directly</p>
            <a
              href={`mailto:${site.email}`}
              className="link-draw mt-3 inline-block font-display text-xl"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
