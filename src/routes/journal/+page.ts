import { client } from '$lib/sanity';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
  }`;

  const posts = await client.fetch(query);

  return {
    posts
  };
}
