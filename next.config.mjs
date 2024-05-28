/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/t',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
