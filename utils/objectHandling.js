export const validateValueofObject = (object = {}, key, defaultValue = "") =>
  object.hasOwnProperty(`${key}`) ? object[`${key}`] : defaultValue;
