/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
