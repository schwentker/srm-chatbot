/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Remove these two lines temporarily:
  // basePath: '/srm-chatbot',
  // assetPrefix: '/srm-chatbot',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
}

module.exports = nextConfig