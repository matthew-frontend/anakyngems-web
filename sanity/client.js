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
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags,
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
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags,
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

// Homepage specific API functions
export async function getFeaturedProducts(limit = 8) {
  return await client.fetch(`
    *[_type == "product" && badge == "NEW IN"] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `)
}

export async function getRecommendedProducts(limit = 8) {
  return await client.fetch(`
    *[_type == "product" && "recommended" in productTags] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `)
}

export async function getSaleProducts(limit = 8) {
  return await client.fetch(`
    *[_type == "product" && "for_sale" in productTags && defined(oldPrice) && oldPrice > price] [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags,
      "discount": round((oldPrice - price) / oldPrice * 100)
    }
  `)
}

export async function getProductsByCategory(categorySlug, limit = 12) {
  return await client.fetch(`
    *[_type == "product" && category->slug.current == $categorySlug] [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `, { categorySlug })
}

export async function getBestSellers(limit = 6) {
  return await client.fetch(`
    *[_type == "product" && "best_seller" in productTags] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `)
}

export async function getNewArrivals(limit = 8) {
  return await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags,
      _createdAt
    }
  `)
}

export async function getHighlightProducts(limit = 3) {
  return await client.fetch(`
    *[_type == "product" && "highlight_products" in productTags] | order(_createdAt desc) [0...3] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `)
}

// Generic function to get products by tag
export async function getProductsByTag(tag, limit = 8) {
  return await client.fetch(`
    *[_type == "product" && $tag in productTags] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      price,
      oldPrice,
      images[]{
        asset->{
          _id,
          url
        }
      },
      category->{title, slug},
      badge,
      badgeType,
      "calculatedBadge": select(
        badgeType == "new" => "NEW IN",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF",
        badge
      ),
      variantText,
      variantType,
      "calculatedVariantType": select(
        badgeType == "new" => "text",
        badgeType == "sale" => "marquee",
        variantType
      ),
      "calculatedVariantText": select(
        badgeType == "new" => "New arrival",
        badgeType == "sale" && defined(oldPrice) && defined(price) && oldPrice > price => 
          string(round((oldPrice - price) / oldPrice * 100)) + "% OFF, Selling fast",
        variantText
      ),
      material,
      productTags
    }
  `, { tag })
}