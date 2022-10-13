import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 100px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-right: 0;
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

    @media (max-width: 450px) {
      width: 100%;
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

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;
export const CtaContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 18px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    margin-bottom: 32px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ImgHolder = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;
