import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getRequests = () => {
  return toResponse(
    http.get('/requests', { params: { include: 'relatesTo,artist,user' } }),
  );
};

export const getRequestsForUser = id => {
  return toResponse(
    http.get(`/requests/users/${id}`, {
      params: { include: 'relatesTo,artist' },
    }),
  );
};
