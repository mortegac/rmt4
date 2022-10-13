import styled from "styled-components";

export const Anchor = styled.a`
  margin: 0;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props) => props.theme.button.height};
  ${(props) =>
    props.name === "primary" &&
    `
         background:${props.theme.colors.primary};
         color: ${props.theme.colors.secondary};
         border: 1px solid ${props.theme.colors.primary};
         :hover {
          background-color: ${props.theme.colors.bgHover};
          color: ${props.theme.colors.secondary};
        }
        padding: ${props.theme.button.padding};
    `}
  ${(props) =>
    props.name === "secondary" &&
    `
           background:${props.theme.colors.bgColorTertiary};
           color: ${props.theme.colors.primary};
           :hover {
            background: ${props.theme.colors.bgColorPrimary};
          }
          padding: ${props.theme.button.padding};
      `}

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
