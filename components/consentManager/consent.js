import { gdprCountryCodes } from "../../utils/gdprCountryCodes";
import { getCountrySlugUrl } from '../../utils/urlHandling';
import { local, setCookie } from '../../utils/storageHandling';

const namev2 = "track-consent";

export const hasConsent = async () => {

  // validate that it is not a country with GDPR
  const locale = String(getCountrySlugUrl() || "");
  const isGdpr = gdprCountryCodes.includes(locale || "");

  return isGdpr;
}

export const hasStorageConsent = async () => {
  const dataStorage = await local.getItem(namev2)
    .then( (value) => {
      return value === null ? false:true
    } )
  return dataStorage;
}

export const getFromStorage = async () => {
  const dataStorage = await local.getItem(namev2)
    .then( (value) => value
  )
  return dataStorage;
}

export const setInStorage = async (data) => {
  const dataStorage = await local.setItem(namev2, JSON.stringify(data))
    .then( (value) => {
      return null
    } )
  return dataStorage;
}

export const setInCookie = async (data) => {
  if (typeof window !== "undefined") { 
    document.cookie = `${namev2}=${JSON.stringify({ ...data })};path=/`;
    document.cookie = `${namev2}=${JSON.stringify({ ...data })};domain=.riamoneytransfer.com;path=/;`;
  }
}

export const removeCookie = async () => {
  if (typeof window !== "undefined") { 
    document.cookie = `${namev2}=Max-Age=0;path=/;`;
    document.cookie = `${namev2}=domain=.riamoneytransfer.com; Max-Age=0;path=/;`;
  }
}


  


// const removeCookiesAnalitycs= ()=>{
//   if (typeof window !== "undefined") {
//     removeCookie("track-consent")
//     document.cookie = `track-consent=; Max-Age=0;path=/`;
//     document.cookie = `track-consent=; Max-Age=0;domain=.riamoneytransfer.com;path=/;`;
//   }
// };

// export const cancel = () => {
//   if (typeof window !== "undefined") window.sessionStorage.setItem(name, false);
// };

// export const accept = () => {
//   setCookie(name, true);
//   if (typeof window !== "undefined") window.location.reload(false);
// };
