/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.ikea.com",
      },
    ],
  },
};

module.exports = nextConfig;
