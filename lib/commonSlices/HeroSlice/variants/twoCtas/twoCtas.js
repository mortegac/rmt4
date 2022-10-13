import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  CtaContainer,
  Content,
  ImgHolder,
} from "../twoCtas/twoCtasStyles";
import Button from "../../../../commonComponents/Buttons/ButtonBase";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const {
    description,
    image,
    mobileImage,
    title,
    primaryCtaText,
    primaryCtaUrl,
    secondaryCtaText,
    secondaryCtaUrl,
  } = slice.primary;
  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}

        <CtaContainer>
          <Button
            type="primary"
            url={primaryCtaUrl.url}
            innerText={primaryCtaText[0]?.text || "Call to action"}
            fullwidth={true}
          />
          <Button
            type="secondary"
            url={secondaryCtaUrl.url}
            innerText={secondaryCtaText[0]?.text || "Call to action"}
            fullwidth={true}
          />
        </CtaContainer>
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

export const TwoCtas = SliceFactory(Base);
