import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'assets.ppy.sh', // For osu! profile banners
      'a.ppy.sh',      // For osu! avatars
      'flagcdn.com'    // For country flags
    ],
  },
};

export default nextConfig;
