import React from "react";
import { SectionContainer } from "./containerStyles";
import variants from "./containerVariants";

const SectionBase = ({ children, type, ...rest }) => {
  return (
    <SectionContainer {...variants[type || "solid-white"]} {...rest}>
      {children}
    </SectionContainer>
  );
};

export default SectionBase;
