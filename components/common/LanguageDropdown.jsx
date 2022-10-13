import React from "react";
import Link from "next/link";
import wikis from "../../images/wikis.svg";
// import { navigate } from "gatsby";
// import linkResolver from "../../utils/linkResolver";
import { linkResolver } from "../../prismicio";
import { LanguageBtn } from "./LanguageDropdownStyle";
import { langOption } from "./LanguageUtils";

const LanguageDropdown = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang;
  const currentLangOption = (
    <a>
      <div className="item active">
        {langOption(currentLang.slice(0, 2).toLowerCase())}
      </div>
    </a>
  );

  const LinkPage = data => {
    return (
      <a key={`alt-lang-${data.id}`} href={linkResolver(data.altLang)}>
        <div className="item">
          {langOption(data.altLang.lang.slice(0, 2).toLowerCase())}
        </div>
      </a>
    );
  };

  const alternateLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) =>
      currentLang.slice(-2) == altLang.lang.slice(-2) &&
      LinkPage({
        id: altLang?.id || "",
        altLang,
      })

    // (
    //   <a
    //     key={`alt-lang-${index}`}
    //     onClick={() => navigate(linkResolver(altLang))}
    //   >
    //     <div className="item">
    //       {langOption(altLang.lang.slice(0, 2).toLowerCase())}
    //     </div>
    //   </a>
    // )
  );

  return (
    <LanguageBtn>
      <div className="inner-text">
        {langOption(currentLang.slice(0, 2).toLowerCase())}
      </div>
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
      <div className="list-container">
        <div className="list-wrap">
          {currentLangOption}
          {alternateLangOptions}
        </div>
      </div>
    </LanguageBtn>
  );
};

export default LanguageDropdown;
