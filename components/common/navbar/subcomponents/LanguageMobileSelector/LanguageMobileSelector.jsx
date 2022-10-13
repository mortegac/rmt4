/* eslint-disable */
import React from "react";
import { langOption } from "../../../LanguageUtils";
import linkResolver from "../../../../../utils/linkResolver";
import { motion } from "framer-motion";
import { MobileLangContainer } from "./LanguageMobileSelectorStyles";

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

const LanguageMobileSelector = ({
  langToggle,
  setLangToggle,
  activeDocMeta,
}) => {
  const currentLang = activeDocMeta.lang;

  const currentLangOption = (
    <motion.li
      className="nav-item"
      variants={navMenuItems}
      key={`lang-selected`}
    >
      <a>
        <div className="item active">
          {langOption(currentLang.slice(0, 2).toLowerCase())}
        </div>
      </a>
    </motion.li>
  );

  const alternateLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) =>
      currentLang.slice(-2) == altLang.lang.slice(-2) && (
        <motion.li
          className="nav-item selected"
          variants={navMenuItems}
          key={`lang-${index}`}
        >
          <a href={linkResolver(altLang)}>
            <div className="item">
              {langOption(altLang.lang.slice(0, 2).toLowerCase())}
            </div>
          </a>
        </motion.li>
      )
  );

  return (
    <MobileLangContainer className={langToggle && "active"}>
      {langToggle && (
        <>
          <div
            className="back-btn"
            onClick={() => setLangToggle(false)}
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
            {alternateLangOptions}
          </motion.ul>
        </>
      )}
    </MobileLangContainer>
  );
};

export default LanguageMobileSelector;
