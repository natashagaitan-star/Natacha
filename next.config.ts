import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Artworks are hand-authored local SVGs; sandboxed CSP keeps this safe.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
