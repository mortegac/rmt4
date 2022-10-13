import styled from "styled-components";

export const HoneypotContainer = styled.div`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;

export const PageContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) => props.bgColor};
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 512px;
  position: relative;

  #hiddenForm {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const FormContainer = styled.form`
  max-width: 440px;
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  .country-dropdown {
    position: relative;
    width: 100%;
    .error {
      color: #ff3355;
    }
    input {
      margin-top: 5px;
    }
    ul {
      top: 39px;
    }
    span.error {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 0;
      min-height: 22px;
    }
  }
  .dial-dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    .dial-items {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      input#phone {
        margin-left: 117px;
        z-index: 2;
      }
    }
    span {
      color: #ff3355;
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 16px;
      min-height: 22px;
    }
  }
  @media (max-width: 500px) {
    padding: 24px;
  }
  @media (max-width: 400px) {
    padding: 0px;
    border: none;
  }
  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0, 17, 51, 0.8);
    text-align: center;
    margin: 0;
    letter-spacing: 0px;
  }
  p {
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-weight: ${(props) => props.theme.typography.p.desktop.lineHeight};
    color: ${(props) => props.theme.colors.textSecondary};
    margin-top: 14px;
    margin-bottom: 23px;
    letter-spacing: 0px;
  }

  label {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color: rgba(0, 17, 51, 0.8);
    margin-bottom: 5px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 14px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
    &.error {
      border: 1px solid #ff3355;
    }
  }
  span {
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: #ff3355;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 16px;
    min-height: 22px;
    &.last {
      min-height: unset;
    }
  }

  input[type="submit"] {
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 24px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 16px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: 48px;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    appearance: none;
    :hover {
      background-color: ${(props) => props.theme.colors.bgHover};
      color: ${(props) => props.theme.colors.secondary};
    }
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
  .checkbox-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border: none;
    input[type="checkbox"] {
      height: 24px;
      width: 24px;
      margin: 0;
      padding: 0 5px;
      &:focus {
        box-shadow: 0 0 0 0 transparent;
      }
    }
    p {
      margin: 0 0 0 10px;
      @media (max-width: 350px) {
        width: 300px;
      }
    }
    a {
      text-decoration: none;
      font-weight: 600;
      color: ${(props) => props.theme.colors.textPrimary};
      transition: all 0.3s ease;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
