import axios from "axios";
import { xForwarded } from "./xforwardedList";
import { URL_API, CUSTOM_URL_API } from "./constants";

// axios.defaults.baseURL = `${URL_API}`;

const mainAxios = axios.create({
  baseURL: `${URL_API}`,
});

const customAxios = axios.create({
  baseURL: `${CUSTOM_URL_API}`,
});

export const fetchAxios = async (fetchParams) => {
  let response = undefined;
  let error = "";
  let loading = true;
  const getNewHeader = xForwarded();

  const fetchData = async (params) => {
    try {
      const result = await mainAxios.request({
        ...params,
      });

      response = await result.data;
    } catch (err) {
      error = err;
    } finally {
      loading = false;
    }
  };

  const headerExtra = { headers: { ...getNewHeader, ...fetchParams.headers } };
  const res = await fetchData({ ...fetchParams, ...headerExtra });
  return { response, error, loading };
};

export const customFetchAxios = async (fetchParams) => {
  let response = undefined;
  let error = "";
  let loading = true;
  // const getNewHeader = xForwarded();
  const getNewHeader = {};

  const fetchData = async (params) => {
    try {
      const result = await customAxios.request({
        ...params,
      });

      response = await result.data;
    } catch (err) {
      error = err;
    } finally {
      loading = false;
    }
  };

  const headerExtra = { headers: { ...getNewHeader, ...fetchParams.headers } };
  const res = await fetchData({ ...fetchParams, ...headerExtra });
  return { response, error, loading };
};

// Verify that the TOKEN IS VALID
export const validTokenFetch = async (fetchParams, infoToken = {}) => {
  // const instance = mainAxios.create();
  mainAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let response = undefined;
  let error = "";
  let loading = true;

  const fetchData = async (params) => {
    try {
      const result = await mainAxios.request(params);

      response = await result.data;
    } catch (error) {
      error = error;
    } finally {
      loading = false;
    }
  };

  await fetchData(fetchParams);

  return { response, error, loading };
};
