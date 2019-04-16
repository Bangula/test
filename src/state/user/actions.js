import { getToken } from '@services/http/endpoints/user';
import { authenticate } from '@helpers/auth';
import history from '@services/history';

import { AUTHENTICATE_USER } from './types';

export const logIn = credentials => async dispatch => {
  const { data, error } = await getToken(credentials);
  if (data) {
    authenticate(data);
    dispatch({ type: AUTHENTICATE_USER });
    history.replace('/selection');
  }
};
