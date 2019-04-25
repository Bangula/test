import http from '@services/http';
import toResponse from '@helpers/to-response';

export const fetchAllUsers = () => toResponse(http.get('/users?include=roles'));
export const fetchUser = id =>
  toResponse(http.get(`/users/${id}?include=roles`));
