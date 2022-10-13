import * as types from "./constants";

const loadingStart = (payload) => ({
  type: types.LOADING_START,
  payload,
});

const loadingFinished = (payload) => ({
  type: types.LOADING_FINISHED,
  payload,
});

export { loadingStart, loadingFinished };
