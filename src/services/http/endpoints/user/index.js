import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getToken = credentials =>
  toResponse(http.post('/clients/web/admin/login', credentials));

export const registerUser = credentials =>
  toResponse(http.post('/register', credentials));

export const logoutUser = () => toResponse(http.delete('/logout'));

export const requestPasswordResetLink = data =>
  toResponse(
    http.post('/password/forgot', { ...data, reseturl: 'password-reset' }),
  );

export const confirmEmail = data =>
  toResponse(http.post('/mail/confirm', data));

export const resendEmailConfirmation = data =>
  toResponse(http.post('/mail/resend', data));

export const passwordReset = data =>
  toResponse(http.post('/password/reset', data));

export const fetchUserInfo = () => toResponse(http('/user/profile'));

export const updateUserInfo = (id, data) =>
  toResponse(http.put(`/users/${id}`, data));

export const changePassword = data =>
  toResponse(http.post('/password/change', data));

export const fetchAllUsers = () => toResponse(http.get('/users?include=roles'));

export const fetchUser = id =>
  toResponse(http.get(`/users/${id}?include=roles`));

export const deleteUser = id => toResponse(http.delete(`/users/${id}`));
