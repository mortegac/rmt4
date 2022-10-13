import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DropdownList from "./DropdownList";
import Chevron from "../../commonAssets/chevron.svg";

const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  display: inline-block;
  margin-right: 16px;

  &::after {
    content: url(${Chevron.src});
    position: absolute;
    width: 24px;
    height: 24px;
    left: 75px;
    top: 13px;
    transform: rotate(0deg);
    transform-origin: center;
    transition: all 0.3s ease;
    filter: brightness(0) hue-rotate(0deg);
    pointer-events: none;
  }

  &.active {
    &::after {
      content: url(${Chevron.src});
      position: absolute;
      width: 24px;
      height: 24px;
      left: 75px;
      top: 13px;
      transform: rotate(180deg);
      filter: brightness(10) hue-rotate(161deg);
    }
  }
`;

const StyledInput = styled.input`
  background: white;
  overscroll-behavior: auto;
  position: relative;
  max-width: 104px;
  .error {
    border: 1px solid #ff3355;
  }
`;

const DialCodeDropDown = ({ suggestions, setPhoneCode, error, phoneInput }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState(suggestions[233].dial_code);

  useEffect(() => {
    setPhoneCode(input);
  }, [input]);

  const newInput = (e) => {
    clearTimeout(timeout);
    const userInput = e.target.value;
    const unLinked = suggestions.filter(
      (country) =>
        country.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        country.dial_code.indexOf(userInput) > -1
    );
    setInput(e.target.value);

    const timeout = setTimeout(() => {
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    }, 300);
  };

  const inputClick = (e) => {
    const unLinked = suggestions.map((item) => item);
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    !showSuggestions ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText.match(/\(([^)]+)\)/)[1]);
    setPhoneCode(e.target.innerText.match(/\(([^)]+)\)/)[1]);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (key) => {
    if (key.keyCode === 13) {
      key.preventDefault();
      setInput(filteredSuggestions[activeSuggestionIndex].dial_code);
      setPhoneCode(filteredSuggestions[activeSuggestionIndex].dial_code);
      setFilteredSuggestions([]);
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

    if ((input === suggestions[233].dial_code) & (key.keyCode === 8)) {
      key.preventDefault();
      setInput("");
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

  const wrapperDial = useRef(null);
  useOutsideAlerter(wrapperDial);

  return (
    <InputContainer
      className={`${showSuggestions && "active"}`}
      ref={wrapperDial}
    >
      <StyledInput
        type="text"
        id="phonecode"
        onKeyDown={onKeyDown}
        value={input}
        className={error && "error"}
        onChange={newInput}
        autoComplete="off"
        onClick={inputClick}
      />

      {showSuggestions && (
        <DropdownList
          suggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={onClick}
          onKeyDown={onKeyDown}
          phoneInput={phoneInput}
        />
      )}
    </InputContainer>
  );
};
export default DialCodeDropDown;
