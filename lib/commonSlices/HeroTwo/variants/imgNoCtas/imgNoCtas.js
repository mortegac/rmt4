import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  Content,
  ImgHolder,
  DescriptionAndCtasContainer,
} from "./imgNoCtasStyles";
import { RichText } from "prismic-reactjs";

const Base = (slice) => {
  const { description, image, mobileImage, title, invertLayout } =
    slice.primary;
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

export const ImgNoCtas = SliceFactory(Base);
