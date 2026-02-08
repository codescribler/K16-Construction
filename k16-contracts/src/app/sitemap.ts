import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '', priority: 1.0 },
    { url: '/services', priority: 0.9 },
    { url: '/projects', priority: 0.8 },
    { url: '/process', priority: 0.7 },
    { url: '/about', priority: 0.7 },
    { url: '/contact', priority: 0.8 },
    { url: '/consultation', priority: 0.9 },
    { url: '/privacy-policy', priority: 0.3 },
    { url: '/terms-of-service', priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));
}
