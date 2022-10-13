import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const ImageWrapper = styled.div`
  margin: 0px;
  border-radius: 2px;
  max-width: 24px;
  max-height: 17px;
  width: 24px;

  margin-right: 6px;
`;
// const Flag = styled.img`
//   margin: 0px;
//   border-radius: 2px;
//   max-height: 24px;
//   width: 24px;
//   &.flag {
//     margin-right: 6px;
//   }
// `;
const flagResolver = ({ code }) => {

  const flag = require(`../../images/flags/${code}.svg`).default;
  return (
    <ImageWrapper>
      <Image width="24px" height="17px" name={code} className="flag" src={`/${flag.src}`} alt="coutryflag" />
      {/* <Flag name={code} className="flag" src={flag} alt="coutryflag" /> */}
    </ImageWrapper>
  );
};

export default flagResolver;
