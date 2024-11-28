import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.hashnode.com",
                port: '',
                pathname: '/res/**'
            }
        ]
    }
};

export default nextConfig;
