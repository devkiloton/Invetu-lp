/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    TEMPLATE_ID_SUPPORT: process.env.TEMPLATE_ID_SUPPORT,
  },
};

module.exports = nextConfig;
