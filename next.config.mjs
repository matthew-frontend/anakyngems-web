/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['anakyngems.com', 'vemusnextjs.vercel.app', 'www.chaichalermgold.com', 'cdn.sanity.io'],
  },
  // Don't use static export for dynamic routes
  trailingSlash: true,
};

export default nextConfig;
