import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 46px;
  gap: 24px;

  h2 {
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    margin-bottom: 27px;
  }
`;
export const Item = styled.div`
  width: 100%;
  max-width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
    margin-bottom: 8px;
    &:first-child {
      font-size: 23px;
    }
    font-size: 16px;
    width: 100%;
    color: ${(props) => props.theme.colors.textPrimary};
    color: ${(props) =>
      props.variation === "dandelion"
        ? props.theme.colors.secondary
        : props.theme.colors.textSecondary};
    text-align: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
  p {
    width: 95%;
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.textSecondary};
    color: ${(props) =>
      props.variation === "dandelion"
        ? props.theme.colors.secondary
        : props.theme.colors.textSecondary};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
      font-size: 15px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 60%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 25%;
    &:first-child {
      margin-bottom: 32px;
      @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        margin-bottom: 16px;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    max-width: 100%;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
