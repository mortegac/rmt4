import styled from "styled-components";
import { motion } from 'framer-motion'
import { right } from 'fp-ts/Either';

// export const ConsentContainer = styled(motion.div)`
export const ConsentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  background: rgba(0,0,0,.5);
  z-index: 10000;
  border-top: 1px solid rgba(0, 17, 51, 0.05);
  box-shadow: 0px 10px 40px #00113326;
  @media(max-width: 991px){
    align-items: center;
  }
`;
// export const ConsentSection = styled(motion.div)`
export const ConsentSection = styled.div`
  max-width: var(--container-width);
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:  24px;
  // padding-bottom: 48px;
  border-radius: 12px;
  background: #fff;
  margin-right: 48px;
  margin-bottom: 48px;
  /* padding: var(--container-padding); */
  position: relative;
  @media(max-width: 991px){
    margin-right: 0;
  }
  @media(max-width: 441px){
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }

  h5{
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    font-weight: 700;
    color: rgba(0,17,51,.8);
    margin: 0;
    margin-bottom: 20px;
  }
  h6{
    font-size: 16px;
    color: rgba(0,17,51,.8);
    align-self: flex-start;
    margin: 0;
    margin-bottom: 20px;
  }
  p {
    /* background-color: pink; */
    /* padding-right: 24px; */
    /* display: block; */
    font-size: 14px;
    line-height: 20px;
    color: rgba(0,17,51,.6);
    width: 100%;
    margin: 0;  

    /* width: 99%; */
    /* margin-left: 15px; */
    /* margin-top: 0;
    margin-bottom: 0; */

    &a {
      color: var(--Ria-orange);
    }
  }
`;


// export const Col = styled(motion.div)`
export const Col = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop || 0};;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.align || "flex-start"};
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
    padding: 0;
  }
  .last-p {
    margin-bottom: 24px;
  }

  div .chevron-rotate-left {
    // transition: all 0.3s ease;
    transform: rotate(90deg);
  }

`;
// export const TogglerContainer = styled(motion.div)`
export const TogglerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  h6{
    margin: 0;
  }
`
export const Toggler = styled.div`
    &.switch{
      border: none;
      cursor: pointer;
      background: red;
      width: 40px;
      height: 24px;
      border-radius: 18px;
      padding: 0 2px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: rgba(0,17,51,.2);
      transition: background .4s ease;
      &.on {
        justify-content: flex-end;
        background: #22CC66;

      }
    }
`;


// export const ToggleCircle = styled(motion.div)`
export const ToggleCircle = styled.div`
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 18px;
`

export const Button = styled(motion.button)`
  border: none;
  border-radius: 24px;
  // width: 100%;
  height: 48px;
  margin: 0;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  // font-weight: bold;
  
  letter-spacing: 0.15px;
  padding: 8px 24px;
  cursor: pointer;
  @media(max-width: 441px) {
    border-radius: 0;
  }
  // &:first-child {
  //   margin-right: 16px;
  //   min-width: 156px;
  // }
  // &:nth-of-type(2) {
  //   // margin-right: 19px;
  //   min-width: 180px;
  // }
  ${(props) =>
    props.primary
      ? `
    // position: absolute;
    // bottom: 0;
    // left: 0;
    background:#fff;
    color: rgba(0, 17, 51, 0.6);
    // border-radius: 0 0 12px 12px;
    border-radius: 24px;
    border: 1px solid rgba(0, 17, 51, 0.6);
    margin-right: 0;
  `
      : props.secondary
      ? `
      background-color: #08873E;
      color: #fff;
      border: none;
      `
      :`
  
      background-color: rgba(0, 17, 51, 0.8);
      color: #fff;
      border: none;
      &:first-child {
          margin-right: 16px;
          min-width: 156px;
        }
      &:nth-of-type(2) {
        // margin-right: 19px;
        min-width: 180px;
      }
  `}
`;