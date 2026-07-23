"use client";

import { FormEvent, useState } from "react";

/**
 * Front-end complete; wire to an email service (Resend / Shopify Email /
 * Buttondown) before launch — see README.
 */
export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p
        role="status"
        className={`display-italic text-xl ${dark ? "text-ivory/90" : "text-ink/90"}`}
      >
        Welcome. The next letter is yours.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex max-w-md items-end gap-4">
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          className={`w-full border-b bg-transparent pb-3 font-sans text-base outline-none transition-colors duration-500 placeholder:opacity-50 ${
            dark
              ? "border-ivory/30 text-ivory placeholder:text-ivory focus:border-gold"
              : "border-ink/30 text-ink placeholder:text-ink focus:border-gold"
          }`}
        />
      </label>
      <button
        type="submit"
        className={`label cursor-pointer border-b pb-3 transition-opacity duration-500 hover:opacity-60 ${
          dark ? "border-ivory/30 text-ivory" : "border-ink/30 text-ink"
        }`}
      >
        Join
      </button>
    </form>
  );
}
