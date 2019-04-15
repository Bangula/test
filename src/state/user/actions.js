import { getToken } from '@services/http/endpoints/user';

export const logIn = credentials => async dispatch => {
  console.log(credentials);
  const { data, error } = await getToken(credentials);
  console.log({ data, error });
  dispatch({ type: 'LOG_IN', payload: credentials });
};
