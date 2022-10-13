/**
 * Methods to handle reading, writing and deleting of storage 
 * - Session storage
 * - Local Storage 
 * - Cookies 
 * */

 const _storage = typeof window !== "undefined" ? window.localStorage : {};
 const _session = typeof window !== "undefined" ? window.sessionStorage : {};
 const _cookie = typeof window !== "undefined" ? window.document.cookie : {};

// LOCAL STORAGE
export const local = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
        _storage.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return _storage.getItem(key);
      });
  }
};

// export const setItemLocal = async (name, value) => await _storage.setItem(name, value);
// export const getItemLocal = async (name) => await _storage.getItem(name);




// SESSION STORAGE
export const session = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
        _session.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return _session.getItem(key);
      });
  }
};

// export const setItemSession = (name, value) => _session.setItem(name, value)
// export const getItemSession = async (name) => await _session.getItem(name);



// COOKIES
export const setCookie = ({ name, data, isLocal=false }) => {
  const domain = isLocal ? "":";domain=.riamoneytransfer.com"
  
  document.cookie = `${name}-TEST=${JSON.stringify({ ...data })}${domain};path=/`;

  _cookie = `${name}=${JSON.stringify({
    ...data,
  })}${domain};path=/;`;
};

export const getCookie = async (name) => await _cookie;


export const removeCookie = ({ name, data, isLocal=false }) => {
  const domain = isLocal ? "":";domain=.riamoneytransfer.com"
  _cookie = `${name}=; ${JSON.stringify({
    ...data,
  })}${domain}; Max-Age=0;path=/;`;
};
