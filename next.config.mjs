/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lucaasrojas-portfolio.vercel.app',
      },
    ],
  },
};

export default nextConfig;
