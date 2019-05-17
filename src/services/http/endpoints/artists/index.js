import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getArtists = () => {
  return toResponse(http.get('/artists'));
};

export const getArtist = id => {
  return toResponse(
    http.get(`/artists/${id}`, {
      params: { include: 'mediaLibrary.folders' },
    }),
  );
};

export const getEventsRequests = id => {
  return toResponse(
    http.get(`/events/artists/${id}`, {
      params: { include: 'tickets,artist' },
    }),
  );
};

export const getExperiencesRequests = id => {
  return toResponse(
    http.get(`/experiences/artists/${id}`, { params: { include: 'artist' } }),
  );
};

export const getGiftsRequests = id => {
  return toResponse(
    http.get(`/gifts/artists/${id}`),
  );
};

export const getMerchRequests = id => {
  return toResponse(
    http.get(`/merchandises/artists/${id}`),
  );
};
