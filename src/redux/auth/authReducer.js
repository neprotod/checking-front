import { combineReducers } from 'redux';
import types from './authTypes';

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_GOOGLE:
      return payload.token;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_GOOGLE:
      return null;
    case types.REGISTRATION_ERROR:
    case types.LOGIN_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.REGISTRATION_START:
    case types.LOGIN_START:
      return true;
    case types.REGISTRATION_SUCCESS:
    case types.REGISTRATION_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_GOOGLE:
      return false;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_GOOGLE:
      return true;
    case types.REGISTRATION_START:
    case types.REGISTRATION_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGIN_START:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  error,
  isLoading,
  isAuth,
});
