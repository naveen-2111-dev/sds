import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "billing-w07d.onrender.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
