/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lucaasrojas-portfolio.vercel.app',
      },

      { hostname: 'amq-mcq.dam.kering.com' },
      { hostname: 'wwd.com' },
      { hostname: 'numero.com' },

      { hostname: 'images.squarespace-cdn.com' },
    ],
  },
};

export default nextConfig;
