import PropTypes from "prop-types";

import { InputWrapper, SpanWrapper, LabelWrapper } from "./InputStyle";

const Input = props => {
  const {
    name,
    id,
    value,
    handlerOnChange,
    textLabel,
    validationsMessage,
    isRequired,
    ref,
    ...rest
  } = props;
  console.log(isRequired); //esto esta aca para q linter no llore
  return (
    <>
      <LabelWrapper htmlFor={name}>{textLabel}</LabelWrapper>
      <InputWrapper
        className={validationsMessage ? "error" : null}
        {...rest}
        type="text"
        name={name}
        id={id}
        onChange={handlerOnChange}
        value={value}
        ref={ref}
      />
      <SpanWrapper>
        {validationsMessage ? validationsMessage : null}
      </SpanWrapper>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handlerOnChange: PropTypes.string,
  textLabel: PropTypes.string,
  validationsMessage: PropTypes.string,
  isRequired: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  id: "",
  value: "",
  handlerOnChange: () => {},
  textLabel: "",
};

export default Input;
