import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FlagResolver from "./FlagResolver";

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
    background: var(--Light-gray);
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
  .no-suggestions {
    color: #999;
    padding: 0.5rem;
  }

  li {
    gap: 4px;
    padding: 0.5rem;
    padding-left: 16px;
    font-size: 14px;
    line-height: 24px;
    color: var(--Text-primary);
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
    border: 1px solid rgba(0, 17, 51, 0.15);
  }
`;

const SuggestionList = ({
  suggestions,
  activeSuggestionIndex,
  onClick,
  onKeyDown,
  phoneInput,
  name,
}) => {
  return suggestions.length ? (
    <SuggestionItems id={`dropdown` + name}>
      {suggestions.map((suggestion, index) => {
        let className;

        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }
        return (
          <li
            key={index}
            name={suggestion}
            onClick={onClick}
            onKeyDown={onKeyDown}
            className={className}
            code={suggestion}
          >
            
            {phoneInput === true ? (
              <>
                <FlagResolver code={suggestion.code} />
                {`${suggestion.name} (${suggestion.dial_code})`}
              </>
            ) : (
              suggestion
            )}
          </li>
        );
      })}
    </SuggestionItems>
  ) : (
    ""
  );
};

export default SuggestionList;
