import {
  CALCULATOR_INITIALIZE,
  SET_SENT_TO_COUNTRY,
  CALCULATE,
  SET_IS_FETCHING,
} from "./constants";
import { initialState } from "./initializeState";

export const calculatorReducers = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATOR_INITIALIZE:
      return { ...state, ...action.payload };

    case CALCULATE:
      return { ...state, ...action.payload };

    case SET_SENT_TO_COUNTRY:
      return { ...state, options: [...action.payload] };

    case SET_IS_FETCHING:
      return { ...state, fetching: action.payload };

    default:
      return state;
  }
};

export default {
  calculator: calculatorReducers,
};
