export const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + ampm;
  return strTime;
};

export const travelGmaps = (origin, dest, selectedStore) => {
  return (
    "https://www.google.com/maps/dir/?api=1&origin=" +
    origin.toString() +
    "&destination=" +
    dest.toString()
  );
};

export const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? -1000 : 1000,
      opacity: 0,
      background: "#fff",
    };
  },
  center: {
    zIndex: 11,
    y: 0,
    opacity: 1,
    background: "#fff",
    position: "fixed",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
  exit: (direction) => {
    return {
      zIndex: 1,
      y: direction > 0 ? -1000 : 1000,
      opacity: 0,
    };
  },
};

export const deskVariants = {
  enter: (direction) => {
    return {
      opacity: 0,
    };
  },
  center: {
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 1,
      opacity: 0,
    };
  },
};

export const translateDays = ({ day, locationsTexts }) => {
  switch (day) {
    case "monday":
      return locationsTexts.monday[0].text
        ? locationsTexts.monday[0].text
        : "Monday";
    case "tuesday":
      return locationsTexts.tuesday[0].text
        ? locationsTexts.tuesday[0].text
        : "Tuesday";
    case "wednesday":
      return locationsTexts.wednesday[0].text
        ? locationsTexts.wednesday[0].text
        : "Wednesday";
    case "thursday":
      return locationsTexts.thursday[0].text
        ? locationsTexts.thursday[0].text
        : "Thursday";
    case "friday":
      return locationsTexts.friday[0].text
        ? locationsTexts.friday[0].text
        : "Friday";
    case "saturday":
      return locationsTexts.saturday[0].text
        ? locationsTexts.saturday[0].text
        : "Saturday";
    case "sunday":
      return locationsTexts.sunday[0].text
        ? locationsTexts.sunday[0].text
        : "Sunday";
    default:
      return day;
  }
};
