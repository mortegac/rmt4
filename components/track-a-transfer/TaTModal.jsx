import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import OutsideAlerter from "./OutsideAlerter";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 17, 51, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .modal-wrapper {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ModalContainer = styled(motion.div)`
  max-width: 440px;
  width: 100%;
  background: white;
  padding: 48px;
  border-radius: 24px;
  box-shadow: 0px 10px 40px rgba(0, 17, 51, 0.1);
  background: white;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    width: 100%;
    background: white;
    padding: 24px;
    border-radius: 0px;
    box-shadow: unset;
    background: white;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: -10px;
    margin-bottom: 30px;
    h3 {
      margin: 0px;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      color: rgba(0, 17, 51, 0.8);
      max-width: 343px;
    }
    button {
      position: absolute;
      right: 0px;
      top: 0px;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0px;
      transform: translateX(10px);
    }
  }
`;

const TaTModal = ({ children, closeModal, title = "" }) => {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
    >
      <OutsideAlerter closeModal={closeModal}>
        <ModalContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="header">
            <h3>{title}</h3>
            <button onClick={() => closeModal(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4247 5.63586L18.364 4.5752L12.0001 10.9392L5.63612 4.5752L4.57544 5.63586L10.9394 11.9998L4.57544 18.3638L5.63611 19.4244L12.0001 13.0605L18.364 19.4244L19.4247 18.3638L13.0607 11.9998L19.4247 5.63586Z"
                  fill="#001133"
                  fillOpacity="0.6"
                />
              </svg>
            </button>
          </div>
          {children}
        </ModalContainer>
      </OutsideAlerter>
    </Overlay>
  );
};

export default TaTModal;
