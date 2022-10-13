import {
  AUTH_SET_SESSION
} from './constants'

const initialState={
  jwtToken: '',
  expiresInSeconds: null,
  issuedAt: null,
  tokenType: null,
  tokenExpires:-5364615539, //Timestamp year 1800
};


export const authReducers = (state = initialState, action) => {
  switch (action.type) {

    case AUTH_SET_SESSION:
      return { ...state, ...action.payload };  
  
    default:
      return state;
  }
};

export default{
  auth: authReducers,
};