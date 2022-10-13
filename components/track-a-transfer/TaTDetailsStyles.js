import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .order-heading {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 57px;
    border-bottom: 1px solid var(--Lighter-gray);
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: details-appear;
    animation-delay: 0.5s;
    animation-duration: 0.4s;
    h4 {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: var(--Text-primary);
      margin: 0;
    }
    span {
      font-family: "Nunito Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: var(--Text-secondary);
    }
  }
  .steps-container {
    margin: 24px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 192px;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: details-appear;
    animation-delay: 0.5s;
    animation-duration: 0.4s;
    &.success .order-step,
    &.success .order-step.passed,
    &.success .order-step.diff-step.passed,
    &.success .order-step.innactive,
    &.success .order-step.diff-step.innactive,
    &.success .order-step.active,
    &.success .order-step.diff-step.active {
      &:before {
        background: #22cc66;
      }
      &:after {
        background: #22cc66;
      }
      h4 {
        color: var(--Text-secondary);
      }
    }
    &.cancelled {
      height: 81px;
    }
    &.cancelled .order-step,
    &.cancelled .order-step.passed,
    &.cancelled .order-step.diff-step.passed,
    &.cancelled .order-step.innactive,
    &.cancelled .order-step.diff-step.innactive,
    &.cancelled .order-step.active,
    &.cancelled .order-step.diff-step.active {
      &:before {
        background: var(--Text-red);
      }
      &:after {
        background: var(--Text-red);
      }
      h4 {
        color: var(--Text-secondary);
      }
    }
    &.success .order-step:nth-child(4),
    &.success .order-step.passed:nth-child(4),
    &.success .order-step.diff-step.passed:nth-child(4),
    &.success .order-step.innactive:nth-child(4),
    &.success .order-step.diff-step.innactive:nth-child(4),
    &.success .order-step.active:nth-child(4),
    &.success .order-step.diff-step.active:nth-child(4) {
      h4 {
        color: var(--Text-green);
      }
    }
    &.cancelled .order-step:nth-child(2),
    &.cancelled .order-step.passed:nth-child(2),
    &.cancelled .order-step.diff-step.passed:nth-child(2),
    &.cancelled .order-step.innactive:nth-child(2),
    &.cancelled .order-step.diff-step.innactive:nth-child(2),
    &.cancelled .order-step.active:nth-child(2),
    &.cancelled .order-step.diff-step.active:nth-child(2) {
      h4 {
        color: var(--Text-red);
      }
    }
    .order-step {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      padding-left: 33px;
      position: relative;
      &.innactive {
        h4 {
          color: var(--Text-tertiary);
        }
        p {
          display: none;
        }
      }
      &.passed {
        &:before {
          background: var(--Ria-orange);
        }
        &.diff-step:after {
          position: absolute;
          content: "";
          left: 3px;
          width: 2px;
          height: 56px;
          bottom: 11px;
          background: var(--Ria-orange);
          z-index: 80;
        }
        h4.active {
          color: var(--Ria-orange);
        }
      }
      &:before {
        position: absolute;
        content: "";
        left: 0px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d9dbe1;
        z-index: 90;
      }
      &.diff-step:after {
        position: absolute;
        content: "";
        left: 3px;
        width: 2px;
        height: 56px;
        bottom: 11px;
        background: #d9dbe1;
        z-index: 80;
      }
      h4 {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
      }
      p {
        margin: 0;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: var(--Text-secondary);
      }
    }
  }
  @keyframes details-appear {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
