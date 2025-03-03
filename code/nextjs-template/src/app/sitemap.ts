import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.winerva.com'

  return [
    { url: `${baseUrl}/en/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/portfolio`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/zh-TW/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/zh-TW/portfolio`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/zh-TW/contact`, lastModified: new Date().toISOString() },
  ]
}
