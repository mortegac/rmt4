import * as types from "./constants";
import { LOADING_START, LOADING_FINISHED } from "../loading/constants";
import { fetchSession } from "../../services/auth.services";
import { addUTCSeconds, isValidSession } from "../../utils/dateHandling";

const MODULE = "AUTH";

const getAuthSession = payload => async (dispatch, getState) => {
  try {
    const dataFetch = await fetchSession();
    const token = await dataFetch.response.authToken;
    const expiredTimestamp = addUTCSeconds(
      token.issuedAt,
      token.expiresInSeconds
    );

    dispatch({
      type: types.AUTH_SET_SESSION,
      payload: {
        ...token,
        tokenExpires: expiredTimestamp,
      },
    });
  } catch (error) {
    console.error(`ERROR ${MODULE} - ${error}`);
  } finally {
    // dispatch({ type: LOADING_FINISHED, payload: MODULE });
  }
};

export { getAuthSession };
