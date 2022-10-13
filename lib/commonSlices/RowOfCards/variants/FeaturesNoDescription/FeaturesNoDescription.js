import { SliceFactory } from "../../../../commonComponents/Containers";
import { MainContainer, Header } from "./FeaturesNoDescriptionStyles";
import { PrismicRichText } from "@prismicio/react";
import { ItemsContainer } from "../../../../commonComponents/ItemsContainer/ItemsContainer";
import { Carousel } from "../../../../commonComponents/Carousel/Carousel";

const Base = (slice) => {
  const { title, description } = slice.primary;
  const cards = slice.items;
  return (
    <MainContainer>
      <Header>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </Header>
      {cards.length <= 4 ? (
        <ItemsContainer items={cards} />
      ) : (
        <Carousel items={cards} />
      )}
    </MainContainer>
  );
};

const FeaturesNoDescription = SliceFactory(Base);
export { FeaturesNoDescription };
