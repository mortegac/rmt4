import {
  Default,
  ImgOneCta,
  ImgNoCtas,
  NoImgNoCtas,
  NoImgOneCta,
  NoImgTwoCtas,
} from "./variants";

export const HeroTwo = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["imgNoCtas"]: ImgNoCtas,
    ["imgOneCta"]: ImgOneCta,
    ["noImgNoCtas"]: NoImgNoCtas,
    ["noImgOneCta"]: NoImgOneCta,
    ["noImgTwoCtas"]: NoImgTwoCtas,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
