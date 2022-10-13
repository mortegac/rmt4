import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useReducer,
} from "react";
import DialCodeDropDown from "./DialCodeDropdown";
import countries from "../../../utils/countries.json";

const InputPhoneNumber = ({
  register,
  errors,
  step,
  text,
  name,
  value,
  validations,
  handlerOnchange,
  currentState,
}) => {
  const [error, setError] = useState(true);
  const [phoneCode, setPhoneCode] = useState("");

  const handlerChange = (e) => {
    //For phone number types only this validation is done
    if (e.target.value.length >= 6) {
      setError(false);
    } else if (e.target.value.length < 6) {
      setError(true);
    }

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

  const onPhoneNumberKeyDown = (key) => {
    if (key.keyCode === 38 || key.keyCode === 40) {
      key.preventDefault();
    }
  };

  return (
    <>
      <div className="dial-dropdown">
        <label htmlFor={name}>{text}</label>
        <div className="dial-items">
          <DialCodeDropDown
            register={register}
            name={`code${name}`}
            id={`code${name}`}
            step={step}
            suggestions={countries}
            setPhoneCode={setPhoneCode}
            error={errors.phone}
            phoneInput={true}
            handlerOnchange={handlerOnchange}
            value={"+" + currentState.form[step]["code" + name] || "+1"}
          />
          <input
            {...register(name, { ...validations })}
            type="number"
            name={`${name}`}
            id={`${name}`}
            className={`inputForm ` + (error && errors[name]?.type)}
            value={value}
            onChange={handlerChange}
            onKeyDown={onPhoneNumberKeyDown}
            style={{ "margin-left": "117px", "z-index": "2" }}
          />
        </div>
      </div>
      <span className={"error"}>
        {error &&
          (errors[name]?.type === "required" ||
            errors[name]?.type === "pattern" ||
            errors[name]?.type === "minLength") &&
          errors[name]?.message}{" "}
      </span>
    </>
  );
};

export default InputPhoneNumber;
