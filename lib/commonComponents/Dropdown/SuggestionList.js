import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import FlagResolver from "../../utils/FlagResolver";

const SuggestionItems = styled.ul`
  max-height: 320px;
  position: absolute;
  background: #ccc;
  border-radius: 8px;
  top: 34px;
  border: 1px solid #ddd;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  width: 100%;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 15px;
    background: white;
    border-radius: 0 8px 8px 0;
  }
  &::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 8px;
    background: #00113326;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
  .no-suggestions {
    color: #999;
    padding: 0.5rem;
  }

  li {
    font-family: ${(props) => props.theme.typography.fontFamily};
    padding: 0.5rem;
    padding-left: 16px;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-weight: 300;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: white;
    &:hover {
      background-color: #f1f1f1;
      cursor: pointer;
      font-weight: 400;
    }
  }
  .suggestion-active {
    background-color: #f1f1f1;
  }
  .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;

const SuggestionList = ({
  suggestions,
  activeSuggestionIndex,
  onClick,
  onKeyDown,
}) => {
  const [show, setShow] = useState(true);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
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

  const wrapper = useRef(null);
  useOutsideAlerter(wrapper);

  return suggestions.length
    ? show && (
        <SuggestionItems ref={wrapper}>
          {suggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <li
                key={suggestion.code}
                name={suggestion.name}
                onClick={onClick}
                onKeyDown={onKeyDown}
                className={className}
                code={suggestion.dial_code}
              >
                <FlagResolver code={suggestion.code} />
                {`${suggestion.name}`}
              </li>
            );
          })}
        </SuggestionItems>
      )
    : "";
};

export default SuggestionList;
