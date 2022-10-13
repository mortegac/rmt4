import React, { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  SelectedContainer,
  ChevronContainer,
} from "./dropdownStyles";
import ListSearch from "./ListSearch";
import { countriesComponents } from "./countriesComponents";
import { Chevron } from "../assets";

let OpenDropdown = null;

const Dropdown_ = props => <DropdownBase {...props} />;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

const DropdownBase = ({
  options = [],
  name = "",
  label = null,
  value = "",
  onChange = null,
  onClick = null,
  onBlur = null,
  disabled = null,
  countryDropdown = false,
  inputSearch = false,
  loadingStatus = false,
  ...rest
}) => {
  const [directionRow, setDirectionRow] = useState(false);
  const [directionRowStatus, setDirectionRowStatus] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [textSearchBackup, setTextSearchBackup] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [inputRef, setInputFocus] = useFocus();
  const [dataList, setDataList] = useState([]);

  const handleFocus = event => event.target.select();
  const handlerOnBlurSearch = e => {
    setDirectionRowStatus(true);
  };
  const handlerActivateSearch = () => {
    if (textSearch.length === 0) setTextSearch(textSearchBackup);

    if (OpenDropdown) OpenDropdown(false);
    OpenDropdown = null;
    // delay it one frame so the click event can be handled fully - otherwise it would call OpenDropdown(false) again and close it direcly
    window.requestAnimationFrame(() => {
      OpenDropdown = setDirectionRow;
    });

    setDirectionRow(!directionRow);
    setInputFocus();
  };

  const handlerSearch = e => {
    // const arrayError = [{category: null, value: '', text: 'Country not found', contentTypeId: null, sys: null}];
    const arrayError = [...options];
    try {
      const text = e.target.value;
      setTextSearch(text);
      // setTextSearchBackup(text)
      const upperText = text.toUpperCase();

      //filter dataList
      let matchingStrings = [];
      const dataFilter = options.filter(item => {
        if (!item.text) return null;

        const nameCountry = item.text.toUpperCase();

        if (nameCountry.search(upperText) > -1) {
          matchingStrings = [...matchingStrings, item];
          return item;
        }
      });

      // Remove duplicates
      let convertToSet = new Set(dataFilter.map(JSON.stringify));
      let dataFilterNotDuplicates = Array.from(convertToSet).map(JSON.parse);

      setDataList(
        dataFilterNotDuplicates.length > 0
          ? dataFilterNotDuplicates
          : arrayError
      );
    } catch (e) {
      console.error("error", e);
      setDataList(arrayError);
    }
  };

  const selectedItem = e => {
    setTextSearch(e.text);
    setTextSearchBackup(e.text);
    setCountrySearch(e.value);
    const objSelected = {
      target: {
        name,
        value: e.value,
        index: 0,
        // val.target.value
      },
    };
    onClick({ ...objSelected });
    setDataList(options);
  };

  let CountrySelected = null;
  if (countryDropdown) CountrySelected = countriesComponents[countrySearch];

  const showFlag = () => (
    <span className="flag-container">
      <CountrySelected />
    </span>
  );

  useEffect(() => {
    if (options.length > 0) {
      const optionsList = Array.isArray(options) ? options : [];
      const uppercaseValue =
        typeof value === "string" ? value.toUpperCase() : "";
      const itemsFiltered = optionsList.filter(
        item => item.value && item.value.toUpperCase().includes(uppercaseValue)
      );
      const itemValueSelected =
        itemsFiltered.length > 0
          ? itemsFiltered[0].value.toUpperCase()
          : optionsList[0].value;
      const itemTextSelected =
        itemsFiltered.length > 0 ? itemsFiltered[0].text : optionsList[0].text;

      setDataList(optionsList);
      setTextSearch(itemTextSelected);
      setTextSearchBackup(itemTextSelected);
      setCountrySearch(itemValueSelected);
    } else {
      setDataList([]);
      setTextSearch("");
      setTextSearchBackup("");
      setCountrySearch("");
    }
  }, [options]);

  useEffect(() => {}, [dataList]);

  return (
    <>
      <div
        className={
          dataList.length === 0
            ? "dropdown-container "
            : `dropdown-container ${directionRow ? "dropdown-focused" : ""}`
        }
      >
        <DropdownContainer
          onClick={handlerActivateSearch}
          style={{ opacity: loadingStatus ? "0.3" : "1" }}
          disabled={disabled}
        >
          {label ? <div className="dropdown-label">{label}</div> : null}

          {dataList.length === 0 ? null : (
            <ChevronContainer>
              <Chevron
                className={`chevron ${
                  directionRow ? "chevron-rotate-bottom" : "chevron-rotate-top"
                }`}
              />
            </ChevronContainer>
          )}

          {inputSearch && directionRow ? (
            <input
              ref={inputRef}
              autoFocus
              type="text"
              placeholder=""
              autocomplete="off"
              onChange={handlerSearch}
              onBlur={handlerOnBlurSearch}
              onFocus={handleFocus}
              value={textSearch}
              name={name}
              disabled={disabled}
              style={{ opacity: loadingStatus ? "0.3" : "1" }}
            />
          ) : (
            <SelectedContainer>
              {CountrySelected ? showFlag() : null}

              <div className={"truncate dropdown-selected"}> {textSearch}</div>
            </SelectedContainer>
          )}

          {directionRow ? (
            <>
              <div className="dropdown-list">
                <ListSearch
                  dataList={dataList}
                  onClick={e => selectedItem(e)}
                />
              </div>
            </>
          ) : null}
        </DropdownContainer>
      </div>
    </>
  );
};

export default Dropdown_;
