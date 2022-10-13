import { PrismicRichText } from "@prismicio/react";

import { SliceFactory } from "../../../commonComponents/Containers/SliceFactory";
import { ImageContainer } from "../components/ImageContainer";

import { ContentWrapper, TextContainer } from "./variantStyles";

const Base = ({
  primary: {
    invertLayout,
    kicker = "Kicker Text",
    title = "Title Text",
    body = "Body Text",
    image: { url = "/", alt = "alt text" },
    mobileImage,
  },
}) => {
  return (
    <ContentWrapper direction={invertLayout}>
      <ImageContainer
        url={url}
        alt={alt}
        mobileUrl={mobileImage.url}
        mobileAlt={mobileImage.alt}
        direction={invertLayout}
      />
      <TextContainer direction={invertLayout}>
        <PrismicRichText field={kicker} />
        <PrismicRichText field={title} />
        <PrismicRichText field={body} />
      </TextContainer>
    </ContentWrapper>
  );
};

const NoButtonOrangeBox = SliceFactory(Base, {
  sliceContainerProps: {
    boxed: true,
    style: {
      background: "rgba(255, 97, 0, 0.05)",
      borderRadius: "25px",
    },
  },
  sectionContainerProps: {
    boxed: true,
  },
});

export { NoButtonOrangeBox };
