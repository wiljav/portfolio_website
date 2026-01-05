/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',    // Required for static hosting
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  // Since you are using a custom domain, you DO NOT need basePath or assetPrefix.
};

module.exports = nextConfig;
