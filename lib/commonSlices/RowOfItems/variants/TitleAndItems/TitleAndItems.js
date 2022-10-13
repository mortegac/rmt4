import { SliceFactory } from "../../../../commonComponents/Containers";
import { Section, ErrorMsg } from "./TitleAndItemsStyles";
import { Title, ItemContainer } from "../../components/index";

const Base = slice => {
  const { title } = slice.primary;
  const lowEnd = slice?.items?.length < 3;

  return (
    <Section>
      <Title title={title} />
      {lowEnd ? (
        <ErrorMsg>You must enter at least 3 items</ErrorMsg>
      ) : (
        <ItemContainer items={slice.items} />
      )}
    </Section>
  );
};

export const TitleAndItems = SliceFactory(Base);
