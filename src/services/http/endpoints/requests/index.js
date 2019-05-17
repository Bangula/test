import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getRequests = () => {
  return toResponse(
    http.get('/requests', { params: { include: 'relatesTo' } }),
  );
};
