// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  // ISRやキャッシュに関する設定
  async headers() {
    return [
      {
        source: '/(.*)', // 全ページに対するキャッシュ制御
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate', // キャッシュ無効化設定
          },
        ],
      },
    ];
  },
};

export default nextConfig;