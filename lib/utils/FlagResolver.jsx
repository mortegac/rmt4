import React from "react";
import styled from "styled-components";

const FlagContainer = styled.div`
  width: 24px;
  margin: 0;
  padding: 0;
  border-radius: 2px;
  margin-right: 6px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flag = styled.img`
  margin: 0px;
  border-radius: 2px;
  max-height: 24px;
  width: 100%;
`;

const FlagResolver = ({ code }) => {
  const flag = require(`../commonAssets/images/flags/${code}.svg`).default;
  return (
    <FlagContainer>
      <Flag src={flag.src} alt="countryflag" />
    </FlagContainer>
  );
};

export default FlagResolver;
