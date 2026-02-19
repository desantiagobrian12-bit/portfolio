/**
 * Fetches album artwork URL from iTunes Search API (no API key required).
 * Returns the best available size (600px preferred, fallback 100px).
 */
export async function getAlbumArtwork(
  artist: string,
  album: string
): Promise<string | null> {
  const term = encodeURIComponent(`${artist} ${album}`);
  const url = `https://itunes.apple.com/search?term=${term}&entity=album&limit=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } }); // cache 24h
    const data = (await res.json()) as {
      results?: Array<{ artworkUrl600?: string; artworkUrl100?: string }>;
    };
    const first = data.results?.[0];
    if (!first) return null;
    return first.artworkUrl600 ?? first.artworkUrl100 ?? null;
  } catch {
    return null;
  }
}

export async function getAlbumArtworkBatch(
  items: Array<{ artist: string; title: string }>
): Promise<Array<{ artist: string; title: string; imageUrl: string | null }>> {
  const results = await Promise.all(
    items.map(async (item) => ({
      ...item,
      imageUrl: await getAlbumArtwork(item.artist, item.title),
    }))
  );
  return results;
}
