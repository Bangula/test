import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getFonts = () => {
  return toResponse(http.get('/fonts'));
};