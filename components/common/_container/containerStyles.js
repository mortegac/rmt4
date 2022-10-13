import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: 'column';  
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  width: 100%;
  background: ${(props) => props.bgColor};
  padding: 0;
  padding: var(--container-padding);
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
  min-height: 314px;
`;
  // color:  ${(props) => props.textColor};

  // flex-direction: row;

export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.directionItems};
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  /* padding: var(--container-padding); */
  /* padding-bottom: 36px; */
  /* min-height: 314px; */
  position: relative;
  @media (max-width: 768px) {
    flex-direction: 'column'; 
    justify-content: center;
    align-items: center;
  }
`;
    // flex-direction: row;


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