import PropTypes from "prop-types";
import {
  SectionContainerBase,
  SectionBackgroundImage,
} from "./SectionContainerStyles";
import Image from "next/image";

const SectionContainer = ({ children, bgImage, ...rest }) => {
  return (
    <SectionContainerBase {...rest}>
      {bgImage && (
        <SectionBackgroundImage>
          <Image
            src="/Lines.svg"
            alt="background image"
            // width="100%"
            // height="100%"
            layout="fill"
          />
        </SectionBackgroundImage>
      )}
      {children}
    </SectionContainerBase>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.element,
  rest: PropTypes.element,
};

SectionContainer.defaultProps = {};

export default SectionContainer;
