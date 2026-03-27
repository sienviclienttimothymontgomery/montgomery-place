import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/montgomery-place",
  assetPrefix: "/montgomery-place/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
