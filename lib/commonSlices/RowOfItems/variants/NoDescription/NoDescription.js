import { SliceFactory } from "../../../../commonComponents/Containers";
import { Section, ErrorMsg } from "./NoDescriptionStyles";
import Button from "../../../../commonComponents/Buttons/ButtonBase";
import { Title, ItemContainer } from "../../components/index";

const Base = slice => {
  const { title, CTAtext, CTAurl } = slice.primary;
  const lowEnd = slice?.items?.length < 3;

  return (
    <Section>
      <Title title={title} />
      {lowEnd ? (
        <ErrorMsg>You must enter at least 3 items</ErrorMsg>
      ) : (
        <ItemContainer items={slice.items} />
      )}
      <Button
        innerText={CTAtext[0]?.text || "Contact Us"}
        url={CTAurl?.url || "#"}
      ></Button>
    </Section>
  );
};

export const NoDescription = SliceFactory(Base);
