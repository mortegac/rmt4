import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 112px 0;
  @media (max-width: 768px) {
    padding: 39px 0 48px 0;
  }
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--container-padding) 0; 
  h2 {
    font-size: 36px;
    font-weight: bold;
    line-height: 50px;
    color: rgba(0, 17, 51, 0.8);
    margin: 0 0 48px 0;
    @media (max-width: 600px) {
      width: 260px;
      text-align: center;
      font-size: 24px;
      line-height: 30px;
    }
  }
  position: relative;
  .items-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    @media (max-width: 1000px) {
      justify-content: center;
      margin-bottom: 0px;
    }
    @media (max-width: 768px) {
      margin-bottom: 0px;
    }
    .item {
      width: 235px;
      max-width: 23%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-width: 216px;
      @media(max-width: 1000px) {
        width: 50%;
        max-width: unset;
        justify-content: center;
        &:nth-child(-n+2){
          margin-bottom: 50px;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
      @media(max-width: 600px){
        width: 100%;
        &:nth-child(-n+2){
          margin-bottom: 50px;
        }
        margin-bottom: 50px;
      }
      img {
        max-width: 143px;
        @media (max-width: 460px) {
          padding: 0;
        }
      }
      h3 {
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 17, 51, 0.8);
        margin: 24px 0 8px 0;
        text-transform: lowercase;
        &:first-letter {
          text-transform: uppercase;
        }
      }
      p {
        text-align: center;
        margin: 0px;
        @media(max-width: 1000px) {
          width: 100%;
          max-width: 215px;
        }
        @media(max-width: 600px){
          max-width: 230px;
        }
      }
    }
  }
`;