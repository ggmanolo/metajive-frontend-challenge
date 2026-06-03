/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows the placeholder post images (Task C) to be used with next/image.
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }],
  },
}

export default nextConfig
