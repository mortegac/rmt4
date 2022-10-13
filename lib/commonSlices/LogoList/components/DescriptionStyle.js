import styled from "styled-components";

export const Box = styled.div`
  margin-top: 16px;
  padding: 0px;
  margin: 0px;
  p {
    padding: 0px;
    margin: 0px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: ${props => props.theme.typography.p.fontWeight};
    font-size: 16px;
    line-height: ${props => props.theme.typography.p.lineHeight};
    text-align: center;
    letter-spacing: ${props => props.theme.typography.letterSpacing};
    color: #5c667b;
  }
`;
