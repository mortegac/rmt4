import { PrismicRichText } from "@prismicio/react";
import { SliceFactory } from "../../../commonComponents/Containers/SliceFactory";
import {
  ContentWrapper,
  TextContainer,
  ItemContainer,
  Item,
} from "./variantStyles";

const Base = ({
  primary: {
    invertLayout,
    title = "Title Text",
    body = "Body Text",
    image: { url = "/", alt = "alt text" },
  },
  items: items,
}) => {
  return (
    <ContentWrapper direction={invertLayout} dandelion={true}>
      <img src={url} alt={alt} />
      <TextContainer direction={invertLayout} dandelion={true}>
        <PrismicRichText field={title} />
        <PrismicRichText field={body} />
        <ItemContainer>
          {items.map((item, i) => (
            <Item key={i}>
              <div className="icon">
                {Object.keys(item.itemImage).length > 0 ? (
                  <img src={item.itemImage.url} alt={item.itemImage.alt} />
                ) : (
                  <PrismicRichText field={item.itemEmoji} />
                )}
              </div>
              <div className="text">
                <PrismicRichText field={item.itemTitle} />
                <PrismicRichText field={item.itemDescription} />
              </div>
            </Item>
          ))}
        </ItemContainer>
      </TextContainer>
    </ContentWrapper>
  );
};

export const DandelionNoCta = SliceFactory(Base);
