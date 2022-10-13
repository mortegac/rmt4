import { PrismicRichText } from "@prismicio/react";
import { TitleContainer } from "./TitleStyles";

const Title = ({ title }) => {
  return (
    <TitleContainer>
      {title ? <PrismicRichText field={title} /> : "Test"}
    </TitleContainer>
  );
};

export default Title;
