import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // `unoptimized: true` used to sit here and it silently discarded every
    // benefit of the next/image components already used throughout this site.
    //
    // Measured against production before removing it: the homepage shipped
    // ~4.5 MB of full-size PNGs to mobile — hero.png alone was 1,011,686 bytes,
    // and hero.png is the LCP element, the heaviest single input into Core Web
    // Vitals. PNG is also the wrong container for photographs.
    //
    // The flag is only *required* for `output: 'export'` builds, where no image
    // optimizer exists at runtime. This site has no static export and is served
    // by Vercel, which optimizes natively — so it was pure cost.

    // AVIF first, WebP second, original as the final fallback for browsers that
    // support neither. Per the v16 docs, AVIF compresses ~20% smaller than WebP
    // but takes ~50% longer to encode, and each format is cached separately.
    // That trade is worth taking here: this site serves a small, fixed set of
    // large photographs, so the encode happens once per variant and is then
    // served from cache for the life of the deployment.
    formats: ["image/avif", "image/webp"],
  },

  // The framework version is not something visitors or crawlers need to know.
  poweredByHeader: false,
};

// Everything else is deliberately left at the Next.js 16 defaults, which are
// already well tuned and were verified against
// node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md:
//
//   minimumCacheTTL  now 4 hours (raised from 60s in v16) — appropriate for
//                    photographs that change only when the site is rebuilt.
//   imageSizes       16px was intentionally removed from the default in v16
//                    because almost no project serves images that small;
//                    re-adding it would only pad every srcset.
//   qualities        now [75], which is the right quality for photographic
//                    content and keeps the transformation surface small.
//   deviceSizes      the default breakpoints already cover phone through
//                    retina desktop.
//
// Overriding these would mean re-litigating decisions the framework made on
// better data than we have, so they stay untouched.

export default nextConfig;
