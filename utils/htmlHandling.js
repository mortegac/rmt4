import React from "react";

export const generateHtmlHeader = (object) => {
  try {
    return <div dangerouslySetInnerHTML={{ __html: object }} />;
  } catch (error) {
    return <></>;
  }
};
