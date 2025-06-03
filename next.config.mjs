/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;  // Disable webpack persistent caching in dev
    }
    return config;
  },
};

export default nextConfig;
