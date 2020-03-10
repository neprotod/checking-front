import { Notyf } from 'notyf';
import * as authActions from './authActions';
import API from '../../services/api';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const registration = user => dispatch => {
  dispatch(authActions.registerStart());

  API.register(user)
    .then(res => {
      const token = res.headers['x-auth-token'];
      dispatch(authActions.registerSuccess(token));
      API.setToken(token);
    })
    .catch(err => {
      notyf.error('Something wrong!');
      dispatch(authActions.registerError(err));
    });
};

export const login = user => dispatch => {
  dispatch(authActions.loginStart());

  API.login(user)
    .then(res => {
      const token = res.headers['x-auth-token'];
      dispatch(authActions.loginSuccess(token));
      API.setToken(token);
    })
    .catch(err => {
      notyf.error('Incorrect email or password!');
      dispatch(authActions.loginError(err));
    });
};
