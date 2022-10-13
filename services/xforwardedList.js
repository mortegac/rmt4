import { separateUrl } from "../utils/urlHandling";

export const xForwarded = () => {
  const urlArray = separateUrl();
  return {
    AppType: "2",
    "Client-Type": "App",
    CultureCode: urlArray,
  };
};

//  export const xForwarded = {'CultureCode':'it-it'};
