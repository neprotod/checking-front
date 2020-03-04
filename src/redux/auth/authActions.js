import types from './authTypes';

export const registerStart = () => ({
  type: types.REGISTRATION_START,
});

export const registerSuccess = token => ({
  type: types.REGISTRATION_SUCCESS,
  payload: { token },
});

export const registerError = error => ({
  type: types.REGISTRATION_ERROR,
  payload: { error },
});

export const loginStart = () => ({
  type: types.LOGIN_START,
});

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  payload: { token },
});

export const loginError = error => ({
  type: types.LOGIN_ERROR,
  payload: { error },
});
