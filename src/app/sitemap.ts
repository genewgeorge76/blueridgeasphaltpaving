import { MetadataRoute } from 'next'
import { getSortedInsightsData } from '@/lib/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blueridgeasphaltpaving.com'

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

  // Local SEO Silo Pages (Domination Engine)
  const locations = [
    '/service/roanoke-va',
    '/service/charlottesville-va',
    '/service/winchester-va',
    '/service/monterey-va',
    '/service/staunton-va',
    '/service/harrisonburg-va',
    '/service/lexington-va',
    '/service/waynesboro-va',
    '/service/hot-springs-va',
    '/service/warm-springs-va',
    '/service/clifton-forge-va',
    '/service/covington-va',
    '/service/luray-va',
    '/service/front-royal-va',
    '/service/buchanan-va',
    '/service/fincastle-va',
    '/service/crozet-va',
    '/service/new-market-va',
    '/service/woodstock-va',
    '/service/strasburg-va',
    '/service/franklin-wv'
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
