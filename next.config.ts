import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // We ship first-party SVG cover art in /public/work as placeholders.
    // These are trusted assets authored in this repo.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
