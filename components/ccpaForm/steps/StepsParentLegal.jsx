import React from "react";
import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";
import Step05 from "./Step05";
import { NavigationButtons } from "../components";

const StepsParentLegal = (props) => {
  const {
    state: { typePerson },
    dispatch,
  } = props;

  const stepComponents = {
    [1]: Step01,
    [2]: Step02,
    [3]: Step03,
    [4]: Step04,
    [5]: Step05,
  };

  const StepComponents = stepComponents[typePerson.currentStep];
  return (
    <>
      <StepComponents {...props}>
        <NavigationButtons
          handlerSubmit={props.handlerSubmit}
          {...props.state.typePerson}
          textNavigation={props.textNavigation}
        />
      </StepComponents>
    </>
  );
};

export default StepsParentLegal;
