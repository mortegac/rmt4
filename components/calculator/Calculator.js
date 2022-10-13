import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getInitialize,
  setCountryInitialize,
  setCountry,
  setAmountFrom,
  setAmountTo,
  setPaymentMethods,
  setDeliveryMethods,
  setCurrencyTo,
} from "../../store/calculator/actions";
import { evaluateStatus, validateSenTo } from "./functions";
import { separateUrl, deleteCaracterUrl } from "../../utils/urlHandling";
import { addFormatCurrency, getDecimalSeparator } from "../../utils/locale";

import { CalcContainer, CalculatorInputSubContainer } from "./CalculatorStyles";
import { AnimateFrame } from "./Animate";
import { Alert } from "../common/_alert";
import { Dropdown, Btn } from "../common/";
import CalculatorSelectPayments from "./CalculatorSelectPayments";
import CalculatorInputDebounce from "./CalculatorInputDebounce";
import { TextPay } from "./TextPay";

const slugLocale = () => {
  let slug = "en-US";
  try {
    return slug;
  } catch (error) {
    console.error(`-error--cleanSlug = ${error}`);
    return slug;
  }
};
const decimalSeparator = String(getDecimalSeparator(slugLocale()));

const Calculator = ({ slice }) => {
  const {
    primary: { calculator_text_send_to },
    primary: { calculator_error_api },
    primary: { calculator_text_you_send },
    primary: { calculator_text_rate },
    primary: { calculator_text_recipient_gets },
    primary: { calculator_text_payment_methods },
    primary: { calculator_text_receiving_methods },
    primary: { calculator_text_fees },
    primary: { calculator_first_transfer_free },
    primary: { calculator_total_to_pay },
    primary: { calculator_source_rate_text },
    primary: { calculator_text_button },
    primary: { calculator_validation_text_max },
    primary: { calculator_validation_text_min },
    primary: { set_default_country },
    primary: { default_country },
  } = slice;

  const dispatch = useDispatch();
  const {
    loading,
    loading: { module },
    calculator: {
      selections,
      calculations,
      transferOptions,
      fetching,
      isFailed,
      isFailedText,
    },
  } = useSelector(store => store);

  const [dataForm, setDataForm] = useState({});
  const [errMaxMin, setErrMaxMin] = useState(false);

  const currencyFrom =
    transferOptions.currenciesFrom && transferOptions.currenciesFrom.length > 0
      ? transferOptions.currenciesFrom[0]["currencyCode"]
      : "";
  const countries = transferOptions.sentoToCountry;
  const fees = calculations.transferFee || 0;
  const totalToPay = calculations.amountFrom || 0;
  const sendAmountLimit = calculations.sendAmountLimit || {
    maximumSendFromAmount: 1000,
    minimumSendFromAmount: 1,
  };

  const formatCurrency = value =>
    addFormatCurrency(isNaN(value) ? 1 : value, slugLocale());
  const countryFrom = countries.find(
    country => country.value === selections.countryFrom
  );
  const countryFullFrom = countryFrom
    ? countryFrom.text
    : selections.countryFrom;

  const statusValidate = objValue =>
    validateSenTo({
      slug: slugLocale(),
      value: objValue.value,
      decimalSeparator: objValue.decimalSeparator,
      maximum: sendAmountLimit.maximumSendFromAmount,
      minimum: sendAmountLimit.minimumSendFromAmount,
    });

  const handleCalculate = value => {
    const status = statusValidate({ value, decimalSeparator });
    // dispatch(setAmountFrom( Number.isNaN(value)? 1 : value ));
    dispatch(setAmountFrom(value));
    setErrMaxMin(!status);
  };

  const handleReverseCalculate = value => dispatch(setAmountTo(value));

  const handleInputChange = async event => {
    const target = typeof event["target"] !== "undefined" ? event.target : "";

    if (target !== "") {
      const name = typeof target["name"] !== "undefined" ? target.name : "";
      const value = typeof target["value"] !== "undefined" ? target.value : "";

      setDataForm({
        ...dataForm,
        [name]: value,
      });

      if (value !== "") {
        if (name === "countryTo") {
          await dispatch(setCountryInitialize(value));
          await dispatch(setCountry(value));
        }
        if (name === "paymentMethods") dispatch(setPaymentMethods(value));
        if (name === "deliveryMethods") dispatch(setDeliveryMethods(value));
        if (name === "currencyTo") dispatch(setCurrencyTo(value));
      }
    }
  };

  const clickHandler = e => {
    e.preventDefault();

    if (isFailed) return;
    const slug = separateUrl();

    if (typeof document !== undefined) {
      const data = {
        i18n: {
          locale: slug === "" ? "en-us" : slug,
        },
        quote: {
          ...selections,
        },
      };
      document.cookie = `public-site-local=${JSON.stringify({
        ...data,
      })};path=/`;
      document.cookie = `public-private=${JSON.stringify({
        ...data,
      })};domain=.riamoneytransfer.com;path=/;`;
      window.location.href = "https://secure.riamoneytransfer.com";
    }
  };

  const FailedAlert = () => (
    <Alert
      text={
        isFailedText !== ""
          ? isFailedText
          : calculator_error_api[0]?.text ||
            "We are having some issues, please try again in a few minutes."
      }
    />
  );

  useEffect(() => {
    (async () => {
      try {
        await dispatch(
          setCountryInitialize(
            set_default_country ? default_country.substring(0, 2) : "MX"
          )
        );
        await dispatch(
          setCountry(
            set_default_country ? default_country.substring(0, 2) : "MX"
          )
        );
        dispatch(getInitialize());
      } catch (error) {
        console.error("ERROR: ", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setDataForm({ ...dataForm, ...calculations });
        const status = statusValidate({
          value: calculations.amountFrom,
          decimalSeparator,
        });
        setErrMaxMin(!status);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    })();
  }, [calculations]);

  useEffect(() => {
    document.onkeydown = function () {
      if (window.event.keyCode == "13") {
        window.event.preventDefault();
      }
    };
  }, []);

  return (
    <CalcContainer className="loading">
      <AnimateFrame status={fetching}>
        <form autoComplete="off" action="" method="post">
          <div className="calc-heading">
            <Dropdown
              options={countries}
              name="countryTo"
              label={calculator_text_send_to[0]?.text || "Send to"}
              value={selections.countryTo}
              onClick={e => handleInputChange(e)}
              inputSearch="true"
              countryDropdown="true"
            />
          </div>

          {isFailed ? FailedAlert() : null}

          <CalculatorInputDebounce
            label={calculator_text_you_send[0]?.text || "You send"}
            name="amountFrom"
            requests={value => handleCalculate(value)}
            onChange={e => handleInputChange(e)}
            slug={slugLocale()}
            value={isFailed ? "-" : formatCurrency(dataForm.amountFrom)}
            decimalSeparator={decimalSeparator}
            nameSelect="currencyFrom"
            onChangeSelect={e => handleInputChange(e)}
            valueSelect={currencyFrom}
            optionsSelect={isFailed ? "-" : transferOptions.currenciesFrom}
            disabled={isFailed}
            loadingStatus={evaluateStatus(loading)}
            error={errMaxMin}
            maxAmount={sendAmountLimit.maximumSendFromAmount}
            minAmount={sendAmountLimit.minimumSendFromAmount}
            textMaxAmount={calculator_validation_text_max[0]}
            textMinAmount={calculator_validation_text_min[0]}
          />

          <CalculatorInputSubContainer>
            <span>{calculator_text_rate[0]?.text || "Rate"}</span>

            {isFailed ? (
              "-"
            ) : (
              <h4 className="transfer-text">
                {evaluateStatus(loading)
                  ? "-"
                  : `1.00 ${currencyFrom} = ${formatCurrency(
                      calculations.exchangeRate
                    )} ${selections.currencyTo}`}
              </h4>
            )}
          </CalculatorInputSubContainer>

          <CalculatorInputDebounce
            label={calculator_text_recipient_gets[0]?.text || "Recipient gets"}
            name="amountTo"
            requests={value => handleReverseCalculate(value)}
            onChange={e => handleInputChange(e)}
            slug={slugLocale()}
            value={isFailed ? "-" : formatCurrency(dataForm.amountTo)}
            decimalSeparator={decimalSeparator}
            nameSelect="currencyTo"
            onChangeSelect={e => handleInputChange(e)}
            valueSelect={selections.currencyTo}
            optionsSelect={isFailed ? "-" : transferOptions.currencies}
            disabled={isFailed}
            loadingStatus={evaluateStatus(loading)}
            error={false}
          />

          <div className="select-container">
            <CalculatorSelectPayments
              title={
                calculator_text_payment_methods[0]?.text || "Payment Method"
              }
              name="paymentMethods"
              options={transferOptions.paymentMethods}
              onChange={e => handleInputChange(e)}
              loadingStatus={evaluateStatus()}
              value={selections.paymentMethod}
            />
            <CalculatorSelectPayments
              title={
                calculator_text_receiving_methods[0]?.text || "Receive Method"
              }
              name="deliveryMethods"
              options={transferOptions.deliveryMethods}
              onChange={e => handleInputChange(e)}
              loadingStatus={evaluateStatus()}
              value={selections.deliveryMethod}
              aditionalClass="separate-top"
            />
          </div>
          <div className="details-container">
            <TextPay
              title={
                calculator_text_fees[0]?.text || `Fees ${selections.countryTo}`
              }
              isFailed={isFailed}
              evaluateStatus={evaluateStatus(loading)}
              text={
                evaluateStatus(loading)
                  ? "- "
                  : "" + formatCurrency(fees) + " " + currencyFrom
              }
              classname="fee"
              classnameSub="text-through"
            />
            <p className="first-fee">
              (
              {calculator_first_transfer_free[0]?.text
                ? calculator_first_transfer_free[0]?.text
                : "First transfer fee"}
              {`: 0 ${currencyFrom}`})
            </p>
          </div>

          <div className="details-container spacer-container">
            <div className="spacer"></div>
          </div>

          <div className="calc-end-section">
            <div className="left-box">
              <TextPay
                title={calculator_total_to_pay[0]?.text || `Total to pay`}
                isFailed={isFailed}
                evaluateStatus={evaluateStatus(loading)}
                classnameSub="bold-text"
                text={
                  evaluateStatus(loading)
                    ? "- "
                    : " " + formatCurrency(totalToPay) + " " + currencyFrom
                }
              />
            </div>
            <div className="right-box">
              <Btn
                innerText={calculator_text_button[0]?.text || `Get Started`}
                fullwidth={true}
                type="calculator-orange"
                onClick={e => clickHandler(e)}
                className={
                  isFailed || errMaxMin
                    ? "disabled"
                    : loading.module === "CALCULATOR-CALCULATE" &&
                      loading.fetching
                    ? "disabled"
                    : null
                }
                disabled={
                  isFailed || errMaxMin
                    ? true
                    : loading.module === "CALCULATOR-CALCULATE" &&
                      loading.fetching
                    ? "true"
                    : false
                }
              />
            </div>
          </div>
          <div className="details-row first-fee-country">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 11V6.5H6.5V7.5H7.5V11H6V12H10V11H8.5ZM8 3.5C7.58579 3.5 7.25 3.83579 7.25 4.25C7.25 4.66421 7.58579 5 8 5C8.41421 5 8.75 4.66421 8.75 4.25C8.75 3.83579 8.41421 3.5 8 3.5ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"
                fill="#001133"
                fill-opacity="0.3"
              />
            </svg>
            <span className="transfer-text">
              {`${calculator_source_rate_text[0]?.text} ${
                countryFullFrom === "null" ? "-" : countryFullFrom
              }` ||
                `First transfer free reflect sending from ${
                  countryFullFrom !== "null" ? "-" : countryFullFrom
                }`}
            </span>
          </div>
        </form>
      </AnimateFrame>
    </CalcContainer>
  );
};

export const MemoizedCalculator = React.memo(Calculator);
export default MemoizedCalculator;
