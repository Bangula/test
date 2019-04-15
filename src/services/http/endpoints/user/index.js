import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getToken = credentials =>
  toResponse(http.post('/login', credentials));
