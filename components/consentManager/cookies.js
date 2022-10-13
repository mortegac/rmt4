const storage = typeof window !== "undefined" ? window.localStorage : {};

export const getCookie = (name) => storage.getItem(name);
export const getItemStorage = (name) => storage.getItem(name);

export const setCookie = (name, value) => {
  storage.setItem(name, value);
};

export const setLocalStorage = async (name, value) => {
  await storage.setItem(name, JSON.stringify(value));
};

export const setConsentv2 = (name, data) => {
  document.cookie = `${name}=${JSON.stringify({
    ...data,
  })};domain=.riamoneytransfer.com;path=/;`;
};

export const removeCookie = (name) => storage.removeItem(name);
