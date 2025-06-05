import { client } from '$lib/sanity';

export async function load() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    category,
    body,
    "mainImage": mainImage.asset->url
  }`;

  try {
    const articles = await client.fetch(query);
    return { articles };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return { articles: [] };
  }
}
