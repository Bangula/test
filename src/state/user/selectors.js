export const isAdmin = state =>
  Object.keys(state.user.info).length > 0 && !state.user.info.is_client;

export const fullName = state =>
  Object.keys(state.user.info).length > 0
    ? state.user.info.name + ' ' + state.user.info.surname
    : '';

export const userInfo = state => state.user.info;

export const isAdminFeaturesEnabled = state =>
  state.user.isAdminFeaturesEnabled;

export const showAdminFeatures = state =>
  isAdmin(state) && isAdminFeaturesEnabled(state);
