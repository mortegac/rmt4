import { Anchor, ButtonContainer } from "./buttonStyles";
import PropTypes from "prop-types";
import variants from "./button_variants";

const Button = (props) => <ButtonBase {...props} />;

const ButtonBase = ({
  url = "#",
  fullwidth = null,
  type = "default",
  innerText = null,
  ...rest
}) => {
  return (
    <>
      <Anchor
        href={url}
        className={fullwidth ? "fullwidth" : "normal"}
        {...rest}
      >
        <ButtonContainer {...variants[type || "default"]}>
          {innerText ? innerText : "Button"}
        </ButtonContainer>
      </Anchor>
    </>
  );
};

Button.propTypes = {
  url: PropTypes.string,
  fullwidth: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "outline-white"]),
  innerText: PropTypes.string,
};

Button.defaultProps = {
  url: "#",
  fullwidth: null,
  type: "primary",
  innerText: null,
};

export default Button;
