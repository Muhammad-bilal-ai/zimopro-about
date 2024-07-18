// next.config.mjs
import { i18n } from "./next-i18next.config.mjs";
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n,
};

export default nextConfig;
