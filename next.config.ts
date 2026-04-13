import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'ui-avatars.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'cdn.worldvectorlogo.com' },
      { hostname: 'cdn.jsdelivr.net' },
      { hostname: 'flagcdn.com' },
    ],
  },
}

export default withNextIntl(nextConfig)