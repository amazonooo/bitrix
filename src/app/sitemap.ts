import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://kurs-auto.png',
      lastModified: new Date(),
    }
  ]
}