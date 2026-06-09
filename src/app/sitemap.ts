import { MetadataRoute } from 'next'
import { getSortedInsightsData } from '@/lib/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blueridgeasphaltpaving.com'

  // Main Services
  const services = [
    '',
    '/commercial-paving',
    '/residential-driveways',
    '/asphalt-milling',
    '/sealcoating-maintenance',
    '/insights',
  ]

  // Local SEO Silo Pages
  const locations = [
    '/roanoke-va',
    '/charlottesville-va',
    '/lynchburg-va',
    '/hot-springs-va',
    '/franklin-wv'
  ]

  const serviceUrls = services.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const locationUrls = locations.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic Insight/Blog Pages
  const insights = getSortedInsightsData()
  const insightUrls = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...serviceUrls, ...locationUrls, ...insightUrls]
}
