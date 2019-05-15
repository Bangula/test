import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getArtist = id => {
  return toResponse(
    http.get('/artists/lnmojg5bv4ew80ra', {
      params: { include: 'mediaLibrary.folders' },
    }),
  );
};
