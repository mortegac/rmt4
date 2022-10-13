import React, { useState, useRef, useEffect } from "react";
import { ListSearchContainer } from "./dropdownStyles";
import { countriesComponents } from "./countriesComponents";

const ListSearch = ({ dataList, activeDropdownIndex, ...rest }) => {
  const handlerClick = (e) => {
    const objSelected = {
      text: e.text,
      value: e.value,
      index: 0,
    };

    rest.onClick(objSelected);
  };

  useEffect(() => {}, [dataList]);

  return (
    <ListSearchContainer>
      <ul class="list-search-list">
        {dataList.map((e, i) => {
          let activeClassName =
            i === activeDropdownIndex ? "suggestion-active" : "";
          const Country = countriesComponents[e.value];
          return e.type === "separator" ? (
            <li className="item">
              <div className="item-container item-separator"></div>
            </li>
          ) : (
            // if (i!==0)
            <li
              key={`${i}-${e.value}`}
              className={"item " + activeClassName}
              onClick={() => handlerClick(e)}
            >
              <div className="item-container">
                {Country ? (
                  <span className="flag-container">
                    <Country />
                  </span>
                ) : null}
                <span>{e.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </ListSearchContainer>
  );
};

export default ListSearch;
