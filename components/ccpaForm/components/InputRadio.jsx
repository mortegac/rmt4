import React from "react";
import { ContainerItem } from "../WrapperFormStyles";
import { cn, typePersonOption } from "../store/constants";
import { useState } from "react";
import flagResolver from "./FlagResolver";

const InputRadio = ({
  labelText = "",
  classContainer = "",
  dispatch,
  index,
  selected,
  setTypeOfPerson,
  radioButtonEnabled,
  radioButtonDisabled,
  ...rest
}) => {
  return (
    <ContainerItem
      radioButtonEnabled={radioButtonEnabled?.url || ""}
      radioButtonDisabled={radioButtonDisabled?.url || ""}
      className={classContainer}
      onClick={(e) => {
        dispatch({
          type: cn.CHANGE_TYPE_PERSON,
          payload: { ...typePersonOption[index] },
        });

        let personOptionSelected = {
          consumer: false,
          "parent-legal": false,
          "authorized-agent": false,
        };

        personOptionSelected[typePersonOption[index].key] = true;
        setTypeOfPerson(personOptionSelected);
      }}
    >
      <label for="html">
        <img
          id={labelText}
          src={radioButtonDisabled?.url || ""}
          className={selected ? "checked" : ""}
        />
        {labelText}
        <input className={"inputForm"} {...rest} />
      </label>
    </ContainerItem>
  );
};

export default InputRadio;
