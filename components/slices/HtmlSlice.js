import React from "react";
import { PageContainer } from "./HtmlSliceStyle";
import { PrismicRichText } from "@prismicio/react";
import sanitizeHtml from "sanitize-html";

const HtmlSlice = ({ slice }) => {
  const {
    primary: { html_content, section_title },
  } = slice;

  const generateHtml = () => {
    try {
      const sanitizedHtml = sanitizeHtml(html_content[0].text, {
        allowedAttributes: { a: ["href"], h3: ["id"] },
      });
      return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
    } catch (error) {
      console.error("--generateHtml--", error);
      return <></>;
    }
  };

  return (
    <PageContainer>
      <div className="w-container">
        <PrismicRichText field={section_title} />
        {generateHtml()}
      </div>
    </PageContainer>
  );
};

export default HtmlSlice;
