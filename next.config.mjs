/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify hosting (zero server runtime).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
