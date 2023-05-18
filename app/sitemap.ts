export default async function sitemap() {
  const routes = ['', '/cases', '/about', '/contact', '/qr'].map((route) => ({
    url: `https://www.crftd.nl${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
