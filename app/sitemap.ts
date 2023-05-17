export default async function sitemap() {
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `https://www.crftd.nl${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
