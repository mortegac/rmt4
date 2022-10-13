import styled from "styled-components";

export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;
export const Item = styled.div`
  background-color: white;
  width: 100%;
  max-width: ${(props) => (props.dandelion ? "400px" : "")};
  padding: ${(props) => (props.dandelion ? "32px" : "24px")};
  padding-top: ${(props) => props.dandelion && "0"};
  min-height: ${(props) => (props.dandelion ? "495px" : "320px")};
  border-radius: ${(props) => (props.dandelion ? "20px" : "8px")};
  box-shadow: 0px 3px 15px ${(props) => props.theme.colors.textLightTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => (props.dandelion ? "1px solid rgba(0,17,51,.2)" : "")};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 45%;
    min-height: unset;
    height: unset;
    min-height: ${(props) => props.dandelion && "456px"};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    min-height: unset;
    height: unset;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 8px;
  h3 {
    font-size: 16px;
  }
  .image {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.dandelion && "14px"};
    img {
      width: 100%;
      max-width: 200px;
    }
  }
  p {
    ${(props) =>
      props.dandelion && "font-style:italic; color: rgba(0,17,51,.8);"};
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    color: ${(props) => (props.dandelion ? "rgba(0,17,51,.6)" : "")};
    &:first-child {
      font-weight: ${(props) => (props.dandelion ? "400" : "700")};
    }
  }
  a {
    p {
      color: ${(props) => props.theme.colors.primary};
    }
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.primary};
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      bottom: 0;
      left: 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
