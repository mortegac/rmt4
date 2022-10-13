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
`;

export const PartnerBannerDiv = styled.div`
  display: flex;
  background: #fafafb;
  border-radius: 25px;
  margin-top: 48px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    margin-bottom: 32px;
  }
`;

export const PartnerBannerContainer = styled.div`
  display: flex;
  padding: 26px 70px;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 20px 30px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 14px 0;
  }
  p {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #272e61;
    margin-left: 16px;
    margin-bottom: 0px;
    text-transform: uppercase;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 14px;
    }
  }
`;

export const PartnerLogo = styled.img`
  width: 48px;
  height: 64px;
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
