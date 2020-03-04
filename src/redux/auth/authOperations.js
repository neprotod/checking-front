import axios from 'axios';
import { Notyf } from 'notyf';
import * as authActions from './authActions';
import API from '../../services/api';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// для Андрея для logOut
// const unsetToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const registration = user => dispatch => {
  dispatch(authActions.registerStart());

  API.register(user)
    .then(res => {
      dispatch(authActions.registerSuccess(res.data));
      setToken(res.data);
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
      dispatch(authActions.loginSuccess(res.data));
      setToken(res.data);
    })
    .catch(err => {
      notyf.error('Incorrect email or password!');
      dispatch(authActions.loginError(err));
    });
};
