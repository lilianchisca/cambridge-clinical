import bundleAnalyzer from '@next/bundle-analyzer'

import { env } from './src/env.mjs'

const plugins = []

plugins.push(
  bundleAnalyzer({
    enabled: env.ANALYZE,
  })
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31_536_000,
    domains: env.IMAGE_DOMAINS,
  },
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
}

export default plugins.reduce((config, plugin) => plugin(config), nextConfig)
