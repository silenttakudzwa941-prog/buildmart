import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  images: {
    domains: ["placehold.co"], // allows next/image to load from placeholder.co
  },
};

export default nextConfig;