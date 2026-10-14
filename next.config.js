/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ANIME_API: 'https://www.sankavollerei.web.id/anime/animasu',
    NEXT_PUBLIC_MAL_API: 'https://api.myanimelist.net/v2',
    NEXT_PUBLIC_JIKAN_API: 'https://api.jikan.moe/v4',
  },
  // NOTE: static export (`output: 'export'`) does not support `headers()`,
  // `rewrites()` or `redirects()`. Cache headers for sw.js/manifest.json now
  // live in `public/_headers`, and dynamic-route rewrites in `public/_redirects`
  // (both consumed by Cloudflare Pages).
}

module.exports = nextConfig
