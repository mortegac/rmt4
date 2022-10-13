import React from "react";
import { Dropdown } from "./index";

const DrowdowmForm = (props) => {
  const { loadingStatus, options, name, value, title, aditionalClass } = props;

  const changeSelect = (val) => {
    const filter = options.filter((item) => item.value === val.target.value);

    const objSelected = {
      target: {
        name,
        value: filter[0].value,
        index: filter[0].text,
      },
    };
    props.onChange(objSelected);
  };

  return (
    <div
      className={`select-box ${aditionalClass ? aditionalClass : ""}`}
      style={{ opacity: loadingStatus ? "0.3" : "1" }}
    >
      {title ? <h4>{title}</h4> : null}
      <div class="select-dropdown">
        <Dropdown
          options={options}
          name={name}
          key={`000${name}`}
          value={options.length > 0 ? value : ""}
          onClick={changeSelect}
          style={{ opacity: loadingStatus ? "0.3" : "1" }}
        />
      </div>
    </div>
  );
};

export default DrowdowmForm;
