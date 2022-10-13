import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
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
    // max-width: 440px;
    max-width: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ModalContainer = styled(motion.div)`
  // max-width: 440px;
  // max-width: 90%;
  width: 100%;
  // padding: 24px 10px;
  // padding: 0px 10px 24px 10px;
  padding: 20px 16px 16px 16px;
  text-align: center;

  background: black;
  // padding: 48px;
  border-radius: 24px;
  box-shadow: 0px 10px 40px rgba(0, 17, 51, 0.1);
  // background: white;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    width: 100%;
    background: black;
    padding: 24px;
    border-radius: 0px;
    box-shadow: unset;
    // background: white;
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
    // margin-top: -10px;
    // margin-bottom: 30px;
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
      height: 30px;
      width: 30px;
      z-index: 2000;
      right: 38px;
      top: 20px;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0px;
      transform: translateX(10px);
      background: rgba(0,0,0,.3);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media(max-width: 768px) {
        top: 0;
        right: 0;
      }
      @media(max-width: 500px) {
        top: -20px;
        right: -10px;
        width: 15px;
        height: 15px;
        background: white;
      }
      svg {
        width: 20px;
        height: 20px;
        @media(max-width: 768px) {
          width: 30px;
          height: 30px
      }
        @media(max-width: 500px) {
          width: 15px;
          height: 15px;
      }
        path{
          fill: white;
          @media(max-width: 500px) {
          fill: black;
         } 
        }
      }
    }
  }
`;