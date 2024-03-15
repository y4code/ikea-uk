/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'www.ikea.com',
        port: '',
        pathname: "/gb/**",
      },
    ],
  },
};

module.exports = nextConfig;
