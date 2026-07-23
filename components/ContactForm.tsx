"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

/**
 * Opens the visitor's mail client with a composed letter — honest and
 * dependency-free today; swap the submit handler for a Resend/API route
 * before launch if server-side delivery is preferred.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const about = String(data.get("about") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`${about} — from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <p role="status" className="display-italic text-2xl text-ink/80">
        Your letter is on its way. Natasha reads everything herself — expect a
        reply within two days.
      </p>
    );
  }

  const field =
    "w-full border-b border-ink/25 bg-transparent pb-3 text-base text-ink outline-none transition-colors duration-500 placeholder:text-ink/35 focus:border-gold";

  return (
    <form onSubmit={submit} className="max-w-xl space-y-10">
      <label className="block">
        <span className="label text-ink/50">Your name</span>
        <input name="name" required autoComplete="name" className={`${field} mt-4`} placeholder="How shall she address you?" />
      </label>
      <label className="block">
        <span className="label text-ink/50">Regarding</span>
        <select name="about" className={`${field} mt-4 cursor-pointer`} defaultValue="A painting">
          <option>A painting</option>
          <option>A commission</option>
          <option>An exhibition</option>
          <option>Press</option>
          <option>Something else entirely</option>
        </select>
      </label>
      <label className="block">
        <span className="label text-ink/50">Your letter</span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${field} mt-4 resize-none leading-relaxed`}
          placeholder="Take your time. She will."
        />
      </label>
      <button
        type="submit"
        className="label group inline-flex cursor-pointer items-center gap-4 border border-ink px-9 py-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink hover:text-ivory"
      >
        Send the letter
        <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1.5">→</span>
      </button>
    </form>
  );
}
