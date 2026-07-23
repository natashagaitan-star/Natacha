import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="label text-clay">404</p>
      <h1 className="display mt-6 text-5xl md:text-6xl">
        This room isn't <span className="display-italic">hung yet.</span>
      </h1>
      <p className="mt-6 max-w-sm text-ink/60">
        The page you were looking for doesn't exist — but the gallery does,
        and it's just through here.
      </p>
      <Link
        href="/gallery"
        className="label mt-10 border border-ink px-9 py-5 transition-all duration-700 hover:bg-ink hover:text-ivory"
      >
        Enter Gallery
      </Link>
    </div>
  );
}
