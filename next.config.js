const nextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.*",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
