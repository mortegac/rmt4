import styled from "styled-components";
import calcChevron from "../../images/calc-chevron.svg";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  position: relative;

  &:after {
    content: ${(props) =>
      props.iShowChevron === true ? "url(" + calcChevron + ")" : "none"};
    /* content: url(${calcChevron}); */
    position: absolute;
    right: 12px;
    pointer-events: none;
    z-index: 99;
    top: 24px;
  }
  .chevron {
  }
  &.amount-error {
    margin-bottom: 6px;
    input {
      border: 1px solid var(--Red);
      // border-right-color: rgba(0, 17, 51, 0.15);
    }
    select {
      border-top-color: var(--Red);
      border-right-color: var(--Red);
      border-bottom-color: var(--Red);
    }
  }
  input {
    height: 72px;
    width: 80%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    padding: 11px 16px;
    padding-top: 33px;
    background: white;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: var(--Text-calc-primary);
    transition: all 0.4s ease;
    z-index: 9;
    @media (max-width: 480px) {
      min-width: unset;
    }
    &.loading {
      color: rgba(0, 17, 51, 0.3);
    }
    &:focus {
      outline: none;
    }
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 72px;
    width: 110px;
    border: 1px solid rgba(0, 17, 51, 0.15);
    padding: 11px 16px;
    background: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: none;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--Text-calc-primary);
    transition: all 0.4s ease;
    z-index: 99;
    outline: none;
  }
  span.label {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--Text-secondary);
    position: absolute;
    left: 16px;
    top: 11px;
    z-index: 99;
  }
  span.list {
    justify-content: center;
    padding-left: 0px;
  }

  .list {
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-content: flex-start;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 72px;
    min-width: 107px;
    border: 1px solid rgba(0, 17, 51, 0.15);
    background: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: none;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--Text-calc-primary);
    transition: all 0.4s ease;
    z-index: 99;
    outline: none;
  }

  .dropdown-list {
    margin-top: 20px;
  }
  .list-search-list {
    // background-color:pink;
    width: 100px;
  }
  .list-dropdown {
    height: 48px;
    max-width: 192px;
    width: 100%;

    // .dropdown-selected {
    //   padding-left: 12px;
    // }

    .dropdown-container {
      height: 100%;
      // border: 1px solid rgba(0, 17, 51, 0.15);
      // border-radius: 6px;
    }

    .dropdown-container > div {
      height: 100%;
    }

    .dropdown-focused {
      // border-color: var(--Ria-orange);
      // box-shadow: inset 0px 0px 0px 1px var(--Ria-orange);
      .chevron > * {
        fill: var(--Ria-orange) !important;
      }
    }
  }
`;
export const ErrorMessage = styled.div`
  width: 100%;
  margin-bottom: 6px;
  span {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: var(--Red);
  }
`;
