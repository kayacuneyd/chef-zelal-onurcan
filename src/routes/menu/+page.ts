import { client } from '$lib/sanity';

/** @type {import('./$types').PageLoad} */
export async function load() {
  // GROQ query to fetch dishes
  // We fetch title, description, price, season, and the image URL
  const query = `*[_type == "dish"] {
    _id,
    title,
    description,
    price,
    season,
    "imageUrl": image.asset->url
  }`;

  const dishes = await client.fetch(query);

  return {
    dishes
  };
}
