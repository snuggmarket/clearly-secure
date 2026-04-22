export const dynamic = 'force-static'
import { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clearly-secure.co.uk'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/doors',
    '/fascias-soffits-guttering-cladding',
    '/gallery',
    '/interior-shutters',
    '/locksmith',
    '/privacy-policy',
    '/terms-conditions',
    '/testimonials',
    '/windows',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly' as any,
    priority: route === '' ? 1 : 0.8,
  }))
}
