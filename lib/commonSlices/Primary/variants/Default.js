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
    invertLayout = false,
    kicker = { text: "Kicker Text" },
    title = { text: "Title Text" },
    body = { text: "Body Text" },
    buttonOneText = "Btn One",
    buttonTwoText = "Btn Two",
    buttonOneLink = "/",
    buttonTwoLink = "/",
    image: { url = "/", alt = "alt text" },
    mobileImage: { mobileAlt, mobileUrl } = {
      mobileUrl: "/",
      mobileAlt: "alt text",
    },
  },
}) => {
  return (
    <ContentWrapper direction={invertLayout}>
      <ImageContainer
        url={url}
        alt={alt}
        mobileUrl={mobileUrl}
        mobileAlt={mobileAlt}
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
            fullwidth={true}
          />
          <Btn
            type="secondary"
            url={buttonTwoLink.url}
            innerText={buttonTwoText[0].text}
            fullwidth={true}
          />
        </ButtonContainer>
      </TextContainer>
    </ContentWrapper>
  );
};

export const Default = SliceFactory(Base);
