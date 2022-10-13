import { PrismicRichText } from "@prismicio/react";
import { ItemWrapper, Item } from "./ItemContainerStyles";

const ItemContainer = ({ items, variation }) => {
  return (
    <ItemWrapper>
      {items.map((item, i) =>
        i > 4 ? null : (
          <Item variation={variation}>
            <h3>
              {item.itemImage?.url ? (
                <img src={item.itemImage?.url} alt="item-image" />
              ) : (
                item.itemEmoji[0]?.text
              )}
            </h3>
            {item.itemImage[0] && item.itemImage[0]}
            {item.itemTitle[0].text ? (
              <PrismicRichText field={item.itemTitle} />
            ) : (
              "Item Title"
            )}
            {item.itemDescription[0]?.text ? (
              <PrismicRichText field={item.itemDescription} />
            ) : (
              "Item Description"
            )}
          </Item>
        )
      )}
    </ItemWrapper>
  );
};

export default ItemContainer;
