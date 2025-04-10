import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  // Set basePath for GitHub Pages (replace 'your-repo-name' with your actual repository name)
  basePath: process.env.NODE_ENV === "production" ? "/personal-website" : "",
  // Add assetPrefix for proper asset loading
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/personal-website" : ".",
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
