import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: ${(props) =>
      props.direction ? "column" : "column-reverse"};
  }
  img {
    width: ${(props) => (props.dandelion ? "42%" : "unset")};
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: ${(props) => (props.dandelion ? "80%" : "unset")};
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: ${(props) => (props.direction ? "0 100px 0 0" : "0 0 0 100px")};
  font-family: Nunito Sans;
  letter-spacing: 0.15px;
  text-align: left;
  h2 {
    margin-bottom: 24px;
    ${(props) =>
      props.dandelion
        ? "font-size: 36px; font-weight: 500; line-height: 50px; margin-bottom: 16px;"
        : ""}
  }
  h3 {
    margin-bottom: 16px;
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }
  p {
    margin-bottom: 32px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  width: 100%;
  a {
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
    ${(props) => (props.dandelion ? "margin-bottom: 64px" : "")}
  }

  button {
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.15000000596046448px;
    text-align: center;
    width: 100%;
    ${(props) =>
      props.dandelion
        ? "background-color: transparent; color: #ff6100; border: 1px solid #ff6100; border-radius: 20px; padding: 8px 24px; height: 42px;"
        : ""}
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  h3 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    font-weight: normal;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  p {
  }

  .icon {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    h3 {
      font-size: 20px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
