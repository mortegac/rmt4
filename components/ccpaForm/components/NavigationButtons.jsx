import React from "react";
import { Btn } from "../../common";
import { ContainerItem } from "../WrapperFormStyles";

export const NavigationButtons = ({
  textNavigation,
  handlerSubmit,
  formState,
  ...rest
}) => {
  const { currentStep, nextStep, totalSteps, hiddenSubmitRef } = rest;

  const handlerNextStep = (e, action) => {
    e.preventDefault();

    if (action === "back") return handlerSubmit(action);

    if (formState) {
      handlerSubmit(action);
    } else {
      hiddenSubmitRef.current.click();
    }
  };
  return (
    <ContainerItem style={{ marginTop: 22 }}>
      {currentStep > 1 ? (
        <Btn
          innerText={textNavigation[0].text || "Back"}
          fullwidth={true}
          type="outline-orange"
          style={{ width: "50%", margin: 0, marginRight: 16 }}
          onClick={(e) => handlerNextStep(e, "back")}
        />
      ) : null}

      {currentStep === 1 ? (
        <Btn
          innerText={textNavigation[1].text || "Continue"}
          fullwidth={true}
          type="solid-orange"
          style={{ width: "100%", margin: 0 }}
          onClick={(e) => handlerNextStep(e, "go")}
        />
      ) : totalSteps === nextStep ? (
        <Btn
          innerText={textNavigation[2].text || "Submit"}
          fullwidth={true}
          type="solid-orange"
          style={{ width: "50%", margin: 0 }}
          onClick={(e) => {
            handlerNextStep(e, "submit");
          }}
        />
      ) : (
        <Btn
          innerText={textNavigation[1].text || "Continue"}
          fullwidth={true}
          type="solid-orange"
          style={{ width: "50%", margin: 0 }}
          onClick={(e) => handlerNextStep(e, "go")}
        />
      )}
    </ContainerItem>
  );
};

export default NavigationButtons;
