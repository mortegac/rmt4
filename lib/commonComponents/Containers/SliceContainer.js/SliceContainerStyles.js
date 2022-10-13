import styled from "styled-components";

export const SliceContainerBase = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  padding: ${(props) => props.theme.sliceContainer.padding.desktop};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.boxed && "48px"};
`;
