// ############################################
// DEPRECADO NO USAR
// Usar src/components/common/_button
// ############################################
import React from "react";
import styled from "styled-components";

const Button = ({
  url = "/",
  fullwidth = false,
  innerText = false,
  bgColor = "#ff7733",
  textColor = "#fff",
  borderColor = "#ff7733",
  style = {},
  bgHover = "#ff7733",
  bgHoverText = "#fff",
}) => {
  const Anchor = styled.a`
    &.fullwidth {
      width: 100%;
    }
  `;
  const ButtonContainer = styled.button`
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
    background: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border: 1px solid ${(props) => props.borderColor};
    font-family: "Nunito Sans";
    cursor: pointer;
    transition: background 0.3s ease;
    font-family: "nunito sans";
    height: 40px;
    width: 100%;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
    :hover {
      background-color: ${(props) => props.bgHover};
      color: ${(props) => props.bgHoverText};
    }
  `;
  // var(--Light);
  // var(--Ria-orange);
  return (
    <Anchor href={url} className={fullwidth ? "fullwidth" : "normal"}>
      <ButtonContainer
        bgColor={bgColor}
        textColor={textColor}
        style={style}
        borderColor={borderColor}
        bgHover={bgHover}
        bgHoverText={bgHoverText}
      >
        {innerText ? innerText : "navApp"}
      </ButtonContainer>
    </Anchor>
  );
};

export default Button;
