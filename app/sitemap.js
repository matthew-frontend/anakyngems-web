import { getProducts, getCategories, getBlogs } from "@/sanity/client";

function safeDate(dateString) {
  if (!dateString) return new Date();
  try {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  } catch {
    return new Date();
  }
}

export default async function sitemap() {
  const baseUrl = "https://www.anakyngems.com";

  try {
    const [products, categories, blogs] = await Promise.all([
      getProducts().catch(() => []),
      getCategories().catch(() => []),
      getBlogs().catch(() => []),
    ]);

    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/faq`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/behind-brand`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
    ];

    const productPages = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug?.current || product._id}`,
      lastModified: safeDate(product._updatedAt || product._createdAt),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    const categoryPages = categories.map((category) => ({
      url: `${baseUrl}/products?category=${category.slug?.current || category.title.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/behind-brand/${blog.slug?.current || blog._id}`,
      lastModified: safeDate(blog._updatedAt || blog._createdAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...categoryPages, ...blogPages];
  } catch (error) {
    console.error("Sitemap generation failed:", error);

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];
  }
}
