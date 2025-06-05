import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
    category,
    "mainImage": mainImage.asset->url
  }`;

  const article = await client.fetch(query, { slug: params.slug });

  if (!article) {
    throw error(404, 'Article not found');
  }

  return {
    article
  };
}
