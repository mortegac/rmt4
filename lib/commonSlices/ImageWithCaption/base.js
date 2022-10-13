import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { SliceFactory } from "../../commonComponents/Containers";

/**
 * Component for the ImageWithCaption Slice.
 */
const Base = ({ slice, ...props }) => {
  const image = slice.primary.image;
  const caption = slice.primary.caption;
  const { style } = props;
  return (
    <figure
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      {prismicH.isFilled.image(image) && (
        <img
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
      )}
      {prismicH.isFilled.richText(caption) && (
        <figcaption>
          <PrismicText field={caption} />
        </figcaption>
      )}
    </figure>
  );
};

const Default = SliceFactory(Base);

export { Default, Base };
