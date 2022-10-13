import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px 0px;
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-container,
  .right-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .heading-img {
      max-width: 440px;
      width: 400px;
    }
  }
`;
