import decode from "jwt-decode";


// export function getJwt() {
//     if (typeof window === `undefined`) return undefined
//     return JSON.parse(localStorage.getItem(JWT_KEY))
//   }

export const extractToken = token => decode(token);
export const extractCountryFrom = token => extractToken(token).ipIsoCode.toUpperCase();
export const extractSlugCountryFrom = token => extractToken(token).cultureCode; 