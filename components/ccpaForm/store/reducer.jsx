import { cn, typePersonOption } from "./constants";

export const initialState = {
  typePerson: { ...typePersonOption[0] },
  typeRequest: "Information Collection Practices",
  state: "Alabama",
  city: "Auburn",
  stateAgent: "Alabama",
  cityAgent: "Auburn",
  form: {
    step01: {
      firstName: "",
      midleName: "",
      lastName: "",
      otherName: "",
      emailName: "",
      otherEmail: "",
      codephoneNumber: "1",
      phoneNumber: "",
      codeotherPhoneNumber: "1",
      otherPhoneNumber: "",
    },
    step02: {
      address: "",
      apt: "",
      state: "Alabama",
      city: "Auburn",
      postalCode: "",
      otherAdresses: "",
      upload: "",
    },
    step03: {
      firstNameAgent: "",
      midleNameAgent: "",
      lastNameAgent: "",
      emailNameAgent: "",
      phoneNumberAgent: "",
      codephoneNumberAgent: "1",
    },
    step04: {
      addressAgent: "",
      aptAgent: "",
      cityAgent: "Auburn",
      stateAgent: "Alabama",
      postalCodeAgent: "",
      otherAdressesAgent: "",
      uploadAgent: "",
    },
    step05: { acceptTerms: false },
  },
};

export const ccpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case cn.CHANGE_TYPE_PERSON:
      return { ...state, typePerson: action.payload };
    case cn.CHANGE_TYPE_REQUEST:
      return {
        ...state,
        typeRequest: action.payload,
      };
    case cn.CHANGE_STEP:
      return {
        ...state,
        typePerson: action.payload,
      };
    case cn.SET_FORM:
      return { ...state, form: { ...state.form, ...action.payload } };

    case cn.SET_STATE:
      return { ...state, state: action.payload };

    case cn.SET_CITY:
      return { ...state, city: action.payload };

    case cn.SET_STATE_AGENT:
      return { ...state, stateAgent: action.payload };
    case cn.SET_CITY_AGENT:
      return { ...state, cityAgent: action.payload };

    default:
      return { ...state };
  }
};

export default {
  ccpa: ccpaReducer,
};
