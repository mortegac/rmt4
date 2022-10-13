import React from "react";
import { PageContainer } from "./containerStyles";
import variants from "./containerVariants";

const Container = ({ children, type, ...rest }) => {
  return (
    <PageContainer {...variants[type || "solid-white"]} {...rest}>
      {children}
    </PageContainer>
  );
};

export default Container;
