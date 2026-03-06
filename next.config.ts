import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Galvin-Web',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
