import { Default, NoDescription, NoTitle } from "./variants";

export const LogoList = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noDescription"]: NoDescription,
    ["noTitle"]: NoTitle,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
