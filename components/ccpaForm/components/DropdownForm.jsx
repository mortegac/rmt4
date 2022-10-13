import React from "react";
import Dropdown from "../components/_dropdown/DropdownBase";
import { ContainerItem } from "../WrapperFormStyles";

const DropdownForm = ({
  register,
  options,
  name,
  loadingStatus,
  text,
  step,
  aditionalClass,
  inputSearch = true,
  handlerOnchange,
  children,
  className,
  value,
  errors,
}) => {
  const changeSelect = (e) => {
    const filter = options.filter((item) => item.value === e.target.value);

    const objSelected = {
      target: {
        name: "form",
        value: filter[0].value,
        index: filter[0].text,
      },
      step,
      key: name,
      payload: {
        [name]: e.target.value,
      },
    };

    handlerOnchange(objSelected);
  };

  return (
    <>
      <label htmlFor={name}>{text}</label>
      <ContainerItem>
        <div
          id={name}
          className={`select-box ${aditionalClass ? aditionalClass : ""}`}
          style={{ width: "100%", opacity: loadingStatus ? "0.3" : "1" }}
        >
          <div class="select-dropdown" style={{ maxHeight: "400px" }}>
            <Dropdown
              id={name}
              className={className}
              register={register}
              options={options}
              name={name}
              key={`000${name}`}
              onClick={changeSelect}
              style={{
                marginBottom: "23px",
                maxHeight: "400px",
                opacity: loadingStatus ? "0.3" : "1",
              }}
              inputSearch={inputSearch}
              value={value}
            />
          </div>
        </div>
        {children}
      </ContainerItem>
      {/* <span className='error'>{errors[name]?.type === 'required' && "Must not exceed 100 characters"}</span> */}
    </>
  );
};

export default DropdownForm;
