import PropTypes from 'prop-types';
import { LanguageDropdownContainer } from './LanguageDropdownStyles';
import { string } from 'fp-ts';
import { langOption } from '../utils/LangAndCountryUtils'
import { alternateLanguages } from '../utils/LangAndCountryUtils';

export const LanguageDropdown = ({currentLanguage, alternateLanguages}) => {

  const currentLangOption = (
    <a>
      <div className="item active">
        {langOption(currentLanguage.slice(0, 2).toLowerCase())}
      </div>
    </a>
  );

  const alternateLangOptions = alternateLanguages.map(
    (altLang, index) =>
    currentLanguage.slice(-2) == altLang.lang.slice(-2) && (
        <a
          key={`alt-lang-${index}`}
          href={`./${altLang.lang}`}
        >
          <div className="item">
            {langOption(altLang.lang.slice(0, 2).toLowerCase())}
          </div>
        </a>
      )
  );

  return (
    <LanguageDropdownContainer>
      <div className="inner-text">
        {langOption(currentLanguage.slice(0, 2).toLowerCase())}
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
    </LanguageDropdownContainer>
  );

};

LanguageDropdown.propTypes = {
  currentLanguage: PropTypes.oneOf(['en-us','en-be','en-dk','en-gb','en-ro','en-no','de-ch','en-lu','en-ie','en-at','en-it','en-pl','en-fr','en-pt','da-dk','en-ca','en-gr',
  'en-nl','en-fi','de-at','en-ch','en-au','de-de','en-lt','tl-au','it-it','fr-fr','lt-lt','nl-nl','nl-be','fr-lu','th-au','nb-no','tl-nz','fr-be','ne-my','vi-au','th-nz',
  'en-se','en-de','fi-fi','vi-nz','sv-se','bn-my','id-my','fr-ca','ms-my','vi-ca','fr-ch','it-ch','en-nz','en-my','es-us','en-es','vi-us','en-cl','es-cl','es-es']),
  alternateLanguages: PropTypes.arrayOf(string)
};

LanguageDropdown.defaultProps = {
  currentLanguage: 'en-us',
  alternateLanguages: {alternateLanguages}
};
