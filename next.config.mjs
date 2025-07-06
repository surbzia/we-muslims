/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'admin-panel-api.test',
      'admin.m1u.thisgraceful.com',
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;  // Disable webpack persistent caching in dev
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/v1/api/:path*',
        destination: `http://admin.m1u.thisgraceful.com:path*`
      }
    ]
  }
};

export default nextConfig;