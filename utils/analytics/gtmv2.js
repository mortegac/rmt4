import { 
  KEY_GTM,
  onlyEssentialsArguments,
  bothArguments,
  onlyAnalyticsArguments,
  onlyAdvertisingArguments
} from "./constants";
// import { hasConsent } from "../../components/consentManager/consent";
import { getCountrySlugUrl } from '../../utils/urlHandling';

export async function initGTM(state) {
  if (typeof window !== "undefined") {
    await loadScript(state);
  }
}

export async function loadScript(state) {
  // window.dataLayer=[];
  if(!isScriptLoaded() && !window.dataLayer){
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    // Get if it is a country with GDPR
    getArgumentsOnGTag(state)
    
    // Get Flag Country
    const locale = String(await getCountrySlugUrl() || ""); 

    // Create Event 
    await setEventDataLayer({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
      userID: "",
      locale: locale,
    })

    // Create script in the DOM
    await createScriptGTM();

  }
}

const setEventDataLayer = async(event)=> await window.dataLayer.push({...event})

const isScriptLoaded = () => {
  const allScripts = document.head.getElementsByTagName("script");
  for (let i = 0; i < allScripts.length; i++) {
    if (String(allScripts[i].src).includes("www.googletagmanager.com")) {
      return true;
    }
  }
  return false;
};

export async function createScriptGTM(url) {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${KEY_GTM}`;
    script.onload = () => {
      resolve(script);
    };
    script.onerror = err => {
      reject(err);
    };
    document.head.appendChild(script);
  });
  return promise;
}


const getArgumentsOnGTag = ({hasAnalyticsCookies, hasAdvertisingCookies}) => {
  if (!hasAnalyticsCookies && !hasAdvertisingCookies) {
    window.gtag(...onlyEssentialsArguments);
  } else if (hasAnalyticsCookies && hasAdvertisingCookies) {
    window.gtag(...bothArguments);
  } else if (hasAnalyticsCookies && !hasAdvertisingCookies) {
    window.gtag(...onlyAnalyticsArguments);
  } else if (!hasAnalyticsCookies && hasAdvertisingCookies) {
    window.gtag(...onlyAdvertisingArguments);
  }
};