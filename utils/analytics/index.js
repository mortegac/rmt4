  /**
   * dataConsent = { analytics, advertising }
   * locale = FLAG COUNTRY
   */
  /** RULES TO ENABLE: GTM | SEGMENT | BRANCH  ** 
   * 
   * a.- It's GDPR: Get track-consentv2 from localstorage
   *       b.1.- If track-consentv2 does not exist, DO NOT ENABLE
   *             (SI NO EXISTE NO HABILITAR) 

   *       b.2.- If exists ENABLE WITH EXISTING OPTIONS in track-consentv2
                (HABILITAR) 

   * b.- If the locale is NOT GDPR, enable all to TRUE
   *     (Es GDPR => Habilitar todo en TRUE)
   
   * 
   * */ 
import {initGTM} from './gtmv2'
import {initSegment} from './segment'
import {initBranch} from './branch'
import { hasConsent, getFromStorage, setInCookie, removeCookie } from "../../components/consentManager/consent";
import { getCountrySlugUrl } from '../../utils/urlHandling';

export const initializeAnalytic = async (stateConsent=null) =>{

  if (typeof window !== "undefined") {
    const locale = String(await getCountrySlugUrl() || ""); // FLAG COUNTRY
    const isGdpr = await hasConsent();                      // Get if it is a country with GDPR
 
    let hasAnalyticsCookies = null;
    let hasAdvertisingCookies = null;

    if(isGdpr) {

      if(stateConsent){
        hasAnalyticsCookies= stateConsent.analytics;
        hasAdvertisingCookies= stateConsent.advertising;
        // Update cookie
        setInCookie({ analytics: stateConsent.analytics, advertising: stateConsent.advertising })

      }else{
        const storage = await checkLocalstorage();
        // window.console.log("PREFERENCES:", JSON.stringify(storage))
        hasAnalyticsCookies = storage.analytics, 
        hasAdvertisingCookies= storage.advertising 
      }

    }else{
      // Update cookie
      setInCookie({ analytics: true, advertising: true })

      hasAnalyticsCookies = true;
      hasAdvertisingCookies =true;
    }

    initAllScripts({ hasAnalyticsCookies, hasAdvertisingCookies });

  }
}

const checkLocalstorage = async ()=>{
  const objDefault = { analytics: null, advertising: null };

  try{
     // get Localstorage
    const data = await getFromStorage();
    const dataStorage = JSON.parse(data);

    // Update Cookie
    if(!dataStorage){
      // remove Cookie an create
      removeCookie();
    }else{
      setInCookie({ analytics: dataStorage.analytics, advertising: dataStorage.advertising })
    }

     return dataStorage ?
      { ...dataStorage }
      :{ ...objDefault } 

  }catch(e){
      return { ...objDefault } 
  }
}

const initAllScripts = ({ hasAnalyticsCookies, hasAdvertisingCookies })=>{
  
  if( hasAnalyticsCookies !== null && hasAdvertisingCookies !== null ){

    initGTM({
      hasAnalyticsCookies, 
      hasAdvertisingCookies
    });
  
    if(hasAnalyticsCookies){
      initSegment();
      initBranch();
    }

  }
};