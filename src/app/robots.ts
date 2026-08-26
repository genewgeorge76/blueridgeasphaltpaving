import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // WHY www, WHEN THE BARE DOMAIN LOOKS TIDIER
    // Every URL inside sitemap.ts is built on https://www.blueridgeasphaltpaving.com,
    // and the canonical tag the site actually serves is the www host too. A
    // sitemap is only allowed to list URLs on the host it is served from —
    // anything else is a cross-host submission, which Google ignores unless
    // both hosts are verified in Search Console. Declaring the bare domain here
    // while listing www URLs inside was that mismatch. The bare domain 308s to
    // www so it probably resolved anyway, which is precisely why it would never
    // have been noticed.
    sitemap: 'https://www.blueridgeasphaltpaving.com/sitemap.xml',
  }
}
