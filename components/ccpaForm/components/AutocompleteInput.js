import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SuggestionList from "./SuggestionList";
import Chevron from "./chevron.svg";

const InputContainer = styled.div`
  position: relative;
  &::after {
    content: url(${Chevron});
    position: absolute;
    width: 24px;
    height: 24px;
    right: 5px;
    top: 18px;
    transform: rotate(0deg);
    transform-origin: center;
    transition: all 0.3s ease;
    filter: brightness(0) hue-rotate(0deg);
    pointer-events: none;
  }

  &.active {
    &::after {
      content: url(${Chevron});
      position: absolute;
      width: 24px;
      height: 24px;
      right: 5px;
      top: 18px;
      transform: rotate(180deg);
      filter: brightness(10) hue-rotate(161deg);
    }
  }
`;

const StyledInput = styled.input`
  background: white;
  overscroll-behavior: auto;
  position: relative;
  &.error {
    border: 1px solid #ff3355;
  }
`;

const AutocompleteInput = ({
  countries,
  setPhoneCode,
  setCountryValue,
  error,
  setValue,
  register,
}) => {
  let countriesTwo = [
    {
      name: "Afghanistan",
      flag: "🇦🇫",
      code: "AF",
      dial_code: "+93",
    },
    {
      name: "Åland Islands",
      flag: "🇦🇽",
      code: "AX",
      dial_code: "+358",
    },
    {
      name: "Albania",
      flag: "🇦🇱",
      code: "AL",
      dial_code: "+355",
    },
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const newInput = (e) => {
    clearTimeout(timeout);
    const userInput = e.target.value;
    const unLinked = countriesTwo.filter(
      (country) =>
        country.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);

    const timeout = setTimeout((e) => {
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    }, 300);
  };

  const inputClick = (e) => {
    const userInput = e.target.value;

    const unLinked = countriesTwo.filter(
      (country) =>
        country.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    !showSuggestions ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  const onClick = (e, phone) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    // setCountryValue(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setValue("country", e.target.innerText, true);
    // setPhoneCode(e.target.attributes.code.value);
  };

  const onKeyDown = (key) => {
    if (key.keyCode === 13) {
      // setPhoneCode(filteredSuggestions[activeSuggestionIndex].dial_code);
      key.preventDefault();
      setInput(`${filteredSuggestions[activeSuggestionIndex].name}`);
      setValue("country", filteredSuggestions[activeSuggestionIndex].name);
      setFilteredSuggestions([]);
      // setCountryValue(filteredSuggestions[activeSuggestionIndex].name);
    }

    if (key.keyCode === 40) {
      key.preventDefault();
      key.stopPropagation();
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(filteredSuggestions.length - 1);
      } else {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    }

    if (key.keyCode === 38) {
      key.preventDefault();
      if (activeSuggestionIndex <= 0) {
        setActiveSuggestionIndex(0);
      } else {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    }

    if (key.keyCode === 9) {
      key.preventDefault();
      setShowSuggestions(false);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSuggestions(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperTwo = useRef(null);
  useOutsideAlerter(wrapperTwo);

  return (
    <InputContainer
      className={`${showSuggestions && "active"}`}
      ref={wrapperTwo}
    >
      <StyledInput
        type="text"
        name="country"
        id="country"
        onChange={newInput}
        onKeyDown={onKeyDown}
        value={input}
        placeholder={"Select One"}
        className={error && "error"}
        autoComplete="off"
        onClick={inputClick}
      />
      {showSuggestions && (
        <SuggestionList
          suggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={onClick}
          onKeyDown={onKeyDown}
        />
      )}
    </InputContainer>
  );
};
export default AutocompleteInput;
