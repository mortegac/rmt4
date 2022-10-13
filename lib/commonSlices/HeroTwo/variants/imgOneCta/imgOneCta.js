import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  Content,
  ImgHolder,
  CtaContainer,
  DescriptionAndCtasContainer,
} from "./imgOneCtaStyles";
import { RichText } from "prismic-reactjs";
import Button from "../../../../commonComponents/Buttons/ButtonBase";

const Base = (slice) => {
  const {
    description,
    image,
    mobileImage,
    title,
    primaryCtaLink,
    primaryCtaText,
    invertLayout,
  } = slice.primary;

  const primaryCtaUrl =
    primaryCtaLink.link_type === "Document"
      ? primaryCtaLink.slug
      : primaryCtaLink.url;

  return (
    <Content direction={invertLayout ? true : undefined}>
      <Description direction={invertLayout ? true : undefined}>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        <DescriptionAndCtasContainer>
          {description[0]?.text ? (
            RichText.render(description)
          ) : (
            <p>Description</p>
          )}
          <CtaContainer direction={invertLayout ? true : undefined}>
            <Button
              type="primary"
              url={primaryCtaUrl || "#"}
              innerText={primaryCtaText[0]?.text || "Call to action"}
              fullwidth={true}
            />
          </CtaContainer>
        </DescriptionAndCtasContainer>
      </Description>
      <ImgHolder direction={invertLayout ? true : undefined}>
        <picture>
          {/* <source srcSet={image.url} media="(max-width: 500px)" /> */}
          <source srcSet={mobileImage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="Hero Image" />
        </picture>
      </ImgHolder>
    </Content>
  );
};

export const ImgOneCta = SliceFactory(Base);
