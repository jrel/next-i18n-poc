async function factory() {

  /** @type {import('next').NextConfig} */
  const config = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      "locales": ["default", "fr", "pt", "es", 'de'],
      "defaultLocale": "default",
      localeDetection: true,
    },
    trailingSlash: true,

  };
  return config;
}

module.exports = factory()