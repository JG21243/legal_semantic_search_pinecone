/** @type {import('next').NextConfig} */
const nextConfig = {
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
    PINECONE_ENVIRONMENT: 'gcp-starter'
  }
};

export default nextConfig;