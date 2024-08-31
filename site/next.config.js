/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Ilan registry',
    description: 'unofficial KASM registry',
    icon: '/img/logo.jpg',
    listUrl: 'https://ilansos.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
