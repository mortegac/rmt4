import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useReducer,
} from "react";

const Input = ({
  register,
  errors,
  step,
  text,
  name,
  value,
  validations,
  handlerOnchange,
  trigger,
  ...rest
}) => {
  const [error, setError] = useState(true);
  const [phoneCode, setPhoneCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEnteredInput = (fieldName, valueEntered, setError) => {
    //Apply validation for required text types

    if (
      fieldName === "firstName" ||
      fieldName === "lastName" ||
      fieldName === "address" ||
      fieldName === "firstNameAgent" ||
      fieldName === "lastNameAgent" ||
      fieldName === "addressAgent"
    ) {
      if (valueEntered.length > 1) {
        setError(false);
      } else if (valueEntered.length === 0) {
        setError(true);
      }
    }

    //Apply validation for fields that require a pattern (mail, postcode)
    if (
      fieldName === "emailName" ||
      fieldName === "postalCode" ||
      fieldName === "emailNameAgent" ||
      fieldName === "postalCodeAgent"
    ) {
      if (!validations.pattern.value.test(valueEntered)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const onKeyDown = (key) => {
    if (key.keyCode === 8 && key.target.value.length === 1) {
      trigger(key.target.name);
    }
  };

  const handlerChange = (e) => {
    validateEnteredInput(name, e.target.value, setError);

    const objSelected = {
      target: {
        name: "form",
      },
      step,
      payload: {
        [name]: e.target.value,
      },
    };

    handlerOnchange(objSelected);
  };

  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        className={
          "inputForm inputTopMarginForLabel " + (error && errors[name]?.type)
        }
        {...register(name, { ...validations })}
        type="text"
        name={name}
        id={name}
        onChange={handlerChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      {name !== "otherAdresses" && (
        <span className={"error"}>
          {error &&
            (errors[name]?.type === "required" ||
              errors[name]?.type === "pattern" ||
              errors[name]?.type === "minLength") &&
            errors[name]?.message}{" "}
        </span>
      )}
    </>
  );
};

export default Input;
