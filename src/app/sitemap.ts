import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://kurs-auto.ru',
      lastModified: new Date(),
    }
  ]
}