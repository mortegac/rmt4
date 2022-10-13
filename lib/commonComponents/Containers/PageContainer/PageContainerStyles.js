import styled from "styled-components";

export const PageContainerBase = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  margin: 0;
  margin-top: calc(64px + ${(props) => props.theme.optOutHeight});

  h1,
  h2,
  h3,
  h4,
  p {
    font-family: ${(props) => props.theme.typography.fontFamily};
    letter-spacing: ${(props) => props.theme.typography.letterSpacing};
  }

  h1 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.h1.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.h1.desktop.lineHeight};
  }

  h2 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.h2.desktop.lineHeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
      line-height: ${(props) => props.theme.typography.h2.mobile.lineHeight};
    }
  }
  h3 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.h3.desktop.lineHeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.typography.h3.mobile.fontSize};
      line-height: ${(props) => props.theme.typography.h3.mobile.lineHeight};
    }
  }

  p {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.typography.p.mobile.fontSize};
      line-height: ${(props) => props.theme.typography.p.mobile.lineHeight};
    }
  }
`;
