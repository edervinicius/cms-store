/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
