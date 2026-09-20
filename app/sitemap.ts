import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: route === '' ? baseUrl : `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : (route === '/privacy' || route === '/terms' ? 0.3 : 0.8),
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
