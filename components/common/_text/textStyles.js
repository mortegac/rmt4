import styled from "styled-components";

export const H2Public = styled.h2`
  font-size: 36px;
  line-height: 52px;
  color: ${(props) =>
    props.textColor ? props.textColor : "var(--Text-primary)"};
  font-weight: bold;
  margin-top: 0;
  margin-bottom: ${(props) => props.marginBottom};
  /* max-width: 550px; */
  @media (max-width: 768px) {
    max-width: none;
    text-align: center;
  }
`;

export const H3Public = styled.h3`
  font-size: 18px;
  line-height: 52px;
  color: ${(props) =>
    props.textColor ? props.textColor : "var(--Text-primary)"};
  font-weight: bold;
  margin-top: 0;
  margin-bottom: ${(props) => props.marginBottom};
  /* max-width: 550px; */
  @media (max-width: 768px) {
    max-width: none;
    text-align: center;
  }
`;
export const TextPublic = styled.p`
  color: ${(props) =>
    props.textColor ? props.textColor : "var(--Text-primary)"};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "490px")};
  @media (max-width: 768px) {
    max-width: none;
    text-align: center;
  }
`;
