/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'toibbhat'; // Your GitHub repo name

const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: isProd ? `/${repo}` : '', // Add repo name ONLY in production
  assetPrefix: isProd ? `https://${repo}.github.io/${repo}/` : '', // Full URL for GH Pages
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures consistent paths
};

module.exports = nextConfig;