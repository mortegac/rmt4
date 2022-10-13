import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: "${(props) => props.bgColor}";
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${(props) => (props.calculatorSlice ? "flex-start" : "center")};
  padding: ${(props) => (props.calculatorSlice ? "0 24px" : "64px 24px")};
  // padding: var(--container-padding);
  min-height: 512px;
  position: relative;
  margin-top: 0;
  @media (max-width: 1030px) {
    flex-direction: ${(props) => (props.calculatorSlice ? "column" : "row")};
    align-items: ${(props) => props.calculatorSlice && "center"};
    padding-top: 0;
  }
  @media (max-width: 850px) {
    max-width: var(--container-sm-width);
    min-height: unset;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: unset;
    padding-bottom: 0;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    z-index: 100;
    position: relative;
    padding-right: 24px;
    padding-top: ${(props) => (props.calculatorSlice ? "105px" : "0")};
    @media (max-width: 1030px) {
      padding-right: ${(props) => (props.calculatorSlice ? "0" : "24px")};
      justify-content: ${(props) =>
        props.calculatorSlice ? "center" : "flex-start"};
      align-items: ${(props) =>
        props.calculatorSlice ? "center" : "flex-start"};
      padding-top: 64px;
    }
    @media (max-width: 850px) {
      padding-right: 0;
      padding-left: unset;
      padding-top: 64px;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 650px) {
      width: 100%;
    }

    h1 {
      margin-top: 0;
      font-size: 40px;
      line-height: 52px;
      color: var(--Text-primary);
      font-weight: bold;
      margin-bottom: 32px;
      max-width: 550px;
      @media (max-width: 1030px) {
        text-align: ${(props) => (props.calculatorSlice ? "center" : "left")};
      }
      @media (max-width: 850px) {
        text-align: center;
      }
      @media (max-width: 550px) {
        font-size: 32px;
        line-height: 40px;
      }
      @media (max-width: 420px) {
        font-size: 24px;
        line-height: 30px;
      }
      @media (max-width: 329px) {
        font-size: 23px;
        line-height: 30px;
      }
    }
    p {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
      color: rgba(0, 17, 51, 0.6);
      max-width: 490px;
      margin: 0 0 48px 0;
      @media (max-width: 1030px) {
        max-width: ${(props) => (props.calculatorSlice ? "480px" : "490px")};
        text-align: ${(props) => (props.calculatorSlice ? "center" : "left")};
      }
      @media (max-width: 850px) {
        max-width: 480px;
        text-align: center;
      }
      @media (max-width: 480px) {
        display: ${(props) => (props.calculatorSlice ? "none" : "block")};
      }
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
      @media (max-width: 1030px) {
        justify-content: ${(props) =>
          props.calculatorSlice ? "center" : "flex-start"};
      }
      @media (min-width: 850px) {
        width: 60%;
      }
      @media (max-width: 850px) {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }
      a {
        /* padding-right: 24px; */
        &.mobile {
          display: none;
          @media (max-width: 850px) {
            display: flex;
          }
        }
        &.desktop {
          display: flex;

          @media (max-width: 1000px) {
            button {
              width: 170px;
            }
          }
          @media (max-width: 850px) {
            display: none;
          }
        }
      }
    }
  }
  .mobile-subtext {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
    display: none;
    margin-top: 16px;
    @media (max-width: 480px) {
      display: flex;
    }
    p {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
      color: rgba(0, 17, 51, 0.6);
      max-width: 490px;
      margin: 0 0 48px 0;
      text-align: center;
    }
  }
  .img-container {
    height: 512px;
    width: 80%;
    position: absolute;
    right: 0;
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
    background-size: contain;
    img {
      width: 100%;
    }
    @media (max-width: 1050px) {
      background-size: contain;
      height: 100%;
    }
    @media (max-width: 1070px) {
      left: unset;
      display: ${(props) =>
        typeof props.mobile != "undefined" && props.mobile != null
          ? "block"
          : "none"};
      top: 0;
      right: 0;
      background-image: url("${(props) => props.mobile}");
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: top;
      background-size: contain;
    }
    @media (max-width: 850px) {
      position: relative;
      height: 380px;
      width: 100%;
      background-position-x: center;
      margin-top: 10px;
    }
    @media (max-width: 350px) {
      height: 300px;
    }
    img {
      height: 100%;
      max-width: 600px;
      &.header-img-desktop {
        @media (max-width: 850px) {
          display: none;
        }
      }
      &.header-img-mobile {
        display: none;
        max-width: 100%;
        width: 100%;
        @media (max-width: 850px) {
          display: block;
        }
      }
    }
  }
`;
