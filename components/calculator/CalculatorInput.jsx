import React, { useEffect, useState, useRef } from "react";
import { InputContainer, ErrorMessage, } from './calculatorInputStyle';



let typingTimer;
let doneTypingInterval = 500;
let value = "";

const CalculatorInput = (props) => {
  const { disabled, loadingStatus, maxAmount, minAmount } = props;
  

  return (
    <>
      <InputContainer className={props.error ? "amount-error" : ""}>
        {/* <span>{JSON.stringify(loadingStatus)}</span> */}
        <input
          type="text"
          placeholder="0"
          onChange={props.onChange || null}
          onBlur={props.onBlur}
          value={disabled? '-':props.value}
          name={props.name}
          disabled={disabled}
          className={props.inputLoading ? "loading" : ""}
          style={{opacity: loadingStatus ? '0.3' : '1'}}
        />
        <select 
          onChange={props.onChangeSelect}
          name={props.nameSelect}
          style={{opacity: loadingStatus ? '0.3' : '1'}}
        >
          {props.optionsSelect.map((e, i) => (
            <option key={i} selected={props.valueSelect} value={i}>
            {/* <option key={i} selected={e.isDefaultCurrency} value={i}> */}
              {e.currencyCode}
            </option>
          ))}
        </select>
        <span className="label" style={{opacity: loadingStatus ? '0.3' : '1'}}>{props.label}</span>
      </InputContainer>
      {props.error && (
        <ErrorMessage>
          <span>
            Send amount must be between {props.minAmount} and {props.maxAmount}
          </span>
        </ErrorMessage>
      )}
    </>
  );
};

export default CalculatorInput;
