import * as prismic from "@prismicio/client";
// import * as prismicNext from "@prismicio/next";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */

export const endpoint = sm.apiEndpoint;
export const accessToken = sm.apiAccessToken;
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
export const defaultLanguage = "en-us";
/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// export const linkResolver = doc => {
//   if (doc.type === "homepage") {
//     return `/`;
//   }
//   if (doc.type === "page") {
//     return `/${doc.uid}`;
//   }
//   return "/";
// };
export const linkResolver = doc => {
  const properties = doc?._meta || doc;
  // if (properties.type === 'homepage') {
  //   return `/${properties.lang}`;
  // }

  if (properties.type === "homepage") {
    return properties.lang === defaultLanguage
      ? "/en-us/"
      : `/${properties.lang}`;
  }

  if (
    properties.type === "track-a-transfer" ||
    properties.type === "track_a_transfer"
  ) {
    return `/${properties.lang}/track-a-transfer`;
  }

  if (properties.type === "find_a_location") {
    return `/${properties.lang}/locations`;
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

  if (properties.type === "page") {
    return `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === "404") {
    return `/${properties.lang}/error`;
  }

  if (!properties) {
    return `/error`;
  }
  // if (doc.type === 'homepage') {
  //   return `/${doc.lang}`;
  // }
  // if (properties.type === 'page') {
  //   return `/${properties.lang}/${properties.uid}`;
  // }
  // if (doc.type === 'work') {
  //   return `/${doc.lang}/${doc.uid}`;
  // }
  // if (doc.type === 'blog') {
  //   return `/${doc.lang}/${doc.uid}`;
  // }
  return "/";
};

export let repository = {};
export let locales = [];
// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
// export const createClient = async (config = {}) => {
//   const client = prismic.createClient(endpoint, {
//     ...config,
//   });
//   repository = await client.getRepository();
//   prismicNext.enableAutoPreviews({
//     client,
//     previewData: config.previewData,
//     req: config.req,
//   });
//   return client;
// };

// (async () => {
//   const client = createClient();
//   repository = await (await client).getRepository();
//   locales = repository.languages.map(lang => lang.id);
// })();

// Additional helper function for Next/Link component
export const hrefResolver = doc => {
  if (doc.type === "homepage") {
    return `/${doc.lang}`;
  }
  if (doc.type === "page") {
    return `/${doc.lang}/${doc.uid}`;
  }
  if (doc.type === "micropages") {
    return `/${doc.lang}/${doc.uid}`;
  }

  // if (doc.type === 'homepage') {
  //   return `/`;
  // }
  // if (doc.type === 'page') {
  //   return `/${doc.uid}`;
  // }
  return "/";
};
