// /** @type {import('next').NextConfig} */

// const nextConfig = {
const prismic = require("@prismicio/client");

const sm = require("./sm.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map(lang => lang.id);

  return {
    trailingSlash: true,
    reactStrictMode: true,
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales,
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: locales[0],
    },
    target: "serverless",
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      removeConsole: true,
      styledComponents: true,
    },
    images: {
      domains: ["images.prismic.io", "images.unsplash.com"],
      loader: "akamai",
      path: "",
    },
    experimental: {
      // Defaults to 50MB
      isrMemoryCacheSize: 0,
      forceSwcTransforms: true,
      runtime: "edge",
      // runtime: 'experimental-edge',
      // serverComponents: true,
      // serverComponents: true,
    },
  };
};

module.exports = nextConfig;
