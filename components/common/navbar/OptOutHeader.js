import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  @media (max-width: 720px) {
    height: 76px;
  }
`;

function OptOutHeader() {
  return <Container />;
}

export default OptOutHeader;
