import styled from "styled-components";

export const Box = styled.div`
  padding-top: 10px;
  h2 {
    padding: 0px;
    margin: 0px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-size: 40px;
    line-height: 54px;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: ${props => props.theme.typography.h2.fontWeight};
    letter-spacing: ${props => props.theme.typography.letterSpacing};
  }
`;
