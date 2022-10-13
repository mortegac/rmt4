import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: "${(props) => props.bgColor}";
  padding: 30px 0 80px 0;
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--container-padding);
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 18px;
    line-height: 52px;
    color: var(--Text-primary);
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 48px;
    max-width: 550px;
    text-align: center;
    @media (max-width: 420px) {
      font-size: 14px;
    }

    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
  .partner-logo-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 48px;
    }
    .item {
      width: 20%;
      @media (max-width: 900px) {
        width: 50%;
        min-height: 150px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 600px) {
        width: 80%;
      }
    }
    img {
      width: 100%;
    }
  }
`;
