/* eslint-disable */
import React from "react";
import styled from "styled-components";
import linkResolver from "../../../../../utils/linkResolver";
import FlagResolver from "../../../FlagResolver";
import { motion } from "framer-motion";
import { MobileCountryContainer } from "./CountryMobileSelectorStyle";
import { CountryHandler } from "./CountryHandler";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navMenuItems = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const CountryMobileSelector = ({
  countryToggle,
  setCountryToggle,
  activeDocMeta,
}) => {
  const currentLang = activeDocMeta.lang;

  const currentLangOption = (
    <motion.li className="nav-item active" variants={navMenuItems}>
      <a>
        <div className="item active">
          <FlagResolver code={currentLang.slice(-2).toUpperCase()} />
          {CountryHandler(currentLang.slice(-2).toLowerCase())}
        </div>
      </a>
    </motion.li>
  );

  let uniqueCountries = activeDocMeta.alternateLanguages.filter(
    (elem, index) =>
      activeDocMeta.alternateLanguages.findIndex(
        (obj) => obj.lang.slice(-2) === elem.lang.slice(-2)
      ) === index
  );
  const excludeCountry = ["en-us", "th-au", "fr-ca", "en-gb"];
  const excludeCountry2 = [
    {
      lang: "en-us",
      type: "homepage",
      uid: "home",
      url: "/en-us",
      newUrl: "https://www.riamoneytransfer.com/us/en",
    },
    {
      lang: "th-au",
      type: "homepage",
      uid: "home",
      url: "/th-au",
      newUrl: "https://www.riamoneytransfer.com/au/en",
    },
    {
      lang: "fr-ca",
      type: "homepage",
      uid: "home",
      url: "/fr-ca",
      newUrl: "https://www.riamoneytransfer.com/ca/en",
    },
    {
      lang: "en-gb",
      type: "homepage",
      uid: "home",
      url: "/en-gb",
      newUrl: "https://www.riamoneytransfer.com/gb/en",
    },
  ];
  const filteredCountries = uniqueCountries.filter(
    (item) => !excludeCountry.includes(item.lang)
  );

  const manuallyCountries = excludeCountry2.map(
    (altLang, index) =>
      altLang.lang.slice(-2) !== currentLang.slice(-2) && (
        <motion.li
          className="nav-item"
          variants={navMenuItems}
          key={`country-mobile-${index}`}
        >
          <a onClick={() => (window.location.href = altLang.newUrl)}>
            <div className="item">
              <FlagResolver code={altLang.lang.slice(-2).toUpperCase()} />
              {CountryHandler(altLang.lang.slice(-2).toLowerCase())}
            </div>
          </a>
        </motion.li>
      )
  );

  const alternateCountries = filteredCountries.map(
    (altLang, index) =>
      altLang.lang.slice(-2) !== currentLang.slice(-2) && (
        <>
          <motion.li
            className="nav-item"
            variants={navMenuItems}
            key={`country-mobile-${index}`}
          >
            <a href={linkResolver(altLang)}>
              <div className="item">
                <FlagResolver code={altLang.lang.slice(-2).toUpperCase()} />
                {CountryHandler(altLang.lang.slice(-2).toLowerCase())}
              </div>
            </a>
          </motion.li>
        </>
      )
  );

  return (
    <MobileCountryContainer className={countryToggle && "active"}>
      {countryToggle && (
        <>
          <div
            className="back-btn"
            onClick={() => setCountryToggle(false)}
            role="button"
            tabIndex={0}
          >
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.5 31L34 23.5L35.05 24.55L28.6 31L35.05 37.45L34 38.5L26.5 31Z"
                fill="#001133"
                fill-opacity="0.8"
              />
            </svg>
          </div>
          <motion.ul variants={container} initial="hidden" animate="show">
            {currentLangOption}
            {manuallyCountries}
            <motion.li className="list-wrap-mannualy"></motion.li>
            {alternateCountries}
          </motion.ul>
        </>
      )}
    </MobileCountryContainer>
  );
};

export default CountryMobileSelector;
