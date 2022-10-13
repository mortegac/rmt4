import { PrismicRichText } from "@prismicio/react";

import { SliceFactory } from "../../../commonComponents/Containers/SliceFactory";
import { ImageContainer } from "../components/ImageContainer";

import {
  ContentWrapper,
  TextContainer,
  ButtonContainer,
} from "./variantStyles";
import { Btn } from "../../../commonComponents/Buttons";

const Base = ({
  primary: {
    invertLayout,
    kicker = "Kicker Text",
    title = "Title Text",
    body = "Body Text",
    buttonOneText = "Btn One",
    buttonOneLink = "/",
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
        <ButtonContainer>
          <Btn
            type="primary"
            url={buttonOneLink.url}
            innerText={buttonOneText[0].text}
            fullwidth={false}
          />
        </ButtonContainer>
      </TextContainer>
    </ContentWrapper>
  );
};

export const OneButtonOrangeBox = SliceFactory(Base, {
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
