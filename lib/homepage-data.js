import { getBestSellers, getProducts, getCategories } from "@/sanity/client";

/**
 * Fetch all homepage data at build time
 * This centralizes data fetching for better performance and caching
 */
export async function getHomepageData() {
  try {
    console.log("Fetching homepage data...");

    const [bestSellers, allProducts, categories] = await Promise.all([
      getBestSellers(20).catch(() => []),
      getProducts().catch(() => []),
      getCategories().catch(() => []),
    ]);

    // Calculate category counts
    const categoryCounts = {};
    categories.forEach((cat) => {
      const categoryName = cat.title.toLowerCase();
      categoryCounts[categoryName] = allProducts.filter(
        (product) =>
          (product.category?.title || product.category || "").toLowerCase() ===
          categoryName
      ).length;
    });

    // Map collections to category counts for CollectionsSlide
    const collectionsCounts = {};

    // Create mapping based on actual categories from Sanity
    categories.forEach((cat) => {
      const categoryName = cat.title.toLowerCase();
      const categoryTitle = cat.title;
      const productCount = allProducts.filter(
        (product) =>
          (product.category?.title || product.category || "").toLowerCase() ===
          categoryName
      ).length;

      collectionsCounts[categoryTitle] = productCount;
      collectionsCounts[categoryName] = productCount;
    });

    const data = {
      bestSellers:
        bestSellers.length > 0 ? bestSellers : allProducts.slice(0, 12),
      allProducts,
      categories,
      categoryCounts,
      collectionsCounts,
      error: null,
      timestamp: new Date().toISOString(),
    };

    console.log(
      `Homepage data fetched successfully: ${categories.length} categories, ${allProducts.length} products`
    );
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);

    // Return empty data structure instead of fallback static data
    return {
      bestSellers: [],
      allProducts: [],
      categories: [],
      categoryCounts: {},
      collectionsCounts: {},
      error: error.message,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get static metadata for homepage
 */
export function getHomepageMetadata() {
  return {
    title:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    description:
      "สัมผัสความหรูหรานกับ ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรนคุณภาพสูง แหวนเพชร แหวนหมั้น ต่างหู กำไล ออกแบบทันสมัย เหมาะสำหรับทุกวันและทุกโอกาส | Discover sustainable lab grown diamond jewelry with timeless elegance.",
    keywords:
      "อนาคินเจม, ANAKYNGEMS, เพชรแล็บ, เครื่องประดับเพชร, เพชรแล็บโกรน, แหวนเพชร, แหวนหมั้น, แหวนแต่งงาน, ต่างหูเพชร, กำไลเพชร, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds, luxury lab diamonds",
    openGraph: {
      title:
        "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
      description:
        "ค้นพบเครื่องประดับเพชรแล็บโกรนจาก ANAKYNGEMS อนาคินเจม ที่ผสานความหรูหราและจริยธรรมไว้อย่างลงตัว | Discover timeless elegance with sustainable diamond jewelry.",
      url: "https://anakyngems.com",
      siteName: "ANAKYNGEMS",
      images: [
        {
          url: "https://www.anakyngems.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery",
      description:
        "Lab grown diamond jewelry ที่หรูหรา เรียบง่าย และยั่งยืน จาก ANAKYNGEMS อนาคินเจม",
      images: [
        {
          url: "https://www.anakyngems.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-96x96.png", // fallback for some older browsers
      apple: "/apple-touch-icon.png", // สำหรับ iOS
      other: [
        {
          rel: "icon",
          url: "/favicon.svg", // หากรองรับ SVG
        },
        {
          rel: "icon",
          url: "/web-app-manifest-192x192.png",
        },
        {
          rel: "icon",
          url: "/web-app-manifest-512x512.png",
        },
      ],
    },
  };
}
