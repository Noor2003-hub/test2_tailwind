import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // Proxy to Payload
      },
      {
        source: '/media/:path*',
        destination: 'http://localhost:3001/media/:path*', // Proxy media files
      }
    ]
  },
}

export default nextConfig