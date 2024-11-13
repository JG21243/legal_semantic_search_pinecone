/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  env: {
    VOYAGE_API_TIMEOUT: '60000',
    VOYAGE_API_BASE_URL: 'https://api.voyageai.com/v1',
    VOYAGE_MODEL: 'voyage-lite-02-instruct',
    PINECONE_ENVIRONMENT: 'gcp-starter', 
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Connection-Timeout', value: '60000' },
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ];
  },
};

export default nextConfig;