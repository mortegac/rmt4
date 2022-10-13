import { cn, step } from "./constants";

const { STEP_ONE, STEP_TWO } = step;

export const initialState = {
  step: STEP_ONE,
  isVisible: false,
  essential: true,
  analytics: false,
  advertising: false,
  type: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case cn.CHANGE_STEP:
      return {
        ...state,
        step: state.step === STEP_ONE ? STEP_TWO : STEP_ONE,
      };

    case cn.SET_STATE:
      return { ...state, ...action.payload };
    
    case cn.SET_ALLCOOKIES:
        // window.console.log('%c action: SET_ALLCOOKIES ', 'background: greenyellow; color: #000');
        return { 
          ...state,
          ...action.payload,
          type: "ALLCOOKIES",
          isVisible: false,
    };
    case cn.SET_NONECOOKIES:
      
        return { 
          ...state,
          type: "NONECOOKIES",
          analytics: false,
          advertising: false,
          isVisible: false,
    };

    case cn.SET_CUSTOMCOOKIES:
        return { 
          ...state,
          type: "CUSTOMCOOKIES",
          isVisible: false,
    };

    default:
      return { ...state };
  }
};

export default {
  Reducer,
};
