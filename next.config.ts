import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像の最適化で一部のファイルが正しく読み込めないため、
  // Next.js の画像最適化をオフにして静的ファイルとして配信する
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
