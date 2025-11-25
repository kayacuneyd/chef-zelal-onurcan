import { error } from '@sveltejs/kit';
import { blogPosts } from '$lib/data';

export function load({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post
  };
}