import React from "react";
import { H3Public } from "./textStyles";

const H3 = ({
  children,
  textColor,
  textAlign,
  marginBottom = 64,
  className,
}) => (
  <H3Public
    textColor={textColor}
    textAlign={textAlign}
    marginBottom={marginBottom}
    className={className}
  >
    {children}
  </H3Public>
);

export default H3;
