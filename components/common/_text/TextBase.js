import React from "react";
import { TextPublic } from "./textStyles";

const TextBase = ({ children, textColor, textAlign, maxWidth, ...rest }) => (
  <TextPublic
    textColor={textColor}
    textAlign={textAlign}
    maxWidth={maxWidth}
    {...rest}
  >
    {children}
  </TextPublic>
);

export default TextBase;
