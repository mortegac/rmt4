import React from "react";
import styled from "styled-components";
import OutsideAlerter from "./OutsideAlerter";
import { Overlay, ModalContainer } from './ModalStyle';

const Modal = ({ children, closeModal, title = "" }) => {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OutsideAlerter closeModal={closeModal}>
        <ModalContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="header">
            {/* <h3>{title}</h3> */}
            <button onClick={() => closeModal(false)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4247 5.63586L18.364 4.5752L12.0001 10.9392L5.63612 4.5752L4.57544 5.63586L10.9394 11.9998L4.57544 18.3638L5.63611 19.4244L12.0001 13.0605L18.364 19.4244L19.4247 18.3638L13.0607 11.9998L19.4247 5.63586Z"
                  fill="#000000"
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

export default Modal;
