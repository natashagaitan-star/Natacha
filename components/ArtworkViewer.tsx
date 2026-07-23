"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Artwork } from "@/lib/artworks";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The artwork on its page: framed, quiet, and openable. Click to view the
 * work alone against the dark, click again to lean in.
 */
export function ArtworkViewer({ artwork }: { artwork: Artwork }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const close = useCallback(() => {
    setZoom(false);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${artwork.title} full screen`}
        className="frame group block w-full cursor-zoom-in"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: artwork.ratio }}
        >
          <Image
            src={artwork.image}
            alt={artwork.alt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 92vw"
            className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        </div>
        <span className="label mt-4 block text-center text-ink/40 transition-colors duration-500 group-hover:text-ink/70">
          Click to view
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${artwork.title}, full screen view`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[80] bg-night/97"
            onClick={close}
          >
            <div
              className={`h-full w-full ${zoom ? "overflow-auto" : "flex items-center justify-center overflow-hidden"}`}
            >
              <motion.img
                src={artwork.image}
                alt={artwork.alt}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((z) => !z);
                }}
                className={
                  zoom
                    ? "mx-auto my-8 w-[170%] max-w-none cursor-zoom-out sm:w-[130%]"
                    : "max-h-[86vh] max-w-[90vw] cursor-zoom-in object-contain shadow-2xl"
                }
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5 text-ivory/70 md:px-10">
              <p className="display text-lg">{artwork.title}</p>
              <p className="label">{zoom ? "Click to step back" : "Click to lean in"}</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="label absolute top-5 right-6 cursor-pointer text-ivory/80 transition-opacity hover:opacity-60 md:right-10"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
