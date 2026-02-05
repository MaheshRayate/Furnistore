import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "blcijwgkzozwmkfckone.supabase.co",
        // pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;
