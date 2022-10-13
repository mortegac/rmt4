export const separateUrl = () => {
  try {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      let urlSlug = url.pathname;
      urlSlug =
        url.pathname.length > 7
          ? deleteAllCaracter(url.pathname.substring(0, 7), "/")
          : deleteAllCaracter(urlSlug, "/");
      return urlSlug;
    }
  } catch (error) {
    console.error(`ERROR: ${error}`);
    return "en-us";
  }
};

export const getCountrySlugUrl = () => {
  const slug = separateUrl();
  let countrySlug = slug?.split("-")[1] || "";
  return countrySlug;
};

export const getSlugUrl = () => {
  const slug = separateUrl();
  let cleanSlug =
    Array.isArray(slug) && slug.length > 2 ? deleteCaracterUrl(slug[3]) : "";
  cleanSlug = deleteCaracterUrl(cleanSlug);
  return cleanSlug;
};

export const deleteCaracterUrl = (stringUrl = "", caracter = "/") =>
  stringUrl.replace(caracter, "");
export const deleteAllCaracter = (stringUrl = "", caracter = "/") =>
  stringUrl.replaceAll(caracter, "");
