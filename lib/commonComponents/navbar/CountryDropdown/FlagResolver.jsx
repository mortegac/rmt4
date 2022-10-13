import styled from "styled-components";

const Flag = styled.img`
  margin: 0px;
  border-radius: 2px;
  max-height: 24px;
  width: 24px;
  &.flag {
    margin-right: 6px;
  }
`;

const flagResolver = ({ code }) => {

  const flag = require(`../../../commonAssets/images/flags/${code}.svg`);
  return (
    <>
      <Flag name={code} className="flag" src={flag} alt="countryflag" />
    </>
  );
};

export default flagResolver;
