import { SliceFactory } from "../../../../commonComponents/Containers";
import { MainContainer, Header } from "./DandelionStyles";
import { PrismicRichText } from "@prismicio/react";
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
      <Carousel items={cards} dandelion={true} />
    </MainContainer>
  );
};

export const Dandelion = SliceFactory(Base, {
  sectionContainerProps: {
    style: { background: "white" },
  },
});
