import {
  Default,
  DefaultNoDescription,
  FeaturesDefault,
  FeaturesNoDescription,
  Dandelion,
} from "./variants";

export const RowOfCards = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["defaultNoDescription"]: DefaultNoDescription,
    ["featuresDefault"]: FeaturesDefault,
    ["featuresNoDescription"]: FeaturesNoDescription,
    ["dandelion"]: Dandelion,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
