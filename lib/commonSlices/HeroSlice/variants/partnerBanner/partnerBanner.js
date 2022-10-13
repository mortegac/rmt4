import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  PartnerBannerDiv,
  PartnerBannerContainer,
  PartnerLogo,
  // eslint-disable-next-line no-unused-vars
  PartnerText,
  Content,
  ImgHolder,
} from "./partnerBannerStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { description, image, mobileImage, title, partnerLogo, partnerText } =
    slice.primary;
  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
        <PartnerBannerDiv>
          <PartnerBannerContainer>
            <PartnerLogo
              src={partnerLogo.url}
              alt={partnerLogo.alt || "Logo of partner"}
            />
            {partnerText[0]?.text ? (
              RichText.render(partnerText)
            ) : (
              <p>Partner text</p>
            )}
          </PartnerBannerContainer>
        </PartnerBannerDiv>
      </Description>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileImage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
    </Content>
  );
};

export const PartnerBanner = SliceFactory(Base);
