import { AUTHENTICATE_USER, DEAUTHENTICATE_USER } from './types';
import { getToken } from '@helpers/auth';

const initialState = {
  isAuthenticated: !!getToken(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, isAuthenticated: true };

    case DEAUTHENTICATE_USER:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};
