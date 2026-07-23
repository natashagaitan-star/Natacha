"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Routes whose hero is dark, so the resting nav should be ivory-on-transparent. */
const DARK_HEROES = new Set(["/", "/gallery"]);

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const darkHero = DARK_HEROES.has(pathname) && !scrolled;
  const tone = open
    ? "text-ivory"
    : darkHero
      ? "text-ivory"
      : "text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-700 ${
        scrolled && !open
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgb(38_35_31/0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 ${tone}`}
      >
        <Link
          href="/"
          className="display z-50 text-xl tracking-wide transition-opacity duration-500 hover:opacity-70"
        >
          {site.name}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`label link-draw pb-1 transition-opacity duration-500 ${
                  pathname === item.href ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="label z-50 cursor-pointer py-2 lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu — a room of its own */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-midnight px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="display block py-2 text-5xl text-ivory transition-opacity duration-500 hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="label mt-14 text-ivory"
            >
              {site.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
