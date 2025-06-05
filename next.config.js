/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/toibbhat' : '', // Your repo name
  images: {
    unoptimized: true, // Disable Next.js image optimization (required for static export)
  },
  trailingSlash: true, // Helps with routing
};
module.exports = nextConfig;