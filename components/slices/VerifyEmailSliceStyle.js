import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  padding-top: 64px;
  padding-bottom: 64px;
  min-height: 550px;
  background-repeat: no-repeat;
  h1 {
    margin: 24px 0 0 0;
    max-width: 440px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 48px;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 32px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    text-align: center; 
    max-width: 600px;
    margin-bottom: 50px;
    @media(max-width: 600px){
      max-width: 100%;
    }
  }
  h2 {
      font-size: 36px;
      line-height: 52px;
      color: #001133;
      font-weight: bold;
      text-align: center;
      &.verified {
        max-width: 100%;
        @media(max-width: 630px) {
           font-size: 24px;
         }  
      }
      &.not-verified {
        max-width: 35%;
        @media(max-width:920px) {
         font-size: 24px;
         line-height: 36px;
         max-width: 30%;
         @media(max-width: 630px) {
           max-width: 45%;
         }        
         @media(max-width: 500px) {
           max-width: 60%;
         }        
        }
      }
      &.expired {
        max-width: 43%;
        @media(max-width: 1070px){
          max-width: 45%;
        }
        @media(max-width: 1025px){
          max-width: 49%;
        }
        @media(max-width: 1000px){
          font-size: 24px;
          max-width: 33%;
          line-height: 36px;
        }
        @media(max-width:940px){
          max-width: 35%;
        }
        @media(max-width:885px){
          max-width: 38%;
        }
        @media(max-width:820px){
          max-width: 42%;
        }
        @media(max-width:750px){
          max-width: 45%;
        }
        @media(max-width:700px){
          max-width: 49%;
        }
        @media(max-width:550px){
          max-width: 65%;
        }
        @media(max-width: 415px){
          max-width: 85%;
        }
        @media(max-width:375px){
          max-width: 95%;
        }
        @media(max-width:285px){
          max-width: 100%;
        }
      }
    
    }
  img {
    max-width: 640px;
  }
`;