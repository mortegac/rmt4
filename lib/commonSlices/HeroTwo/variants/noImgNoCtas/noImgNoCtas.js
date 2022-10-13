import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  Content,
  DescriptionAndCtasContainer,
} from "./noImgNoCtasStyles";
import { RichText } from "prismic-reactjs";

const Base = (slice) => {
  const { description, title } = slice.primary;
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
        </DescriptionAndCtasContainer>
      </Description>
    </Content>
  );
};

export const NoImgNoCtas = SliceFactory(Base);
