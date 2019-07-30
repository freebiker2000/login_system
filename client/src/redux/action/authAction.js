import axios from 'axios';
import { returnErrors } from './errorAction';
import { USER_LOADING, 
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS, 
  REGISTER_FAIL } from './types';

// check token and load user

export const loadUser = () => (dispach, getState) => {
  // user loading
  dispach({ type: USER_LOADING });

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispach({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispach(returnErrors(err.response.data, err.response.status));
      dispach({
        type: AUTH_ERROR
      })
    })
}

export const tokenConfig = getState => {
  // get token from local storage
  const token = getState().token;

  // setheaders
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  // if token, add to headers
  if(token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}
