import type { MetadataRoute } from "next";
import { artworks } from "@/lib/artworks";
import { collections } from "@/lib/collections";
import { posts } from "@/lib/journal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/gallery",
    "/originals",
    "/collections",
    "/about",
    "/shop",
    "/journal",
    "/contact",
    "/privacy",
    "/terms",
  ].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const }));

  return [
    ...staticPages,
    ...artworks.map((a) => ({
      url: `${site.url}/art/${a.slug}`,
      changeFrequency: "monthly" as const,
    })),
    ...collections.map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      changeFrequency: "monthly" as const,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/journal/${p.slug}`,
      changeFrequency: "yearly" as const,
    })),
  ];
}
