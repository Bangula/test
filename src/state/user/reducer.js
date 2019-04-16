import { AUTHENTICATE_USER } from './types';
import { getToken } from '@helpers/auth';

const initialState = {
  isAuthenticated: !!getToken(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, isAuthenticated: true };

    default:
      return state;
  }
};
