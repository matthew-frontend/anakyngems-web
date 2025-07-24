/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable image optimization
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anakyngems.com",
      },
      {
        protocol: "https",
        hostname: "anakyngems-web.vercel.app",
      },
      {
        protocol: "https",
        hostname: "vemusnextjs.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Don't use static export for dynamic routes
  trailingSlash: true,
};

export default nextConfig;
