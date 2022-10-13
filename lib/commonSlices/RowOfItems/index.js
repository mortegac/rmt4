import React from "react";
import {
  Default,
  NoDescription,
  NoCta,
  TitleAndItems,
  Dandelion,
} from "./variants";

export const RowOfItems = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noDescription"]: NoDescription,
    ["noCta"]: NoCta,
    ["titleAndItems"]: TitleAndItems,
    ["dandelion"]: Dandelion,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
