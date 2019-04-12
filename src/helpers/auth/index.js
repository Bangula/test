import { AUTH_TOKEN, AUTH_ROLE } from './config';

export const authenticate = ({ token, role }) => {
  localStorage[AUTH_TOKEN] = token;
  localStorage[AUTH_ROLE] = role;
};

export const getToken = () => localStorage[AUTH_TOKEN];
export const getRole = () => localStorage[AUTH_ROLE];

export const isAuthenticated = () => {
  // Ensure that user is authenticated.
};
