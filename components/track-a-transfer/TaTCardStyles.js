import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 440px;
  width: 100%;
  background: white;
  padding: 48px;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  table {
    tbody {
      tr {
        color: rgba(0, 17, 51, 0.8);
      }
    }
    &.table-container {
      text-align: left;
      border-collapse: collapse;
      border: 1px solid var(--Light-gray);
      th {
        border: 1px solid var(--Light-gray);
        max-width: 50%;
        width: 100%;
        padding-left: 15px;
        .table-title {
          max-width: 25%;
        }
      }
      tr {
        border: 1px solid var(--Light-gray);
        padding-left: 15px;
      }
      td {
        border: 1px solid var(--Light-gray);
        padding: 15px;
      }
    }
  }
  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    margin-top: 0px;
    margin-bottom: 24px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 17, 51, 0.6);
    margin-top: 0px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  label {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 17, 51, 0.8);
    margin-bottom: 5px;
  }
  input {
    padding: 12px;
    width: 100%;
    border: 2px solid var(--Ria-orange);
    border-radius: 6px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    transition: all 0.3s ease;
    &:focus {
      outline: none;
    }
    &.invalid {
      border-color: #ff3355;
    }
  }
  span.error-msg {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #ff3355;
    margin-top: 4px;
  }
  button.order-help {
    background: none;
    border: none;
    outline: none;
    align-self: center;
    color: var(--Ria-orange);
    cursor: pointer;
    height: 40px;
    margin-top: 24px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 48px;
    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
  button.details-handler {
    align-self: flex-end;
    border: none;
    outline: none;
    background: var(--Ria-orange);
    border-radius: 42px;
    height: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Nunito Sans";
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    padding: 0px 32px;
    cursor: pointer;
    margin: 0px;
    transition: all 0.3s ease;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 380px) {
      margin-top: 24px;
    }
    &.disabled {
      pointer-events: none;
      background: var(--Light-gray);
      color: var(--Text-tertiary);
    }
  }
  @media (max-width: 768px) {
    padding: 0px;
    border: none;
    border-radius: none;
    h1 {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
export const OrderHelpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 192px;
    height: 192px;
    margin-bottom: 24px;
  }
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: var(--Text-primary);
    margin-bottom: 36px;
  }
  h3 {
    align-self: flex-start;
    font-weight: bold;
    font-size: 15px;
    line-height: 24px;
    margin: 0px;
  }
  p {
    margin-bottom: 26px;
  }
`;
