import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { InputContainer, ErrorMessage } from "./calculatorInputStyle";
import { Dropdown } from "../common/";
import {
  isANumberd,
  sanitizeNumber,
  replaceAll,
  addFormatCurrency,
} from "../../utils/locale";

const CalculatorInputDebounce = props => {
  const { disabled, loadingStatus, maxAmount, minAmount } = props;
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(props.valueSelect);

  const TextDefaultMin = "Send amount must be between ";
  const TextDefaultMax = " and ";
  const { textMinAmount, textMaxAmount } = props;
  const textMinValidate =
    typeof textMinAmount === "object"
      ? textMinAmount.hasOwnProperty("text")
        ? textMinAmount.text
        : TextDefaultMin
      : TextDefaultMin;
  const textMaxValidate =
    typeof textMaxAmount === "object"
      ? textMaxAmount.hasOwnProperty("text")
        ? textMaxAmount.text
        : TextDefaultMax
      : TextDefaultMax;

  const debouncedSave = useCallback(
    debounce(value => {
      //Convert a javascript number
      const valueSanitized = sanitizeNumber(value, props.slug);
      props.requests(valueSanitized);
    }, 1000),
    []
  );

  const updateValue = (newValue, separatorDecimal = ".") => {
    // Validate with regular expressions
    let valueSanitized = sanitizeNumber(newValue, props.slug);
    valueSanitized =
      separatorDecimal === ","
        ? replaceAll(valueSanitized.toString(), ".", ",")
        : valueSanitized;

    if (isANumberd(valueSanitized, separatorDecimal)) {
      setInputValue(newValue);
      debouncedSave(newValue);
    }
  };

  const handleInputChange = event => {
    setSelectedValue(event.target.value);
    props.onChangeSelect(event);
  };

  useEffect(() => {
    (async () => {
      try {
        setInputValue(props.value);
        setSelectedValue(props.valueSelect);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    })();
  }, [props.value]);

  return (
    <>
      <InputContainer
        iShowChevron="false"
        className={props.error ? "amount-error" : ""}
      >
        <input
          value={inputValue}
          onChange={input =>
            updateValue(input.target.value, props.decimalSeparator)
          }
          type="text"
          placeholder="0"
          className={props.inputLoading ? "loading" : ""}
          style={{ opacity: loadingStatus ? "0.3" : "1" }}
        />

        <div>
          <span
            className="label"
            style={{ opacity: loadingStatus ? "0.3" : "1" }}
          >
            {props.label}
          </span>
        </div>

        {Object.keys(props.optionsSelect).length === 1 ? (
          <span className="list">{selectedValue}</span>
        ) : (
          <>
            <div className="list">
              <div className="list-dropdown">
                <Dropdown
                  options={props.optionsSelect.map((e, i) => {
                    return { text: e.currencyCode, value: e.currencyCode };
                  })}
                  name={props.nameSelect}
                  key={`001${props.nameSelect}`}
                  value={selectedValue}
                  onClick={e => handleInputChange(e)}
                  loadingStatus={loadingStatus}
                />
              </div>
            </div>
          </>
        )}
      </InputContainer>

      {props.error && (
        <ErrorMessage>
          <span>
            {`${textMinValidate} 
              ${minAmount} 
              ${textMaxValidate}
              ${addFormatCurrency(sanitizeNumber(maxAmount))}
            `}
          </span>
        </ErrorMessage>
      )}
    </>
  );
};

export default CalculatorInputDebounce;
