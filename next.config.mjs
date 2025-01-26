/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i18nexus.com',
        port: '',
        pathname: '/_next/static/media/**'
      }
    ]
  }
};

export default nextConfig;
