import * as types from "./constants";
import { errorState, initialState } from "./initializeState";
import { LOADING_START, LOADING_FINISHED } from "../loading/constants";
import { getAuthSession } from "../auth/actions";
import { fetchInitialize, calculate } from "../../services/calculator.services";
import { isNotValidSession } from "../../utils/dateHandling";
import { separateUrl, deleteCaracterUrl } from "../../utils/urlHandling";
import { currenciesFrom, defaultCurrenciesFrom } from "./currenciesFrom";
import { extractToken, extractCountryFrom } from "../../utils/jwtDecode";
import { getAllInfoByISO } from "iso-country-currency";

const MODULE = "CALCULATOR";

const addCountriesTopCorridor = responseFields => {
  if (responseFields && Array.isArray(responseFields)) {
    let countries = null;
    let favoriteCountries = null;
    let reponseTransferOptions = { sentoToCountry: [] };

    responseFields.forEach(fields => {
      if (fields.id === "SendTo") countries = fields;
      else if (fields.id === "TopCorridors") favoriteCountries = fields;
    });

    if (countries && countries.options) {
      if (favoriteCountries && favoriteCountries.options) {
        reponseTransferOptions.sentoToCountry =
          reponseTransferOptions.sentoToCountry.concat(
            favoriteCountries.options
          );
        reponseTransferOptions.sentoToCountry.push({ type: "separator" });
      }
      //reponseTransferOptions.sentoToCountry = reponseTransferOptions.sentoToCountry.concat(countries.options);
      return [
        ...reponseTransferOptions.sentoToCountry.concat(countries.options),
      ];
    }
  }
};
const generateTopCorridor = (response, newList) =>
  response ? { sentoToCountry: [...newList] } : null;

const getInitialize = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-INITIALIZE`;

  try {
    dispatch({ type: LOADING_START, payload: SUBMODULE });

    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const dataFetch = await fetchInitialize(token.auth.jwtToken);
    const reponseModel = dataFetch.response.model;
    const reponseTransferOptions = reponseModel.transferOptions
      ? reponseModel.transferOptions
      : transferOptions;
    const responseFields =
      dataFetch.response.formData && dataFetch.response.formData.CalculatorForm
        ? dataFetch.response.formData.CalculatorForm.formFields
        : null;

    // Add TopCorridor to transferOptions.sentoToCountry
    const addTopCorridor = responseFields
      ? addCountriesTopCorridor(
          dataFetch.response.formData.CalculatorForm.formFields
        )
      : [];
    const topCorridor = generateTopCorridor(responseFields, addTopCorridor);

    const decodeToken = extractToken(token.auth.jwtToken);
    const countryFrom = decodeToken.ipIsoCode.toLowerCase();
    const currencyFrom = getAllInfoByISO(countryFrom).currency;

    let validateCurrenciesFrom;
    if (currencyFrom)
      validateCurrenciesFrom = [
        { currencyCode: currencyFrom, isDefaultCurrency: true },
      ];
    else
      validateCurrenciesFrom =
        typeof currenciesFrom[countryFrom] !== "undefined"
          ? currenciesFrom[countryFrom]
          : defaultCurrenciesFrom;

    const currenciesFromList = {
      transferOptions: {
        ...reponseTransferOptions,
        ...topCorridor,
        currenciesFrom: [...validateCurrenciesFrom],
      },
      selections: { ...selections },
    };

    dispatch({
      type: types.CALCULATOR_INITIALIZE,
      payload: { ...currenciesFromList },
    });

    // await dispatch(getCalculate( { ...currenciesFromList } ));
    dispatch({ type: LOADING_FINISHED, payload: SUBMODULE });

    dispatch(setIsFetching(true));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  } finally {
    dispatch({ type: LOADING_FINISHED, payload: SUBMODULE });
  }
};

const getCalculate = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-CALCULATE`;

  let {
    auth: { tokenExpires },
    calculator: { transferOptions },
    calculator: { selections },
    calculator: { calculations },
  } = await getState();
  const oldCountryTo = selections.countryTo;
  let textFriendlyMessage = "";

  dispatch({ type: LOADING_START, payload: SUBMODULE });

  let { auth } = await getState();
  if (isNotValidSession(auth.tokenExpires)) await dispatch(getAuthSession());
  let {
    auth: { jwtToken },
  } = await getState();
  try {
    const countryFrom = extractCountryFrom(jwtToken);
    const currencyFrom = getAllInfoByISO(countryFrom).currency;

    const slug = separateUrl();
    let cleanSlug = deleteCaracterUrl(slug[3]);
    cleanSlug = deleteCaracterUrl(cleanSlug);

    const request = {
      jwtToken,
      selections: {
        ...selections,
        ...payload.selections,
        shouldCalcVariableRates: true,
        countryFrom,
      },
    };
    /**
     * ESTOS CAMPOS EN LA LLAMADA NO PUEDEN SER NULL
     *
     *  currencyFrom: "USD"
     *  currencyTo: null
     */
    const currencyFromValidate =
      request.selections.currencyFrom === "null"
        ? currencyFrom
        : request.selections.currencyFrom;

    const currencyToValidate =
      request.selections.currencyTo === "null"
        ? "USD"
        : request.selections.currencyTo;

    const deliveryMethodValidate =
      request.selections.deliveryMethod === "null"
        ? "OfficePickup"
        : request.selections.deliveryMethod;

    const paymentMethodValidate =
      request.selections.paymentMethod === "null"
        ? "StagedRia"
        : request.selections.paymentMethod;

    const requestValidate = {
      ...request,
      selections: {
        ...request.selections,
        currencyFrom:
          request.selections.countryTo === "BR" ? null : currencyFromValidate,
        currencyTo:
          request.selections.countryTo === "BR" ? null : currencyToValidate,
        deliveryMethod:
          request.selections.countryTo === "BR" ? null : deliveryMethodValidate,
        paymentMethod:
          request.selections.countryTo === "BR"
            ? "BankAccount"
            : paymentMethodValidate,
      },
    };

    const dataFetch = await calculate(requestValidate);
    const response = dataFetch.response;

    if (typeof dataFetch.response.errors !== "undefined") {
      textFriendlyMessage = dataFetch.response.errors[0].friendlyMessage || "";
    } else {
      textFriendlyMessage = "";
    }
    const reponseModel = response.model;

    const responseFields =
      dataFetch.response.formData && dataFetch.response.formData.CalculatorForm
        ? dataFetch.response.formData.CalculatorForm.formFields
        : null;

    // Add TopCorridor to transferOptions.sentoToCountry
    const addTopCorridor = responseFields
      ? addCountriesTopCorridor(
          dataFetch.response.formData.CalculatorForm.formFields
        )
      : [];
    const topCorridor = generateTopCorridor(responseFields, addTopCorridor);

    let validateCurrenciesFrom;
    if (currencyFrom)
      validateCurrenciesFrom = [
        { currencyCode: currencyFrom, isDefaultCurrency: true },
      ];
    else
      validateCurrenciesFrom =
        typeof currenciesFrom[countryFrom] !== "undefined"
          ? currenciesFrom[countryFrom]
          : defaultCurrenciesFrom;

    if (typeof dataFetch.response !== "undefined") {
      const calculationData = {
        transferOptions: {
          ...transferOptions,
          ...dataFetch.response.model.transferDetails.transferOptions,
          ...topCorridor,
          currenciesFrom: [...validateCurrenciesFrom],
        },
        calculations: {
          ...calculations,
          amountFrom: Number.isNaN(calculations.amountFrom)
            ? "0"
            : calculations.amountFrom,
          ...dataFetch.response.model.transferDetails.calculations,
        },
        selections: {
          ...selections,
          ...dataFetch.response.model.transferDetails.selections,
          countryFrom,
        },
        isFailed: false,
      };

      dispatch({ type: types.CALCULATE, payload: { ...calculationData } });
    }
    dispatch({ type: LOADING_FINISHED, payload: SUBMODULE });
  } catch (error) {
    dispatch({
      type: types.CALCULATE,
      payload: {
        ...errorState,
        isFailedText: textFriendlyMessage,
        selections: {
          ...errorState.selections,
          countryTo: oldCountryTo,
        },
      },
    });
  } finally {
    dispatch({ type: LOADING_FINISHED, payload: SUBMODULE });
  }
};

const setCountryInitialize = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-SETCOUNTRY`;
  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const decodeToken = extractToken(token.auth.jwtToken);
    const countryFrom = decodeToken.ipIsoCode.toLowerCase();

    await dispatch(
      getCalculate({
        selections: {
          deliveryMethod: null,
          paymentMethod: null,
          amountFrom: selections.amountFrom,
          countryTo: payload,
          currencyTo: null,
        },
        isFailed: false,
      })
    );
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setCountry = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-SETCOUNTRY`;
  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const decodeToken = extractToken(token.auth.jwtToken);
    const countryFrom = decodeToken.ipIsoCode.toLowerCase();

    // const deliveryMethod = Array.isArray(transferOptions.deliveryMethods) && transferOptions.deliveryMethods.length >= 0 ?
    //   transferOptions.deliveryMethods[0].value
    //   : selections['deliveryMethod'];
    const deliveryMethod = transferOptions.deliveryMethods[0].value || null;
    const paymentMethod = transferOptions.paymentMethods[0].value || null;
    // const paymentMethod = Array.isArray(transferOptions.paymentMethods) && transferOptions.paymentMethods.length >= 0 ?
    //   transferOptions.paymentMethods[0].value
    //   : selections['paymentMethod']

    const validatePayload = {
      amountFrom:
        selections["amountFrom"] === null || selections["amountFrom"] === 0
          ? 100
          : selections["amountFrom"],
      countryFrom:
        selections["countryFrom"] === null
          ? countryFrom
          : selections["countryFrom"],
      deliveryMethod,
      paymentMethod,
    };

    const currenciesFromList = {
      selections: {
        ...selections,
        ...validatePayload,
        countryTo: payload,
        currencyTo: null,
      },
      isFailed: false,
    };

    await dispatch(getCalculate({ ...currenciesFromList }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setAmountFrom = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-AMOUNT-FROM`;

  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const newPayload = isNaN(parseFloat(payload)) ? 0 : payload;

    const currenciesFromList = {
      selections: {
        ...selections,
        amountFrom: newPayload,
        shouldCalcAmountFrom: "false",
        // shouldCalcVariableRates: "true",
      },
    };
    await dispatch(getCalculate({ ...currenciesFromList }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setAmountTo = payload => async (dispatch, getState) => {
  // REVERSE CALCULATION
  const SUBMODULE = `${MODULE}-AMOUNT-TO`;

  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const reverseCalculation = {
      selections: {
        ...selections,
        amountFrom: 0,
        amountTo: payload,
        shouldCalcAmountFrom: "true",
        // shouldCalcVariableRates: "true",
      },
    };
    await dispatch(getCalculate({ ...reverseCalculation }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setPaymentMethods = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-PAYMENT-METHODS`;
  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const currenciesFromList = {
      selections: { ...selections, paymentMethod: payload },
    };
    await dispatch(getCalculate({ ...currenciesFromList }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setDeliveryMethods = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-DELIVERY-METHODS`;
  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const currenciesFromList = {
      selections: { ...selections, deliveryMethod: payload },
    };
    await dispatch(getCalculate({ ...currenciesFromList }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setCurrencyTo = payload => async (dispatch, getState) => {
  const SUBMODULE = `${MODULE}-CURRENCY-TO`;
  try {
    let {
      auth: { tokenExpires },
      calculator: { transferOptions },
      calculator: { selections },
    } = await getState();
    if (isNotValidSession(tokenExpires)) await dispatch(getAuthSession());
    let token = await getState();

    const currenciesFromList = {
      selections: { ...selections, currencyTo: payload },
    };
    await dispatch(getCalculate({ ...currenciesFromList }));
  } catch (error) {
    console.error(`ERROR ${SUBMODULE} - ${error}`);
  }
};

const setIsFetching = payload => ({
  type: types.SET_IS_FETCHING,
  payload,
});

export {
  getInitialize,
  getCalculate,
  setCountryInitialize,
  setCountry,
  setAmountFrom,
  setAmountTo,
  setIsFetching,
  setPaymentMethods,
  setDeliveryMethods,
  setCurrencyTo,
};
