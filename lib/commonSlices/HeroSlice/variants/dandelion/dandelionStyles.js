import styled from "styled-components";

export const DescriptionAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  h1 {
    font-size: 62px;
    line-height: 76px;
    margin-bottom: 24px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 32px;
      line-height: 40px;
    }
  }
  div {
    h1 {
      margin-bottom: 0px;
    }
  }
  p {
    margin-top: 0px;
    font-weight: 300;
    font-size: 16px;
    max-width: 490px;
    margin-bottom: 48px;
    color: ${props => props.theme.colors.textPrimary};
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      margin-bottom: 32px;
    }
  }
`;

export const Section = styled.div`
  max-width: ${props => props.theme.sliceContainer.maxWidth};
  width: ${props => props.theme.sliceContainer.maxWidth};
  padding: 80px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 55%;
  position: absolute;
  z-index: -1;
  right: 0;
  transform: translate(100px, 30px);
  transform-origin: bottom;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 55%;
    transform: translate(-150px, 120px);
    right: 0;
    bottom: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    transform: translate(0px, 120px);
    right: 0;
    bottom: 0;
  }
`;

export const PlayVideoButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  &:hover {
    svg {
      filter: hue-rotate(-40deg) saturate(7);
      transform: scale(1.05);
      transition: all 0.3s ease;
    }
  }
`;
export const Form = styled.form`
  justify-content: flex-start;
  max-width: 440px;
  width: 100%;
  display: flex;
  -webkit-box-pack: start;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
  a {
    font-size: 14px;
    margin-left: 10px;
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      margin-left: 0;
    }
  }
  button {
    padding: 8px 35px;
    font-size: 14px;
    max-width: 150px;
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      max-width: unset;
      margin-top: 16px;
    }
  }
  input[type="email"] {
    width: 100%;
    height: 48px;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    font-family: Poppins, sans-serif;
    padding: 13px;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 400;
    font-size: 16px;
    transition: all 0.4s ease 0s;
    outline: none;
    box-shadow: transparent 0px 0px 0px 0px;
    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    }
  }
`;

export const PlayVideoContainer = styled.div`
  width: 30%;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
