import { PrismicRichText } from "@prismicio/react";
import { Box } from "./TitleStyle";

const Title = ({ text }) => {
  return (
    <>
      <Box>{text ? <PrismicRichText field={text} /> : ""}</Box>
    </>
  );
};

export default Title;
