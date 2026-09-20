/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
