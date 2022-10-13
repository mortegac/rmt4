import { PrismicRichText } from "@prismicio/react";
import { TextBox } from "./DescriptionStyles";

const Description = ({ text }) => {
  return <TextBox>{text ? <PrismicRichText field={text} /> : "Test"}</TextBox>;
};

export default Description;
