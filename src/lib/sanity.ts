import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '5f3eoaoh', // Zelal will need to create a project on sanity.io
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function to get image url
// import imageUrlBuilder from '@sanity/image-url'
// const builder = imageUrlBuilder(client)
// export function urlFor(source) {
//   return builder.image(source)
// }
