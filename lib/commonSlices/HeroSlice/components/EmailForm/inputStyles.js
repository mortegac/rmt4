import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
  }
  span {
    color: #ff3355;
    min-height: 22px;
  }
  label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: rgba(0, 17, 51, 0.8);
    margin-bottom: 5px;
  }

  input {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: 400;
    font-size: 16px;
    transition: all 0.4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }

  input[type="submit"] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    margin-left: 10px;
    font-weight: bold;
    border-radius: 24px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 14px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    height: "48px";
    width: 50%;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border: 1px solid ${(props) => props.theme.colors.primary};
    appearance: none;
    :hover {
      background: ${(props) => props.theme.colors.bgHover};
    }
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
`;
