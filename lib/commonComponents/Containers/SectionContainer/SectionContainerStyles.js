import styled from "styled-components";
export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.sectionContainer.padding.desktop};
  position: relative;
  padding: ${(props) => props.boxed && "64px 24px"};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.sectionContainer.padding.mobile};
    padding-top: ${(props) => props.paddingMobileTop};
  }
`;
export const SectionBackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
