import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["www.spxmgmt.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host.replace(/\./g, "\\.") }],
      destination: "https://spxmgmt.com/:path*",
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
