import React, { useState } from "react";
import { ContainerItem } from "../WrapperFormStyles";
import { generateHtmlHeader } from "../../../utils/htmlHandling";

const CheckForm = ({
  step,
  text,
  name,
  handlerOnchange,
  checked,
  checkboxEnabled,
  checkboxDisabled,
}) => {
  const [checkedForm, setCheckedForm] = useState(checked);

  const handlerChange = (e) => {
    setCheckedForm(!checked);

    const objSelected = {
      target: {
        name: "form",
      },
      step,
      payload: {
        [name]: !checked,
      },
    };

    handlerOnchange(objSelected);
  };

  return (
    <>
      <ContainerItem
        style={{ alignItems: "flex-start" }}
        checkboxEnabled={checkboxEnabled.url}
        checkboxDisabled={checkboxDisabled.url}
      >
        <label className={"label-checkbox"} for="scales">
          <div>
            <img
              src={checkboxDisabled.url}
              className={checked ? "checked" : "unchecked"}
              onClick={handlerChange}
            />

            <input
              className={"inputForm"}
              type="checkbox"
              name={name}
              id={name}
              onChange={handlerChange}
              checked={checkedForm}
            />
            <div>
              <b>{`    I confirm `}</b>
              <span>{`that I am requesting `}</span>
              <b>{`Ria to delete my information `}</b>
              <span>{`as required by the CCPA (optional)`}.</span>
            </div>
          </div>
        </label>
      </ContainerItem>
    </>
  );
};

export default CheckForm;
