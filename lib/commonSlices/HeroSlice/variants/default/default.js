import { SliceFactory } from "../../../../commonComponents/Containers/";
import { Description, Content, ImgHolder } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { description, image, title, mobileImage } = slice.primary;
  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
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

export const Default = SliceFactory(Base);
