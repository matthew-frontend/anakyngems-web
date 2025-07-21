import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '1xk2cwmy', // Your project ID
  dataset: 'production',
  useCdn: true, // Use CDN for faster load times
  apiVersion: '2024-01-01', // API version
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper functions for fetching data
export async function getProducts() {
  return await client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images,
      category,
      badge,
      inStock,
      variants
    }
  `)
}

export async function getProduct(slug) {
  return await client.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images,
      category,
      badge,
      inStock,
      variants,
      details
    }
  `, { slug })
}

export async function getCategories() {
  return await client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      slug,
      description,
      image
    }
  `)
}