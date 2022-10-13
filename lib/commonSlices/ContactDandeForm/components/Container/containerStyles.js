import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  width: 100%;
  position: relative;
  background: ${(props) => props.bgColor};
  padding: 0;
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};

  .bg-decoration {
    width: 100%;
    height: 100%;
    position: absolute;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const SectionContainer = styled.div`
  max-width: ${(props) => props.maxWidth || "var(--container-width)"};
  display: flex;
  flex-direction: ${(props) => props.directionItems};
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.directionItemsMedia};
    justify-content: ${(props) => props.justifyContentMedia};
    align-items: center;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  z-index: 100;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
