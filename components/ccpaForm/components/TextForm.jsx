import React from "react";
import { Text } from "../../common";
import { generateHtmlHeader } from "../../../utils/htmlHandling";

const TextForm = ({ text, className, ...rest }) => {
  return (
    <Text textAlign="flex-start" className={`paragraphText ${className}`}>
      {generateHtmlHeader(text)}
    </Text>
  );
};

export default TextForm;
