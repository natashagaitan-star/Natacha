import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this studio treats your information: sparingly.",
};

const sections: [string, string][] = [
  [
    "What is collected",
    "If you join the letter, your email address. If you write to the studio, whatever you choose to tell us. If you acquire a work, the details needed to invoice you and ship it. Nothing else — no trackers following you around the internet, no data brokers, no nonsense.",
  ],
  [
    "How it is used",
    "Your email receives the studio letter, at most once per lunar cycle. Acquisition details are used to complete your acquisition, insure the shipment, and maintain the painting's provenance record. Your information is never sold, rented, or shared for marketing.",
  ],
  [
    "Who holds it",
    "The studio, and only the service providers strictly needed to operate (email delivery, payment processing, shipping). Each is bound by its own privacy obligations.",
  ],
  [
    "Your choices",
    "Every letter includes an unsubscribe link that works the first time. You may request a copy or deletion of your information at any time by writing to the studio.",
  ],
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-28 md:pt-52 md:pb-40">
      <Reveal>
        <p className="label text-clay">Privacy</p>
        <h1 className="display mt-6 text-5xl md:text-6xl">
          Kept in <span className="display-italic">confidence</span>
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
        <Reveal>
          <p className="text-sm text-ink/50">
            Questions:{" "}
            <a href={`mailto:${site.email}`} className="link-draw">
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
