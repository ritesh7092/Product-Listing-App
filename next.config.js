/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Product-Listing-App', // for GitHub Pages
  basePath: '/Product-Listing-App',
};

module.exports = nextConfig;
