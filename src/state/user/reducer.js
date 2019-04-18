import {
  AUTHENTICATE_USER,
  DEAUTHENTICATE_USER,
  SAVE_USER_INFO,
  SEND_CONFIRMATION_EMAIL,
  RESEND_CONFIRMATION_EMAIL,
  SEND_PASSWORD_RESET_LINK,
  VERIFY_USER,
} from './types';
import { getToken } from '@helpers/auth';

const initialState = {
  isAuthenticated: !!getToken(),
  isVerified: false,
  confirmationEmailSent: false,
  confirmationEmailResent: false,
  passwordResetLinkSent: false,
  info: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, isAuthenticated: true };

    case DEAUTHENTICATE_USER:
      return { ...state, ...initialState, isAuthenticated: false };

    case SAVE_USER_INFO:
      return { ...state, info: action.payload };

    case SEND_CONFIRMATION_EMAIL:
      return { ...state, confirmationEmailSent: true };

    case RESEND_CONFIRMATION_EMAIL:
      return { ...state, confirmationEmailResent: true };

    case SEND_PASSWORD_RESET_LINK:
      return { ...state, passwordResetLinkSent: true };

    case VERIFY_USER:
      return { ...state, isVerified: true };

    default:
      return state;
  }
};
