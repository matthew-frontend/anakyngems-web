import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const isServer = typeof window === "undefined";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1xk2cwmy",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: !isServer, // useCdn = false on server to get fresh data
  apiVersion: "2024-01-01",
  token: isServer ? process.env.SANITY_API_READ_TOKEN : undefined,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
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
      productTags,
      variants,
      details
    }
  `);
}

export async function getProduct(slug) {
  return await client.fetch(
    `
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
      productTags,
      variants,
      details
    }
  `,
    { slug }
  );
}

export async function getCategories() {
  return await client.fetch(`
    *[_type == "category"] | order(order asc) {
      _id,
      title,
      slug,
      collectionImage{
        asset->{
          _id,
          url
        },
        alt
      },
      delay,
      order
    }
  `);
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
  `);
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
  `);
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
      productTags,
      "discount": round((oldPrice - price) / oldPrice * 100)
    }
  `);
}

export async function getProductsByCategory(categorySlug, limit = 12) {
  return await client.fetch(
    `
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
  `,
    { categorySlug }
  );
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
  `);
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
      productTags,
      _createdAt
    }
  `);
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
  `);
}

// Generic function to get products by tag
export async function getProductsByTag(tag, limit = 8) {
  return await client.fetch(
    `
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
  `,
    { tag }
  );
}

// Blog/Behind the Brand functions
export async function getBlogPosts(limit = 12) {
  return await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      tags,
      publishedAt,
      _createdAt
    }
  `);
}

export async function getBlogCount() {
  return await client.fetch(`count(*[_type == "blog"])`);
}

export async function getBlogPost(slug) {
  return await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      galleryImages[]{
        asset->{
          _id,
          url
        },
        alt
      },
      tags,
      publishedAt,
      _createdAt
    }
  `,
    { slug }
  );
}

export async function getBehindBrandPosts(limit = 12) {
  return await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      tags,
      publishedAt,
      _createdAt
    }
  `);
}

// Alias for sitemap compatibility
export async function getBlogs() {
  return await getBehindBrandPosts();
}
