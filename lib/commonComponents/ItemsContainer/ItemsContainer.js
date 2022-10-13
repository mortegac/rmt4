import { ItemsWrapper, Item, Header, Footer } from "./ItemsContainerStyles";
import { PrismicRichText } from "@prismicio/react";
import { RichText } from "prismic-reactjs";
export const ItemsContainer = ({ items, dandelion }) => {
  const cards = items;
  return (
    <ItemsWrapper>
      {cards.map((card, i) => (
        <Item key={i} dandelion={dandelion}>
          <Header dandelion={dandelion}>
            {card.cardImage && (
              <div className="image">
                <img
                  src={card.cardImage.url}
                  alt={card.cardImage.alt || "item-image"}
                />
              </div>
            )}
            {card.cardTitle && <PrismicRichText field={card.cardTitle} />}
            {card.cardText && <PrismicRichText field={card.cardText} />}
          </Header>

          <Footer dandelion={dandelion}>
            {card.authorName && <PrismicRichText field={card.authorName} />}
            {card.authorInfo && <PrismicRichText field={card.authorInfo} />}
            {card.ctaText && (
              <a href={card.ctaUrl.url}>{RichText.asText(card.ctaText)}</a>
            )}
          </Footer>
        </Item>
      ))}
    </ItemsWrapper>
  );
};
