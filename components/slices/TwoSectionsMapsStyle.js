import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: "${(props) => props.bgColor}";
  padding: 112px 0;
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  min-height: 512px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .maps-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-bottom: 64px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .map-section {
    width: 100%;
    min-height: 311px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p {
      padding-top: 10px;
    }
    @media (max-width: 768px) {
      margin-bottom: 32px;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 100;
    position: relative;
    @media (max-width: 768px) {
      width: 100%;
    }
    h1 {
      font-size: 40px;
      line-height: 52px;
      color: var(--Text-primary);
      font-weight: bold;
      margin-bottom: 32px;
      max-width: 550px;
    }
    p {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
      color: rgba(0, 17, 51, 0.6);
      /* max-width: 490px; */
      margin: 0 0 48px 0;
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: no-wrap;
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }
      a {
        padding-right: 24px;
        &.mobile {
          display: none;
          @media (max-width: 768px) {
            display: flex;
          }
        }
        &.desktop {
          display: flex;
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
  .img-container {
    height: 512px;
    width: 80%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: url("${(props) => props.desktop}");
    background-repeat: no-repeat;
    background-position: right;
    @media (max-width: 768px) {
      position: relative;
      display: ${(props) =>
        typeof props.mobile != "undefined" && props.mobile != null
          ? "block"
          : "none"};
      width: 100%;
      height: 400px;
      background-image: url("${(props) => props.mobile}}");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      background-size: 100%;
    }
    img {
      height: 100%;
      max-width: 600px;
      &.header-img-desktop {
        @media (max-width: 768px) {
          display: none;
        }
      }
      &.header-img-mobile {
        display: none;
        max-width: 100%;
        width: 100%;
        @media (max-width: 768px) {
          display: block;
        }
      }
    }
  }
`;
