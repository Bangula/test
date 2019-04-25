import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getLogos = () => {
  return toResponse(http.get('/logos'));
};
