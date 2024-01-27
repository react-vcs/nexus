/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tds-images-bn.thedailystar.net",
      },
      {
        protocol: "https",
        hostname: "tds-images.thedailystar.net",
      },
    ],
  },
};

module.exports = nextConfig;
