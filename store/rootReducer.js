import { combineReducers } from "redux";

// REDUCER
import loading from "./loading/reducer";
import auth from "./auth/reducer";
import calculator from "./calculator/reducer";
// import ccpa from "../components/page-components/CcpaForm/store/reducer";

export const reducers = () => ({
  ...loading,
  ...auth,
  ...calculator,
  // ...ccpa,
});

export default combineReducers(reducers());
