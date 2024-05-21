/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freetogame.com',
        port: '',
        pathname: '/g/*/thumbnail.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.freetogame.com',
        port: '',
        pathname: '/g/*/jpg',
      },
    ],
  },
  // أضف basePath إذا كنت تستخدم مجلدًا مخصصًا لمستودع GitHub Pages
  basePath: '/اسم-المستودع-على-جيتهب',
};

export default nextConfig;
