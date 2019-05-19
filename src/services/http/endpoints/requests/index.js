import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getRequests = page => {
  return toResponse(
    http.get('/requests', {
      params: { include: 'relatesTo,artist,user', page },
    }),
  );
};

export const getRequestsForUser = (id, page) => {
  return toResponse(
    http.get(`/requests/users/${id}`, {
      params: { include: 'relatesTo,artist', page },
    }),
  );
};
