import styled from "styled-components";
import calcChevron from "../../images/calc-chevron.svg";
//import { right } from 'fp-ts/Either';

export const CalcContainer = styled.div`
  max-width: 480px;
  width: 100%;
  padding: 48px;
  padding-bottom: 18px;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 8px 0 32px;
  @media (max-width: 1030px) {
    margin-top: 32px;
  }
  @media (max-width: 480px) {
    margin: 16px 0 0 0;
    padding: 24px;
  }
  @media (max-width: 480px) {
    border: none;
  }
  .skeleton-loading {
    max-width: 100%;
    animation: pulse 2s infinite;
  }

  .dynamic-field {
    transition: all 0.4s ease;
    opacity: 1;
  }
  .text-through {
    text-decoration: line-through;
  }

  &.loading .dynamic-field {
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    width: calc(100% + 48px);
    box-shadow: none;
  }
  .calc-heading {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    justify-content: space-between;
    /* justify-content: flex-start; */

    align-items: center;
    margin-bottom: 16px;
    position: relative;
    /* &:after {
      content: url(${calcChevron});
      position: absolute;
      right: 12px;
      pointer-events: none;
    } */
    &.test {
      background: red;
    }
    .truncate.dropdown-selected {
      padding-left: 0;
      @media (max-width: 370px) {
        width: 170px;
      }
      @media (max-width: 330px) {
        width: 130px;
      }
    }
    .dropdown-label,
    .dropdown-selected {
      width: auto;
      font-size: 20px;
      margin: 0px;
      margin-right: 8px;
      white-space: nowrap;
      /* width: 141px; */
      color: var(--Text-calc-primary);
      @media (max-width: 480px) {
        font-size: 20px;
        line-height: 28px;
        /* width: 96px; */
      }
    }
    .dropdown-list {
      top: 35px;
    }
    .list-search-list {
      max-height: 422px;
    }

    div {
      width: 100%;
    }
  }
  .select-container {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .separate-top {
      margin-top: 0;
      margin-bottom: 10px;
    }
    // @media (max-width: 768px) {
    //   flex-direction: column;
    //   .separate-top{
    //     margin-top: 23px;
    //   }
    // }
    .select-box {
      color: var(--Text-calc-primary);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      position: relative;

      &:first-child {
        margin-bottom: 16px;
      }
      // @media (max-width: 768px) {
      //   max-width: 100%;
      // }
      h4 {
        font-family: "Nunito Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        margin: 0px;
        margin-bottom: 5px;
      }
      .dropdown-label,
      .dropdown-selected {
        text-align: left;
        font-weight: normal;
      }
      .select-dropdown {
        height: 48px;
        width: 100%;
        font-size: 16px;
        // @media (max-width: 768px) {
        //   max-width: 100%;
        // }
        .dropdown-selected {
          padding-left: 12px;
        }

        .dropdown-container {
          height: 100%;
          border: 1px solid rgba(0, 17, 51, 0.15);
          border-radius: 6px;
        }

        .dropdown-container > div {
          height: 100%;
        }

        .dropdown-focused {
          border-color: var(--Ria-orange);
          box-shadow: inset 0px 0px 0px 1px var(--Ria-orange);

          .chevron > * {
            fill: var(--Ria-orange) !important;
          }
        }
      }
    }
  }
  .first-fee-country {
    margin-top: 32px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 9px;
    }
    .transfer-text {
      color: var(--Text-tertiary);
      font-weight: 500;
      font-size: 12px;
      text-align: center;
    }
  }
  .details-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-end;
    }
    &.spacer-container {
      margin: 16px 0;
    }
    .spacer {
      width: 100%;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        top: -3px;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--Lighter-gray);
      }
    }
    .first-fee {
      margin: 0;
      color: var(--Text-calc-tertiary);
      font-size: 14px;
      line-height: 24px;
      padding-left: 5px;
      white-space: nowrap;
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
    .details-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 16px;
      margin-bottom: 8px;
      h4 {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: var(--Text-calc-primary);
        @media (max-width: 350px) {
          font-size: 13px;
        }
      }
      span {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        letter-spacing: 0.15px;
        color: var(--Text-calc-secondary);

        &.bold-text {
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          color: var(--Text-calc-primary);
        }
      }
      &.fee {
        h4 {
          color: var(--Text-calc-secondary);
        }
        span {
          color: var(--Text-calc-secondary);
        }
        width: 100%;
        margin: 0;
        @media (max-width: 480px) {
          width: 100%;
          margin-bottom: 8px;
        }
      }

      &.message {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin: 0px;
        color: var(--Text-calc-primary);
      }
      &.text-rate {
        margin-top: 20px;
        color: var(--Text-calc-secondary);
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: var(--Text-calc-secondary);
      }
    }
  }
  .calc-end-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 16px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .left-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      @media (max-width: 480px) {
        width: 100%;
      }
      h4 {
        margin: 0;
        font-size: 16px;
        line-height: 24px;
        color: var(--Text-calc-primary);
      }
      span {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: var(--Text-calc-secondary);
      }
      .details-row {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        @media (max-width: 480px) {
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 16px;
        }
      }
    }
    .right-box {
      @media (max-width: 480px) {
        width: 100%;
      }
    }
  }
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 20px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background: var(--Ria-orange);
  color: var(--Light);
  font-family: "Nunito Sans";
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: "nunito sans";
  height: 48px;
  width: 132px;
  :hover {
    background: #ff7733;
  }
  &.disabled {
    background-color: rgba(0, 17, 51, 0.15);
    color: rgba(0, 17, 51, 0.3);
  }
`;
export const CalculatorInputSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 16px;
  position: relative;
  padding: 0px 8px;
  span {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: var(--Text-calc-primary);
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
  h4 {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
    color: var(--Text-calc-primary);
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 50%;

  select {
    width: 100%;
  }
`;
