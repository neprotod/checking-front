import API from '../../services/api';

export const getIsAuth = store => {
  const { token } = store.auth;
  if (token) {
    API.setToken(token);
    return true;
  }
  return false;
};
export const getIsLoading = store => store.auth.isLoading;
