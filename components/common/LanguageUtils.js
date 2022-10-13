
export const langOption = (lang) => {
  switch (lang) {
    case "en": return "English";
    case "fr": return "Français";
    case "es": return "Español";
    case "th": return "คนไทย";
    case "tl": return "Tagalog";
    case "de": return "Deutsch";
    case "da": return "Dansk";
    case "vi": return "Tiếng Việt";
    case "nl": return "Nederlands";
    case "fi": return "Suomen kieli";
    case "it": return "Italiano";
    case "nb": return "Norsk bokmål";
    case "sv": return "Svenska";
    case "lt": return "Lietuvių";
    case "pl": return "Polskie";
    case "ro": return "Română";
    case "id": return "Bahasa Indonesia";
    case "ms": return "Melayu";
    case "bn": return "বাংলা";
    case "ne": return "नेपाली";
    case "pt": return "Português";
    case "el": return "Ελληνικά";
    case "cs": return "Čeština";   //cs-cz
    case "fp": return "Pilipino";   //fp-ph
    case "ph": return "Pilipino";   //fp-ph
    case "hu": return "Magyar";   //hu-hu
    case "lv": return "Latviski";   //lv-lv
    case "sk": return "Slovenčina";   //sk-sk
    case "tr": return "Türk";   //tr-tr

      // "cz":"Czechia",
      // "ph":"Philippines",
      // "hu":"Hungary",
      // "lv":"Latvia",
      // "sk":"Slovakia",
      // "tr":"Turkey",
    default: return "";
  }
}
