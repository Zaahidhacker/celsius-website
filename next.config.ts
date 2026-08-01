import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the Space-Z preview platform domain to access dev server resources.
  // Without this, cross-origin requests from the preview iframe to /_next/*
  // can fail with "failed to fetch workspace" errors on the download button.
  allowedDevOrigins: [
    "preview-chat-090989a5-399f-4a7a-ad6e-4e57871d07c5.space-z.ai",
    "*.space-z.ai",
  ],
};

export default nextConfig;
