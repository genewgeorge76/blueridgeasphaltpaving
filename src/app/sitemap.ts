import { MetadataRoute } from 'next'
import { getSortedInsightsData } from '@/lib/insights'
import { CITIES } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.blueridgeasphaltpaving.com'

  // Main Services
  const services = [
    '',
    '/commercial-paving',
    '/residential-driveways',
    '/tar-and-chip',
    '/asphalt-milling',
    '/sealcoating-maintenance',
    '/insights',
  ]

  // Local SEO Silo Pages (Domination Engine) - now maps all 60 cities
  const locations = CITIES.map((city) => `/service/${city}`)

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
    priority: 0.9, // Very important for local SEO
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
