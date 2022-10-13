import styled from "styled-components";

export const ItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 42px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 48px;
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 0;
    }
    img {
      max-width: 102px;
      height: 32px;
      // margin-bottom: 28px;
      @media (max-width: 460px) {
        padding: 0;
      }
    }
  }
`;
