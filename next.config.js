/** @type {import('next').NextConfig} */
const repo = 'toibbhat'; // replace with your repo name

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

module.exports = nextConfig;