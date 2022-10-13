import React from "react";
import { Anchor, ButtonContainer } from "./buttonStyles";
import variants from "./button_variants";

const Button_ = props => <ButtonBase {...props} />;

const ButtonBase = ({
  url = "#",
  onClick = null,
  fullwidth = null,
  type = "default",
  innerText = null,
  disabled = false,
  ...rest
}) => {
  return (
    <Anchor
      href={url}
      onClick={onClick}
      className={fullwidth ? "fullwidth" : "normal" + " " + rest.className}
      {...rest}
    >
      <ButtonContainer
        disabled={disabled}
        className={rest.className}
        {...variants[type || "default"]}
      >
        {innerText ? innerText : "navApp"}
      </ButtonContainer>
    </Anchor>
  );
};

export default Button_;
