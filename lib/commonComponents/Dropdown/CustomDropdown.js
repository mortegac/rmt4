import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DropdownList from "./DropdownList";
import Chevron from "../../commonAssets/chevron.svg";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: url(${Chevron.src});
    position: absolute;
    width: 24px;
    height: 24px;
    right: 5px;
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
      right: 5px;
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
  caret-color: transparent;
  cursor: pointer;
  &.error {
    border: 1px solid #ff3355;
  }
`;

const CustomDropdown = ({
  suggestions,
  setInquiryValue,
  // register,
  setValue,
  error,
  placeholder,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const inputClick = (e) => {
    // const userInput = e.target.value;

    const unLinked = suggestions.map((item) => item);

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    !showSuggestions ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setInquiryValue(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setValue("inquiry", e.target.innerText, true);
  };

  const onKeyDown = (key) => {
    if (key.keyCode === 13) {
      key.preventDefault();
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setInquiryValue(filteredSuggestions[activeSuggestionIndex].name);
      setFilteredSuggestions([]);
      setValue(
        "inquiry",
        filteredSuggestions[activeSuggestionIndex].name,
        true
      );
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
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSuggestions(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperOne = useRef(null);
  useOutsideAlerter(wrapperOne);

  return (
    <InputContainer
      className={`${showSuggestions && "active"}`}
      ref={wrapperOne}
    >
      <StyledInput
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        placeholder={placeholder}
        onClick={inputClick}
        className={error && "error"}
      />
      {showSuggestions && (
        <DropdownList
          suggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={onClick}
          onKeyDown={onKeyDown}
        />
      )}
    </InputContainer>
  );
};
export default CustomDropdown;
