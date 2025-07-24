import { getBestSellers, getProducts, getCategories } from "@/sanity/client";
import { products9 } from "@/data/products";

/**
 * Fetch all homepage data at build time
 * This centralizes data fetching for better performance and caching
 */
export async function getHomepageData() {
  try {
    console.log('Fetching homepage data...');
    
    const [bestSellers, allProducts, categories] = await Promise.all([
      getBestSellers(20),
      getProducts(),
      getCategories()
    ]);

    // Calculate category counts
    const categoryCounts = {};
    categories.forEach(cat => {
      const categoryName = cat.title.toLowerCase();
      categoryCounts[categoryName] = allProducts.filter(product => 
        (product.category?.title || product.category || '').toLowerCase() === categoryName
      ).length;
    });

    // Map collections to category counts for CollectionsSlide
    const collectionsCounts = {};
    const collections2 = [
      { title: "Rings", count: 12 },
      { title: "Bracelets", count: 8 },
      { title: "Necklaces", count: 15 },
      { title: "Earrings", count: 10 }
    ];

    collections2.forEach(collection => {
      const collectionTitle = collection.title.toLowerCase();
      const singularForm = collectionTitle.endsWith('s') ? collectionTitle.slice(0, -1) : collectionTitle;
      collectionsCounts[collection.title] = categoryCounts[singularForm] || collection.count;
    });

    const data = {
      bestSellers: bestSellers.length > 0 ? bestSellers : allProducts.slice(0, 12),
      allProducts,
      categories,
      categoryCounts,
      collectionsCounts,
      error: null,
      timestamp: new Date().toISOString()
    };

    console.log(`Homepage data fetched successfully: ${categories.length} categories, ${allProducts.length} products`);
    return data;

  } catch (error) {
    console.error('Error fetching homepage data:', error);
    
    // Return fallback data
    return {
      bestSellers: products9.slice(0, 12),
      allProducts: [],
      categories: [],
      categoryCounts: {},
      collectionsCounts: {
        "Rings": 12,
        "Bracelets": 8, 
        "Necklaces": 15,
        "Earrings": 10
      },
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Get static metadata for homepage
 */
export function getHomepageMetadata() {
  return {
    title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
    description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    keywords: "lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds",
    openGraph: {
      title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
      description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
      url: "https://anakyngems.com",
      siteName: "ANAKYNGEMS",
      images: [
        {
          url: "https://anakyngems-web.vercel.app/images/logo/AW[RGB]_LOGO_ANAKYN GEMS-04.jpg",
          width: 1200,
          height: 630,
          alt: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
      description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
      images: ["https://anakyngems-web.vercel.app/images/logo/AW[RGB]_LOGO_ANAKYN GEMS-04.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}