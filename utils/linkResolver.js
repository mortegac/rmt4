const { defaultLanguage } = require("../prismicio");

/* The Link Resolver
* This function will be used to generate links to Prismic documents
As your project grows, you should update this function according to your routes */

const linkResolver = (doc) => {
  const properties = doc._meta || doc;

  if (properties.type === "homepage") {
    return properties.lang === defaultLanguage
      ? "/en-us/"
      : `/${properties.lang}`;
  }

  if (properties.type === "page") {
    return properties.lang === defaultLanguage
      ? `/${properties.lang}/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === "track_a_transfer") {
    return properties.lang === defaultLanguage
      ? `/${properties.lang}/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === "find_a_location") {
    return properties.lang === defaultLanguage
      ? `/${properties.lang}/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === "unsubscribe") {
    return properties.lang === defaultLanguage
      ? `/${properties.lang}/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }
  if (properties.type === "micropages") {
    return properties.lang === defaultLanguage
      ? `/${properties.lang}/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  return "/";
};

module.exports = linkResolver;
