import React from "react";
import { H3 } from "../../common/";

const Breadcrumb = ({ title, stepLabel, className }) => {
  return (
    <H3
      id="breadcrumbTitle"
      textColor="rgba(0, 17, 51, 0.3)"
      className={className}
    >{`${title} ${stepLabel}`}</H3>
  );
};

export default Breadcrumb;
