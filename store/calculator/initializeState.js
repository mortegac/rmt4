// sentoToCountry = Array con Listado de paises habilitados para enviar dinero
// selections = object con datos seleccionados desde la UI
// calculations =  object con calculos realizados
// transferOptions =  object con array de :
//                    - metodos de pagos
//                    - metodos de recepcion del dinero
//                    - tipos de monedas de Envio
//                    - tipos de monedas de Recepción
//                    - Listado de paises donde se pueden enviar el dinero

// "countryTo": null,
export const errorState = {
  selections: {
    countryFrom: null,
    amountFrom: null,
    amountTo: null,
    currencyTo: null,
    paymentMethod: null,
    deliveryMethod: null,
    shouldCalcAmountFrom: false,
    shouldCalcVariableRates: true,
    state: null,
    agentToId: null,
    stateTo: null,
    currencyFrom: null,
    agentToLocationId: null,
    promoCode: null,
    promoId: 0,
    transferReason: null,
  },
  calculations: {
    exchangeRate: "-",
    amountFrom: "-",
    amountTo: "-",
  },
  transferOptions: {
    currenciesFrom: [],
    currencies: [],
    paymentMethods: [],
    deliveryMethods: [],
    sentoToCountry: [
      {
        category: null,
        value: "",
        text: "Select a country",
        sys: null,
      },
      {
        category: null,
        value: "CO",
        text: "Colombia",
        contentTypeId: null,
        sys: null,
      },
      {
        category: null,
        value: "PE",
        text: "Peru",
        contentTypeId: null,
        sys: null,
      },
      {
        category: null,
        value: "HT",
        text: "Haiti",
        contentTypeId: null,
        sys: null,
      },
      {
        category: null,
        value: "BO",
        text: "Bolivia",
        contentTypeId: null,
        sys: null,
      },
      {
        category: null,
        value: "DO",
        text: "Dominican Republic",
        contentTypeId: null,
        sys: null,
      },
      { type: "separator" },
      {
        category: null,
        value: "AL",
        text: "Albania",
        sys: null,
      },
      {
        category: null,
        value: "AG",
        text: "Antigua",
        sys: null,
      },
      {
        category: null,
        value: "AR",
        text: "Argentina",
        sys: null,
      },
      {
        category: null,
        value: "AM",
        text: "Armenia",
        sys: null,
      },
      {
        category: null,
        value: "AU",
        text: "Australia",
        sys: null,
      },
      {
        category: null,
        value: "AT",
        text: "Austria",
        sys: null,
      },
      {
        category: null,
        value: "BS",
        text: "Bahamas",
        sys: null,
      },
      {
        category: null,
        value: "BH",
        text: "Bahrain",
        sys: null,
      },
      {
        category: null,
        value: "BD",
        text: "Bangladesh",
        sys: null,
      },
      {
        category: null,
        value: "BY",
        text: "Belarus",
        sys: null,
      },
      {
        category: null,
        value: "BE",
        text: "Belgium",
        sys: null,
      },
      {
        category: null,
        value: "BJ",
        text: "Benin",
        sys: null,
      },
      {
        category: null,
        value: "BT",
        text: "Bhutan",
        sys: null,
      },
      {
        category: null,
        value: "BO",
        text: "Bolivia",
        sys: null,
      },
      {
        category: null,
        value: "BA",
        text: "Bosnia and Herzegovina",
        sys: null,
      },
      {
        category: null,
        value: "BW",
        text: "Botswana",
        sys: null,
      },
      {
        category: null,
        value: "BR",
        text: "Brazil",
        sys: null,
      },
      {
        category: null,
        value: "BN",
        text: "Brunei Darussalam",
        sys: null,
      },
      {
        category: null,
        value: "BG",
        text: "Bulgaria",
        sys: null,
      },
      {
        category: null,
        value: "BF",
        text: "Burkina Faso",
        sys: null,
      },
      {
        category: null,
        value: "BI",
        text: "Burundi",
        sys: null,
      },
      {
        category: null,
        value: "KH",
        text: "Cambodia",
        sys: null,
      },
      {
        category: null,
        value: "CM",
        text: "Cameroon",
        sys: null,
      },
      {
        category: null,
        value: "CA",
        text: "Canada",
        sys: null,
      },
      {
        category: null,
        value: "CV",
        text: "Cape Verde",
        sys: null,
      },
      {
        category: null,
        value: "TD",
        text: "Chad",
        sys: null,
      },
      {
        category: null,
        value: "CL",
        text: "Chile",
        sys: null,
      },
      {
        category: null,
        value: "CN",
        text: "China",
        sys: null,
      },
      {
        category: null,
        value: "CO",
        text: "Colombia",
        sys: null,
      },
      {
        category: null,
        value: "KM",
        text: "Comoros",
        sys: null,
      },
      {
        category: null,
        value: "CG",
        text: "Congo",
        sys: null,
      },
      {
        category: null,
        value: "CD",
        text: "Congo Democratic Republic",
        sys: null,
      },
      {
        category: null,
        value: "CR",
        text: "Costa Rica",
        sys: null,
      },
      {
        category: null,
        value: "CI",
        text: "Cote d'Ivoire",
        sys: null,
      },
      {
        category: null,
        value: "HR",
        text: "Croatia",
        sys: null,
      },
      {
        category: null,
        value: "CY",
        text: "Cyprus",
        sys: null,
      },
      {
        category: null,
        value: "CZ",
        text: "Czech Republic",
        sys: null,
      },
      {
        category: null,
        value: "DK",
        text: "Denmark",
        sys: null,
      },
      {
        category: null,
        value: "DJ",
        text: "Djibouti",
        sys: null,
      },
      {
        category: null,
        value: "DM",
        text: "Dominica",
        sys: null,
      },
      {
        category: null,
        value: "DO",
        text: "Dominican Republic",
        sys: null,
      },
      {
        category: null,
        value: "EC",
        text: "Ecuador",
        sys: null,
      },
      {
        category: null,
        value: "EG",
        text: "Egypt",
        sys: null,
      },
      {
        category: null,
        value: "SV",
        text: "El Salvador",
        sys: null,
      },
      {
        category: null,
        value: "GQ",
        text: "Equatorial Guinea",
        sys: null,
      },
      {
        category: null,
        value: "ER",
        text: "Eritrea",
        sys: null,
      },
      {
        category: null,
        value: "EE",
        text: "Estonia",
        sys: null,
      },
      {
        category: null,
        value: "ET",
        text: "Ethiopia",
        sys: null,
      },
      {
        category: null,
        value: "FJ",
        text: "Fiji",
        sys: null,
      },
      {
        category: null,
        value: "FI",
        text: "Finland",
        sys: null,
      },
      {
        category: null,
        value: "FR",
        text: "France",
        sys: null,
      },
      {
        category: null,
        value: "GA",
        text: "Gabon",
        sys: null,
      },
      {
        category: null,
        value: "GM",
        text: "Gambia",
        sys: null,
      },
      {
        category: null,
        value: "GE",
        text: "Georgia",
        sys: null,
      },
      {
        category: null,
        value: "DE",
        text: "Germany",
        sys: null,
      },
      {
        category: null,
        value: "GH",
        text: "Ghana",
        sys: null,
      },
      {
        category: null,
        value: "GI",
        text: "Gibraltar",
        sys: null,
      },
      {
        category: null,
        value: "GR",
        text: "Greece",
        sys: null,
      },
      {
        category: null,
        value: "GT",
        text: "Guatemala",
        sys: null,
      },
      {
        category: null,
        value: "GN",
        text: "Guinea",
        sys: null,
      },
      {
        category: null,
        value: "GW",
        text: "Guinea-Bissau",
        sys: null,
      },
      {
        category: null,
        value: "GY",
        text: "Guyana",
        sys: null,
      },
      {
        category: null,
        value: "HT",
        text: "Haiti",
        sys: null,
      },
      {
        category: null,
        value: "HN",
        text: "Honduras",
        sys: null,
      },
      {
        category: null,
        value: "HK",
        text: "Hong Kong",
        sys: null,
      },
      {
        category: null,
        value: "HU",
        text: "Hungary",
        sys: null,
      },
      {
        category: null,
        value: "IS",
        text: "Iceland",
        sys: null,
      },
      {
        category: null,
        value: "IN",
        text: "India",
        sys: null,
      },
      {
        category: null,
        value: "ID",
        text: "Indonesia",
        sys: null,
      },
      {
        category: null,
        value: "IE",
        text: "Ireland",
        sys: null,
      },
      {
        category: null,
        value: "IL",
        text: "Israel",
        sys: null,
      },
      {
        category: null,
        value: "IT",
        text: "Italy",
        sys: null,
      },
      {
        category: null,
        value: "JM",
        text: "Jamaica",
        sys: null,
      },
      {
        category: null,
        value: "JP",
        text: "Japan",
        sys: null,
      },
      {
        category: null,
        value: "JO",
        text: "Jordan",
        sys: null,
      },
      {
        category: null,
        value: "KZ",
        text: "Kazakhstan",
        sys: null,
      },
      {
        category: null,
        value: "KE",
        text: "Kenya",
        sys: null,
      },
      {
        category: null,
        value: "KR",
        text: "Korea, South",
        sys: null,
      },
      {
        category: null,
        value: "KV",
        text: "Kosovo",
        sys: null,
      },
      {
        category: null,
        value: "KW",
        text: "Kuwait",
        sys: null,
      },
      {
        category: null,
        value: "KG",
        text: "Kyrgyzstan",
        sys: null,
      },
      {
        category: null,
        value: "LA",
        text: "Laos",
        sys: null,
      },
      {
        category: null,
        value: "LV",
        text: "Latvia",
        sys: null,
      },
      {
        category: null,
        value: "LB",
        text: "Lebanon",
        sys: null,
      },
      {
        category: null,
        value: "LR",
        text: "Liberia",
        sys: null,
      },
      {
        category: null,
        value: "LI",
        text: "Liechtenstein",
        sys: null,
      },
      {
        category: null,
        value: "LT",
        text: "Lithuania",
        sys: null,
      },
      {
        category: null,
        value: "LU",
        text: "Luxembourg",
        sys: null,
      },
      {
        category: null,
        value: "MK",
        text: "Macedonia",
        sys: null,
      },
      {
        category: null,
        value: "MG",
        text: "Madagascar",
        sys: null,
      },
      {
        category: null,
        value: "MW",
        text: "Malawi",
        sys: null,
      },
      {
        category: null,
        value: "MY",
        text: "Malaysia",
        sys: null,
      },
      {
        category: null,
        value: "ML",
        text: "Mali",
        sys: null,
      },
      {
        category: null,
        value: "MT",
        text: "Malta",
        sys: null,
      },
      {
        category: null,
        value: "MR",
        text: "Mauritania",
        sys: null,
      },
      {
        category: null,
        value: "MU",
        text: "Mauritius",
        sys: null,
      },
      {
        category: null,
        value: "MX",
        text: "Mexico",
        sys: null,
      },
      {
        category: null,
        value: "MD",
        text: "Moldova, Republic of",
        sys: null,
      },
      {
        category: null,
        value: "MC",
        text: "Monaco",
        sys: null,
      },
      {
        category: null,
        value: "MN",
        text: "Mongolia",
        sys: null,
      },
      {
        category: null,
        value: "ME",
        text: "Montenegro",
        sys: null,
      },
      {
        category: null,
        value: "MA",
        text: "Morocco",
        sys: null,
      },
      {
        category: null,
        value: "MZ",
        text: "Mozambique",
        sys: null,
      },
      {
        category: null,
        value: "MM",
        text: "Myanmar",
        sys: null,
      },
      {
        category: null,
        value: "NP",
        text: "Nepal",
        sys: null,
      },
      {
        category: null,
        value: "NL",
        text: "Netherlands",
        sys: null,
      },
      {
        category: null,
        value: "NZ",
        text: "New Zealand",
        sys: null,
      },
      {
        category: null,
        value: "NI",
        text: "Nicaragua",
        sys: null,
      },
      {
        category: null,
        value: "NE",
        text: "Niger Republic of",
        sys: null,
      },
      {
        category: null,
        value: "NG",
        text: "Nigeria",
        sys: null,
      },
      {
        category: null,
        value: "NO",
        text: "Norway",
        sys: null,
      },
      {
        category: null,
        value: "OM",
        text: "Oman",
        sys: null,
      },
      {
        category: null,
        value: "PK",
        text: "Pakistan",
        sys: null,
      },
      {
        category: null,
        value: "PS",
        text: "Palestine",
        sys: null,
      },
      {
        category: null,
        value: "PA",
        text: "Panama",
        sys: null,
      },
      {
        category: null,
        value: "PY",
        text: "Paraguay",
        sys: null,
      },
      {
        category: null,
        value: "PE",
        text: "Peru",
        sys: null,
      },
      {
        category: null,
        value: "PH",
        text: "Philippines",
        sys: null,
      },
      {
        category: null,
        value: "PL",
        text: "Poland",
        sys: null,
      },
      {
        category: null,
        value: "PT",
        text: "Portugal",
        sys: null,
      },
      {
        category: null,
        value: "PR",
        text: "Puerto Rico",
        sys: null,
      },
      {
        category: null,
        value: "QA",
        text: "Qatar",
        sys: null,
      },
      {
        category: null,
        value: "RO",
        text: "Romania",
        sys: null,
      },
      {
        category: null,
        value: "RU",
        text: "Russia",
        sys: null,
      },
      {
        category: null,
        value: "RW",
        text: "Rwanda",
        sys: null,
      },
      {
        category: null,
        value: "KN",
        text: "Saint Kitts And Nevis",
        sys: null,
      },
      {
        category: null,
        value: "VC",
        text: "Saint Vincent and the Grenadin",
        sys: null,
      },
      {
        category: null,
        value: "WS",
        text: "Samoa",
        sys: null,
      },
      {
        category: null,
        value: "SM",
        text: "San Marino",
        sys: null,
      },
      {
        category: null,
        value: "SA",
        text: "Saudi Arabia",
        sys: null,
      },
      {
        category: null,
        value: "SN",
        text: "Senegal",
        sys: null,
      },
      {
        category: null,
        value: "RS",
        text: "Serbia",
        sys: null,
      },
      {
        category: null,
        value: "SC",
        text: "Seychelles",
        sys: null,
      },
      {
        category: null,
        value: "SL",
        text: "Sierra Leone",
        sys: null,
      },
      {
        category: null,
        value: "SG",
        text: "Singapore",
        sys: null,
      },
      {
        category: null,
        value: "SK",
        text: "Slovakia",
        sys: null,
      },
      {
        category: null,
        value: "SI",
        text: "Slovenia",
        sys: null,
      },
      {
        category: null,
        value: "ZA",
        text: "South Africa",
        sys: null,
      },
      {
        category: null,
        value: "ES",
        text: "Spain",
        sys: null,
      },
      {
        category: null,
        value: "LK",
        text: "Sri Lanka",
        sys: null,
      },
      {
        category: null,
        value: "SE",
        text: "Sweden",
        sys: null,
      },
      {
        category: null,
        value: "CH",
        text: "Switzerland",
        sys: null,
      },
      {
        category: null,
        value: "TJ",
        text: "Tajikistan",
        sys: null,
      },
      {
        category: null,
        value: "TZ",
        text: "Tanzania",
        sys: null,
      },
      {
        category: null,
        value: "TH",
        text: "Thailand",
        sys: null,
      },
      {
        category: null,
        value: "TG",
        text: "Togo",
        sys: null,
      },
      {
        category: null,
        value: "TO",
        text: "Tonga",
        sys: null,
      },
      {
        category: null,
        value: "TT",
        text: "Trinidad",
        sys: null,
      },
      {
        category: null,
        value: "TN",
        text: "Tunisia",
        sys: null,
      },
      {
        category: null,
        value: "TR",
        text: "Turkey",
        sys: null,
      },
      {
        category: null,
        value: "UG",
        text: "Uganda",
        sys: null,
      },
      {
        category: null,
        value: "UA",
        text: "Ukraine",
        sys: null,
      },
      {
        category: null,
        value: "AE",
        text: "United Arab Emirates",
        sys: null,
      },
      {
        category: null,
        value: "UK",
        text: "United Kingdom",
        sys: null,
      },
      {
        category: null,
        value: "US",
        text: "United States",
        sys: null,
      },
      {
        category: null,
        value: "UY",
        text: "Uruguay",
        sys: null,
      },
      {
        category: null,
        value: "UZ",
        text: "Uzbekistan",
        sys: null,
      },
      {
        category: null,
        value: "VN",
        text: "Vietnam",
        sys: null,
      },
      {
        category: null,
        value: "VI",
        text: "Virgin Islands, US",
        sys: null,
      },
      {
        category: null,
        value: "YE",
        text: "Yemen",
        sys: null,
      },
      {
        category: null,
        value: "ZM",
        text: "Zambia",
        sys: null,
      },
      {
        category: null,
        value: "ZW",
        text: "Zimbabwe",
        sys: null,
      },
    ],
  },
  fetching: true,
  isFailed: true,
  isFailedText: "",
  countryFullFrom: "",
};

// export const errorState={
//   "selections":{
//     "countryFrom": null,
//     "countryTo": null,
//     "amountFrom":null,
//     "amountTo":null,
//     "currencyTo":null,
//     "paymentMethod":null,
//     "deliveryMethod":null,
//     "shouldCalcAmountFrom":false,
//     "shouldCalcVariableRates":true,
//     "state":null,
//     "agentToId":null,
//     "stateTo":null,
//     // "currencyFrom":"USD",
//     "agentToLocationId":null,
//     "promoCode":null,
//     "promoId":0,
//     "transferReason":null,
//   },
//   "calculations":{
//     "exchangeRate":'-',
//     "amountFrom":'-',
//     "amountTo":'-',
//   },
//   "transferOptions":{
//     "currenciesFrom":[],
//     "currencies":[],
//     "paymentMethods":[],
//     "deliveryMethods":[],
//     "sentoToCountry": [
//       {
//         "category": null,
//         "value": "",
//         "text": "Select a country",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AL",
//         "text": "Albania",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AG",
//         "text": "Antigua",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AR",
//         "text": "Argentina",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AM",
//         "text": "Armenia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AU",
//         "text": "Australia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AT",
//         "text": "Austria",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BS",
//         "text": "Bahamas",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BH",
//         "text": "Bahrain",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BD",
//         "text": "Bangladesh",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BY",
//         "text": "Belarus",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BE",
//         "text": "Belgium",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BJ",
//         "text": "Benin",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BT",
//         "text": "Bhutan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BO",
//         "text": "Bolivia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BA",
//         "text": "Bosnia and Herzegovina",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BW",
//         "text": "Botswana",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BR",
//         "text": "Brazil",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BN",
//         "text": "Brunei Darussalam",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BG",
//         "text": "Bulgaria",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BF",
//         "text": "Burkina Faso",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "BI",
//         "text": "Burundi",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KH",
//         "text": "Cambodia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CM",
//         "text": "Cameroon",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CA",
//         "text": "Canada",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CV",
//         "text": "Cape Verde",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TD",
//         "text": "Chad",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CL",
//         "text": "Chile",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CN",
//         "text": "China",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CO",
//         "text": "Colombia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KM",
//         "text": "Comoros",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CG",
//         "text": "Congo",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CD",
//         "text": "Congo Democratic Republic",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CR",
//         "text": "Costa Rica",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CI",
//         "text": "Cote d'Ivoire",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "HR",
//         "text": "Croatia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CY",
//         "text": "Cyprus",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CZ",
//         "text": "Czech Republic",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "DK",
//         "text": "Denmark",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "DJ",
//         "text": "Djibouti",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "DM",
//         "text": "Dominica",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "DO",
//         "text": "Dominican Republic",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "EC",
//         "text": "Ecuador",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "EG",
//         "text": "Egypt",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SV",
//         "text": "El Salvador",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GQ",
//         "text": "Equatorial Guinea",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ER",
//         "text": "Eritrea",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "EE",
//         "text": "Estonia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ET",
//         "text": "Ethiopia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "FJ",
//         "text": "Fiji",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "FI",
//         "text": "Finland",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "FR",
//         "text": "France",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GA",
//         "text": "Gabon",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GM",
//         "text": "Gambia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GE",
//         "text": "Georgia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "DE",
//         "text": "Germany",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GH",
//         "text": "Ghana",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GI",
//         "text": "Gibraltar",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GR",
//         "text": "Greece",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GT",
//         "text": "Guatemala",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GN",
//         "text": "Guinea",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GW",
//         "text": "Guinea-Bissau",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "GY",
//         "text": "Guyana",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "HT",
//         "text": "Haiti",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "HN",
//         "text": "Honduras",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "HK",
//         "text": "Hong Kong",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "HU",
//         "text": "Hungary",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "IS",
//         "text": "Iceland",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "IN",
//         "text": "India",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ID",
//         "text": "Indonesia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "IE",
//         "text": "Ireland",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "IL",
//         "text": "Israel",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "IT",
//         "text": "Italy",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "JM",
//         "text": "Jamaica",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "JP",
//         "text": "Japan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "JO",
//         "text": "Jordan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KZ",
//         "text": "Kazakhstan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KE",
//         "text": "Kenya",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KR",
//         "text": "Korea, South",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KV",
//         "text": "Kosovo",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KW",
//         "text": "Kuwait",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KG",
//         "text": "Kyrgyzstan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LA",
//         "text": "Laos",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LV",
//         "text": "Latvia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LB",
//         "text": "Lebanon",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LR",
//         "text": "Liberia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LI",
//         "text": "Liechtenstein",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LT",
//         "text": "Lithuania",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LU",
//         "text": "Luxembourg",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MK",
//         "text": "Macedonia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MG",
//         "text": "Madagascar",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MW",
//         "text": "Malawi",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MY",
//         "text": "Malaysia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ML",
//         "text": "Mali",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MT",
//         "text": "Malta",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MR",
//         "text": "Mauritania",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MU",
//         "text": "Mauritius",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MX",
//         "text": "Mexico",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MD",
//         "text": "Moldova, Republic of",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MC",
//         "text": "Monaco",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MN",
//         "text": "Mongolia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ME",
//         "text": "Montenegro",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MA",
//         "text": "Morocco",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MZ",
//         "text": "Mozambique",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "MM",
//         "text": "Myanmar",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NP",
//         "text": "Nepal",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NL",
//         "text": "Netherlands",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NZ",
//         "text": "New Zealand",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NI",
//         "text": "Nicaragua",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NE",
//         "text": "Niger Republic of",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NG",
//         "text": "Nigeria",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "NO",
//         "text": "Norway",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "OM",
//         "text": "Oman",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PK",
//         "text": "Pakistan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PS",
//         "text": "Palestine",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PA",
//         "text": "Panama",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PY",
//         "text": "Paraguay",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PE",
//         "text": "Peru",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PH",
//         "text": "Philippines",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PL",
//         "text": "Poland",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PT",
//         "text": "Portugal",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "PR",
//         "text": "Puerto Rico",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "QA",
//         "text": "Qatar",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "RO",
//         "text": "Romania",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "RU",
//         "text": "Russia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "RW",
//         "text": "Rwanda",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "KN",
//         "text": "Saint Kitts And Nevis",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "VC",
//         "text": "Saint Vincent and the Grenadin",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "WS",
//         "text": "Samoa",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SM",
//         "text": "San Marino",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SA",
//         "text": "Saudi Arabia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SN",
//         "text": "Senegal",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "RS",
//         "text": "Serbia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SC",
//         "text": "Seychelles",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SL",
//         "text": "Sierra Leone",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SG",
//         "text": "Singapore",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SK",
//         "text": "Slovakia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SI",
//         "text": "Slovenia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ZA",
//         "text": "South Africa",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ES",
//         "text": "Spain",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "LK",
//         "text": "Sri Lanka",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "SE",
//         "text": "Sweden",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "CH",
//         "text": "Switzerland",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TJ",
//         "text": "Tajikistan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TZ",
//         "text": "Tanzania",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TH",
//         "text": "Thailand",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TG",
//         "text": "Togo",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TO",
//         "text": "Tonga",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TT",
//         "text": "Trinidad",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TN",
//         "text": "Tunisia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "TR",
//         "text": "Turkey",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "UG",
//         "text": "Uganda",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "UA",
//         "text": "Ukraine",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "AE",
//         "text": "United Arab Emirates",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "UK",
//         "text": "United Kingdom",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "US",
//         "text": "United States",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "UY",
//         "text": "Uruguay",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "UZ",
//         "text": "Uzbekistan",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "VN",
//         "text": "Vietnam",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "VI",
//         "text": "Virgin Islands, US",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "YE",
//         "text": "Yemen",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ZM",
//         "text": "Zambia",
//         "sys": null
//       },
//       {
//         "category": null,
//         "value": "ZW",
//         "text": "Zimbabwe",
//         "sys": null
//       }
//     ],
//   },
//   fetching:true,
//   isFailed:true,
// isFailedText:'',
//   countryFullFrom:'',
// };

export const initialState = {
  selections: {
    countryTo: "MX",
    amountFrom: 100,
    amountTo: null,
    currencyFrom: "USD",
    currencyTo: null,
    paymentMethod: "PayNearMe",
    deliveryMethod: "OfficePickup",
    // "paymentMethod":"BankAccount",
    // "deliveryMethod":"OfficePickup",
    shouldCalcAmountFrom: false,
    shouldCalcVariableRates: true,
    state: null,
    agentToId: null,
    stateTo: null,
    agentToLocationId: null,
    promoCode: null,
    promoId: 0,
    transferReason: null,
  },
  calculations: {
    exchangeRate: 0,
  },
  transferOptions: {
    currenciesFrom: [],
    currencies: [],
    paymentMethods: [],
    deliveryMethods: [],
    sentoToCountry: [
      {
        category: null,
        value: "",
        text: "Select a country",
        sys: null,
      },
      // {"category": null, "value": 'CO', "text": 'Colombia', "contentTypeId": null, "sys": null},
      // {"category": null, "value": 'PE', "text": 'Peru', "contentTypeId": null, "sys": null},
      // {"category": null, "value": 'HT', "text": 'Haiti', "contentTypeId": null, "sys": null},
      // {"category": null, "value": 'BO', "text": 'Bolivia', "contentTypeId": null, "sys": null},
      // {"category": null, "value": 'DO', "text": 'Dominican Republic', "contentTypeId": null, "sys": null},
      // {"type": 'separator'},
      {
        category: null,
        value: "AF",
        text: "Afghanistan",
        sys: null,
      },
      {
        category: null,
        value: "AL",
        text: "Albania",
        sys: null,
      },
      {
        category: null,
        value: "AG",
        text: "Antigua",
        sys: null,
      },
      {
        category: null,
        value: "AR",
        text: "Argentina",
        sys: null,
      },
      {
        category: null,
        value: "AM",
        text: "Armenia",
        sys: null,
      },
      {
        category: null,
        value: "AU",
        text: "Australia",
        sys: null,
      },
      {
        category: null,
        value: "AT",
        text: "Austria",
        sys: null,
      },
      {
        category: null,
        value: "BS",
        text: "Bahamas",
        sys: null,
      },
      {
        category: null,
        value: "BH",
        text: "Bahrain",
        sys: null,
      },
      {
        category: null,
        value: "BD",
        text: "Bangladesh",
        sys: null,
      },
      {
        category: null,
        value: "BY",
        text: "Belarus",
        sys: null,
      },
      {
        category: null,
        value: "BE",
        text: "Belgium",
        sys: null,
      },
      {
        category: null,
        value: "BJ",
        text: "Benin",
        sys: null,
      },
      {
        category: null,
        value: "BT",
        text: "Bhutan",
        sys: null,
      },
      {
        category: null,
        value: "BO",
        text: "Bolivia",
        sys: null,
      },
      {
        category: null,
        value: "BA",
        text: "Bosnia and Herzegovina",
        sys: null,
      },
      {
        category: null,
        value: "BW",
        text: "Botswana",
        sys: null,
      },
      {
        category: null,
        value: "BR",
        text: "Brazil",
        sys: null,
      },
      {
        category: null,
        value: "BN",
        text: "Brunei Darussalam",
        sys: null,
      },
      {
        category: null,
        value: "BG",
        text: "Bulgaria",
        sys: null,
      },
      {
        category: null,
        value: "BF",
        text: "Burkina Faso",
        sys: null,
      },
      {
        category: null,
        value: "BI",
        text: "Burundi",
        sys: null,
      },
      {
        category: null,
        value: "KH",
        text: "Cambodia",
        sys: null,
      },
      {
        category: null,
        value: "CM",
        text: "Cameroon",
        sys: null,
      },
      {
        category: null,
        value: "CA",
        text: "Canada",
        sys: null,
      },
      {
        category: null,
        value: "CV",
        text: "Cape Verde",
        sys: null,
      },
      {
        category: null,
        value: "TD",
        text: "Chad",
        sys: null,
      },
      {
        category: null,
        value: "CL",
        text: "Chile",
        sys: null,
      },
      {
        category: null,
        value: "CN",
        text: "China",
        sys: null,
      },
      {
        category: null,
        value: "CO",
        text: "Colombia",
        sys: null,
      },
      {
        category: null,
        value: "KM",
        text: "Comoros",
        sys: null,
      },
      {
        category: null,
        value: "CG",
        text: "Congo",
        sys: null,
      },
      {
        category: null,
        value: "CD",
        text: "Congo Democratic Republic",
        sys: null,
      },
      {
        category: null,
        value: "CR",
        text: "Costa Rica",
        sys: null,
      },
      {
        category: null,
        value: "CI",
        text: "Cote d'Ivoire",
        sys: null,
      },
      {
        category: null,
        value: "HR",
        text: "Croatia",
        sys: null,
      },
      {
        category: null,
        value: "CY",
        text: "Cyprus",
        sys: null,
      },
      {
        category: null,
        value: "CZ",
        text: "Czech Republic",
        sys: null,
      },
      {
        category: null,
        value: "DK",
        text: "Denmark",
        sys: null,
      },
      {
        category: null,
        value: "DJ",
        text: "Djibouti",
        sys: null,
      },
      {
        category: null,
        value: "DM",
        text: "Dominica",
        sys: null,
      },
      {
        category: null,
        value: "DO",
        text: "Dominican Republic",
        sys: null,
      },
      {
        category: null,
        value: "EC",
        text: "Ecuador",
        sys: null,
      },
      {
        category: null,
        value: "EG",
        text: "Egypt",
        sys: null,
      },
      {
        category: null,
        value: "SV",
        text: "El Salvador",
        sys: null,
      },
      {
        category: null,
        value: "GQ",
        text: "Equatorial Guinea",
        sys: null,
      },
      {
        category: null,
        value: "ER",
        text: "Eritrea",
        sys: null,
      },
      {
        category: null,
        value: "EE",
        text: "Estonia",
        sys: null,
      },
      {
        category: null,
        value: "ET",
        text: "Ethiopia",
        sys: null,
      },
      {
        category: null,
        value: "FJ",
        text: "Fiji",
        sys: null,
      },
      {
        category: null,
        value: "FI",
        text: "Finland",
        sys: null,
      },
      {
        category: null,
        value: "FR",
        text: "France",
        sys: null,
      },
      {
        category: null,
        value: "GA",
        text: "Gabon",
        sys: null,
      },
      {
        category: null,
        value: "GM",
        text: "Gambia",
        sys: null,
      },
      {
        category: null,
        value: "GE",
        text: "Georgia",
        sys: null,
      },
      {
        category: null,
        value: "DE",
        text: "Germany",
        sys: null,
      },
      {
        category: null,
        value: "GH",
        text: "Ghana",
        sys: null,
      },
      {
        category: null,
        value: "GI",
        text: "Gibraltar",
        sys: null,
      },
      {
        category: null,
        value: "GR",
        text: "Greece",
        sys: null,
      },
      {
        category: null,
        value: "GT",
        text: "Guatemala",
        sys: null,
      },
      {
        category: null,
        value: "GN",
        text: "Guinea",
        sys: null,
      },
      {
        category: null,
        value: "GW",
        text: "Guinea-Bissau",
        sys: null,
      },
      {
        category: null,
        value: "GY",
        text: "Guyana",
        sys: null,
      },
      {
        category: null,
        value: "HT",
        text: "Haiti",
        sys: null,
      },
      {
        category: null,
        value: "HN",
        text: "Honduras",
        sys: null,
      },
      {
        category: null,
        value: "HK",
        text: "Hong Kong",
        sys: null,
      },
      {
        category: null,
        value: "HU",
        text: "Hungary",
        sys: null,
      },
      {
        category: null,
        value: "IS",
        text: "Iceland",
        sys: null,
      },
      {
        category: null,
        value: "IN",
        text: "India",
        sys: null,
      },
      {
        category: null,
        value: "ID",
        text: "Indonesia",
        sys: null,
      },
      {
        category: null,
        value: "IE",
        text: "Ireland",
        sys: null,
      },
      {
        category: null,
        value: "IL",
        text: "Israel",
        sys: null,
      },
      {
        category: null,
        value: "IT",
        text: "Italy",
        sys: null,
      },
      {
        category: null,
        value: "JM",
        text: "Jamaica",
        sys: null,
      },
      {
        category: null,
        value: "JP",
        text: "Japan",
        sys: null,
      },
      {
        category: null,
        value: "JO",
        text: "Jordan",
        sys: null,
      },
      {
        category: null,
        value: "KZ",
        text: "Kazakhstan",
        sys: null,
      },
      {
        category: null,
        value: "KE",
        text: "Kenya",
        sys: null,
      },
      {
        category: null,
        value: "KR",
        text: "Korea, South",
        sys: null,
      },
      {
        category: null,
        value: "KV",
        text: "Kosovo",
        sys: null,
      },
      {
        category: null,
        value: "KW",
        text: "Kuwait",
        sys: null,
      },
      {
        category: null,
        value: "KG",
        text: "Kyrgyzstan",
        sys: null,
      },
      {
        category: null,
        value: "LA",
        text: "Laos",
        sys: null,
      },
      {
        category: null,
        value: "LV",
        text: "Latvia",
        sys: null,
      },
      {
        category: null,
        value: "LB",
        text: "Lebanon",
        sys: null,
      },
      {
        category: null,
        value: "LR",
        text: "Liberia",
        sys: null,
      },
      {
        category: null,
        value: "LI",
        text: "Liechtenstein",
        sys: null,
      },
      {
        category: null,
        value: "LT",
        text: "Lithuania",
        sys: null,
      },
      {
        category: null,
        value: "LU",
        text: "Luxembourg",
        sys: null,
      },
      {
        category: null,
        value: "MK",
        text: "Macedonia",
        sys: null,
      },
      {
        category: null,
        value: "MG",
        text: "Madagascar",
        sys: null,
      },
      {
        category: null,
        value: "MW",
        text: "Malawi",
        sys: null,
      },
      {
        category: null,
        value: "MY",
        text: "Malaysia",
        sys: null,
      },
      {
        category: null,
        value: "ML",
        text: "Mali",
        sys: null,
      },
      {
        category: null,
        value: "MT",
        text: "Malta",
        sys: null,
      },
      {
        category: null,
        value: "MR",
        text: "Mauritania",
        sys: null,
      },
      {
        category: null,
        value: "MU",
        text: "Mauritius",
        sys: null,
      },
      {
        category: null,
        value: "MX",
        text: "Mexico",
        sys: null,
      },
      {
        category: null,
        value: "MD",
        text: "Moldova, Republic of",
        sys: null,
      },
      {
        category: null,
        value: "MC",
        text: "Monaco",
        sys: null,
      },
      {
        category: null,
        value: "MN",
        text: "Mongolia",
        sys: null,
      },
      {
        category: null,
        value: "ME",
        text: "Montenegro",
        sys: null,
      },
      {
        category: null,
        value: "MA",
        text: "Morocco",
        sys: null,
      },
      {
        category: null,
        value: "MZ",
        text: "Mozambique",
        sys: null,
      },
      {
        category: null,
        value: "MM",
        text: "Myanmar",
        sys: null,
      },
      {
        category: null,
        value: "NP",
        text: "Nepal",
        sys: null,
      },
      {
        category: null,
        value: "NL",
        text: "Netherlands",
        sys: null,
      },
      {
        category: null,
        value: "NZ",
        text: "New Zealand",
        sys: null,
      },
      {
        category: null,
        value: "NI",
        text: "Nicaragua",
        sys: null,
      },
      {
        category: null,
        value: "NE",
        text: "Niger Republic of",
        sys: null,
      },
      {
        category: null,
        value: "NG",
        text: "Nigeria",
        sys: null,
      },
      {
        category: null,
        value: "NO",
        text: "Norway",
        sys: null,
      },
      {
        category: null,
        value: "OM",
        text: "Oman",
        sys: null,
      },
      {
        category: null,
        value: "PK",
        text: "Pakistan",
        sys: null,
      },
      {
        category: null,
        value: "PS",
        text: "Palestine",
        sys: null,
      },
      {
        category: null,
        value: "PA",
        text: "Panama",
        sys: null,
      },
      {
        category: null,
        value: "PY",
        text: "Paraguay",
        sys: null,
      },
      {
        category: null,
        value: "PE",
        text: "Peru",
        sys: null,
      },
      {
        category: null,
        value: "PH",
        text: "Philippines",
        sys: null,
      },
      {
        category: null,
        value: "PL",
        text: "Poland",
        sys: null,
      },
      {
        category: null,
        value: "PT",
        text: "Portugal",
        sys: null,
      },
      {
        category: null,
        value: "PR",
        text: "Puerto Rico",
        sys: null,
      },
      {
        category: null,
        value: "QA",
        text: "Qatar",
        sys: null,
      },
      {
        category: null,
        value: "RO",
        text: "Romania",
        sys: null,
      },
      {
        category: null,
        value: "RU",
        text: "Russia",
        sys: null,
      },
      {
        category: null,
        value: "RW",
        text: "Rwanda",
        sys: null,
      },
      {
        category: null,
        value: "KN",
        text: "Saint Kitts And Nevis",
        sys: null,
      },
      {
        category: null,
        value: "VC",
        text: "Saint Vincent and the Grenadin",
        sys: null,
      },
      {
        category: null,
        value: "WS",
        text: "Samoa",
        sys: null,
      },
      {
        category: null,
        value: "SM",
        text: "San Marino",
        sys: null,
      },
      {
        category: null,
        value: "SA",
        text: "Saudi Arabia",
        sys: null,
      },
      {
        category: null,
        value: "SN",
        text: "Senegal",
        sys: null,
      },
      {
        category: null,
        value: "RS",
        text: "Serbia",
        sys: null,
      },
      {
        category: null,
        value: "SC",
        text: "Seychelles",
        sys: null,
      },
      {
        category: null,
        value: "SL",
        text: "Sierra Leone",
        sys: null,
      },
      {
        category: null,
        value: "SG",
        text: "Singapore",
        sys: null,
      },
      {
        category: null,
        value: "SK",
        text: "Slovakia",
        sys: null,
      },
      {
        category: null,
        value: "SI",
        text: "Slovenia",
        sys: null,
      },
      {
        category: null,
        value: "ZA",
        text: "South Africa",
        sys: null,
      },
      {
        category: null,
        value: "ES",
        text: "Spain",
        sys: null,
      },
      {
        category: null,
        value: "LK",
        text: "Sri Lanka",
        sys: null,
      },
      {
        category: null,
        value: "SE",
        text: "Sweden",
        sys: null,
      },
      {
        category: null,
        value: "CH",
        text: "Switzerland",
        sys: null,
      },
      {
        category: null,
        value: "TJ",
        text: "Tajikistan",
        sys: null,
      },
      {
        category: null,
        value: "TZ",
        text: "Tanzania",
        sys: null,
      },
      {
        category: null,
        value: "TH",
        text: "Thailand",
        sys: null,
      },
      {
        category: null,
        value: "TG",
        text: "Togo",
        sys: null,
      },
      {
        category: null,
        value: "TO",
        text: "Tonga",
        sys: null,
      },
      {
        category: null,
        value: "TT",
        text: "Trinidad",
        sys: null,
      },
      {
        category: null,
        value: "TN",
        text: "Tunisia",
        sys: null,
      },
      {
        category: null,
        value: "TR",
        text: "Turkey",
        sys: null,
      },
      {
        category: null,
        value: "UG",
        text: "Uganda",
        sys: null,
      },
      {
        category: null,
        value: "UA",
        text: "Ukraine",
        sys: null,
      },
      {
        category: null,
        value: "AE",
        text: "United Arab Emirates",
        sys: null,
      },
      {
        category: null,
        value: "UK",
        text: "United Kingdom",
        sys: null,
      },
      {
        category: null,
        value: "US",
        text: "United States",
        sys: null,
      },
      {
        category: null,
        value: "UY",
        text: "Uruguay",
        sys: null,
      },
      {
        category: null,
        value: "UZ",
        text: "Uzbekistan",
        sys: null,
      },
      {
        category: null,
        value: "VN",
        text: "Vietnam",
        sys: null,
      },
      {
        category: null,
        value: "VI",
        text: "Virgin Islands, US",
        sys: null,
      },
      {
        category: null,
        value: "YE",
        text: "Yemen",
        sys: null,
      },
      {
        category: null,
        value: "ZM",
        text: "Zambia",
        sys: null,
      },
      {
        category: null,
        value: "ZW",
        text: "Zimbabwe",
        sys: null,
      },
    ],
  },
  fetching: false,
  isFailed: false,
  isFailedText: "",
  countryFullFrom: "",
};
