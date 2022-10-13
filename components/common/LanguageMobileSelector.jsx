/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import linkResolver from "../../utils/linkResolver";
import { motion } from "framer-motion";

const MobileLangContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafb;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  @media (max-width: 1000px) {
    display: flex;
  }
  &.active {
    transform: translateX(0%);
  }
  .back-btn {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 81px;
    padding-left: 24px;
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      a {
        text-decoration: none;
        color: rgba(0, 17, 51, 0.6);
        &.active {
          color: var(--Ria-orange);
        }
      }
    }
  }
`;
const langOption = (lang) => {
  switch (lang) {
    case "en":
      return "English";
    case "fr":
      return "Français";
    case "es":
      return "Español";
    case "th":
      return "คนไทย";
    case "tl":
      return "Tagalog";
    case "de":
      return "Deutsch";
    case "da":
      return "Dansk";
    case "vi":
      return "Tiếng Việt";
    case "nl":
      return "Nederlands";
    case "fi":
      return "Suomen kieli";
    case "it":
      return "Italiano";
    case "nb":
      return "Norsk bokmål";
    case "sv":
      return "Svenska";
    case "lt":
      return "Lietuvių";
    case "pl":
      return "Polskie";
    case "ro":
      return "Română";
    case "id":
      return "Bahasa Indonesia";
    case "ms":
      return "Melayu";
    case "bn":
      return "বাংলা";
    case "ne":
      return "नेपाली";
    case "pt":
      return "Português";
    case "el":
      return "Ελληνικά";
    default:
      return "";
  }
}

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

const LanguageMobileSelector = ({ langToggle, setLangToggle, activeDocMeta }) => {
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
          <a
            onClick={() => navigate(linkResolver(altLang))}
          >
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
                fillOpacity="0.8"
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
