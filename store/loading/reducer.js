import { LOADING_START, LOADING_FINISHED } from "./constants";

const initialState = {
  module: "",
  fetching: false,
  id: "",
};

export const loadingReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { module: action.payload, fetching: true };

    case LOADING_FINISHED:
      return { module: action.payload, fetching: false };

    default:
      return state;
  }
};

export default {
  loading: loadingReducers,
};
