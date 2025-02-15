const { i18n } = require("./next-i18next.config");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
