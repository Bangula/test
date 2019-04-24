import store from '@state/store';

export function authRequest(config) {
  const token = localStorage.getItem('access_token_name');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}

export const authResponse = [
  function(response) {
    return response;
  },
  function(error) {
    if (401 === error.response.status) {
      store.dispatch({ type: 'DEAUTHENTICATE_USER' });
      localStorage.removeItem('access_token_name');
    }
    return Promise.reject(error);
  },
];
