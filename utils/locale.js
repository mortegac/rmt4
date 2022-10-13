const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export const replaceAll = (str = "", find = "", replace = "") =>
  str.replace(new RegExp(escapeRegExp(find), "g"), replace);

export const isANumberd = (num = "0", separator = ".") => {
  const numStr =
    separator === "."
      ? /^[+]?([0-9]*(?:[\.][0-9]*)?|\.[0-9]*)$/
      : /^[+]?([0-9]*(?:[\,][0-9]*)?|\,[0-9]*)$/;
  return numStr.test(num.toString());
};

export const sanitizeNumber = (value, slugCode = "en-us") => {
  /**
   * Transform string to number
   * Using "." with decimal separator
   */

  // 1- Get separator Decimal
  const decimalSeparator = getDecimalSeparator(slugCode);

  // 2- Calculate separator thousand
  const thousandSeparator = decimalSeparator === "." ? "," : ".";

  // 3- Remove separator thousand
  const valueWithoutThousands = replaceAll(
    value.toString(),
    thousandSeparator,
    ""
  );

  // 4- Replace separator decimal per "."
  const newValue =
    decimalSeparator === ","
      ? replaceAll(valueWithoutThousands.toString(), ",", ".")
      : valueWithoutThousands;

  return newValue;
};
export const addFormatCurrency = (value = 0, slugCode = "en-US") => {
  try {
    const numberWithFormat = new Intl.NumberFormat(slugCode).format(
      String(value)
    );
    return numberWithFormat;
  } catch (error) {
    console.error(`ERROR: ${error}`);
    return value;
  }
};

export const getDecimalSeparator = (locale = "en-us") => {
  try {
    return Intl.NumberFormat(locale)
      .formatToParts(1.1)
      .find(part => part.type === "decimal").value;
  } catch (error) {
    return ".";
  }
};

export const extractSlugCountry = (slug = "en-US") => slug.split("-")[0];

export const CountryHandler = code => {
  const countries = {
    us: "United States",
    ca: "Canada",
    gb: "United Kingdom",
    au: "Australia",
    nz: "New Zealand",
    at: "Österreich",
    dk: "Danmark",
    de: "Deutschland",
    be: "Belgique",
    nl: "Nederland",
    cl: "Chile",
    es: "España",
    fi: "Suomi",
    fr: "France",
    ie: "Ireland",
    it: "Italia",
    lu: "Luxembourg",
    no: "Norge",
    se: "Sverige",
    lt: "Lietuva",
    ch: "Schweiz",
    pl: "Polska",
    ro: "România",
    my: "Malaysia",
    np: "नेपाल",
    pt: "Portugal",
    gr: "Ελλάδα",
    cz: "Czechia",
    ph: "Philippines",
    hu: "Hungary",
    lv: "Latvia",
    sk: "Slovakia",
    tr: "Turkey",
    "": "",
  };

  return countries[code];
};
