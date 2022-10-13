import React, { useEffect, useState } from "react";
import Link from "next/link";
import { linkResolver } from "../../prismicio";
import FlagResolver from "./FlagResolver";
import { CountryHandler } from "../../utils/locale";

import { LanguageBtn } from "./CountryDropdownStyle";

const CountryDropdown = ({ activeDocMeta }) => {
  const [countryItems, setCountryItems] = useState(0);

  const currentLang = activeDocMeta.lang;

  const currentLangOption = (
    <a>
      <div className="item active">
        <FlagResolver code={currentLang.slice(-2).toUpperCase()} />
        {CountryHandler(currentLang.slice(-2).toLowerCase())}
      </div>
    </a>
  );

  //This one filters the duplicate countries in the iso code on the lang value, then it returns an array with the objects filtered
  let uniqueCountries = activeDocMeta.alternateLanguages.filter(
    (elem, index) =>
      activeDocMeta.alternateLanguages.findIndex(
        obj => obj.lang.slice(-2) === elem.lang.slice(-2)
      ) === index
  );
  const excludeCountry = ["au", "ca"];
  const excludeCountry2 = [
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
  ];
  const filteredCountries = uniqueCountries.filter(
    item => !excludeCountry.includes(item.lang.slice(-2).toLowerCase())
  );

  const manuallyCountries = excludeCountry2.map((altLang, index) => (
    <a
      key={`alt-lang-${index}`}
      onClick={() => (window.location.href = altLang.newUrl)}
    >
      <div className="item">
        <FlagResolver code={altLang.lang.slice(-2).toUpperCase()} />
        {CountryHandler(altLang.lang.slice(-2).toLowerCase())}
      </div>
    </a>
  ));

  const LinkPage = data => {
    return (
      <a key={`alt-lang-${data.id}`} href={linkResolver(data.altLang)}>
        <div className="item">
          <span></span>
          <FlagResolver code={data.altLang.lang.slice(-2).toUpperCase()} />
          {CountryHandler(data.altLang.lang.slice(-2).toLowerCase())}
        </div>
      </a>
    );
  };

  //It iterates the unique countries array, taking away the current country from the list
  const alternateCountries = filteredCountries.map(
    (altLang, index) =>
      altLang.lang.slice(-2) !== currentLang.slice(-2) &&
      LinkPage({
        id: altLang?.id || "",
        altLang,
      })
  );

  useEffect(() => {
    setCountryItems(document.querySelectorAll(".country-flags a").length);
  }, []);

  return (
    <LanguageBtn>
      <FlagResolver code={currentLang.slice(-2).toUpperCase()} />
      <svg
        className="lang-chevron"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 12.375L3.375 6.75002L4.1625 5.96252L9 10.8L13.8375 5.96252L14.625 6.75002L9 12.375Z"
          fill="#001133"
          fillOpacity="0.6"
        />
      </svg>
      <div className={`list-container space-${countryItems}`}>
        <div className="list-wrap country-flags">
          {currentLangOption}
          {alternateCountries}

          <div className="list-wrap-mannualy">{manuallyCountries}</div>
        </div>
      </div>
    </LanguageBtn>
  );
};

export default CountryDropdown;
