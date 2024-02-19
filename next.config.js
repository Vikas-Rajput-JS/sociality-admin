/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['spng.pngfind.com','https://spng.pngfind.com','i.ibb.co'],
      },
      experimental: {
        nodejs_compat: true,
      },
}

module.exports = nextConfig
