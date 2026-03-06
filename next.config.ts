import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Galvin-Web',
  assetPrefix: '/Galvin-Web',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
