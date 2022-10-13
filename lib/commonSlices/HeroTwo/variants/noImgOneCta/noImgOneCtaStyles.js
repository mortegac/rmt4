import styled from "styled-components";

export const DescriptionAndCtasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 37.5px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0px;
    align-items: normal;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  flex-direction: row;
  justify-content: flex-start;
  button {
    margin: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    margin-bottom: 0px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
    align-items: normal;
    text-align: left;
    justify-content: none;
  }
  h1 {
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
      line-height: 44px;
      font-size: 34px;
      margin-bottom: 16px;
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
  }
`;
