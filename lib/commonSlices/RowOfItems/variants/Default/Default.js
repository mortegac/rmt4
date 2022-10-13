import { SliceFactory } from "../../../../commonComponents/Containers";
import { Section, ErrorMsg } from "./DefaultStyles";
import Button from "../../../../commonComponents/Buttons/ButtonBase";
import { Title, Description, ItemContainer } from "../../components/index";

const Base = slice => {
  const { title, description, CTAtext, CTAurl } = slice.primary;
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
      <Button
        innerText={CTAtext[0]?.text || "Contact Us"}
        url={CTAurl?.url || "#"}
      ></Button>
    </Section>
  );
};

const Default = SliceFactory(Base);
export { Default };
