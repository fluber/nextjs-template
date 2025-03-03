const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 添加 PDF 加載規則
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          loader: 'pdf-loader',
        },
      ],
    });

    return config;
  },
};

// 使用 `withNextIntl` 包裹 nextConfig
module.exports = withNextIntl(nextConfig);
