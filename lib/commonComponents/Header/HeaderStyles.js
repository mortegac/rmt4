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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    padding: 8px 24px;
    font-size: 14px;
    height: 42px;
  }

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0 24px;
  border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  z-index: 9999;
  height: 65px;
  @media (max-width: 1200px) {
    padding: 0 24px;
  }
  @media (max-width: 1000px) {
    height: 57px;
  }

  .navButton {
    height: 24px;
  }
`;
export const SectionContainer = styled.div`
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
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
    margin-right: -12px;
    @media (max-width: 1000px) {
      display: flex;
      max-width: 44px;
    }
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: #001133c1;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #013;
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
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
    margin-right: 4px;
    padding: 0;
    a {
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.textPrimary};
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
          color: ${(props) => props.theme.colors.textPrimary};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          background: ${(props) => props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        color: ${(props) => props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
`;
export const MobileNavContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.secondary};
  transform: translateX(100%);
  transition: transform 0.3s ease;
  padding: 0 24px;
  svg {
    &:first-child {
      margin-top: 12px;
    }
  }
  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 32px;
    a {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 48px 0 0;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 0 0 5px;
    margin-top: 48px;
    margin-bottom: 0;
    &:first-child {
      margin-top: 81px;
    }
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      color: #00113399;
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      &.selected {
        a {
          color: ${(props) => props.theme.colors.primary};
        }
      }
      a {
        font-weight: normal;
        text-decoration: none;
        color: #00113399;
        &.selected {
          li {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;
