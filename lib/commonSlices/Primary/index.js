import {
  Default,
  NoButton,
  OneButton,
  OneButtonOrangeBox,
  NoButtonOrangeBox,
  Dandelion,
  DandelionNoCta,
} from "./variants";

export const Primary = ({ slice }) => {
  const { variation } = slice;
  const TypeOfComponents = {
    ["default"]: Default,
    ["oneButton"]: OneButton,
    ["noButton"]: NoButton,
    ["oneButtonOrangeBox"]: OneButtonOrangeBox,
    ["noButtonOrangeBox"]: NoButtonOrangeBox,
    ["dandelion"]: Dandelion,
    ["dandelionNoCta"]: DandelionNoCta,
  };

  const TypeOfVariants = TypeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
