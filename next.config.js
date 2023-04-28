/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.tvmaze.com', 'ui-avatars.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
