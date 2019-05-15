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
