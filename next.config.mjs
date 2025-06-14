/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'admin-panel-api.test',
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;  // Disable webpack persistent caching in dev
    }
    return config;
  },
};

export default nextConfig;