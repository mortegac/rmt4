import { SliceFactory } from "../../../../commonComponents/Containers";
import { Section, ErrorMsg } from "./NoCtaStyles";
import { Title, Description, ItemContainer } from "../../components/index";

const Base = slice => {
  const { title, description } = slice.primary;
  const lowEnd = slice?.items?.length < 3;

  return (
    <Section>
      <Title title={title} />
      <Description text={description} />
      {lowEnd ? (
        <ErrorMsg>You must enter at least 3 items</ErrorMsg>
      ) : (
        <ItemContainer items={slice.items} />
      )}
    </Section>
  );
};

export const NoCta = SliceFactory(Base);
