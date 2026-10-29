// Récupère l'image d'aperçu (og:image) d'une page au moment du build.
// Une seule requête par URL, même si le lien apparaît sur plusieurs pages.
const cache = new Map<string, Promise<string | undefined>>();

export function getPreviewImage(href: string) {
  let image = cache.get(href);
  if (!image) {
    image = fetchPreviewImage(href);
    cache.set(href, image);
  }
  return image;
}

async function fetchPreviewImage(href: string) {
  try {
    const res = await fetch(href, {
      headers: { "user-agent": "Mozilla/5.0 (link preview)" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return undefined;
    const html = await res.text();

    // Les attributs property/content peuvent être dans n'importe quel ordre.
    for (const tag of html.match(/<meta[^>]+>/gi) ?? []) {
      if (!/(property|name)=["'](og:image|twitter:image)["']/i.test(tag)) continue;
      const content = tag.match(/content=["']([^"']+)["']/i)?.[1];
      if (content) return new URL(content.replaceAll("&amp;", "&"), res.url).href;
    }
  } catch {
    // Site injoignable ou trop lent : on affichera le favicon.
  }
  return undefined;
}
