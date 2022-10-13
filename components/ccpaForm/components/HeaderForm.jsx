import React, { useState, useEffect } from "react";
import { InputRadio, Breadcrumb, DropdownForm } from "./index";
import { IcoInfo } from "../../common/assets/IcoInfo";
import { SpacerLine, Tooltip } from "../WrapperFormStyles";
import { cn, typePersonOption } from "../store/constants";
import { options } from "../store/constants";
import { generateHtmlHeader } from "../../../utils/htmlHandling";

const HeaderForm = (props)=> {
  const {
    optionsLabel,
    state,
    dispatch,
    textTooltip,
    radioButtonEnabled,
    radioButtonDisabled,
  } = props; 
  const {
    typePerson: { key },
    typePerson: { value },
    typePerson: { currentStep },
    typePerson: { totalSteps },
  } = state;

  const breadcrumbTitle =
    state.typePerson.key === "consumer"
      ? "Consumer information"
      : state.typePerson.currentStep === 1 ||
        state.typePerson.currentStep === 2 ||
        state.typePerson.currentStep === 5
      ? "Consumer information"
      : value;

  const [typeOfPerson, setTypeOfPerson] = useState({
    consumer: true,
    "parent-legal": false,
    "authorized-agent": false,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={"headerContainer"}>
      
      <InputRadio
        type="radio"
        id="optionConsumer"
        name="typePerson"
        value="parent-legal"
        checked={key === "consumer"}
        dispatch={dispatch}
        labelText={optionsLabel[0].text}
        index={0}
        selected={typeOfPerson["consumer"]}
        setTypeOfPerson={setTypeOfPerson}
        radioButtonEnabled={radioButtonEnabled}
        radioButtonDisabled={radioButtonDisabled}
      />
      <InputRadio
        type="radio"
        id="optionParentLegal"
        name="typePerson"
        value="parent-legal"
        checked={key === "parent-legal"}
        dispatch={dispatch}
        index={1}
        labelText={optionsLabel[1].text}
        selected={typeOfPerson["parent-legal"]}
        setTypeOfPerson={setTypeOfPerson}
        radioButtonEnabled={radioButtonEnabled}
        radioButtonDisabled={radioButtonDisabled}
      />
      <InputRadio
        classContainer="lastRadioInput"
        type="radio"
        id="optionAuthorizedAgent"
        name="typePerson"
        value="authorized-agent"
        checked={key === "authorized-agent"}
        dispatch={dispatch}
        index={2}
        labelText={optionsLabel[2].text}
        selected={typeOfPerson["authorized-agent"]}
        setTypeOfPerson={setTypeOfPerson}
        radioButtonEnabled={radioButtonEnabled}
        radioButtonDisabled={radioButtonDisabled}
      />

      <DropdownForm
        options={options}
        name={"typeOfRequest"}
        text={optionsLabel[3].text}
        inputSearch={false}
        errors={{}}
        handlerOnchange={(e) =>
          dispatch({ type: cn.CHANGE_TYPE_REQUEST, payload: e.target.value })
        }
      >
        <Tooltip>
          <div className="tooltip">
            <IcoInfo style={{ marginLeft: "15px" }} />
            <span className="tooltip-text">
              <span>{generateHtmlHeader(textTooltip)}</span>
            </span>
          </div>
        </Tooltip>
        <Tooltip>
          <div className="tooltipmodal">
            <IcoInfo style={{ marginLeft: "14px" }} />
            <span className="tooltip-text">
              <span>{generateHtmlHeader(textTooltip)}</span>
            </span>
          </div>
        </Tooltip>
      </DropdownForm>
      <SpacerLine />
      <Breadcrumb
        title={breadcrumbTitle}
        stepLabel={`(${currentStep}/${totalSteps})`}
        className="breadcrumb"
      />
    </div>
  );
};

export default HeaderForm;
