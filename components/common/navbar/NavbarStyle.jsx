import styled from "styled-components";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navMenuItems = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  z-index: 9999;
  height: ${(props) => (props.optOut ? "115px" : "65px")};
  @media (max-width: 1000px) {
    padding: 0;
    height: ${(props) => (props.optOut ? "115px" : "57px")};
  }
  @media (max-width: 720px) {
    padding: 0;
    height: ${(props) => (props.optOut ? "142px" : "57px")};
  }
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--container-padding);
  @media (max-width: 1000px) {
    padding: 0 5px 0 24px;
    a {
    }
  }
  .logo-ria {
    @media (max-width: 1000px) {
    }
  }
  .logowalmart {
    margin-bottom: -7px;
    @media (max-width: 1000px) {
      width: 100px;
    }
  }

  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
    display: none;
    margin-right: 6px;
    transition: all 0.4s ease;
    transition: ${(props) => (props.optOut ? ".3s ease" : ".4s ease")};
    @media (max-width: 1000px) {
      display: flex;
      max-width: 44px;
    }
    &.active {
      transform: rotate(45deg);
      transform: ${(props) =>
        props.optOut ? "translateY(-55px) rotate(45deg)" : ""};
      @media (max-width: 720px) {
        transform: rotate(45deg);
        transform: ${(props) =>
          props.optOut ? "translateY(-85px) rotate(45deg)" : ""};
      }
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    a {
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: var(--Text-secondary);
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
          color: var(--Text-primary);
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -2px;
          transition: all 0.5s ease;
          height: 2px;
          background: var(--Ria-orange);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        color: var(--Ria-orange);
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
export const MobileNavContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafb;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  .logo-container {
    padding-left: 24px;
    padding-top: 9px;
    /* margin-left: 30px; */
    /* margin-top: 20px; */
  }
  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 24px;
    padding-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  a {
    /* padding: 15px ​5px 0 30px; */
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 24px;
    margin: 38px 0 0 0;
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: var(--Text-secondary);
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      a {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 42px;
        color: var(--Text-secondary);
        display: flex;
        &.lang {
          text-transform: uppercase;
          svg {
            margin-right: 8px;
          }
        }
        text-decoration: none;
        color: var(--Text-secondary);
        &.selected {
          color: var(--Ria-orange);
        }
      }
    }
    svg {
      margin-bottom: 42px;
    }
  }
  @media (max-width: 1000px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;
