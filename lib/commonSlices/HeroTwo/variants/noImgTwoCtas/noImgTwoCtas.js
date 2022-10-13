import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  Content,
  CtaContainer,
  DescriptionAndCtasContainer,
} from "./noImgTwoCtasStyles";
import { RichText } from "prismic-reactjs";
import Button from "../../../../commonComponents/Buttons/ButtonBase";

const Base = (slice) => {
  const {
    description,
    title,
    primaryCtaLink,
    primaryCtaText,
    secondaryCtaLink,
    secondaryCtaText,
  } = slice.primary;

  const primaryCtaUrl =
    primaryCtaLink.link_type === "Document"
      ? primaryCtaLink.slug
      : primaryCtaLink.url;

  const secondaryCtaUrl =
    secondaryCtaLink.link_type === "Document"
      ? secondaryCtaLink.slug
      : secondaryCtaLink.url;

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        <DescriptionAndCtasContainer>
          {description[0]?.text ? (
            RichText.render(description)
          ) : (
            <p>Description</p>
          )}
          <CtaContainer>
            <Button
              type="primary"
              url={primaryCtaUrl || "#"}
              innerText={primaryCtaText[0]?.text || "Call to action"}
              fullwidth={true}
            />
            <Button
              type="secondary"
              url={secondaryCtaUrl || "#"}
              innerText={secondaryCtaText[0]?.text || "Call to action"}
              fullwidth={true}
            />
          </CtaContainer>
        </DescriptionAndCtasContainer>
      </Description>
    </Content>
  );
};

export const NoImgTwoCtas = SliceFactory(Base);
