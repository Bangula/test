export const getIsAdmin = state =>
  Object.keys(state.user.info).length > 0 && !state.user.info.is_client;

export const getFullName = state =>
  Object.keys(state.user.info).length > 0
    ? state.user.info.name + ' ' + state.user.info.surname
    : '';
