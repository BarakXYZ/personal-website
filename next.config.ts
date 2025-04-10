import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  // When using a custom domain, we don't need basePath
  basePath: "",
  // No need for assetPrefix with custom domain
  // assetPrefix is only needed for GitHub Pages subdirectory deployments
  // For GitHub Pages, images need to be unoptimized
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "youtube.com",
      "img.youtube.com",
    ],
  },
  // Disable image optimization since GitHub Pages doesn't support it
  // This is important for static exports
  trailingSlash: true, // Recommended for static exports
};
export default nextConfig;
