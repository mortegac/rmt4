import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { CountryDropdownContainer } from './CountryDropdownStyles';
import { string } from 'fp-ts';
import FlagResolver from './FlagResolver'
import { CountryHandler } from '../../../utils/locale'
import { alternateLanguages } from '../utils/LangAndCountryUtils';

export const CountryDropdown = ({ currentLanguage, alternateLanguages}) => {
  
  const [ countryItems,setCountryItems ] = useState(0)
  const currentLang = currentLanguage;

  const currentLangOption = (
    <a>
      <div className="item active">
        <FlagResolver code={currentLang.slice(-2).toUpperCase()} />
        {CountryHandler(currentLang.slice(-2).toLowerCase())}
      </div>
    </a>
  );

  //This one filters the duplicate countries in the iso code on the lang value, then it returns an array with the objects filtered
  let uniqueCountries = alternateLanguages.filter((elem,index) => alternateLanguages.findIndex(obj => obj.lang.slice(-2) === elem.lang.slice(-2)) === index)
  const excludeCountry = [ "us", "au", "ca", "gb"];
  const excludeCountry2 = [
    { lang: "en-us", type: "homepage", uid: "home", url: "/en-us", newUrl: "https://www.riamoneytransfer.com/us/en" }, 
    { lang: "th-au", type: "homepage", uid: "home", url: "/th-au", newUrl: "https://www.riamoneytransfer.com/au/en" }, 
    { lang: "fr-ca", type: "homepage", uid: "home", url: "/fr-ca", newUrl: "https://www.riamoneytransfer.com/ca/en" }, 
    { lang: "en-gb", type: "homepage", uid: "home", url: "/en-gb", newUrl: "https://www.riamoneytransfer.com/gb/en" }, 
  ];
  const filteredCountries = uniqueCountries.filter((item)=>!excludeCountry.includes(item.lang.slice(-2).toLowerCase()))


  const manuallyCountries = excludeCountry2.map(
    (altLang, index) => (
      <a
        key={`alt-lang-${index}`}
        onClick={() => window.location.href=altLang.newUrl}
      >
        <div className="item">
          <FlagResolver code={altLang.lang.slice(-2).toUpperCase()} />
          {CountryHandler(altLang.lang.slice(-2).toLowerCase())}
        </div>
      </a>
    )
  );

  //It iterates the unique countries array, taking away the current country from the list
  const alternateCountries = filteredCountries.map(
    (altLang, index) => altLang.lang.slice(-2) !== currentLang.slice(-2) && (
      <a
        key={`alt-lang-${index}`}
        href={`./${altLang.url.slice(1)}`}
      >
        <div className="item">
          <FlagResolver code={altLang.lang.slice(-2).toUpperCase()} />
          {CountryHandler(altLang.lang.slice(-2).toLowerCase())}
        </div>
      </a>
    )
  );

  useEffect(()=>{
    setCountryItems(document.querySelectorAll('.country-flags a').length)
  },[])

  return (
    <CountryDropdownContainer>
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
        
          <div className="list-wrap-mannualy">
            {manuallyCountries}
          </div>

        </div>
      </div>
    </CountryDropdownContainer>
  );
};

CountryDropdown.propTypes = {
  currentLanguage: PropTypes.oneOf(['en-us','en-be','en-dk','en-gb','en-ro','en-no','de-ch','en-lu','en-ie','en-at','en-it','en-pl','en-fr','en-pt','da-dk','en-ca','en-gr',
  'en-nl','en-fi','de-at','en-ch','en-au','de-de','en-lt','tl-au','it-it','fr-fr','lt-lt','nl-nl','nl-be','fr-lu','th-au','nb-no','tl-nz','fr-be','ne-my','vi-au','th-nz',
  'en-se','en-de','fi-fi','vi-nz','sv-se','bn-my','id-my','fr-ca','ms-my','vi-ca','fr-ch','it-ch','en-nz','en-my','es-us','en-es','vi-us','en-cl','es-cl','es-es']),
  alternateLanguages: PropTypes.arrayOf(string)
};

CountryDropdown.defaultProps = {
  currentLanguage: 'en-us',
  alternateLanguages: {alternateLanguages}
};
