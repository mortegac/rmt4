import React from "react";
import Step01 from "./Step01";
import Step02 from "./Step02";
import Step05 from "./Step05";

const ConsumerSteps = (props) => {
  const {
    state: { typePerson },
  } = props;

  const stepComponents = {
    [1]: Step01,
    [2]: Step02,
    [3]: Step05,
  };

  const StepComponents = stepComponents[typePerson.currentStep];
  return (
    <>
      <StepComponents {...props}></StepComponents>
    </>
  );
};

export default ConsumerSteps;
