import { AUTH_TOKEN } from './config';

export const authenticate = ({ data: { access_token } }) => {
  localStorage[AUTH_TOKEN] = access_token;
  // localStorage[AUTH_ROLE] = role;
};

export const getToken = () => localStorage[AUTH_TOKEN];
// export const getRole = () => localStorage[AUTH_ROLE];

export const isAuthenticated = () => {
  // Ensure that user is authenticated.
};
