/* eslint-disable */
import React, { useState, useEffect, useReducer } from "react";
import { AnimateSharedLayout } from "framer-motion";

import { 
  hasConsent,
  hasStorageConsent,
  setInStorage,
  setInCookie,
} from "./consent";
import { ConsentContainer } from "./ConsentManagerStyle";
import { Reducer, initialState } from "./store/reducer";
import { Step01, Step02 } from "./index";
import { initializeAnalytic } from "../../utils/analytics/index";


const WrapperConsentManager = (props) => {
  const { consentData, uid = "", consentLocale } = props;

  const [state, dispatch] = useReducer(Reducer, initialState);

  const changeStep = () => dispatch({ type: "CHANGE_STEP" });
  const changeState = (payload) =>dispatch({ type: "SET_STATE", payload: { ...payload } });
  

  const setPreferences = async (type) => {

    if(type==="SET_ALLCOOKIES") {
      dispatch({ type: "SET_ALLCOOKIES", payload: { ...state, analytics: true, advertising: true } });
      applyPreferences({ analytics: true, advertising: true })
     
    }
    
    if(type==="SET_NONECOOKIES") {
      dispatch({ type: "SET_NONECOOKIES", payload: { ...state, analytics: false, advertising: false } });
      applyPreferences({ analytics: false, advertising: false })
    }

    if(type==="CUSTOM") {
      dispatch({ type: "SET_CUSTOMCOOKIES", payload: { ...state } });
      applyPreferences({ analytics: state.analytics, advertising: state.advertising })
    }    
  }

  const applyPreferences= (preferences)=> {
    setInStorage({ ...preferences })
    initializeAnalytic({ ...preferences })
    setInCookie({ ...preferences })
  }

  useEffect(() => { initializeAnalytic(); } ,[])

  useEffect(() => {
  
    const callFn = async ()=>{
      // has consent in LocalStorage
      const isVisibleConsent = await hasConsent(); //true:show  | false:hidden
      const hasDataLocalstorage = await hasStorageConsent() //false:no-data

      if(isVisibleConsent && !hasDataLocalstorage) changeState({ isVisible: true });
      
    }
    callFn();

  }, [state.isVisible]);

  if (typeof window === "undefined") <></>;

  const typeOfStep = {
    ["STEP_ONE"]: Step01,
    ["STEP_TWO"]: Step02,
  };
  const TypeOfStepComponent = typeOfStep[state.step];
  
  return state.isVisible ? (
    <AnimateSharedLayout>
      <ConsentContainer>
        <TypeOfStepComponent
          state={state}
          savePreferences={setPreferences}
          fnChangeStep={changeStep}
          fnChangeState={changeState}
          dispatch={dispatch}
          consentData={consentData}
          consentLocale={consentLocale}
        />
      </ConsentContainer>
    </AnimateSharedLayout>
  ) : null;
};

export default WrapperConsentManager;
