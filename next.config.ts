import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        // omit search so query strings (e.g. ?v=2 for cache busting) are allowed
      },
    ],
  },
};

export default nextConfig;
