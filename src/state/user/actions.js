import Alert from 'react-s-alert';

import {
  getToken,
  registerUser,
  logoutUser,
  requestPasswordResetLink,
  confirmEmail,
  resendEmailConfirmation,
  fetchUserInfo,
  updateUserInfo,
} from '@services/http/endpoints/user';
import { authenticate } from '@helpers/auth';
import history from '@services/history';
import {
  AUTHENTICATE_USER,
  DEAUTHENTICATE_USER,
  SAVE_USER_INFO,
  SEND_CONFIRMATION_EMAIL,
  RESEND_CONFIRMATION_EMAIL,
  SEND_PASSWORD_RESET_LINK,
  VERIFY_USER,
  TOGGLE_ADMIN_FEATURES,
} from './types';

export const getUserInfo = () => async dispatch => {
  const { data, error } = await fetchUserInfo();

  if (data) {
    dispatch({ type: SAVE_USER_INFO, payload: data.data.data });
  }
};

export const logIn = credentials => async dispatch => {
  const { data, error } = await getToken(credentials);
  if (data) {
    authenticate(data);
    dispatch({ type: AUTHENTICATE_USER });
    history.replace('/selection');
  } else if (error) {
    Alert.error(error.response.data.message);
  }
};

export const logOut = () => async dispatch => {
  // const { error } = await logoutUser();
  // if (!error) {
  localStorage.removeItem('access_token_name');
  dispatch({ type: DEAUTHENTICATE_USER });
  history.replace('/signed-out');
  // }
};

export const register = credentials => async dispatch => {
  const { data, error } = await registerUser(credentials);

  console.log({ data, error });

  if (data) {
    dispatch({ type: SAVE_USER_INFO, payload: data.data.data });
    dispatch({ type: SEND_CONFIRMATION_EMAIL });
  } else if (error) {
    Alert.error(error.response.data.message);
  }
};

export const sendPasswordResetLink = credentials => async dispatch => {
  const { data, error } = await requestPasswordResetLink(credentials);

  if (data) {
    dispatch({ type: SEND_PASSWORD_RESET_LINK });
  } else if (error) {
    Alert.error(error.response.data.message);
  }
};

export const verifyUser = credentials => async dispatch => {
  const { data, error } = await confirmEmail(credentials);

  if (data) {
    dispatch({ type: VERIFY_USER });
  } else if (error) {
    Alert.error(error.response.data.message);
  }
};

export const resendConfirmationMail = () => async (dispatch, getState) => {
  const { data, error } = await resendEmailConfirmation({
    email: getState().user.info.email,
  });
  if (data) {
    console.log('ad');
    dispatch({ type: RESEND_CONFIRMATION_EMAIL });
  } else if (error) {
    Alert.error(error.response.data.message);
  }
};

export const updateUser = credentials => async (dispatch, getState) => {
  const id = getState().user.info.id;
  if (id) {
    const { data, error } = await updateUserInfo(id, credentials);

    if (data) {
      console.log(data);
      dispatch({ type: SAVE_USER_INFO, payload: data.data.data });
      Alert.success('User info updated!');
    } else if (error) {
      console.log({ error });
      Alert.error(error.response.data.message);
    }
  }
};

export const toggleAdminFeatures = () => ({
  type: TOGGLE_ADMIN_FEATURES,
});
