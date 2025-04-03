/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static export
  images: {
    unoptimized: true, // Needed if using next/image on static hosting
  },
};

module.exports = nextConfig;
